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
                <form>
                    <div className="flex flex-col my-4">
                        <label htmlFor="title" className="text-xs mb-0">Course Title</label>
                        <input id="title" style={inputStyles} onChange={handleChange} type="text" placeholder="Enter Course title" />
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="description" className="text-xs mb-0">Short Description</label>
                        <textarea id="description" style={inputStyles} placeholder="Enter Course Description" />
                    </div>
                    <div className="flex flex-col gap-4 w-full md:flex-row">
                        <div className='w-full'>
                            <label className='text-xs w-full'>
                                Category
                                <Select 
                                    options={courseCategoryOptions} 
                                    onChange={handleCourseCategoryChange}
                                    // value={courseCategoryOptions.find(option => option.value === course.level || null)} 
                                    />
                            </label>
                        </div>

                        <div className='w-full'>
                            <label className='text-xs w-full'>
                                Level
                                <Select 
                                    options={courseLevelOptions} 
                                    onChange={handleCourseLevelChange}
                                    // value={roleOptions.find(option => option.value === user.role || null)} 
                                    />
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 my-4 w-full md:flex-row w-full'>
                        <div className="flex flex-col w-full">
                            <label htmlFor="title" className="text-xs mb-0">Course Time</label>
                            <input id="title" style={inputStyles} onChange={handleChange} type="text" placeholder="Course time" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="title" className="text-xs mb-0">Total Lectures</label>
                            <input id="title" style={inputStyles} onChange={handleChange} type="text" placeholder="Total Course Lectures" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 my-4 w-full md:flex-row w-full'>
                        <div className="flex flex-col w-full">
                            <label htmlFor="title" className="text-xs mb-0">Course Price</label>
                            <input id="title" style={inputStyles} onChange={handleChange} type="text" placeholder="Course Price" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="title" className="text-xs mb-0">Course Discount</label>
                            <input id="title" style={inputStyles} onChange={handleChange} type="text" placeholder="Discount" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}