"use client";

import { useState, useEffect } from "react";
import { Bot, Zap, ChevronRight, X } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";

 import AvailabilityBar from "../components/AvailabilityBar.jsx"


 

// Main Hero Component
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white mt-30" id="hero">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#000000,transparent_35%),radial-gradient(circle_at_bottom_right,#1a1a1a,transparent_40%)]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black" />

      <div className="relative z-10 max-w-9xl mx-auto px-6">
        {/* Left Intro */}
        <div className="absolute left-40 top-8 hidden lg:block max-w-[220px]">
          <p className="text-gray-400 uppercase tracking-[5px] text-sm leading-5">
            Hi, I'm Onkar Pawar. Frontend Developer
            <br />
            Building Fast, Modern & User-Centric Web Experiences.
          </p>
        </div>

        {/* Github */}
        <FaGithub className="absolute left-300 top-1/5 text-gray-100" size={34} />

        {/* Linkedin */}
        <FaLinkedin className="absolute left-100 top-1/5 text-gray-100" size={34} />

        {/* Instagram */}
        <FaInstagram className="absolute left-300 bottom-1/3 text-gray-100" size={34} />

        {/* Main Heading */}
        <div className="flex flex-col items-center mt-10 mr-20 justify-center min-h-[45vh]">
          <h1 className="font-black uppercase leading-none tracking-tight text-center">
            {/* WEB & UI */}
            <span className="block ml-16 md:ml-24 lg:ml-32 text-[42px] sm:text-[56px] md:text-[80px] lg:text-[120px] xl:text-[150px] bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              WEB & UI
            </span>

            {/* FRONT ⚡ END */}
            <span className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent text-[42px] sm:text-[56px] md:text-[80px] lg:text-[120px] xl:text-[150px]">
                FRONT
              </span>

              <Zap
                className="text-sky-400 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
                strokeWidth={2.5}
              />

              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent text-[42px] sm:text-[56px] md:text-[80px] lg:text-[120px] xl:text-[150px]">
                END
              </span>
            </span>

            {/* DEV  ELOPER */}
            <span className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent text-[42px] sm:text-[56px] md:text-[80px] lg:text-[120px] xl:text-[150px]">
                DEV
              </span>

              <Bot
                className="text-yellow-400 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
                strokeWidth={2.2}
              />

              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent text-[42px] sm:text-[56px] md:text-[80px] lg:text-[120px] xl:text-[150px]">
                ELOPER
              </span>
            </span>
          </h1>
        </div>

        {/* Right Text */}
        <div className="absolute bottom-20 right-2 hidden lg:block max-w-[260px] text-right">
          <p className="uppercase tracking-[3px] text-gray-400 text-sm leading-6">
            Open to all forms of collaboration, regardless of location and language.
          </p>
        </div>

        {/* Last line content */}
        <div className="relative w-full py-10">
          <div className="flex items-center justify-between">
            {/* Line */}
            <div className="flex-1 border-t border-white/10"></div>

            {/* Right Side */}
            <div className="flex items-center gap-10 ml-10">
              {/* Location */}
              <p className="hidden lg:block uppercase tracking-[6px] text-gray-400 text-sm font-semibold whitespace-nowrap">
                INDIA, MH 11 — 2026
              </p>

              {/* Hover Button */}
              <button className="group flex items-center justify-center overflow-hidden rounded-full bg-white text-black transition-all duration-500 ease-in-out hover:w-64 w-16 h-16">
                {/* Text */}
                <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 group-hover:max-w-xs group-hover:opacity-100 group-hover:mr-6 font-bold uppercase tracking-[2px]">
                  View Resume
                </span>

                {/* Arrow */}
                <span className="flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 transition-transform duration-500 group-hover:translate-y-1"
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
        </div>
      </div>

      {/* Availability Bar */}
      <AvailabilityBar />
    </section>
  );
}