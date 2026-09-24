"use client";

import { useAuth } from "@/hooks/useAuth";
import { CiSearch } from "react-icons/ci";
import Select from "react-select";

export interface SelectOption {
    value: string;
    label: string;
}


export default function UserProfile() {

    const selectOptions = [
        { value: 'Newest', label: 'Newest' },
        { value: 'Most Popular', label: 'Most Popular' },
        { value: 'Most Viewed', label: 'Most Viewed' },

    ]

     const handleSelectChange = (selectedOption: SelectOption ) => {
        console.log(selectedOption.value)
    }

    const { user } = useAuth()

    return (
        <div className='w-full h-full mx-auto'>
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
                        <h1 className="font-bold">{user?.firstName} {user?.lastName}</h1>
                        <div className="flex flex-col md:flex-row gap-3">
                            <small><span className="font-bold text-black">7</span> Completed courses</small>
                            <small><span className="font-bold text-black">7</span> All courses</small>
                        </div>
                    </div>
                    <button className="py-[4px] px-2 w-fit rounded-md my-2 border border-1 border-blue-500 text-blue-500 transition-all hover:bg-blue-500 cursor-pointer hover:text-[#ffffff]">View my courses</button>
                </div>
            </div>
        </section>
        <section className="max-w-[1272px] mx-auto">
            <div className="flex p-5 gap-12">
                <div className="hidden lg:flex flex-4">
                    <div className="w-full h-full bg-green-200 rounded-lg">

                    </div>
                </div>
                <div className="border text-[#747579] flex-8 border-1 w-full rounded-lg">
                    <div className="border-d p-[16px] border-[#747579]">
                        <h2 className="text-black text-[24px] font-bold">My Courses List</h2>
                    </div>
                    <hr />
                    <div className="py-[16px] px-[20px] gap-3 flex flex-col lg:flex-row justify-between">
                        <div className="flex-6">
                            <form>
                                <div className="flex items-center lg:max-w-[400px] rounded-lg py-1 px-2 border border-1 border-[#747579] w-full justify-between">
                                    <input className="py-1 px-2 w-full" type="text" name="searchQuery" id="" placeholder="Search" />
                                    <CiSearch className="text-2xl"/>
                                </div>
                            </form>
                        </div>
                        <div className="flex-2">
                            <form action="">
                                <label>
                                    <Select 
                                        options={selectOptions} 
                                        placeholder="Sort By"
                                        value={selectOptions.find(option => option.value === user?.role || null)} 
                                        />
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className="p-3">
                        course list
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}