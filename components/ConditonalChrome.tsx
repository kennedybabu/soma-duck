"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function ConditionalChrome({ children } : { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideChrome = pathname.startsWith("/login") || pathname.startsWith("/signup");

    return (
        <>
            { !hideChrome && <Navbar /> }
                <main>{children}</main>
            { !hideChrome && <Footer />}
        </>
    )
}