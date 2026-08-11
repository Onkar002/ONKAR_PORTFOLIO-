"use client";

import { useState, useEffect } from "react";

import { ChevronRight, X } from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import Image from "next/image";
import profileimg from "../../public/profileimg.jpeg";

export default function AvailabilityBar() {
  const [open, setOpen] = useState(false);
  const [showBar, setShowBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      if (!hero) return;

      const rect = hero.getBoundingClientRect();

      // Show only while Hero section is visible
      if (rect.bottom > 150) {
        setShowBar(true);
      } else {
        setShowBar(false);
        setOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showBar) return null;

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex">
      {/* Left Sidebar Button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative w-12 h-[430px] mt-20 bg-white rounded-r-[35px] flex items-center justify-center shadow-2xl cursor-pointer"
      >
        <span
          className="text-black font-bold uppercase tracking-[7px] text-xs"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Available For Opportunity
        </span>

        <div className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
          <ChevronRight
            className={`duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {/* Popup */}
      <div
        className={`transition-all duration-500 ${
          open
            ? "opacity-100 translate-x-6 pointer-events-auto"
            : "opacity-0 -translate-x-10 pointer-events-none"
        }`}
      >
        <div className="relative ml-6 w-[950px] h-[620px]">
          {/* Image */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[320px] h-[420px] rounded-[35px] overflow-hidden shadow-2xl z-10">
            <Image
              src={profileimg}
              alt="Profile"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Card */}
          <div className="absolute right-10 top-20 w-[600px] bg-[#171717] rounded-[35px] shadow-2xl p-8 text-white">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-5xl font-bold">Onkar Pawar</h2>

                <p className="text-gray-400 mt-2 text-xl">
                  React js / Frontend Developer
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>

            <p className="mt-6 text-gray-300 leading-8 text-lg">
              Passionate Frontend Developer specializing in React.js, Next.js,
              Tailwind CSS and JavaScript. I build responsive, modern and
              high-performance web applications.
            </p>

            {/* =========================
    SOCIAL MEDIA
========================= */}
            <div className="mt-16 flex flex-col items-center justify-center">
              <p className="mb-6 text-sm font-medium uppercase tracking-[4px] text-zinc-500">
                Connect With Me
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
                >
                  <FaGithub
                    size={21}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/onkar-pawar-791557275/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
                >
                  <FaLinkedinIn
                    size={20}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
                >
                  <FaInstagram
                    size={21}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
                >
                  <FaTwitter
                    size={19}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                

                {/* WhatsApp */}
                <a
                  href="https://wa.me/7218227174"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-500 hover:text-white"
                >
                  <FaWhatsapp
                    size={21}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
