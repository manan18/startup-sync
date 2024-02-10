import { UserType } from "@/types/user";
import { createContext } from "react";

export const AuthContext = createContext<{
    user: UserType | null;
    login: (email: string, password: string) => void;
    logout: () => void;
}>({
    user: null,
    login: (email: string, password: string) => { },
    logout: () => { },
});