import { CiCirclePlus } from "react-icons/ci"
import CreateCourseFAQDialog from "./dialog/createCourseFAQs"
import { useState } from "react"
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { VscChromeClose } from "react-icons/vsc";
import FAQ, { FAQItem } from "../FAQ";

export default function CreateCourseFAQ() {

    const inputStyles = {
        'border' : '1px solid #D9D9D9',
        'padding': '6px 10px',
        'margin': '10px 0',
        'borderRadius' : '4px'
    }

    const [FAQs, setFAQs] = useState<FAQItem[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    }

    const deleteFAQ = (id:number) => {
        setFAQs((prev) => prev.filter((faq) => faq.id !== id))
    }

    return (
        <div className="w-full px-1">
            <div className="flex items-center justify-between">
                <h4 className="text-2xl my-1 md:text-3xl font-bold">
                    Upload FAQs
                </h4>
            </div>
            <hr className='my-4'/>
            <div className="w-full mt-4">
               <CreateCourseFAQDialog onAdd={(faq) => setFAQs((prev) => [...prev, { ...faq, id: Date.now() }])}/>
            </div>
            { FAQs.length > 0 ? 
            <div className="w-full bg-[#f5f7f9] rounded-sm  my-4 text-[#747579] p-2 md:p-3 lg:p-5">
                { FAQs.map((faq, index) => {
                   return (
                    <FAQ faq={faq} key={faq.id} onDelete={deleteFAQ} />
                   )
                })}               
            </div>
            : 
            <div className="w-full flex justify-center flex-col items-center">
                <h6 className="font-[600]">NO FAQs</h6>
                <small className="text-xs">Give FAQS</small>
            </div> }
        </div>
    )
}