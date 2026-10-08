"use client"

import { useState } from "react"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/components/ui/toast";


export default function Login() {
    const [loginUser, setLogginUser] = useState({
        email:'',
        password: ''
    })

    const router = useRouter();
    const {login } = useAuth();

    const inputStyles = {
        'border' : '1px solid #D9D9D9',
        'padding': '5px 8px',
        'margin': '10px 0',
        'borderRadius' : '4px'
    }

    const loginBg = {
        'backgroundImage' : "url('/assets/login-bg.jpg')",
        'backgroundSize' : 'cover',
        'backgroundPosition' : 'center'
    } 

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("trying to =>", loginUser);

        try {
            await login(loginUser);
            toast.add({
                title: "Log in",
                description: "Logged in successfully",
                type: "success"
            })
            router.push("/");
        } catch (error) {
            toast.add({
                title: "Error",
                description: error.message,
                type: "error"
            })
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogginUser({...loginUser, [e.target.id] : e.target.value})
    }

    return (
        <div className="w-full h-screen flex flex-col md:flex-row">
            <Link href={"/"} className="text-sm mx-3 my-2 underline italic text-blue-700">Head home</Link>
            <div className="flex-1 flex items-center">
                <div className="w-[404px] h-[638px] mx-auto my-auto">
                    <h2 className="text-[32px] font-bold">Welcome back!</h2>
                    <p className="text-[16px] text-gray-600">Enter your credentials to access your account.</p>

                    <div className="mt-[5rem] w-full">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label htmlFor="email">Email address</label>
                                <input id="email" style={inputStyles} onChange={handleChange} type="email" placeholder="Enter your email ..."/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password">Password</label>
                                <input id="password" style={inputStyles} type="password" onChange={handleChange} placeholder="Enter your password ..." />
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" />
                                <label className="text-sm" htmlFor="">Remember for 30 days</label>
                            </div>
                            <button className="w-full rounded-[4px] p-[5px] cursor-pointer my-[20px] bg-[#3A5B22] text-white">Login</button>
                        </form>
                        <div className="w-full text-center">
                            <hr className="my-4 text-[#D9D9D9]"/>
                            <div className="w-full flex gap-5 py-[2rem] items-center justify-center">
                                <button className="p-[4px] rounded-[4px] outline outline-[#D9D9D9] flex items-center gap-1 cursor-pointer"><FcGoogle /> Sign in with Google</button>
                                <button className="p-[4px] rounded-[4px] outline outline-[#D9D9D9] flex items-center gap-1 cursor-pointer"><FaApple />Sign in with Apple</button>
                            </div>
                            <small>Don&apos;t have an account? <Link href="/signup" className="text-blue-600">Sign Up</Link></small>
                        </div>
                    </div>
                </div>
            </div>
            <div style={loginBg} className="hidden md:flex flex-1 rounded-tl-[45px] rounded-bl-[45px]">
            </div>
        </div>
    )

}


