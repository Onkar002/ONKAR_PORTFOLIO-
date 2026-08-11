"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Contact() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "Apa bidang keahlian utama Anda?",
      answer:
        "Saya berfokus pada Frontend Development, React.js, Next.js, Tailwind CSS, Framer Motion, GSAP, serta membangun website modern dengan performa tinggi.",
    },
    {
      question: "Apakah Anda tersedia untuk kolaborasi riset atau freelance?",
      answer:
        "Ya. Saya terbuka untuk proyek freelance, startup, kolaborasi produk digital, dan pengembangan aplikasi web modern.",
    },
    {
      question: "Apa tech stack tipikal Anda untuk produksi?",
      answer:
        "Next.js, React.js, JavaScript, TypeScript, Tailwind CSS, Framer Motion, GSAP, Node.js, Express.js, MongoDB, MySQL, Git, dan Vercel.",
    },
    {
      question:
        "Apakah Anda memiliki pengalaman dengan proyek enterprise atau lab?",
      answer:
        "Ya. Saya telah mengembangkan dashboard, website perusahaan, landing page, sistem admin, serta berbagai aplikasi bisnis berbasis web.",
    },
    {
      question: "Bagaimana cara memulai kemitraan atau proyek?",
      answer:
        "Hubungi saya melalui email atau formulir kontak. Kita akan mendiskusikan kebutuhan proyek, timeline, estimasi biaya, dan langkah selanjutnya.",
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="bg-black overflow-hidden py-20">
  <div className="relative flex overflow-hidden">
    <div className="marquee flex whitespace-nowrap">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex items-center">
          <h1
            className="
              font-black
              uppercase
              text-[#2f2f2f]
              leading-none
              tracking-[-0.08em]
              text-[60px]
              sm:text-[90px]
              md:text-[120px]
              lg:text-[160px]
              xl:text-[200px]
              2xl:text-[240px]
              mr-20
            "
          >
            • LET'S BUILD SOMETHING AMAZING
          </h1>

          <h1
            className="
              font-black
              uppercase
              text-white
              leading-none
              tracking-[-0.08em]
              text-[60px]
              sm:text-[90px]
              md:text-[120px]
              lg:text-[160px]
              xl:text-[200px]
              2xl:text-[240px]
              mr-20
            "
          >
            AVAILABLE FOR FREELANCE
          </h1>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="w-20 h-[3px] bg-zinc-700 mx-auto mt-6 rounded-full" />
          </div>

          {/* FAQ List */}
          <div>
            {faqs.map((faq, index) => {
              const open = active === index;

              return (
                <div
                  key={index}
                  className="border-b border-zinc-800"
                >
                  <button
                    onClick={() =>
                      setActive(open ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-6 py-10"
                  >
                    <span className="text-left text-xl md:text-[34px] font-bold leading-snug">
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{
                        rotate: open ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center flex-shrink-0"
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-10 md:pr-20 text-zinc-400 text-lg leading-8 max-w-4xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}