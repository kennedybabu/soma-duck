import { HiOutlinePencilSquare } from "react-icons/hi2";
import { VscChromeClose } from "react-icons/vsc";

export interface FAQItem {
    question: string;
    answer: string
}

interface FAQProps {
    faq: FAQItem;
    onDelete: (id: number) => void;
}

export default function FAQ({ faq, onDelete }: FAQProps) {

    
    return (
        <div className="w-full p-2 my-2 rounded-sm border bg-white">
            <div className="flex my-3 flex-col md:flex-row gap-2 justify-between">
                <h6 className="font-bold text-black">{ faq.question }</h6>
                <div className="flex gap-2 items-center">
                    <div className="flex items-center cursor-pointer rounded-full w-[25px] h-[25px] justify-center bg-green-200 text-green-600">
                        <HiOutlinePencilSquare />
                    </div>
                    <div className="flex items-center cursor-pointer rounded-full w-[25px] h-[25px] justify-center bg-red-200 text-red-600">
                        <VscChromeClose className="cursor-pointer" onClick={() => onDelete(faq.id)} />
                    </div>
                </div>
            </div>
            <small>{ faq.answer }</small>
        </div>
    )
}