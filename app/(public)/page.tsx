"use client";

import { HiCheckBadge } from "react-icons/hi2";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { PiGraduationCapLight } from "react-icons/pi";
import { BsEnvelope, BsPatchCheck } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import { useState } from "react";
import CourseTile from "@/components/CourseTile";
import TrendingCourseTile from "@/components/TrendingCourseTile";
import { Course } from "@/types/course";
import Image from "next/image";
import RedDotSVG from "@/components/svgs/RedDotSVG";
import RoundBGSVG from "@/components/svgs/RoundBGSVG";
import HeaderSVG from "@/components/svgs/HeaderSVG";
import HeroRightSVG from "@/components/svgs/HeroRightSVG";
import { Rating } from "react-simple-star-rating";
import { FaPlay } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import BlueBackgroundSVG from "@/components/svgs/BlueBackground";

export default function Home() {
  const text = "Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.";
  const [currentPopularCourses, setCurrentPopularCourses] = useState("");
  const tabs = ["Web Design", "Development", "Graphic Design", "Marketing", "Finance"]


  const tiles: Course[] = [
  {
    id: 1,
    title: "React Js",
    description: "Build dynamic, component-based UIs with React, hooks, and modern state management.",
    rating: "4.8",
    instructor: "Jane Doe",
    level: "All Level",
    price: 49.99,
  },
  {
    id: 2,
    title: "Angular Js",
    description: "Master Angular fundamentals — components, services, and reactive forms — from the ground up.",
    rating: "4.5",
    instructor: "John Smith",
    level: "Beginner",
    price: 39.99,
  },
  {
    id: 3,
    title: "Go",
    description: "Learn Go's syntax, concurrency model, and how to build fast, reliable backend services.",
    rating: "4.6",
    instructor: "Amara Okoye",
    level: "Beginner",
    price: 34.99,
  },
  {
    id: 4,
    title: "Python",
    description: "Go beyond the basics with advanced Python — decorators, generators, and async programming.",
    rating: "4.9",
    instructor: "Carlos Mendez",
    level: "Advanced",
    price: 59.99,
  },
  {
    id: 5,
    title: "Java",
    description: "Get started with Java fundamentals, object-oriented design, and core language features.",
    rating: "4.4",
    instructor: "Priya Nair",
    level: "Beginner",
    price: 44.99,
  },
  {
    id: 6,
    title: "C++",
    description: "Deep-dive into memory management, templates, and performance optimization in modern C++.",
    rating: "4.7",
    instructor: "David Kim",
    level: "Advanced",
    price: 64.99,
  },
  {
    id: 7,
    title: "Typescript",
    description: "Add static typing to your JavaScript projects with types, interfaces, and generics.",
    rating: "4.6",
    instructor: "Sarah Connor",
    level: "Beginner",
    price: 29.99,
  },
  {
    id: 8,
    title: "Ruby",
    description: "Learn Ruby's clean syntax and object-oriented approach, the foundation for Ruby on Rails.",
    rating: "4.3",
    instructor: "Michael Owusu",
    level: "Beginner",
    price: 34.99,
  },
]; 

  const trending: Course[] = [
  {
    id: 1,
    title: "React Js",
    description: "Build dynamic, component-based UIs with React, hooks, and modern state management.",
    rating: "4.8",
    instructor: "Jane Doe",
    level: "All Level",
    price: 49.99,
  },
  {
    id: 2,
    title: "Angular Js",
    description: "Master Angular fundamentals — components, services, and reactive forms — from the ground up.",
    rating: "4.5",
    instructor: "John Smith",
    level: "Beginner",
    price: 39.99,
  },
  {
    id: 3,
    title: "Go",
    description: "Learn Go's syntax, concurrency model, and how to build fast, reliable backend services.",
    rating: "4.6",
    instructor: "Amara Okoye",
    level: "Beginner",
    price: 34.99,
  }
]

  const updatePopularCourseList = (tab: string) => {
    setCurrentPopularCourses(tab)
  }

  return (
    <div>
    <section className="w-full overflow-x-hidden relative flex pt-[60px] px-5 min-h-screen lg:px-[100px]">
      <div className="flex flex-col md:flex-row max-w-[1272px] mx-auto">
        <div className="flex flex-col justify-center text-center lg:text-center lg:text-start lg:items-start lg:flex-1">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-3 lg:mb-5">Limitless learning at your 
            <span className="relative inline-block px-3">fingertips
              <span className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                <svg width="300px" height="62.1px" enableBackground="new 0 0 366 62.1" viewBox="0 0 366 62.1" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-yellow-400 fill-warning" d="m322.5 25.3c0 1.4 2.9 0.8 3.1 1.6 0.8 1.1-1.1 1.3-0.6 2.4 13.3 0.9 26.9 1.7 40.2 4-2.5 0.7-4.9 1.6-7.3 1.1-4-0.9-8.2-1-12.2-1.2-8.5-0.5-16.9-1.9-25.5-1.7h-3.1c2.6 0.6 4.8 0.4 5.7 2.2-7.3 0.4-14.1-0.8-21.2-1.1-0.2 0.6-0.5 1.2-0.8 1.8 21.3 0.7 42.5 1.6 64.3 4.6-4.2 1.6-7.7 1-10.8 0.8-6.8-0.5-13.5-1.3-20.3-1.9-0.9-0.1-2.3-0.1-2.9 0.2-2.2 1.6-4.3 0.6-7 0.4 1.4-1 2.5 0.5 3.9-0.8-5.6-1-10.7 0.6-15.9 0s-10.5-0.6-16.6-0.8c2 1.6 4.6 1.3 6.2 1.4 4.9 0 9.9 0.8 14.8 0.7 5.3-0.1 10.4 0.5 15.5 0.9 3.2 0.3 6.7-0.1 9.9-0.4 1.1-0.1 0.5 0.3 0.6 0.6 0.5 0.9 2.2 0.8 3.6 0.8 5.1-0.1 10.1 0.6 14.8 1.5 0.8 0.1 1.5 0 1.7 0.7 0 0.7-0.8 0.6-1.5 0.8-3.9 1.2-7.4-0.2-11.1-0.2-2 0-4.3-1.5-6 0.5-0.3 0.4-1.4 0.1-2.2-0.1-4.5-0.8-9.1-0.5-13.8-1.5-2.3-0.5-5.6 0.1-8.4 0.5-4 0.5-8-0.7-12.1-0.9-3.4-0.2-7.1-0.5-10.5-0.7-7.1-0.3-14.2-1.2-22.3-0.4 4.9 1.1 9.4 1.2 13.8 1.2 9.7 0 19.2 2.3 28.9 1.6 7.3 3.2 15.9 1.5 23.8 2.9 4.9 0.8 10.1 0.8 15.2 1.2 0.5 0 0.8 0.3 1.1 0.9-20-2.1-40.2-1.4-60.8-3 4.9 2.1 10.8-0.3 15.3 2.7-8 1.9-15.8-0.9-23.5-0.1 2.8 1.4 7.1 1.1 9.3 3.3 0.5 0.5 0.2 1.1-1.2 1.3 2.3 1 3.4-2.1 5.7-0.4 0.2-0.6 0.2-1 0.3-1.5 0.8-0.3 2 0.8 1.5 1.5-0.2 0.1 0 0.3 0 0.5 18.7 0.4 37.3 1.7 56.2 3.6-1.7 1.1-2.8 1.2-4.2 1.1-7.1-0.5-14.1-0.9-21.2-1.4-3.1-0.2-6.3-0.4-9.4-0.4-7.6-0.2-15-0.7-22.4-1-9-0.4-17.9-0.1-26.9-0.1-1.2 0-2.9-0.4-3.9 1 14.8 0.3 29.7 0.6 44.4 1.1 14.8 0.6 29.9 1.3 44.2 4.2-4.3 1-8.8 0.9-13 0.5-5.3-0.5-10.5-1.1-15.8-1.2-11.4-0.3-22.9-0.9-34.3-1.2-17.6-0.4-35.4-0.3-53.1-0.4-10.8-0.1-21.7-0.2-32.5 0-17.8 0.4-35.7 0.2-53.5 0.5-13.1 0.3-26.3 0.1-39.4 0.5-11.1 0.3-22.4 0.6-33.6 1-13.1 0.6-26.1 0.2-39.3 0.4-3.9 0.1-7.6 0.2-11.8-0.2 0.9-1.2 2.3-1.3 3.9-1.3 8.4 0.2 16.6-0.4 24.9-0.9 3.9-0.2 7.9-0.4 11.9 0.2 2.5 0.4 5.3-0.3 8-0.4 7.3-0.4 14.7-0.7 22-0.9 11.9-0.5 23.7-1.2 35.6-0.8 7.7 0.2 15.3-0.6 22.9-0.1 2.3 0.2 4.3-0.5 6.5-1h-17.6c-9.6 0-19-0.1-28.6 0-8 0.1-16.1 0.3-24 0.8-2.6 0.2-5.4 0.1-8.2 0.1-10.1 0.3-20.1 0.6-30.2 0.5-5.4 0-10.7-0.1-15.9 0.6-2.3 0.3-4-1.3-6.5-0.6 0.2 0.4 0.5 0.9 0.6 1.5-1.9 0-4 0.4-4.9-0.1-4.2-2.2-9.4-1.5-14.1-2.3-1.7-0.3-3.7-0.1-4.3-1.5-0.5-1.3 1.9-1.5 2.6-2.6-4.2-1.4-4.6-5-8.5-7.2-1.5 0.2-0.9 2.8-4.2 1.3 0.3 2.4 4.5 3.9 2.8 6.4-2.3 0.3-3.2-0.8-4.2-1.7-2.5-4-5.1-8.4-5.1-12.7 0.2-6.8 0.2-13.8 3.6-20.4 0.3-0.5 0.3-1 0.8-1.4 0.9-0.9 1.2-2.4 3.6-2.1 2.2 0.2 2.5 1.5 2.6 2.6 0.2 1.4 1.5 1.8 3.2 2.5 0.9-1.4 0.5-2.9 2.6-3.7 0.2-0.1 0.3-0.4 0.3-0.4-3.1-2.2 1.2-2.2 2.3-3.3-3.1-1.8-4-4.3-3.7-7-1.5-0.3-3.1-0.4-4.5 0-1.7 0.6-2.2-0.5-2.9-1 0.6-0.5 0.8-1.1 2.2-1.3 7.6-0.9 15.2-1.7 22.9-2 20-0.7 39.9-0.9 59.9-1 11.9-0.1 23.8 0.4 35.6 1.1 3.6 0.2 7.1-0.9 10.7-0.5 7.9 0.9 15.8 0.3 23.8 0.5 7.3 0.1 14.4-0.6 21.7-0.1 12.2 0.9 24.4 0.3 36.7 0.6 9.4 0.3 18.9 0.4 28.2 1 11.9 0.7 23.8 1.3 35.6 2 11.1 0.6 22.4 0.5 33.3 2 7.1 1 14.4 1.1 21.3 2.4 4 0.7 8.2 1.6 12.4 1.9 2.2 0.2 0.9 1 1.5 1.5-4-0.8-8-0.8-12.1-1.4-4.3-0.7-8.5-1-12.8 0.4-2.9 1-6.3 0.2-9.3-0.1-10.2-1.1-20.6-1.6-30.8-2.4-12.1-0.9-24.3-1.4-36.4-2.1-9.9-0.6-20-0.5-29.9-1-11.4-0.6-22.7 0-34.2-0.5-6.3-0.3-12.3-0.3-18.5-0.4-4.2-0.1-8.4 1.3-12.8 0.3 0.6 0.2 1.2 0.7 1.9 0.7 10.5 0 20.9 1.9 31.6 1.7 6.5-0.1 13.1 0.2 19.8 0.8 3.2 0.3 6.3-0.4 9.7-0.1 7.6 0.7 15.5 0.5 23 0.8 12.4 0.5 24.7 0.4 37.1 1.1 13.3 0.7 26.8 2.1 39.9 4.1 6.2 0.9 12.7 1.5 19.2 1.7 0.6 0 1.1 0.1 1.5 0.5-4.6 0.1-9.3 0-13.9-0.5-0.6 1.1 1.4 0.9 1.5 1.9-9.7 1.6-19.6-1.4-29.4-0.1 2.2 1.4 5.1 1 7.4 1 7.3 0.1 14.1 1.3 21.2 1.9 2.8 0.3 5.9 0 8.5 0.8 1.5 0.5 4.6-1.1 4.9 1.3 4-0.7 7.3 1.5 11.1 1.2 4-0.3 7.7 0.6 11.6 1.1 0.8 0.1 2.2 0.3 2.3 1.1 0.2 1-1.1 1.2-2 1.5-3.4 1-6.7-0.4-10.1-0.4-0.9 0-2-0.2-2.9-0.2-9.4 0.1-18.8-1.3-28.3-1.8-6-0.4-12.1-0.9-18.1-1.3 0 0.2 0 0.4-0.2 0.6 6.1 0.5 12.1 1.4 18.3 0.7z"></path>
                </svg>
              </span>
            </span>
          </h1>
          <p className="my-5 text-lg text-[#747579]">{text}</p>

          <section className="my-5">
            <ul className="grid grid-cols-2 text-sm gap-2 lg:grid-cols-3 md:mx-0">
              <li className="flex items-center gap-1 mx-auto"><HiCheckBadge /><span className="text-[#747579]">Learn with experts</span></li>
              <li className="flex items-center gap-1 mx-auto"><HiCheckBadge /><span className="text-[#747579]">Get certificate</span></li>
              <li className="flex items-center gap-1 mx-auto col-span-2 lg:col-span-1"><HiCheckBadge/><span className="text-[#747579]">Get membership</span></li>
            </ul>
          </section>

          <div className="flex my-5 flex-col items-center gap-2 lg:gap-5 md:flex-row">
            <button className="order-2 md:order-1 my-4 md:my-0 py-3.25 px-6 bg-red-100 text-red-800 hover:bg-red-500 hover:text-white transition-all rounded-lg font-medium mb-6 md:mb-0 cursor-pointer">Get Started</button>
            <div className="order-1 md:order-2 w-[70px] cursor-pointer h-[70px] bg-blue-100 flex items-center justify-center rounded-full">
              <div className="w-[37px] h-[37px] bg-[#066ac9] flex items-center justify-center rounded-full"><FaPlay className="text-white"/></div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center w-full max-w-md md:max-w-none pb-10 md:pb-0">
          <div className="relative">
            <Image 
              src="/assets/hero.png"
              alt="hero section image"
              width={400}
              height={400}
              loading="eager"
              className="w-full relative h-auto object-contain md:max-h-none"
              />
              <BlueBackgroundSVG />

              {/* transparent */}
              <div className="hidden lg:absolute items-center p-4 bg-white/5 start-[-100] backdrop-blur-xs border border-body-bg/90 rounded-2xl bottom-[-40] z-30 hidden lg:flex gap-2 mb-12 ms-10 flex">
                <div className="flex items-center justify-center">
                  <div className="rounded-full bg-[#f7c32e] h-[56px] w-[56px] flex items-center justify-center">
                    <BsEnvelope className="text-white text-2xl" />
                  </div>
                </div>
                <div className="mb-1 flex text-white text-md font-bold">
                  <div className="flex flex-col gap-2">
                      <h6>Congratulations</h6>
                      <small>Your admission completed</small>
                  </div>
                  <div>
                    <FaRegCircleCheck  className="text-green-400"/>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div>
          <HeaderSVG />
          <HeroRightSVG />
        </div>
      </div>
    </section>

    <section className="lg:py-12 p-5 font-bold max-w-[1272px] mx-auto">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6.5">
          <div className="flex gap-8 justify-center items-center p-6 rounded-lg bg-red-100">
            <div>
              <RiComputerLine className="text-5xl text-red-400"/>
            </div>
            <div>
              <h2>10K</h2>
              <small>Online Courses</small>
            </div>
          </div>
          <div className="flex gap-8 justify-center items-center p-6 rounded-lg bg-blue-100">
            <div>
              <AiOutlineUser className="text-5xl text-blue-600"/>
            </div>
            <div>
              <h2>200+</h2>
              <small>Expert Tutors</small>
            </div>
          </div>
          <div className="flex gap-8 justify-center items-center p-6 rounded-lg bg-purple-100">
              <div>
                <PiGraduationCapLight className="text-5xl text-purple-700"/>
            </div>
            <div>
              <h2>60K+</h2>
              <small>Online Students</small>
            </div>
          </div>
          <div className="flex gap-8 justify-center items-center p-6 rounded-lg bg-[#D9D9D9]">
            <div>
              <BsPatchCheck className="text-5xl"/>
            </div>
            <div>
              <h2>6K+</h2>
              <small>Certified Courses</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="max-w-[1272px] mx-auto pt-14 pb-11">
      <div className="text-center px-5 mb-6">
        <h1 className="font-bold text-4xl mb-5">Most Popular Courses</h1>
        <small className="my-4 text-gray-700">Choose from hundreds of courses from specialist organizations</small>
      </div>
      <div className="bg-blue-100 py-2.5  rounded-md">
        <nav className="flex flex-wrap justify-center gap-x-12 text-[#066ac9] font-medium" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
          {tabs.map((tab) => {
              return (
                <button 
                  onClick={() => updatePopularCourseList(tab)} 
                  key={tab} 
                  role="tab"
                  aria-selected={currentPopularCourses === tab} 
                  type="button" 
                  className={`py-2 px-4 my-1 items-center font-sm bg-blue-400 cursor-pointer transition ease-in rounded-md ${currentPopularCourses === tab ? "bg-blue-600 text-white shadow-md": "bg-blue-100"}`}>
                    {tab}
                </button>
              )
          })}
        </nav>
      </div>
    </section>

    <section className="max-w-[1272px] mx-auto px-5 pt-14 pb-11">
      <div className="grid grid-cols-1 md:px-5 lg:px-0 lg:grid-cols-4 md:grid-cols-2 gap-6">
        {tiles.map((tile) => (
          <CourseTile key={tile.id} course={tile} />
        ))}
      </div>
    </section>

    <section className="py-12 text-center md:text-start px-5 max-w-[1272px] mx-auto">
        <div className="md:flex p-5 md:justify-between items-center rounded-lg bg-[#17A2B8] lg:p-[48px] text-white">
          <div className="flex-2">
            <h3 className="text-3xl font-bold">Become an Instructor</h3>
            <small>Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.</small>
          </div>
          <div className="flex-1 my-5 md:my-0 text-center md:text-start lg:text-end"> 
            <a className="border border-[#FDA32E] px-4 py-2 rounded-md font-medium cursor-pointer hover:bg-[#FDA32E] hover:text-white transition-all">Start Teaching Today</a>
          </div>
        </div>
    </section>

    <section className="max-w-[1272px] px-5 mx-auto pt-14 pb-11">
      <div className="text-center mb-6">
        <h1 className="font-bold text-4xl mb-5">Our Trending Courses</h1>
        <small className="my-4 text-gray-700">Check out most 🔥 courses in the market</small>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trending.map((course) => (
          <TrendingCourseTile  key={course.id} course={course} />
        ))}
      </div>
      </section>

      <section className="bg-[#f5f7f9] px-5 mx-auto pt-14 pb-11">
        <div className="max-w-[1272px] mx-auto grid grid-cols-1 lg:grid-cols-12 text-[#747579]">
            <div className="lg:col-span-7 lg:order-1 order-2">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-7 lg:mt-12">
                <div className="tile bg-[#ffffff] z-[10] rounded-lg p-[24px] md:col-span-7 shadow-md z-[50] relative md:mt-12 mt-1 md:mb-0 mb-12">
                  <RoundBGSVG />
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-[40px] h-[40px] rounded-sm bg-red-200"></div>
                  </div>
                  <div className="relative text-center flex flex-col">
                    <p className="mb-4 text-[15px]">Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing</p>
                    <span>stars</span>
                      <Rating initialValue={4} size={19} readonly={true}/>                    
                    <small className="font-bold text-black">Carolyn Cortiz</small>
                  </div>
                </div>
                <div className="md:col-span-5 hidden md:block">
                    <div className="relative bg-[#ffffff] inline-block rounded-lg p-6 shadow-md">
                      <div className="w-[56px] h-[56px] bg-yellow-500 flex items-center justify-center absolute top-0 right-0 start-full -translate-x-1/2 -translate-y-1/2 rounded-full">
                        <BsShieldCheck className="text-xl text-black"/>
                      </div>
                      <h6 className="font-bold text-black mb-[16px]">100+ Verified Mentors</h6>
                      <div className="w-full flex flex-col gap-y-4">

                        {/* user profile */}
                        <div className="flex items-center gap-2">
                          <div className="w-[40px] h-[40px] rounded bg-red-200">

                          </div>
                          <div>
                            <h6 className="text-[14px] font-bold text-black">Billy Vazquez</h6>
                            <small className="text-12px]">Tutor of chemistry</small>
                          </div>
                        </div>
                        {/* end of user profile */}

                        <div className="flex items-center gap-2">
                          <div className="w-[40px] h-[40px] rounded bg-red-200">

                          </div>
                          <div>
                            <h6 className="text-[14px] font-bold text-black">Billy Vazquez</h6>
                            <small className="text-12px]">Tutor of chemistry</small>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="w-[40px] h-[40px] rounded bg-red-200">

                          </div>
                          <div>
                            <h6 className="text-[14px] font-bold text-black">Billy Vazquez</h6>
                            <small className="text-12px]">Tutor of chemistry</small>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="grid md:grid-cols-12 grid-cols-1 gap-7 ">
                <div className="md:col-span-7 md:mt-12 z-10 md:block hidden relative">
                  <RedDotSVG />
                  <div className="p-4 tile w-fit ml-auto bg-[#066ac9] rounded-xl text-white text-center shadow-sm">
                    <h2 className="text-xl font-bold">4.5/5.0</h2>
                      <Rating initialValue={4} size={16} readonly={true}/>                    
                    <p className="font-bold text-[14px]">Based on 3265 ratings</p>
                  </div>
                </div>

                <div className="md:col-span-5 flex flex-col p-[24px] shadow-lg rounded-lg h-[293px] items-center md:mb-12 -mt-4 text-center bg-[#ffffff]">
                  <div className="w-[50px] h-[50px] rounded-full my-4 bg-red-200"></div>
                  <p className="mb-4 text-[15px]">
                    At weddings believed laughing although the Moonlight newspaper up its enjoyment agreeable depending.
                  </p>
                  <div>
                      <Rating initialValue={5} size={19} readonly={true}/>                    
                  </div>
                  <small className="font-bold text-black">Dennis Barrett</small>

                </div>
              </div>
            </div>
            <div className="lg:col-span-5 text-center md:text-start flex flex-col justify-center p-5 h-full lg:order-2 order-1">
              <h2 className="text-3xl font-bold text-black mb-2">Some valuable feedback from our students</h2>
              <p className="mb-4">Supposing so be resolving breakfast am or perfectly. 
                It drew a hill from me. Valley by oh twenty direct me so. 
                Departure defective arranging rapturous did believe him all had 
                supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how.
              </p>
              <button className="self-center md:self-start py-2 px-4 font-medium transition-all rounded cursor-pointer text-white bg-[#066ac9] text-[15px] mb-5 md:mb-0">View Reviews</button>
            </div>
        </div>
      </section>
    </div>
  );
}
