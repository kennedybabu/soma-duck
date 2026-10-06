import { PiHeart, PiClock } from "react-icons/pi";
import { CiGrid31 } from "react-icons/ci";
import Link from "next/link";
import { Course } from "@/types/course";

interface CourseTileProps {
    course: Course
}


export default function CourseTile({ course }: CourseTileProps) {

    return (
    <div>
        <div className="rounded-lg shadow-sm h-[527px] w-full md:w-[293px] md:h-[480px]">
          <div className="card-img rounded-tr-[10px] rounded-tl-[10px] h-[224px] w-full bg-purple-300">

          </div>
          <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="rounded-md text-[12px] mb-2 py-[4px] px-[8px] text-green-600 font-bold bg-green-200">
                  {course.level}
                </div>
                <PiHeart className="text-2xl cursor-pointer"/>
              </div>
              <div>
                <Link href={`/course/${course.id}`}>
                  <h5 className="text-[21px] mb-2 font-bold">{course.title}</h5>
                </Link>
                <p className="mb-2 text-[15px] text-[#747579]">Lorem ipsum dolor sit amet. Quod fugiat illo consequatur animi.</p>
              </div>
              <div className="flex gap-3 items-center text-[15px] justify-between">
                <span>stars</span>
                <span>4.5/5.0</span>
              </div>
              <hr className="my-2 text-[#747579]" />
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <div>
                    <PiClock className="text-red-600"/>
                  </div>
                  <div>
                    <small>6h 56m</small>
                  </div>
                </div>

                <div className="flex gap-1 items-center justify-between">
                  <div>
                    <CiGrid31 />
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