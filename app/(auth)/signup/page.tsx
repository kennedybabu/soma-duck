"use client"
import { useContext, useState } from "react"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Select, { SingleValue } from 'react-select'
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";


export interface RoleOption {
    value: string;
    label: string;
}

export default function Signup() {

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

    const roleOptions = [
        { value: 'STUDENT', label: 'Student' },
        { value: 'INSTRUCTOR', label: 'Instructor' },
    ]

    const { register } = useAuth()
    const router = useRouter()

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        role: '',
        password: '',
        profileImageUrl: 'soon-to-be-implemented-feature'
    })

    const [profileImageFile, setProfileImageFile] = useState(null);
   

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await register(user);
            toast.add({
                title: "Sgned Up",
                description: "Account created",
                type: "success"
            })
            router.push("/")
        } catch(error) {
            toast.add({
                title: "Error",
                description: error.message,
                type: "error"
            })
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       setUser({...user, [e.target.id] : e.target.value })
    }

    const handleRoleChange = (selectedOption: SingleValue<RoleOption> ) => {
        setUser(prev => ({...prev, role: selectedOption ? selectedOption.value : ''}))
    }

    const handleProfileImageChange = (e: React.FormEvent<HTMLFormElement>) => {
        // const file = e.target.files[0] ?? null;
        // setProfileImageFile(file);
    }

    return (
       <div className="px-2 w-full h-screen flex p-2 flex-col md:flex-row">
            <Link href={"/"} className="text-sm underline italic text-blue-700">Head home</Link>
                <div className="flex-1 flex items-center">
                    <div className="min-w-[404px] h-[638px] mx-auto mb-[35%] md:mb-[15%]">
                        <h2 className="text-[32px] font-bold">Get Started!</h2>
                        <p className="text-[16px] text-gray-600 tracking-[1px]">Enter your credentials to create your account.</p>
    
                        <div className="md:mt-[2rem] w-full">
                            <form onSubmit={handleSubmit} action="" className="w-full">
                                <div className="flex flex-col md:flex-row gap-2 w-full">
                                    <div className="flex flex-1 flex-col">
                                        <label htmlFor="firstName">First Name</label>
                                        <input id="firstName" onChange={handleChange} style={inputStyles} type="text" placeholder="First Name ..."/>
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input id="lastName" onChange={handleChange} style={inputStyles} type="text" placeholder="Last Name ..."/>
                                    </div>
                                </div>    
                                <div className="flex flex-col">
                                    <label htmlFor="">Email</label>
                                    <input id="email" style={inputStyles} onChange={handleChange} type="text" placeholder="Enter your Email address..." />
                                </div>    
                                <div className="flex flex-col">
                                    <label htmlFor="">Phone no.</label>
                                    <input id="phoneNumber" style={inputStyles} type="text" onChange={handleChange} placeholder="Enter your phone no..." />
                                </div>   
                                <label>
                                    Role
                                    <Select 
                                        options={roleOptions} 
                                        onChange={handleRoleChange}
                                        value={roleOptions.find(option => option.value === user.role || null)} 
                                        />
                                </label>
                                <div className="flex flex-col">
                                    <label htmlFor="">Profile photo</label>
                                    <input style={inputStyles} type="file"  />
                                </div>              
                                <div className="flex flex-col">
                                    <label htmlFor="">Password</label>
                                    <input style={inputStyles} id="password" type="password" onChange={handleChange} placeholder="Enter a strong password..." />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" />
                                    <label className="text-sm" htmlFor="">Remember for 30 days</label>
                                </div>
                                <button className="w-full rounded-[4px] p-[5px] cursor-pointer my-[20px] bg-[#3A5B22] text-white">Sign Up</button>
                            </form>
                            <div className="w-full text-center">
                                <hr className="my-1 text-[#D9D9D9]"/>
                                <div className="w-full flex gap-5 py-[2rem] items-center justify-center">
                                    <button className="p-[4px] rounded-[4px] outline outline-[#D9D9D9] flex items-center gap-1 cursor-pointer"><FcGoogle />Login with Google</button>
                                    <button className="p-[4px] rounded-[4px] outline outline-[#D9D9D9] flex items-center gap-1 cursor-pointer"><FaApple />Login with Apple</button>
                                </div>
                                <small>Have an account already? <Link href="/login" className="text-blue-600">Login</Link></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={loginBg} className="hidden md:flex flex-1 rounded-tl-[45px] rounded-bl-[45px]">
                </div>
        </div>
    )
}