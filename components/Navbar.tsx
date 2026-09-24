"use client";


import { RiMenu3Fill, RiDashboardLine, RiUserLine } from "react-icons/ri";
import { PiUserCircleThin } from "react-icons/pi";
import { SiDuckduckgo } from "react-icons/si";
import { useEffect, useState } from "react";
import { VscClose, VscHome } from "react-icons/vsc";
import { TbListLetters } from "react-icons/tb";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { MdOutlineLogin,MdOutlineLogout } from "react-icons/md";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {

    const [sidebarShowing, setSidebarShowing] = useState(false);
    const { user, logout } = useAuth();    

    useEffect(() => {
        console.log(user)
    }, [])


    const toggleSidebar = () => {
        setSidebarShowing(!sidebarShowing)
    }

    return (
    <div className="w-full h-[64px] relative max-w-[1272px] px-5 md:px-0 mx-auto flex items-center justify-between">
        <h2 className="font-bold text-2xl flex items-center gap-2 cursor-pointer">
            <Link href={"/"}><SiDuckduckgo className="text-4xl"/></Link>
            <span className="hidden md:flex">Soma <span className="text-[#FDA32E]">Duck</span></span>
        </h2>

        {/* hide links on smaller screened devices */}
        <div className="hidden md:flex">
            <nav>
                <ul className="flex items-center font-bold gap-5">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="">Courses</Link>
                    </li>
                    <li>
                        <Link href="">About</Link>
                    </li>
                </ul>
            </nav>
        </div>

        <div className="flex items-center gap-2">
            <RiMenu3Fill onClick={toggleSidebar} className="cursor-pointer text-3xl md:hidden"/>          
            <PiUserCircleThin className="text-4xl cursor-pointer hidden lg:flex"/>          
        </div>


        {/* smaller screened devices sidebar */}
        <div className={`w-[85%] bg-[#ffffff] text-[#747579] shadow-md top-0 left-0 z-[50] h-screen fixed transition-transform duration-300 ${sidebarShowing ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="p-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {
                            user ?    
                                <div className="flex items-center gap-3">
                                    <div>
                                        <div className="w-[40px] h-[40px] rounded-full bg-red-200">

                                        </div>
                                    </div>
                                    <div>
                                        <small className="">{user.role}</small>
                                        <h6 className="font-bold text-[14px] text-black">{user.firstName} {user.lastName}</h6>
                                        <small>{user.email}</small>
                                    </div>
                            
                            </div> : null
                        }
                    </div>
                    <div className="flex-end">
                        <VscClose className="text-xl cursor-pointer text-black" onClick={() => setSidebarShowing(false)}/>
                    </div>
                </div>

                <hr className="my-8" />
                <nav>
                    <ul className="flex flex-col gap-y-5">
                        { user?.role === "STUDENT" ? 
                            <Link href={`/userprofile/${user.id}`} onClick={toggleSidebar} className="flex items-center gap-2 font-bold"><RiUserLine />Profile</Link> : null 
                        }
                        <Link className="flex items-center gap-2 font-bold" href={"/"} onClick={toggleSidebar}><VscHome />Home</Link>
                        {
                            user?.role === "INSTRUCTOR" ? 
                            <Link onClick={toggleSidebar} href={"instructor/dashboard"} className="flex items-center gap-2 font-bold"><RiDashboardLine />Dashboard</Link> : null
                        }
                        <Link href={""} onClick={toggleSidebar} className="flex items-center gap-2 font-bold"><TbListLetters />Courses</Link>
                        <Link href={""} className="flex items-center gap-2 font-bold"><HiOutlineCog6Tooth />Settings</Link>
                        {user ? 
                            <Link href={""} className="flex items-center gap-2 font-bold"><MdOutlineLogout />Logout</Link> : 
                            <Link  onClick={toggleSidebar} href={"/login"} className="flex items-center gap-2 font-bold"><MdOutlineLogin />Login</Link> 
                        }
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    )

}