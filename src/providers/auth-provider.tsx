import React, { useEffect, useState } from "react";
import { AuthContext } from "@/contexts/auth-context";
import { UserType } from "@/types/user";
import instance from "@/config/axios.config";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const router = useRouter();
    const [user, setUser] = useState<UserType | null>(null);

    const login = async (email: string, password: string) => {
        const response = await instance.post('/auth/local', { identifier: email, password }
        )
        const data = response.data;
        setUser(data.user);
        Cookies.set('token', data.jwt);
    };

    const logout = () => {
        Cookies.remove('token');
        setUser(null);
        router.reload();
    };

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            instance.get('/users/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setUser(response.data);
            }).catch(error => {
                console.log(error);
            })
        }
    }, []);

    const value = { user, login, logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;