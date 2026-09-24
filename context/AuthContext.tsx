"use client";

import { getLoggedInUserUrl, loginUrl, registerUrl } from "@/lib/api";
import { LoginPayload, SignupPayload, User } from "@/types/auth";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useEffect, useState } from "react";

interface UserContextType {
    user: User | null;
    token: string | null;
    login: (payload: LoginPayload) => Promise<User>;
    register: (payload: SignupPayload) => Promise<User>;
    logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>(null);
    const [token, setUserToken ] = useState<string | null>(null);
    const [hydrated, setHydrated] = useState(false);
    const router = useRouter();



    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("userToken");

        if(storedUser) setUser(JSON.parse(storedUser));
        if(storedToken) setUserToken(token)
        setHydrated(true);
    }, []);

    async function login(payload: LoginPayload): Promise<User> {
        const res = await axios.post(loginUrl, payload);
        const newToken = res.data.token ?? res.data;
        setUserToken(newToken);
        localStorage.setItem("userToken", newToken);

        const userData = await axios.get(getLoggedInUserUrl, {
            headers: { Authorization: `Bearer ${newToken}`},
        })

        const userInfo: User = {...userData.data, token: newToken};
        setUser(userInfo);
        localStorage.setItem("user", JSON.stringify(userInfo));
        return userInfo;
    }

    async function register(payload: SignupPayload): Promise<User> {
        const res = await axios.post(registerUrl, payload);
        setUser(res.data)
        localStorage.setItem("user", JSON.stringify(res.data))
        return res.data;
    }

    function logout() {
        setUser(null);
        setUserToken(null);
        router.push("/")

        localStorage.removeItem("user");
        localStorage.removeItem("userToken")
    }

    if(!hydrated) return null;

    return (
        <UserContext.Provider value={{ user, token, login, register, logout }}>
            {children}
        </UserContext.Provider>
    )
}