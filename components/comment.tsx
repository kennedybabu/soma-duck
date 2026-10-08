import { CommentInterface} from "@/types/comment";
import { useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";

export default function Comment({props}: {props: CommentInterface}) {

    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    return (
        <div className="p-2 my-2 border rounded-md">
            <div className="w-full flex gap-3 items-center rounded-md py-4 bg-[#f5f7f9] p-2">
                <div>
                    <div className="rounded-full w-[40px] h-[40px] bg-red-100">

                    </div>
                </div>
                <div>
                    <p>{props.comment}</p>
                </div>
            </div>
            <div className="flex items-center justify-end w-full gap-2">
                <div className="flex px-[12px] py-[4px] gap-2 items-center">
                    <div>
                        <SlLike onClick={() => setLikes(likes + 1)} className="cursor-pointer" />
                    </div>
                    <div>
                        <small>{props.likes}</small>
                    </div>
                </div>
                <div className="flex px-[12px] py-[4px] gap-2 items-center">
                    <div>
                        <SlDislike onClick={() => setDislikes(dislikes + 1)} className="cursor-pointer" />
                    </div>
                    <div>
                        <small>{props.dislikes}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}