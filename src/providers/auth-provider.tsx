import React, { useEffect, useState } from "react";
import { AuthContext } from "@/contexts/auth-context";
import { UserType } from "@/types/user";
import instance from "@/config/axios.config";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const router = useRouter();
    const [user, setUser] = useState<UserType | null>(null);

    const login = async (email: string, password: string) => {
        const response = await instance.post('/auth/local', { identifier: email, password })
        const data = response.data;
        setUser(data.user);
        Cookies.set('token', data.jwt);
    };

    const logout = () => {
        Cookies.remove('token');
        setUser(null);
        router.reload();
    };

    const signup = async (username: string, company: { name: string }, email: string, password: string) => {
        try {
            const response = await instance.post('/auth/local/register', { email, username, password });
            const name = company.name;
            const companyResponse = await instance.post('/companies', { data: { name } }, {
                headers: {
                    Authorization: `Bearer ${response.data.jwt}`
                }
            });
            await instance.put(`/users/${response.data.user.id}`, { company: companyResponse.data.id }, {
                headers: {
                    Authorization: `Bearer ${response.data.jwt}`
                }
            });
            Cookies.set('token', response.data.jwt);
            setUser(response.data.user);
            toast.success('Account created successfully');
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            instance.get('/users/me?populate=companies', {
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

    const value = { user, login, logout, signup };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;