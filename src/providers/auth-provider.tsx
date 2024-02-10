import React, { useState } from "react";
import { AuthContext } from "@/contexts/auth-context";
import { UserType } from "@/types/user";
import instance from "@/config/axios.config";

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<UserType | null>(null);

    const login = (email: string, password: string) => {
        instance.post('/auth/local', { identifier: email, password: password }).then((res) => {
            setUser(res.data.user);
        }).catch((error) => {
            console.log(error)
        })
    };

    const logout = () => {
        // Your logout logic here
        setUser(null);
    };

    const value = { user, login, logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;