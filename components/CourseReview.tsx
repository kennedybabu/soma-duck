import { Course } from "@/types/course";
import { useState } from "react";
import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { Rating } from "react-simple-star-rating";

interface CourseReviewProps {
    user: string,
    rating: number
}

export default function CourseReview({ user, rating }: CourseReviewProps) {

    const [likes, setLikes] = useState(21)
    const [dislikes, setDislikes] = useState(1)
    


    return (
        <div className="flex gap-6 my-8">
            <div>
                <div className="img rounded-full h-[82px] w-[82px] bg-red-100"></div>
            </div>
            <div className="text-[#747579]">
                <div className="flex items-center gap-2">
                    <div>
                        <h2 className="text-black mb-0 font-bold">{user}</h2>
                    </div>
                    <div>
                        <Rating initialValue={rating } size={14} readonly={true}/>                        
                    </div>
                </div>
                <small className="mb-4">2 days ago</small>
                <p className="my-3">Perceived end knowledge certainly day sweetness why cordially. 
                    Ask a quick six seven offer see among. Handsome met debating sir dwelling age material. 
                    As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.
                </p>
                <div className="border flex w-fit rounded-sm p-1 border-1">
                    <div className="flex px-[12px] py-[4px] border-r gap-2 items-center">
                        <div>
                            <SlLike onClick={() => setLikes(likes + 1)} className="cursor-pointer" />
                        </div>
                        <div>
                            <small>{likes}</small>
                        </div>
                    </div>
                    <div className="flex px-[12px] py-[4px] gap-2 items-center">
                        <div>
                            <SlDislike onClick={() => setDislikes(dislikes + 1)} className="cursor-pointer" />
                        </div>
                        <div>
                            <small>{dislikes}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}