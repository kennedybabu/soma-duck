"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { Field, FieldGroup } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

interface AddCourseFAQsProps {
    onAdd: (faq: { question: string, answer: string }) => void;
}

 const inputStyles = {
        'border' : '1px solid #D9D9D9',
        'padding': '6px 10px',
        'margin': '10px 0',
        'borderRadius' : '4px'
    }

export default function CreateCourseFAQDialog( { onAdd }: AddCourseFAQsProps ) {
    const [open, setOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const data = new FormData(e.currentTarget);

        const faq ={
            question: String(data.get("question")),
            answer: String(data.get("answer"))
        }
        console.log(faq)
        onAdd(faq)
        setOpen(false)
    }

    return (

        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger render={<Button className="flex items-center px-3 py-2 rounded-md cursor-pointer hover:shadow-sm transition gap-1 text-[#066ac9] bg-blue-100 font-bold" type="button" variant="outline"><CiCirclePlus /><span className="text-xs">Add Question</span></Button>}/>
            <DialogContent className="sm:max-w-sm">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Add FAQ</DialogTitle>
                        <DialogDescription>
                            Add Frequently Asked Questions
                        </DialogDescription>
                    </DialogHeader>

                    <div>
                        <div className="flex flex-col my-4">
                            <label htmlFor="question" className="text-xs mb-0">Question</label>
                            <input id="question" name="question" style={inputStyles} type="text" required placeholder="Question..." />
                        </div>
                        <div className="flex flex-col my-4">
                            <label htmlFor="answer" className="text-xs mb-0">Answer</label>
                            <textarea id="answer" name="answer" style={inputStyles} placeholder="Enter Answer..." required />
                        </div>        
                    </div>
                    <DialogFooter>
                        <DialogClose render={<Button type="button" variant="outline">Cancel</Button>} />
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}