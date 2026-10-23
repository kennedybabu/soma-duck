import { error } from "console";
import { z } from "zod";


export const courseSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    description: z.string().min(20, "Describe the course in at least 20 characters"),
    category: z.enum(["ENGINEER", "INFORMATION TECHNOLOGY", "FINANCE", "MARKETING"], { error: "Select a category"}),
    level: z.enum(["BEGINNER", "ADVANCED", "ALL LEVEL"], { error: "Select a level" }),
    price: z.number().min(0, "Price can't be negative"),
    courseTime: z.number().min(0, "Minimum hour should be positive"),
    totalCourseLectures: z.number().min(1, "Minimum lecture should be 1"),
    discount: z.number().min(0, "Lowest discount that can be offerred").max(100, "This means it will be free"),
    thumbnail: z.custom<File>((v) => v instanceof File, "Upload a thumbnail").optional(),
    faqs: z.array(
        z.object({
            question: z.string().min(1),
            answer: z.string().min(1)
        })
    )
})

export type CourseFormValues = z.infer<typeof courseSchema>;

export const stepFields = {
    details: ["title", "description", "category", "level", "price", "courseTime", "discount", "totalCourseLectures"],
    media: ["thumbnail"],
    info: ["faqs"]
} as const;