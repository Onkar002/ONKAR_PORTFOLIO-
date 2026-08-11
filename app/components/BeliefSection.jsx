"use client";

export default function BeliefSection() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Red Border */}
      <div className="absolute inset-8 border border-red-600/50 pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-15 py-20">
        {/* Top Row */}
        <div className="flex justify-between items-center mb-20">
          <p className="text-red-500 uppercase tracking-[6px] font-semibold text-sm">
            I BELIEVE
          </p>

          <p className="uppercase tracking-[4px] text-[11px] text-gray-500">
           BUILDING MODERN WEB EXPERIENCES
          </p>
        </div>

        {/* Heading */}
        <div className="relative">
          {/* Left Quote */}
          <span className="absolute -left-4 lg:-left-10 top-0 text-[90px] lg:text-[140px] text-gray-700 font-bold leading-none">
            "
          </span>

          {/* Right Quote */}
          <span className="absolute right-0 bottom-0 text-[90px] lg:text-[140px] text-gray-700 font-bold leading-none">
            "
          </span>

          <h1 className="leading-[0.92] font-black uppercase">
            <span className="block text-5xl md:text-7xl lg:text-[110px]">
              <span className="text-white">BUILD EXPERIENCES...</span>{" "}
              <span className="text-gray-500">CREATE IMPACT...</span>
            </span>

            <span className="block text-5xl md:text-7xl lg:text-[110px] mt-2">
              <span className="text-white">Build</span>{" "}
              <span className="italic font-light normal-case text-gray-300">
                SOLUTIONS...
              </span>
            </span>
          </h1>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-20" />

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left */}
          <div>
            <p className="text-2xl leading-relaxed text-gray-300">
              I build modern, scalable web applications that combine clean code,{" "}
              <span className="italic font-serif text-white">
               responsive design, and
              </span>{" "}
              exceptional user experiences.
            </p>
          </div>

          {/* Center */}
          <div>
            <h3 className="uppercase tracking-[3px] text-xl font-bold mb-8">
              Scope & Platform
            </h3>

            <div className="w-full h-px bg-white/10 mb-8" />

            <p className="text-gray-400 leading-8">
             Focused on modern frontend development, responsive user interfaces,
REST API integration, reusable components, performance optimization,
and scalable web applications.
            </p>

            <p className="italic text-red-500 mt-8">
              Connecting intelligence with real-world software.
            </p>
          </div>

          {/* Right - Empty for balance, or add content here */}
          <div>{/* Optional third column content */}</div>
        </div>
      </div>
    </section>
  );
}