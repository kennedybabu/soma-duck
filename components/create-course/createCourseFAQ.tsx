import { useState } from "react"
import FAQ, { FAQItem } from "../FAQ";
import CreateCourseFAQDialog from "./dialog/createCourseFAQs";
import { useFieldArray, useFormContext } from "react-hook-form";
import { CourseFormValues } from "@/lib/courseSchema";

export default function CreateCourseFAQ() {

    const inputStyles = {
        'border' : '1px solid #D9D9D9',
        'padding': '6px 10px',
        'margin': '10px 0',
        'borderRadius' : '4px'
    }

    const { control } = useFormContext<CourseFormValues>();
    const { fields, append, remove } = useFieldArray({ control, name: "faqs"})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    }

    // const deleteFAQ = (id:number) => {
    //     setFaqs((prev) => prev.filter((faq) => faq.id !== id))
    // }

    return (
        <div className="w-full px-1">
            <div className="flex items-center justify-between">
                <h4 className="text-2xl my-1 md:text-3xl font-bold">
                    Upload faqs
                </h4>
            </div>
            <hr className='my-4'/>
            <div className="w-full mt-4">
               <CreateCourseFAQDialog onAdd={(faq) => append(faq)} />
            </div>
            { fields.length > 0 ? 
            <div className="w-full bg-[#f5f7f9] rounded-sm  my-4 text-[#747579] p-2 md:p-3 lg:p-5">
                { fields.map((field, index) => {
                   return (
                    <FAQ faq={field} key={field.id} onDelete={() => remove(index)} />
                   )
                })}               
            </div>
            : 
            <div className="w-full flex justify-center flex-col items-center">
                <h6 className="font-[600]">NO faqs</h6>
                <small className="text-xs">Give faqs</small>
            </div> }
        </div>
    )
}