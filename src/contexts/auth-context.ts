import { UserType } from "@/types/user";
import { createContext } from "react";

export const AuthContext = createContext<{
    user: UserType | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    signup: (username: string, company: { name: string }, email: string, password: string) => Promise<void>;
}>({
    user: null,
    login: async (email: string, password: string) => { },
    logout: () => { },
    signup: async (username: string, company: { name: string }, email: string, password: string) => { },
});