"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
} from "lucide-react";

import exprence_profile from "../../public/exprence_profile.png";

const experiences = [
  {
    title: "React.js Developer",
    company: "Sanvi Softech Solutions",
    location: "Pune, Maharashtra",
    duration: "2025 - Present",
    description:
      "Building responsive web applications using React.js, Next.js, Tailwind CSS and modern JavaScript. Worked on multiple client projects and optimized website performance.",
    current: true,
    icon: <Briefcase size={20} />,
  },
  {
    title: "Frontend Development Training",
    company: "SevenMentor Pvt Ltd",
    location: "Pune",
    duration: "2024",
    description:
      "Completed professional frontend training including HTML, CSS, JavaScript, React.js, Bootstrap and Tailwind CSS.",
    current: false,
    icon: <GraduationCap size={20} />,
  },
  {
    title: "Master of Computer Applications",
    company: "MCA",
    location: "SPPU",
    duration: "2024 - 2026",
    description:
      "Pursuing Master's Degree with focus on Software Engineering, Web Technologies and Database Systems.",
    current: false,
    icon: <GraduationCap size={20} />,
  },
  {
    title: "Bachelor of Computer Applications",
    company: "BCA",
    location: "College",
    duration: "2021 - 2024",
    description:
      "Completed Bachelor's Degree in Computer Applications with programming, networking and database knowledge.",
    current: false,
    icon: <GraduationCap size={20} />,
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden py-24">

      {/* Background Blur */}
      <div className="absolute w-96 h-96 bg-lime-500/10 blur-[150px] rounded-full -left-20 top-20"></div>
      <div className="absolute w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full right-0 bottom-0"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[8px] text-lime-400 text-sm">
            My Journey
          </span>

          <h2 className="text-5xl lg:text-7xl font-black mt-5">
            Experience &
            <span className="text-lime-400"> Education</span>
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-8">
            My professional journey as a Frontend Developer with practical
            experience in React.js, Next.js and modern web technologies.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className="relative"
          >

            <div className="absolute inset-0 rounded-3xl bg-lime-500 blur-3xl opacity-20"></div>

            <div className="relative overflow-hidden rounded-3xl border border-zinc-800">

              <Image
                src={exprence_profile}
                alt="Profile"
                className="w-full h-[800px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />

            </div>

          </motion.div>

          {/* RIGHT TIMELINE */}

          <div className="relative">

            {/* Vertical Line */}

            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-zinc-700"></div>

            <div className="space-y-10">

              {experiences.map((item, index) => (

                <motion.div
                  key={index}
                  initial={{opacity:0,x:80}}
                  whileInView={{opacity:1,x:0}}
                  viewport={{once:true}}
                  transition={{delay:index*0.2}}
                  whileHover={{
                    y:-5,
                    scale:1.02,
                  }}
                  className="relative pl-20"
                >

                  {/* Timeline Icon */}

                  <div
                    className={`absolute left-0 top-5 w-12 h-12 rounded-full flex items-center justify-center
                    ${
                      item.current
                        ? "bg-lime-400 text-black shadow-[0_0_25px_#84cc16]"
                        : "bg-zinc-800 text-white"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Card */}

                  <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-8 hover:border-lime-400 transition-all duration-300">

                    <div className="flex flex-wrap justify-between gap-4">

                      <div>

                        <h3 className="text-2xl font-bold">
                          {item.title}
                        </h3>

                        <h4 className="text-lime-400 mt-2">
                          {item.company}
                        </h4>

                      </div>

                      {item.current && (
                        <span className="bg-lime-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                          Current
                        </span>
                      )}

                    </div>

                    <div className="flex flex-wrap gap-6 mt-5 text-zinc-400 text-sm">

                      <div className="flex items-center gap-2">
                        <Calendar size={16}/>
                        {item.duration}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={16}/>
                        {item.location}
                      </div>

                    </div>

                    <p className="mt-6 leading-8 text-zinc-300">
                      {item.description}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}