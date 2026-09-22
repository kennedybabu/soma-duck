import { RiComputerLine } from "react-icons/ri";
import { PiGraduationCapLight } from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";
import Link from "next/link";

export default function Dashboard() {


    return (
        <div className="w-full">
        <div className="max-w-[1272px] mx-auto">
            <section>
                <div className="w-full bg-blue-900 h-[100px] md:h-50">

                </div>
                <div className="flex max-w-[1272px] mx-auto px-5 items-center">
                    <div className="shrink-0">
                        <div className="w-[82px] md:w-[128px] md:h-[128px] -mt-18 h-[82px] bg-red-200 rounded-full outline outline-3 outline-[#ffffff]">

                        </div>
                    </div>
                    <div className="p-2 flex flex-col md:flex-row md:items-center justify-between w-full">
                        <div>
                            <h1 className="font-bold">John Doe</h1>
                            <div className="flex flex-col md:flex-row gap-3">
                                <small><span className="font-bold text-black">7</span> Completed courses</small>
                                <small><span className="font-bold text-black">7</span> All courses</small>
                            </div>
                        </div>
                        <Link href={"/create-course"} className="py-[4px] px-2 w-fit rounded-md my-2 border border-1 border-green-500 text-green-500 transition-all hover:bg-green-500 cursor-pointer hover:text-[#ffffff]">Create a course</Link>
                    </div>
                </div>
            </section>

            <section>
                {/* <CreateCourseDialog /> */}
            </section>

            <section className="max-w-[1272px] mx-auto">
                <div className="flex p-5 gap-12">
                    <div className="hidden lg:flex flex-4">
                        <div className="w-full h-full bg-green-200 rounded-lg">
    
                        </div>
                    </div>
                    <div className="text-gray-800 flex-8 w-full">
                        <div className="w-full grid font-bold grid-cols-1 lg:grid-cols-3 gap-5">
                            <div className="flex gap-8 justify-center items-center p-6 rounded-lg bg-red-100">
                                <div>
                                    <RiComputerLine className="text-5xl"/>
                                </div>
                                <div>
                                    <h2>25</h2>
                                    <small>Total Courses</small>
                                </div>
                            </div>

                            <div className="flex gap-8 justify-center items-center p-6 rounded-lg bg-purple-100">
                                <div>
                                    <PiGraduationCapLight className="text-5xl"/>
                                </div>
                                <div>
                                    <h2>25K+</h2>
                                    <small>Total Students</small>
                                </div>
                            </div>

                            <div className="flex gap-8 justify-center items-center p-6 rounded-lg bg-green-100">
                                <div>
                                    <IoDiamondOutline className="text-5xl"/>
                                </div>
                                <div>
                                    <h2>12K</h2>
                                    <small>Enrolled Students</small>
                                </div>
                            </div>
                        </div>

                        <div>
                            chart
                        </div>
                        <div>
                            courses table
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}