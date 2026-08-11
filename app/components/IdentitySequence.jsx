"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function IdentitySequence() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;

    if (!wrapper || !track) return;

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const totalScroll = wrapper.offsetHeight - window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(0, -rect.top / totalScroll)
      );

      const maxTranslate = track.scrollWidth - window.innerWidth;

      track.style.transform = `translateX(-${progress * maxTranslate}px)`;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main className="w-full bg-black">

     

      {/* ===================== HORIZONTAL SECTION ===================== */}

      <div
        ref={wrapperRef}
        className="relative"
        style={{
          height: "400vh",
        }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">

          <div
            ref={trackRef}
            className="flex h-screen"
            style={{
              width: "300vw",
              willChange: "transform",
            }}
          >
            {/* Slide 1 */}
            <section className="w-screen h-screen bg-[#0d0d0d] flex items-center justify-center relative">
              <div className="text-center">
          <h1 className="text-7xl md:text-9xl font-bold text-white">
            FRONTEND
          </h1>

          <h1 className="text-7xl md:text-9xl font-bold text-white">
            DEVELOPER
          </h1>

          <div className="mt-16 animate-bounce flex justify-center">
            <ArrowDown size={42} className="text-lime-400" />
          </div>
        </div>

             
            </section>

            {/* Slide 2 */}
            <section className="w-screen h-screen bg-[#18181b] flex items-center justify-center">

               <button className="group flex items-center gap-5">

                <div className="rounded-full bg-lime-400 px-10 py-5 text-2xl font-semibold text-black">
                  About Me
                </div>

                <div className="h-20 w-20 rounded-full bg-lime-400 flex items-center justify-center">
                  <ArrowUpRight size={34} className="text-black" />
                </div>

              </button>

              <div className="absolute left-10 bottom-10 flex items-center gap-2 text-gray-400">
                <ArrowDown size={18} />
                Scroll →
              </div>


            </section>

            {/* Slide 3 */}
            <section className="w-screen h-screen bg-black flex items-center justify-center">

              <div className="text-center">

                <h2 className="text-7xl font-bold text-white mb-8">
                  Let's Work Together
                </h2>

                <button className="rounded-full bg-lime-400 px-10 py-5 text-2xl font-semibold text-black">
                  contact Me
                </button>

              </div>

            </section>

          </div>

        </div>
      </div>

    </main>
  );
}