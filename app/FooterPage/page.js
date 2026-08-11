"use client";

import { useRouter } from "next/navigation";
import { X, ChevronDown } from "lucide-react";

const marquee = [
  "OPEN TO OPPORTUNITIES",
  "FRONTEND DEVELOPER",
  "REACT.JS",
  "NEXT.JS",
  "UI / UX",
  "CREATIVE CODING",
  "GSAP",
  "TAILWIND CSS",
];

export default function FooterPage() {
  const router = useRouter();

  const handleClose = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#030507] text-white">
        {/* ===================== MARQUEE ===================== */}

        <div className="overflow-hidden border-y border-white/10 py-5">
          <div className="marquee">
            <div className="marquee-content">
              {Array.from({ length: 8 }).map((_, repeat) =>
                marquee.map((item, index) => (
                  <div
                    key={`${repeat}-${index}`}
                    className="flex items-center shrink-0 whitespace-nowrap px-8 uppercase tracking-[4px] text-white/70 text-sm md:text-base"
                  >
                    <span>{item}</span>
                    <span className="ml-8 text-white/30 text-xl">✦</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* ===================== CLOSE ===================== */}

        <button
          onClick={handleClose}
          className="absolute top-6 right-6 md:top-10 md:right-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 duration-300 z-50"
        >
          <X className="w-7 h-7" />
        </button>

        {/* ===================== CONTENT ===================== */}

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-16">
            {/* Links */}
            <div>
              <h5 className="uppercase tracking-[3px] text-white/40 text-sm mb-8">
                Links
              </h5>

              <div className="space-y-5">
                <p className="text-3xl font-semibold hover:text-gray-400 cursor-pointer">
                  Home
                </p>

                <p className="text-3xl font-semibold hover:text-gray-400 cursor-pointer">
                  Resume
                </p>

                <p className="text-3xl font-semibold hover:text-gray-400 cursor-pointer">
                  Contact
                </p>

                <div className="flex items-center gap-2 cursor-pointer">
                  <p className="text-3xl font-semibold">About</p>

                  <ChevronDown className="w-5 h-5 text-white/60" />
                </div>
              </div>
            </div>

            {/* Social */}

            <div>
              <h5 className="uppercase tracking-[3px] text-white/40 text-sm mb-8">
                Social
              </h5>

              <div className="space-y-5">
                <p className="text-3xl font-semibold hover:text-gray-400 cursor-pointer">
                  Email
                </p>

                <p className="text-3xl font-semibold hover:text-gray-400 cursor-pointer">
                  LinkedIn
                </p>

                <p className="text-3xl font-semibold hover:text-gray-400 cursor-pointer">
                  GitHub
                </p>

                <p className="text-3xl font-semibold hover:text-gray-400 cursor-pointer">
                  Instagram
                </p>
              </div>
            </div>

            {/* Location */}

            <div>
              <h5 className="uppercase tracking-[3px] text-white/40 text-sm mb-8">
                Location
              </h5>

              <p className="text-3xl font-semibold">
                Pune, Maharashtra
              </p>

              <p className="text-3xl font-semibold mt-4">
                India
              </p>
            </div>

            {/* Version */}

            <div>
              <h5 className="uppercase tracking-[3px] text-white/40 text-sm mb-8">
                Version
              </h5>

              <p className="text-3xl font-semibold">
                2026 © Edition
              </p>
            </div>
          </div>
        </div>

        {/* ===================== BIG TITLE ===================== */}

        <div className="relative w-full overflow-hidden pointer-events-none mt-10">
          <h1 className="whitespace-nowrap uppercase font-black leading-none text-white tracking-[-8px] pl-4 text-[90px] sm:text-[140px] md:text-[220px] lg:text-[300px] xl:text-[360px]">
            ONKAR
          </h1>
        </div>
      </section>

      {/* ===================== MARQUEE CSS ===================== */}

      <style jsx>{`
        .marquee {
          overflow: hidden;
          width: 100%;
        }

        .marquee-content {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }

        .marquee:hover .marquee-content {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}