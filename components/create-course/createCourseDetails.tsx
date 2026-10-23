import { CourseFormValues } from '@/lib/courseSchema';
import { useFormContext, Controller } from 'react-hook-form';
import Select, { SingleValue } from 'react-select'
export interface CourseLevelOption {
    value: string;
    label: string;
}

export interface CourseCategoryOption {
    value: string;
    label: string;
}

export default function CreateCourseDetail() {
    const inputStyles = {
        'border' : '1px solid #D9D9D9',
        'padding': '6px 10px',
        'margin': '10px 0',
        'borderRadius' : '4px'
    }

    const courseLevelOptions = [
        { value: 'BEGINNER', label: 'Beginner' },
        { value: 'INTERMEDIATE', label: 'Intermediate' },
        { value: 'ADVANCED', label: 'Adavnced'}
    ]

    const courseCategoryOptions = [
        { value: 'ENGINEER', label: 'Engineer'},
        { value: 'INFORMATION TECHNOLOGY', label: 'Information Technology'},
        { value: 'FINANCE', label: "Finance" },
        { value: 'MARKETING', label: 'Marketing' }
    ]

    const {register, control, formState: { errors }} = useFormContext<CourseFormValues>();

    const course = {};

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    }

    const handleCourseLevelChange = (selectedOption: SingleValue<CourseLevelOption> ) => {
    }

    const handleCourseCategoryChange = (selectedOption: SingleValue<CourseCategoryOption> ) => {
    }

    return (
        <div className="w-full px-1">
            <h4 className="text-2xl my-1 md:text-3xl font-bold">
                Course Details
            </h4>
            <hr className='my-4'/>
            <div className="w-full mt-4">
                {/* <form> */}
                    <div className="flex flex-col my-4">
                        <label htmlFor="title" className="text-xs mb-0">Course Title</label>
                        <input id="title" style={inputStyles} {...register("title")} type="text" placeholder="Enter Course title" />
                        <small className='text-red-500'>{ errors.title?.message }</small>
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="description" className="text-xs mb-0">Short Description</label>
                        <textarea id="description" {...register("description")} style={inputStyles} placeholder="Enter Course Description" />
                        <small className='text-red-500'>{ errors.description?.message }</small>
                    </div>
                    <div className="flex flex-col gap-4 w-full md:flex-row">
                        <div className='w-full'>
                            <label className='text-xs w-full'>Category</label>
                                <Controller name='category' control={control} render={({ field }) => (
                                    <Select 
                                        options={courseCategoryOptions} 
                                        value={courseCategoryOptions.find((o) => o.value === field.value ) ?? null}
                                        onChange={(option) => field.onChange(option?.value ?? "")}
                                        onBlur={field.onBlur}
                                        />
                                )}
                                />
                                <small className='text-red-500'>{ errors.category?.message }</small>                           
                        </div>

                        <div className='w-full'>
                            <label className='text-xs w-full'>Level</label>
                            <Controller 
                                name='level'
                                control={control}
                                render={( { field }) => (
                                    <Select 
                                        options={ courseLevelOptions } 
                                        onChange={( option ) => field.onChange(option?.value)}
                                        value={ courseLevelOptions.find((o) => o.value === field.value ) ?? null }
                                        onBlur={ field.onBlur }
                                        />
                                )}
                                />
                            <small className='text-red-500'>{ errors.level?.message }</small>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 my-4 w-full md:flex-row w-full'>
                        <div className="flex flex-col w-full">
                            <label htmlFor="courseTime" className="text-xs mb-0">Course Time</label>
                            <input id="courseTime" style={inputStyles} type='number'  {...register("courseTime", { valueAsNumber: true })} placeholder="e.g 4 " />
                            <small className='text-red-500'>{ errors.courseTime?.message }</small>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="totalCourseLectures" className="text-xs mb-0">Total Lectures</label>
                            <input id="totalCourseLectures" style={inputStyles} {...register("totalCourseLectures", { valueAsNumber: true })} type="number" placeholder="Total Course Lectures" />
                            <small className='text-red-500'>{ errors.totalCourseLectures?.message }</small>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 my-4 w-full md:flex-row w-full'>
                        <div className="flex flex-col w-full">
                            <label htmlFor="price" className="text-xs mb-0">Course Price</label>
                            <input id="price" style={inputStyles} {...register("price", { valueAsNumber: true })} type="number" placeholder="Course Price" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="discount" className="text-xs mb-0">Course Discount</label>
                            <input id="discount" style={inputStyles} {...register("discount", { valueAsNumber: true })} type="number" placeholder="Discount" />
                            <small className='text-red-500'>{ errors.price?.message }</small>
                        </div>
                    </div>
                {/* </form> */}
            </div>
        </div>
    )
}