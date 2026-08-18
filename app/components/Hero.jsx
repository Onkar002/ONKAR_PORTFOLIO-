"use client";

import { Bot, Zap } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import AvailabilityBar from "../components/AvailabilityBar.jsx";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-black text-white pt-24 sm:pt-28 lg:pt-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#111,transparent_35%),radial-gradient(circle_at_bottom_right,#1a1a1a,transparent_45%)]" />

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/30 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        {/* Top Intro */}

        <div className="hidden lg:block absolute left-16 xl:left-24 top-10 max-w-[230px]">
          <p className="uppercase tracking-[4px] xl:tracking-[5px] text-xs xl:text-sm leading-6 text-gray-400">
            Hi, I'm Onkar Pawar.
            <br />
            Frontend Developer
            <br />
            Building Fast Modern
            <br />
            User-Centric Experiences.
          </p>
        </div>

        {/* Social Icons */}

        <div className="hidden lg:flex absolute left-[8%] top-[32%] flex-col gap-8 text-gray-300">
          <FaLinkedin
            size={28}
            className="hover:text-white transition duration-300 cursor-pointer"
          />

          <FaGithub
            size={30}
            className="hover:text-white transition duration-300 cursor-pointer"
          />

          <FaInstagram
            size={28}
            className="hover:text-white transition duration-300 cursor-pointer"
          />
        </div>

        {/* Desktop Right Text */}

        <div className="hidden lg:block absolute right-10 xl:right-20 bottom-36 max-w-[270px] text-right">
          <p className="uppercase tracking-[3px] text-xs xl:text-sm leading-6 text-gray-400">
            Open to all forms of collaboration, regardless of location and
            language.
          </p>
        </div>

        {/* HERO CENTER */}

        <div className="flex min-h-[62vh] sm:min-h-[65vh] lg:min-h-[72vh] items-center justify-center">
          <div className="w-full">
            <h1 className="font-black uppercase leading-[0.82] tracking-[-0.04em] text-center">
              {/* WEB UI */}

              <span className="block ml-0 sm:ml-8 md:ml-12 lg:ml-20 xl:ml-28 2xl:ml-36 bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9vw] xl:text-[8.5vw] 2xl:text-[8rem]">
                WEB & UI
              </span>

              {/* FRONT END */}

              <span className="mt-2 sm:mt-3 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
                <span className="bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9vw] xl:text-[8.5vw] 2xl:text-[8rem]">
                  FRONT
                </span>

                <Zap
                  className="shrink-0 text-sky-400 w-[8vw] h-[8vw] sm:w-[7vw] sm:h-[7vw] md:w-[6vw] md:h-[6vw] lg:w-[5.5vw] lg:h-[5.5vw] xl:w-[5vw] xl:h-[5vw] max-w-[95px] max-h-[95px]"
                  strokeWidth={2.5}
                />

                <span className="bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9vw] xl:text-[8.5vw] 2xl:text-[8rem]">
                  END
                </span>
              </span>

              {/* DEVELOPER */}

              <span className="mt-2 sm:mt-3 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
                <span className="bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9vw] xl:text-[8.5vw] 2xl:text-[8rem]">
                  DEV
                </span>

                <Bot
                  className="shrink-0 text-yellow-400 w-[8vw] h-[8vw] sm:w-[7vw] sm:h-[7vw] md:w-[6vw] md:h-[6vw] lg:w-[5.5vw] lg:h-[5.5vw] xl:w-[5vw] xl:h-[5vw] max-w-[95px] max-h-[95px]"
                  strokeWidth={2.2}
                />

                <span className="bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9vw] xl:text-[8.5vw] 2xl:text-[8rem]">
                  ELOPER
                </span>
              </span>
            </h1>

            {/* Mobile Intro */}

            <div className="mt-8 block lg:hidden text-center">
              <p className="mx-auto max-w-md uppercase tracking-[3px] text-[10px] sm:text-xs leading-5 text-gray-400">
                Hi, I'm Onkar Pawar — Frontend Developer Building Fast, Modern &
                User-Centric Web Experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}

        <div className="pb-10 sm:pb-12 lg:pb-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
            {/* Line */}

            <div className="hidden lg:block flex-1 border-t border-white/15" />

            {/* Mobile Line */}

            <div className="block lg:hidden border-t border-white/15" />

            <div className="flex items-center justify-between lg:justify-end gap-5">
              {/* Location */}

              <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[9px] sm:text-xs text-gray-400 font-semibold whitespace-nowrap">
                INDIA, MH — 2026
              </p>

              {/* Resume Button */}

              <button
                className="group flex items-center justify-center overflow-hidden rounded-full bg-white text-black transition-all duration-500 hover:w-52 sm:hover:w-60 w-14 h-14 sm:w-16 sm:h-16"
                aria-label="View Resume"
              >
                <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 group-hover:max-w-[140px] group-hover:opacity-100 group-hover:mr-3 font-bold uppercase tracking-[1px] text-xs sm:text-sm">
                  View Resume
                </span>

                <span className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-7 sm:w-7 transition-transform duration-500 group-hover:translate-y-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 5v14m0 0l6-6m-6 6l-6-6"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Social */}

          <div className="flex lg:hidden justify-center gap-8 mt-8 text-gray-300">
            <FaLinkedin
              size={24}
              className="hover:text-white transition cursor-pointer"
            />

            <FaGithub
              size={26}
              className="hover:text-white transition cursor-pointer"
            />

            <FaInstagram
              size={24}
              className="hover:text-white transition cursor-pointer"
            />
          </div>

          {/* Mobile Collaboration */}

          <div className="block lg:hidden mt-6 text-center">
            <p className="mx-auto max-w-sm uppercase tracking-[2px] text-[10px] sm:text-xs leading-5 text-gray-500">
              Open to collaboration regardless of location and language.
            </p>
          </div>
        </div>
      </div>

      {/* Availability Bar */}

      <AvailabilityBar />
    </section>
  );
}