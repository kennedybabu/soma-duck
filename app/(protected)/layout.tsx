"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Spinner } from "@/components/ui/spinner";
import { useAuthGuard } from "@/guards/useAuthGuard";

export default function ProtectedLayout({ children }: { children: React.ReactNode} ) {

    const { checking } = useAuthGuard();

    if(checking) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <Spinner className="size-8"/>
            </div>
        )
    }

    return (
        <>
            <Navbar />
                <main>{ children }</main>
            <Footer />
        </>
    )

}