import { useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";

export default function Comment() {

    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    return (
        <div className="p-2 my-1">
            <div className="w-full flex gap-3 items-center rounded-md py-4 bg-[#f5f7f9] p-2">
                <div>
                    <div className="rounded-full w-[40px] h-[40px] bg-red-100">

                    </div>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere saepe magni explicabo ratione!</p>
                </div>
            </div>
            <div className="flex items-center justify-end w-full gap-2">
                <div className="flex px-[12px] py-[4px] gap-2 items-center">
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
    )
}