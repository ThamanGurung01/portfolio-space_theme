import React from "react";
import { motion } from "framer-motion";
import "../styles/Experience.css";

type ExperienceType={
company:string;
role:string;
startDate:string;
endDate:string;
note:string;
description:string;
badges:Array<string>;
url:string;
active:boolean;
}
const Experience: React.FC = () => {
const Experience:ExperienceType[]=[
    {
        company: "Nepsavvy",
        role: "Fullstack Developer",
        startDate: "Aug 2025",
        endDate: "present",
        note: "1+ year",
        description:"Developed full-stack web applications using React, Next.js, Laravel, and Node.js. Built CRM, eCommerce, CMS, and business solutions by creating APIs, and scalable systems while collaborating with teams to deliver efficient software products.",
        badges:["Next.js","Express","Laravel","Filament","MySql"],
        url:"https://nepsavvy.com",
        active:true,
    },
]
  return (
    <section
      id="experience"
      className="w-full pt-18 md:py-20 text-gray-200"
    >
      <div className="flex flex-col w-full px-5 sm:px-20 lg:w-1/2 mx-auto text-center">
        <motion.h1
          className="section-heading text-4xl"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
        Experience
        </motion.h1>
      <motion.div
        // className="mt-16 w-4/5  xl:w-7/12 mx-auto border-l-2 px-5"
        className="mt-10 w-full mx-auto border-l-2 px-5 flex flex-col gap-10"
        transition={{ duration: 0.7, ease: "easeInOut" }}
        whileInView={{ scale: [0.8, 1], opacity: [0, 1], y: [50, 0] }}
        viewport={{ once: true }}
      >
        {Experience.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start"
            >
            <div className="flex gap-5 items-center">
            <span className={`flex h-2 w-2 rounded-full ring-4 ring-white ${exp.active?'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500':'bg-gray-500'}`}></span>
            <h3 className="text-gray-400">{`${exp.startDate} - ${exp.endDate} (${exp.note})`}</h3>
            </div>
            <span className="ml-8 highlight text-xl font-bold">{exp.role}</span>
            <a target="_blank" href={`${exp.url??''}`} className={`ml-8 underline text-lg font-bold ${exp.url?'cursor-pointer company':''}`}>@{exp.company}</a>
            <p className="text-start ml-8">{exp.description}</p>
            <div className="ml-8 mt-2 flex flex-wrap gap-3">
              {exp.badges.map((badge,idx)=>(
                <motion.span
                  key={idx}
                  className="bg-gray-700 text-sm text-white px-3 py-1 rounded-full cursor-pointer font-bold"
                  whileHover={{
                    scale: 1.1,
                    rotate: -2,
                    backgroundColor: 'white',
                    color: 'black'
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
      </div>
    </section>
  );
};

export default Experience;
