"use client"


import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export function useAuthGuard(allowedRoles) {
    const { user } = useAuth();
    const router = useRouter();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        if(!user) {
            router.push("/login");
            return;
        }
        if(allowedRoles && !allowedRoles.includes(user.role)) {
            router.push("/403")
            return;
        }
        setChecking(false)
    }, [user]);

    return { user, checking }
}
