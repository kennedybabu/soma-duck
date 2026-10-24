"use client";

import { CiStar, CiGlobe } from "react-icons/ci";
import { GiNetworkBars } from "react-icons/gi";
import { PiBooks, PiGraduationCapLight } from "react-icons/pi";
import { GoBook, GoClock, GoShareAndroid, GoStop } from "react-icons/go";
import { use, useState } from "react";
import { BsPatchCheckFill, BsTwitterX } from "react-icons/bs";
import { LuUserPlus } from "react-icons/lu";
import { IoMedalOutline } from "react-icons/io5";
import { SlSocialGithub, SlSocialLinkedin, SlSocialYoutube } from "react-icons/sl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Comment from "@/components/comment";


import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaStar } from "react-icons/fa";
import { GraduationCap } from "lucide-react";
import CourseReview from "@/components/CourseReview";
import { Rating } from "react-simple-star-rating";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

const items = [
  {
    value: "item-1",
    trigger: "Introduction of Digital Marketing",
    content:
      "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
  },
  {
    value: "item-2",
    trigger: "Customer Life Cycle",
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
  },
  {
    value: "item-3",
    trigger: "What is Search Engine Optimization(SEO)",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
   {
    value: "item-4",
    trigger: "Facebook ADS",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
   {
    value: "item-5",
    trigger: "YouTube Marketing",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
   {
    value: "item-6",
    trigger: "Why SEO",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
   {
    value: "item-7",
    trigger: "Google tag manager",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
   {
    value: "item-8",
    trigger: "Intergration with Website",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
]

const reviews = [
    {
        reviewer: "John Doe",
        rating: 3
    }, 
    {
        reviewer: "Mary Jane",
        rating: 5
    }, 
    {
        reviewer: "Leo Poldo",
        rating: 4
    }
]

// const comments = [
//     {   author: "John Doe",
//         likes: 35,
//         dislikes: 1,
//         comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere saepe magni explicabo ratione!"
//     },
//     {   author: "Jane Doe",
//         likes: 58,
//         dislikes: 9,
//         comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere saepe magni explicabo ratione!"
//     }
// ]

const FAQs = [
  {
    value: "item-1",
    trigger: "How Digital Marketing Work?",
    content:
      "Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing although the material does the exercise of. Up attempt offered ye civilly so sitting to. She new course gets living within Elinor joy. She rapturous suffering concealed.",
  }, 
    {
    value: "item-2",
    trigger: "What is SEO?",
    content:
      "Pleasure and so read the was hope entire first decided the so must have as on was want up of I will rival in came this touched got a physics to travelling so all especially refinement monstrous desk they was arrange the overall helplessly out of particularly ill are purer.Person she control of to beginnings view looked eyes Than continues its and because and given and shown creating curiously to more in are man were smaller by we instead the these sighed Avoid in the sufficient me real man longer of his how her for countries to brains warned notch important Finds be to the of on the increased explain noise of power deep asking contribution this live of suppliers goals bit separated poured sort several the was organization the if relations go work after mechanic But we've area wasn't everything needs of and doctor where would.xercise of. Up attempt offered ye civilly so sitting to. She new course gets living within Elinor joy. She rapturous suffering concealed.",
  },
   {
    value: "item-3",
    trigger: "Why should I join this course?",
    content:
      "Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale.Subjects he prospect elegance followed no overcamepossible it on.",
  },
    {
    value: "item-4",
    trigger: "What are the T&C for this program?",
    content:
      "Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing although the material does the exercise of. Up attempt offered ye civilly so sitting to. She new course gets living within Elinor joy. She rapturous suffering concealed.",
  }, 
    {
    value: "item-5",
    trigger: "What certificates will I receive on completion?",
    content:
      "Smile spoke total few great had never their too Amongst moments do in arrived at my replied Fat weddings servants but man believed prospect Companions understood is as especially pianoforte connection introduced Nay newspaper can sportsman are admitting gentleman belonging his Is oppose no he summer lovers twenty in Not his difficulty boisterous surrounded bed Seems folly if in given scale Sex contented dependent conveying advantage.",
  }, 

]

export default function Course({ params } : { params: Promise<{ id: string }>}) {
    const { id } = use(params);
    const tabs = ["Overview", "Curriculum", "Instructor", "Reviews", "FAQs", "Comment"]
    const [currentTab, setCurrentTab] = useState("Overview");
    const [rating, setRating] = useState(4.5);
    const [comment, setComment] = useState("")
    const { user } = useAuth();
    const [comments, setComments] = useState([
        {   author: "John Doe",
        likes: 35,
        dislikes: 1,
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere saepe magni explicabo ratione!"
        },
        {   author: "Jane Doe",
            likes: 58,
            dislikes: 9,
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere saepe magni explicabo ratione!"
        }
    ])


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(comment)
    }

    return (
        <div className="w-full mx-auto">
            <section className="w-full py-12 bg-[#f5f7f9]">
                <Link href={"/create-course"}>Create course</Link>
                <div className="mx-auto py-12 max-w-[1272px] px-5 md:px-0">
                    <button className="bg-[#066ac9] rounded-md px-[24px] mb-4 text-white py-[8px]">Digital Marketing</button>
                    <h1 className="mb-2 text-3xl font-[600] max-w-[60%]">
                        The Complete Digital Marketing Course - 12 Courses in 1 
                    </h1>
                    <small className="text-[15px] my-4 text-[#747579]">
                        Satisfied conveying a dependent contented he 
                        gentleman agreeable do be. Warrant private blushes 
                        removed an in equally totally if. <br></br>Delivered dejection 
                        necessary objection do Mr prevailed. Mr feeling does 
                        chiefly cordial in do.
                    </small>
                    <div className="w-full my-5 flex my-3 flex-col md:flex-row gap-3 font-medium text-black text-[15px]">
                        <div className="flex items-center gap-2">
                            <CiStar className="text-yellow-500"/>
                            <span>4.5/5.0</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <PiGraduationCapLight className="text-yellow-900"/>
                            <span>12K Enrolled</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <GiNetworkBars className="text-green-500"/>
                            <span>All levels</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <GoStop className="text-red-500"/>
                            <span>Last Updated</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CiGlobe className="text-blue-500"/>
                            <span>English</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-white">
                <div className="w-full max-w-[1272px] p-2 rounded-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="order-2 md:order-1 grid grid-cols-1 rounded-md shadow-2xl lg:col-span-2">
                        <div className="w-full p-2">
                            <Tabs defaultValue="" className="w-full">
                                <TabsList className="py-6 bg-white flex flex-wrap mb-15 md:mb-0 h-auto w-full justify-start gap-1">
                                    {tabs.map((tab) => {
                                        return (
                                            <TabsTrigger value={tab} key={tab} 
                                            className={`cursor-pointer text-[#066ac9] text-[14px] px-4 py-4`}
                                            >{tab}</TabsTrigger>
                                        )
                                    })}
                                </TabsList>  
                                <TabsContent value="Overview">
                                    {/* <Card> */}
                                        <CardDescription>
                                            <div className="w-full text-[#747579] text-[15px] p-5">
                                            <CardHeader>
                                                <CardTitle className="text-xl lg:text-2.5xl text-black mb-4 font-bold">Course Description</CardTitle>
                                            </CardHeader>
                                                <p className="mb-4">Welcome to the Digital Marketing Ultimate Course Bundle - 12 Courses in 1 (Over 36 hours of content)</p>
                                                <p className="mb-4">In this practical hands-on training, you’re going to learn to become a digital marketing expert with this ultimate course bundle that includes 12 digital marketing courses in 1!</p>
                                                <p className="mb-4">If you wish to find out the skills that should be covered in a basic digital marketing course syllabus in India or anywhere around the world, then reading this blog will help. Before we delve into the advanced digital marketing course syllabus, let’s look at the scope of digital marketing 
                                                and what the future holds.</p>
                                                <p className="mb-4">We focus a great deal on the understanding of behavioral psychology 
                                                    and influence triggers which are crucial for becoming a well rounded 
                                                    Digital Marketer. We understand that theory is important to build a solid foundation, 
                                                    we understand that theory alone isn’t going to get the job done so that’s why this 
                                                    course is packed with practical hands-on examples that you can follow step by step.
                                                </p>
                                                <div className="w-full">
                                                    <h2 className="text-xl mb-4 my-8 font-bold text-black lg:text-2.5xl">What you&apos;ll learn</h2>
                                                    <ul>
                                                        <li className="flex items-center mb-2 gap-1.5"><BsPatchCheckFill className="text-green-400"/><span>Digital marketing course introduction</span></li>
                                                        <li className="flex items-center mb-2 gap-1.5"><BsPatchCheckFill className="text-green-400"/><span>Customer Life Cycle</span></li>
                                                        <li className="flex items-center mb-2 gap-1.5"><BsPatchCheckFill className="text-green-400"/><span>What is Search engine optimization(SEO)</span></li>
                                                        <li className="flex items-center mb-2 gap-1.5"><BsPatchCheckFill className="text-green-400"/><span>Facebook ADS</span></li>
                                                        <li className="flex items-center mb-2 gap-1.5"><BsPatchCheckFill className="text-green-400"/><span>Facebook Messenger Chatbox</span></li>
                                                        <li className="flex items-center mb-2 gap-1.5"><BsPatchCheckFill className="text-green-400"/><span>Search engine optimization tools</span></li>
                                                        <li className="flex items-center mb-2 gap-1.5"><BsPatchCheckFill className="text-green-400"/><span>Why SEO</span></li>
                                                        <li className="flex items-center mb-2 gap-1.5"><BsPatchCheckFill className="text-green-400"/><span>URL Structure</span></li>
                                                        <li className="flex items-center mb-2 gap-1.5"><BsPatchCheckFill className="text-green-400"/><span>Featured Snippet</span></li>
                                                        <li className="flex items-center mb-2 gap-1.5"><BsPatchCheckFill className="text-green-400"/><span>SEO tip and tricks</span></li>
                                                    </ul>
                                                    <p className="mt-4">As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in.</p>
                                                </div>
                                            </div>
                                        </CardDescription>
                                    {/* </Card> */}
                                </TabsContent>   
                                <TabsContent value="Curriculum">
                                    <Accordion defaultValue={[""]} className="w-full p-5 rounded-md">
                                        {items.map((item) => (
                                            <AccordionItem className="my-2 bg-gray-100 rounded-md px-3 cursor-pointer" key={item.value} value={item.value}>
                                            <AccordionTrigger className="font-bold my-1">{item.trigger}</AccordionTrigger>
                                            <AccordionContent className="my-2">{item.content}</AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </TabsContent>      
                                <TabsContent value="Instructor">
                                    <div className="p-5">
                                        <div className="flex flex-col md:flex-row md:items-start">
                                            <div className="img bg-red-100 mx-auto md:mx-0 rounded-md w-full md:w-[329px] h-[328px]">

                                            </div>
                                            <div className=" mt-4 md:mt-0 flex flex-col md:px-5 items-start">
                                                <h3 className="text-2xl font-medium mb-3 lg:text-3xl">Louis Ferguson</h3>
                                                <p className="mb-2">Instructor of Marketing</p>
                                                <div className="flex text-xl items-center gap-7">
                                                    <BsTwitterX className="cursor-pointer"/>
                                                    <SlSocialLinkedin className="text-blue-400 cursor-pointer"/>
                                                    <SlSocialGithub className="cursor-pointer"/>
                                                    <SlSocialYoutube className="text-red-400 cursor-pointer" />
                                                </div>
                                                <div className="my-3 flex flex-row md:flex-col gap-3 text-[16px] font-medium">
                                                    <div className="flex items-center gap-2">
                                                        <FaStar className="text-yellow-500"/>
                                                        <div>
                                                            <small>4.5</small>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <GraduationCap className="text-red-200"/>
                                                        <div>
                                                            <small>9.1k</small>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <PiBooks className="text-green-500"/>
                                                        <div>
                                                            <small>29 Courses</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-[#747579] leading-loose py-4 md:my-4">
                                            <h4 className="font-bold mb-5 text-black text-xl">About Instructor</h4>
                                            <p className="mb-4">Fulfilled direction use continual set him propriety continued. 
                                                Saw met applauded favorite deficient engrossed concealed and her. 
                                                Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. 
                                                Dashboard see frankness objection abilities. As hastened oh produced prospect formerly up am. 
                                                Placing forming nay looking old married few has. Margaret disposed of add screened rendered six 
                                                say his striking confined.
                                            </p>
                                            <p className="mb-4">As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted.</p>
                                        </div>
                                    </div>
                                </TabsContent>      
                                <TabsContent value="Reviews">
                                    <div className="p-5">
                                    <CardHeader>
                                        <CardTitle className="text-xl lg:text-2.5xl text-black mb-4 font-bold">Our Student Reviews</CardTitle>
                                    </CardHeader>

                                    <div className="w-full">
                                        <div className="flex items-center gap-3">
                                            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-black">4.5</h2>
                                            <div className="flex items-center gap-2">
                                                <Rating initialValue={rating} size={19} readonly={true}/>
                                            </div>
                                        </div>
                                        <small className="text-[#747579]">(Based on todays review)</small>
                                    </div>
                                    <div>
                                        {
                                            reviews.map((review) => {
                                                return (
                                                    <CourseReview key={review.reviewer} user={review.reviewer} rating={review.rating}/>
                                                )
                                            })
                                        }
                                    </div>
                                    </div>
                                </TabsContent>    
                                <TabsContent value="FAQs">
                                    <div className="p-5">
                                        <CardHeader>
                                                <CardTitle className="text-xl lg:text-2.5xl text-black mb-4 font-bold">Frequently Asked Questions</CardTitle>
                                        </CardHeader>
                                        <Accordion defaultValue={[""]} className="w-full">
                                            {FAQs.map((item, index) => (
                                                <AccordionItem className="my-2 border-b px-3 cursor-pointer" key={item.value} value={item.value}>
                                                <AccordionTrigger className="font-bold flex items-center my-1"> <span className="text-[#9a9ea4] mr-5">0{index + 1}</span> {item.trigger}</AccordionTrigger>
                                                <AccordionContent className="my-2">{item.content}</AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                </TabsContent>   
                                <TabsContent value="Comment">
                                    <div className="p-5">
                                        <CardHeader>
                                            <CardTitle className="text-xl lg:text-2.5xl text-black mb-4 font-bold">Comments</CardTitle>
                                        </CardHeader>

                                        {comments.map((comment, index) => {
                                            return (
                                                <Comment key={index} props={comment}/>
                                            )
                                        })}

                                        { user 
                                        ? 
                                        <div className="w-full p-2 flex gap-2">
                                            <div>
                                                <div className="rounded-full w-[40px] h-[40px] bg-red-100">
                                            </div>
                                            </div>
                                            <form onSubmit={handleSubmit} className="w-full gap-2 flex">
                                                <textarea onChange={(e) => setComment(e.target.value)} className="w-full border border-1 p-3" placeholder="Leave a comment..." id="comment" >

                                                </textarea>
                                                <button type="submit" className="cursor-pointer p-2 bg-blue-100 rounded-sm hover:shadow-sm transition">Comment</button>
                                            </form>
                                        </div>
                                        :
                                        null }

                                    </div>
                                </TabsContent>       
                            </Tabs>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 grid grid-cols-1 lg:col-span-1 rounded-md">
                        <div className="w-full h-[464px] shadow-xl rounded-md p-2">
                            <div className="hero-img w-full bg-red-100 h-[291px] rounded-md">

                            </div>
                            <div className="w-full p-3">
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex font-bold text-xl">$150</div>
                                    <div className="flex items-center justify-center">
                                        <GoShareAndroid className="cursor-pointer"/>
                                    </div>
                                </div>
                                <small className="text-red-600">5 days left at this price</small>
                                <div className="w-full text-[14px] my-2 flex items-center justify-between">
                                    <button className="border cursor-pointer border-1 border-blue-300 rounded-sm px-5 py-1 translate hover:bg-blue-300 hover:text-white">Free Trial</button>
                                    <button className="px-5 py-1 bg-green-300 cursor-pointer rounded-sm">Buy Course</button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full p-5 my-5 rounded-md shadow-2xl text-[#747579]">
                            <h3 className="text-center font-bold text-xl mb-4 text-black">This course includes</h3>
                            <div className="w-full">
                                <div className="w-full text-[14px] flex flex-col gap-2">
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <GoBook className="text-blue-500"/>
                                            <span className="text-black">Lectures</span>
                                        </div>
                                        <div>
                                            <p className="mb-0">30</p>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <GoClock className="text-blue-500"/>
                                            <span className="text-black">Duration</span>
                                        </div>
                                        <div>
                                            <p className="mb-0">4h 50m</p>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <GiNetworkBars className="text-blue-500"/>
                                            <span className="text-black">Skills</span>
                                        </div>
                                        <div>
                                            <p className="mb-0">Beginner</p>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <CiGlobe className="text-blue-500"/>
                                            <span className="text-black">Language</span>
                                        </div>
                                        <div>
                                            <p className="mb-0">English</p>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <LuUserPlus className="text-blue-500"/>
                                            <span className="text-black">Deadline</span>
                                        </div>
                                        <div>
                                            <p className="mb-0">Nov 30 2021</p>
                                        </div>
                                    </div>
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <IoMedalOutline className="text-blue-500"/>
                                            <span className="text-black">Certfificate</span>
                                        </div>
                                        <div>
                                            <p className="mb-0">Yes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}