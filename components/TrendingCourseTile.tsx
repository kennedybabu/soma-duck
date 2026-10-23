import { Course } from "@/types/course";
import { PiBookmarkSimpleLight, PiClock } from "react-icons/pi";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";

export interface TrendingCourseTileProps {
    course: Course
}


export default function TrendingCourseTile({ course }: TrendingCourseTileProps){
    

    return (
    <div className="w-full md:min-w-[404px] shadow-sm rounded-md">
        <div className="img bg-green-100 rounded-tl-md rounded-tr-md h-[301px]">

        </div>
        <div className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <div className="py-[4px] px-[8px] bg-blue-200 rounded-md">
                  <small className="text-[12px] text-[#066ac9] font-bold">Design</small>
                </div>
                <div className="py-[4px] px-[8px] bg-[#24292d] rounded-md">
                  <small className="text-[12px] text-white font-bold">All Level</small>
                </div>
              </div>

              <PiBookmarkSimpleLight className="text-2xl"/>
            </div>

            <div className="py-5 text-[#747579]">
              <Link href={`/course/${course.id}`}>
                <h3 className="font-bold text-[21px] mb-4 cursor-pointer">{course.title}</h3>
              </Link>
              <div className="w-full text-[#747579] my-3 text-sm flex justify-between">
                <div className="flex items-center"><Rating initialValue={4} size={16} readonly={true}/><span className="mb-0">(2000)</span></div>
                <div>3500 (Student)</div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <PiClock className="text-red-600"/>
                </div>
                <div>
                  <small>6h 56m</small>
                </div>
              </div>
              <hr className="my-[16px]"/>
              <div className="w-full text-[#747579] my-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-[40px] h-[40px] rounded-sm bg-red-200">

                  </div>
                    <div className="flex items-center">
                        <small>Lori Stevens</small>
                    </div>
                </div>

                <div>
                    <p className="text-[24px] font-bold text-[#0cbc87]">{course.price}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}