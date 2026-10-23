import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { CourseFormValues } from "@/lib/courseSchema";

const inputStyles = {
    'border' : '1px solid #D9D9D9',
    'padding': '5px 8px',
    'margin': '1px 0',
    'borderRadius' : '4px',
    'fontSize': '13px'
}

export default function CreateCourseMedia() {
    const { setValue, watch, formState: { errors }} = useFormContext<CourseFormValues>()
    const thumbnail = watch("thumbnail")

    return (
        <div className="w-full px-1">
            <div className="flex items-center justify-between">
                <h4 className="text-2xl my-1 md:text-3xl font-bold">
                    Course Media
                </h4>
            </div>
            <hr className='my-4'/>
            <div className="w-full">
                <div className="border-2 border-dashed p-[48px] flex flex-col items-center justify-center rounded-sm w-full">
                    <Image src="/gallery.svg" unoptimized alt="gallery svg" height={50} width={50 } />
                    <div className="my-3 text-center text-[#747579]">
                            <div className="flex flex-col">
                                <label htmlFor="" className="font-bold text-black">Upload course image here</label>
                                <input 
                                    style={inputStyles} 
                                    type="file" 
                                    accept="image/*"
                                    className="cursor-pointer"  
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if(file) setValue("thumbnail", file, { shouldValidate: true })
                                    }}
                                />
                                {thumbnail && <small className="mt-2">{ thumbnail.name }</small>}
                                <small className="text-red-500">{ errors.thumbnail?.message as string }</small>
                            </div> 
                        <div className="max-w-[300px] my-3">
                            <small><span className="font-bold">Note: </span> Only JPG, JPEG and PNG. Our suggested dimensions are 600px * 450px. Larger image will be cropped to 4:3 to fit our thumbnails/previews</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}