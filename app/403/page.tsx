"use client";

import { useRouter } from "next/navigation";
import { GoStop } from "react-icons/go";
import Link from "next/link";

export default function ForbidenPage() {

    const router = useRouter();



    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">

            <GoStop className="text-red-500 text-6xl my-3"/>            
            <h2>Not Authorized // Error 403</h2>
            <Link href="/" className="text-blue-300 underline my-1">Go back home</Link>
        </div>
    )

}