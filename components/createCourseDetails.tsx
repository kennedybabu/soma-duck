export default function CreateCourseDetail() {
    const inputStyles = {
        'border' : '1px solid #D9D9D9',
        'padding': '5px 8px',
        'margin': '10px 0',
        'borderRadius' : '4px'
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    }

    return (
        <div className="w-full px-1">
            <h4 className="text-2xl md:text-3xl font-bold">
                Course Details
            </h4>
            <hr />
            <div className="w-full mt-3">
                <form>
                    <div className="flex flex-col">
                        <label htmlFor="title" className="text-xs mb-0">Course Title</label>
                        <input id="title" style={inputStyles} onChange={handleChange} type="text" placeholder="Enter Course title" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description" className="text-xs mb-0">Short Description</label>
                        <textarea id="description" style={inputStyles} placeholder="Enter Course Description" />
                    </div>

                </form>
            </div>
        </div>
    )
}