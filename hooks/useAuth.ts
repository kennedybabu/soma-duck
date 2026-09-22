"use client";

import { UserContext } from "@/context/AuthContext";
import { useContext } from "react";

export function useAuth() {
    const context = useContext(UserContext);

    if(!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context;
}