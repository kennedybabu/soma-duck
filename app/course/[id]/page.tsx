"use client";

import { CiStar, CiGlobe } from "react-icons/ci";
import { GiNetworkBars } from "react-icons/gi";
import { PiGraduationCapLight } from "react-icons/pi";
import { GoStop } from "react-icons/go";
import { use } from "react";


export default function Course({ params } : { params: Promise<{ id: string }>}) {
    const { id } = use(params);

    return (
        <div className="w-full mx-auto">
            <section className="w-full bg-[#f5f7f9]">
                <div className="mx-auto py-12 max-w-[1272px] px-5 md:px-0">
                    <button className="bg-[#066ac9] rounded-md px-[24px] mb-4 text-white py-[8px]">Digital Marketing</button>
                    <h1 className="mb-2 text-3xl font-medium max-w-[60%]">
                        The Complete Digital Marketing Course - 12 Courses in 1
                    </h1>
                    <small className="text-[15px] mb-2 text-[#747579]">
                        Satisfied conveying a dependent contented he 
                        gentleman agreeable do be. Warrant private blushes 
                        removed an in equally totally if. Delivered dejection 
                        necessary objection do Mr prevailed. Mr feeling does 
                        chiefly cordial in do.
                    </small>
                    <div className="w-full flex my-3 flex-col md:flex-row gap-3 font-medium text-black text-[15px]">
                        <div className="flex items-center gap-2">
                            <CiStar className="text-yellow-500"/>
                            <span>4.5/5.0</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <PiGraduationCapLight className="text-yellow-500"/>
                            <span>12K Enrolled</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <GiNetworkBars className="text-yellow-500"/>
                            <span>All levels</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <GoStop className="text-red-500"/>
                            <span>Last Updated</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CiGlobe className="text-blue-500"/>
                            <span>English</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}