"use client";

import Link from "next/link";
import { defineStepper } from "@stepperize/react";
import CreateCourseDetail from "@/components/create-course/createCourseDetails";
import CreateCourseFAQ from "@/components/create-course/createCourseFAQ";
import CreateCourseMedia from "@/components/create-course/createCourseMedia";
import { courseSchema, CourseFormValues, stepFields } from "@/lib/courseSchema";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const tabs = defineStepper(
   [ 
    { id: "details", title: "Course Details"},
    { id: "media", title: "Course Media" },
    { id: "info", title: "Additional Information" },
   ]

)
const stepTitles = ["Course Details", "Course Media", "Additional Information"]
export default function CreateCourse() {

    const text = "Use this interface to add new Course to the portal. Once you are done adding the item, it will be reviewed for quality. If approved, your course will appear and you'll be informed by email.";

    
    const methods = useForm<CourseFormValues>({
        resolver: zodResolver(courseSchema),
        defaultValues: { 
            title:"", 
            description:"", 
            category: "ENGINEER",
            level:"BEGINNER", 
            courseTime: 0,
            totalCourseLectures: 0,
            price:0, 
            discount: 0,
            faqs: [] 
        },
        mode: "onTouched",
    })

    const stepper = tabs.useStepper({
        async beforeStepChange({ from, direction }) {
            if(direction == "prev") return true;
            return await methods.trigger([...stepFields[from.id]])
        }
    })

    const onSubmit = (data: CourseFormValues ) => {
        console.log(data)
    }

    const onInvalid = (errors: unknown ) => {
        console.log(errors)
    }

    const isFirst = stepper.index === 0;
    const isLast = stepper.index === stepTitles.length - 1;

    return (
    <FormProvider {...methods }>    
        <div className="w-full min-h-screen">
            <div className="header-banner w-full p-5 text-center text-white flex  flex-col items-center justify-center h-[200px] bg-[#1d3b53]">
                <h1 className="text-2xl font-[600] md:text-4xl mb-3">Submit a new Course</h1>
                <small>Read our <span className="underline mx-3"><Link href={"/article"}>&quot;Before your create a course&quot;</Link></span>article before submitting!</small>
            </div>
            <div className="w-full p-5 py-14 max-w-[1272px] mx-auto">
                <p className="text-[#747579] max-w-[610px] mx-auto text-[14px] leading-loose text-center">{text}</p>
                <form onSubmit={methods.handleSubmit(onSubmit, onInvalid)}>
                    <div className="border rounded-md my-8">
                        {/* Step indicator */}
                        <ol className="flex items-center rounded-tr-md border-b rounded-tl-md p-[16px] bg-[#f5f7f9] justify-center gap-16 mb-10">
                        {stepTitles.map((title, i) => (
                            <li key={title} className="flex items-center gap-2">
                            <span
                                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                                i <= stepper.index ? "bg-[#066ac9] outline outline-[#066ac9] text-white" : "bg-blue-100 text-[#066ac9] outline outline-[#066ac9]"
                                }`}
                            >
                                {i + 1}
                            </span>
                            <span className={`hidden sm:inline text-sm ${i === stepper.index ? "font-bold" : "text-gray-500"}`}>
                                {title}
                            </span>
                            </li>
                        ))}
                        </ol>

                        <div className="w-full p-3">
                            {
                                stepper.match({
                                    details: () => <CreateCourseDetail />,
                                    media: () => <CreateCourseMedia />,
                                    info: () => <CreateCourseFAQ />
                                })
                            }
                        </div>
                        <div className="flex justify-between p-3 mt-10">
                            <button onClick={() => stepper.prev()} disabled={isFirst} className="px-4 py-2 border rounded-md cursor-pointer disabled:opacity-40">
                                Back
                            </button>

                            {
                                isLast ? 
                                    <button type="submit" className="px-4 py-2 border rounded-md bg-[#066ac9] text-white cursor-pointer">
                                        Submit Course
                                    </button>:
                                    <button onClick={() => stepper.next()} disabled={isLast} className="px-4 py-2 border rounded-md bg-[#066ac9] text-white cursor-pointer disabled:opacity-40">
                                        Next
                                    </button>
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </FormProvider>
    )
}