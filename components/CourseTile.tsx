import { PiHeart, PiClock } from "react-icons/pi";
import { CiGrid31 } from "react-icons/ci";
import Link from "next/link";
import { Course } from "@/types/course";
import { Rating } from "react-simple-star-rating";

interface CourseTileProps {
    course: Course
}

const levelStyles: Record<string, string> = {
  "Beginner" : "bg-green-200 text-green-600",
  "All Level" : "bg-blue-200 text-blue-600",
  "Advanced" : "bg-red-200 text-red-600"
}


export default function CourseTile({ course }: CourseTileProps) {

    return (
    <div>
        <div className="rounded-lg shadow-md h-[527px] w-full md:w-[293px] md:h-[480px]">
          <div className="card-img rounded-tr-[10px] rounded-tl-[10px] h-[245px] w-full bg-purple-300">

          </div>
          <div className="p-5">
              <div className="flex items-center justify-between">
                <div className={`rounded-md text-[12px] mb-2 py-[6px] px-[10px] font-bold ${levelStyles[course.level]}`}>
                  {course.level}
                </div>
                <PiHeart className="text-2xl cursor-pointer"/>
              </div>
              <div>
                <Link href={`/course/${course.id}`}>
                  <h5 className="text-xl mb-2">{course.title}</h5>
                </Link>
                <p className="mb-2 text-[14px] text-[#747579]">Lorem ipsum dolor sit amet. Quod fugiat illo consequatur.</p>
              </div>
              <div className="flex gap-3 items-center text-[15px] justify-between">
                <Rating initialValue={4} size={16} readonly={true}/>                    
                <span>4.5/5.0</span>
              </div>
              <hr className="my-2 text-[#747579]" />
            <div className="flex items-center my-2 justify-between">
                <div className="flex items-center gap-1">
                  <div>
                    <PiClock className="text-red-500"/>
                  </div>
                  <div>
                    <small>6h 56m</small>
                  </div>
                </div>

                <div className="flex gap-1 items-center justify-between">
                  <div>
                    <CiGrid31 className="text-yellow-500"/>
                  </div>
                  <div>
                    <small>82 lectures</small>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
    )
}