"use client";

import { useState, useEffect } from "react";

import { ChevronRight, X } from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import Image from "next/image";
import profileimg from "../../public/profileimg.jpeg";

export default function AvailabilityBar() {
  const [open, setOpen] = useState(false);
  const [showBar, setShowBar] = useState(true);

  /* =====================================================
     SHOW BAR ONLY WHILE HERO IS VISIBLE
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      if (!hero) return;

      const rect = hero.getBoundingClientRect();

      if (rect.bottom > 150) {
        setShowBar(true);
      } else {
        setShowBar(false);
        setOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     ESCAPE KEY
  ===================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =====================================================
     LOCK BODY SCROLL ON MOBILE POPUP
  ===================================================== */

  useEffect(() => {
    if (open && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!showBar) return null;

  return (
    <>
      {/* =====================================================
          SIDEBAR BUTTON
      ===================================================== */}

      <div
        className="
          fixed
          left-0
          top-1/2
          -translate-y-1/2
          z-[60]
        "
      >
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Open availability information"
          aria-expanded={open}
          className="
            relative

            /* Mobile */
            w-10
            h-[250px]
            rounded-r-[24px]

            /* Small devices */
            xs:w-11
            xs:h-[280px]
            xs:rounded-r-[28px]

            /* Tablet */
            sm:w-12
            sm:h-[350px]
            sm:rounded-r-[30px]

            /* Desktop */
            md:h-[430px]
            md:rounded-r-[35px]

            bg-white
            flex
            items-center
            justify-center
            shadow-2xl
            cursor-pointer

            transition-all
            duration-300
            hover:w-12
            sm:hover:w-14
          "
        >
          <span
            className="
              text-black
              font-bold
              uppercase
              tracking-[3px]
              sm:tracking-[5px]
              md:tracking-[7px]
              text-[8px]
              sm:text-[10px]
              md:text-xs
              whitespace-nowrap
            "
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Available For Opportunity
          </span>

          {/* Arrow */}

          <div
            className="
              absolute
              right-[-13px]
              sm:right-[-15px]
              md:right-[-18px]

              top-1/2
              -translate-y-1/2

              w-8
              h-8

              sm:w-9
              sm:h-9

              md:w-10
              md:h-10

              rounded-full
              bg-black
              text-white

              flex
              items-center
              justify-center

              shadow-lg
            "
          >
            <ChevronRight
              size={18}
              className={`
                sm:w-5
                sm:h-5
                transition-transform
                duration-300

                ${open ? "rotate-180" : "rotate-0"}
              `}
            />
          </div>
        </button>
      </div>

      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          z-[55]
          bg-black/70
          backdrop-blur-sm
          transition-all
          duration-300
          md:hidden

          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />

      {/* =====================================================
          POPUP CONTAINER
      ===================================================== */}

      <div
        className={`
          fixed
          z-[60]

          transition-all
          duration-500
          ease-out

          /* =================================================
             MOBILE
          ================================================= */

          inset-x-3
          bottom-3
          max-h-[calc(100vh-24px)]

          ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-10 pointer-events-none"
          }

          /* =================================================
             SMALL DEVICES
          ================================================= */

          sm:inset-x-5
          sm:bottom-5

          /* =================================================
             TABLET
          ================================================= */

          md:inset-auto
          md:left-[68px]
          md:top-1/2
          md:-translate-y-1/2
          md:bottom-auto

          ${
            open
              ? "md:translate-x-0 md:opacity-100"
              : "md:-translate-x-10 md:opacity-0"
          }

          /* =================================================
             LARGE DESKTOP
          ================================================= */

          lg:left-[70px]
        `}
      >
        <div
          className="
            relative

            /* Mobile */
            w-full
            max-w-[620px]
            mx-auto

            /* Tablet/Desktop */
            md:w-[720px]
            lg:w-[900px]
            xl:w-[1000px]

            /* Height */
            max-h-[calc(100vh-24px)]
            md:h-[560px]
            lg:h-[600px]
            xl:h-[620px]
          "
        >
          {/* =================================================
              MOBILE / TABLET CLOSE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close availability popup"
            className="
              absolute
              z-30

              right-3
              top-3

              w-9
              h-9

              sm:w-10
              sm:h-10

              rounded-full

              bg-black
              text-white

              flex
              items-center
              justify-center

              shadow-xl

              hover:bg-zinc-800
              hover:scale-105

              transition-all
              duration-300

              md:hidden
            "
          >
            <X size={19} />
          </button>

          {/* =================================================
              PROFILE IMAGE
          ================================================= */}

          <div
            className="
              relative

              /* Mobile */
              hidden

              /* Tablet/Desktop */
              md:block

              absolute
              left-0
              top-1/2
              -translate-y-1/2

              w-[260px]
              h-[350px]

              lg:w-[300px]
              lg:h-[400px]

              xl:w-[320px]
              xl:h-[420px]

              rounded-[28px]
              lg:rounded-[35px]

              overflow-hidden

              shadow-2xl

              z-20
            "
          >
            <Image
              src={profileimg}
              alt="Onkar Pawar Profile"
              fill
              priority
              sizes="320px"
              className="
                object-cover
                object-center
              "
            />
          </div>

          {/* =================================================
              MOBILE IMAGE
          ================================================= */}

          <div
            className="
              md:hidden

              relative

              w-full
              h-[190px]

              sm:h-[220px]

              overflow-hidden

              rounded-t-[28px]

              shadow-2xl
            "
          >
            <Image
              src={profileimg}
              alt="Onkar Pawar Profile"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 620px"
              className="
                object-cover
                object-center
              "
            />

            {/* Image Gradient */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#171717]
                via-transparent
                to-transparent
              "
            />
          </div>

          {/* =================================================
              MAIN CARD
          ================================================= */}

          <div
            className="
              relative

              /* Mobile */
              w-full

              bg-[#171717]

              text-white

              shadow-2xl

              rounded-b-[28px]
              md:rounded-[35px]

              p-5
              sm:p-6
              md:p-7
              lg:p-8

              /* Desktop positioning */

              md:absolute
              md:right-0
              md:top-1/2
              md:-translate-y-1/2

              md:w-[560px]

              lg:w-[650px]

              xl:w-[700px]

              md:min-h-[430px]
              lg:min-h-[480px]
            "
          >
            {/* =================================================
                HEADER
            ================================================= */}

            <div
              className="
                flex
                items-start
                justify-between
                gap-4
              "
            >
              <div className="min-w-0">
                <h2
                  className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl

                    font-bold

                    leading-tight

                    truncate
                    sm:whitespace-normal
                  "
                >
                  Onkar Pawar
                </h2>

                <p
                  className="
                    text-gray-400

                    mt-1
                    sm:mt-2

                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-xl

                    leading-relaxed
                  "
                >
                  React.js / Frontend Developer
                </p>
              </div>

              {/* Desktop Close */}

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="
                  hidden
                  md:flex

                  flex-shrink-0

                  w-9
                  h-9

                  lg:w-10
                  lg:h-10

                  rounded-full

                  bg-white
                  text-black

                  items-center
                  justify-center

                  hover:bg-gray-200
                  hover:scale-105

                  transition-all
                  duration-300
                "
              >
                <X size={19} />
              </button>
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-4
                sm:mt-5
                md:mt-6

                text-gray-300

                text-sm
                sm:text-base
                md:text-lg

                leading-6
                sm:leading-7
                md:leading-8
              "
            >
              Passionate Frontend Developer specializing in React.js,
              Next.js, Tailwind CSS and JavaScript. I build responsive,
              modern and high-performance web applications.
            </p>

            {/* =================================================
                AVAILABILITY STATUS
            ================================================= */}

            <div
              className="
                mt-5
                sm:mt-6
                md:mt-8

                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  relative
                  flex
                  h-3
                  w-3
                "
              >
                <span
                  className="
                    animate-ping
                    absolute
                    inline-flex
                    h-full
                    w-full
                    rounded-full
                    bg-green-400
                    opacity-75
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    rounded-full
                    h-3
                    w-3
                    bg-green-500
                  "
                />
              </span>

              <span
                className="
                  text-xs
                  sm:text-sm
                  text-green-400
                  font-medium
                "
              >
                Available for opportunities
              </span>
            </div>

            {/* =================================================
                SOCIAL MEDIA
            ================================================= */}

            <div
              className="
                mt-7
                sm:mt-9
                md:mt-12
                lg:mt-16

                flex
                flex-col
                items-center
                justify-center
              "
            >
              <p
                className="
                  mb-4
                  sm:mb-5
                  md:mb-6

                  text-[10px]
                  sm:text-xs
                  md:text-sm

                  font-medium

                  uppercase

                  tracking-[2px]
                  sm:tracking-[3px]
                  md:tracking-[4px]

                  text-zinc-500

                  text-center
                "
              >
                Connect With Me
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  justify-center

                  gap-2
                  sm:gap-3
                  md:gap-4
                "
              >
                {/* =================================================
                    GITHUB
                ================================================= */}

                <SocialButton
                  href="https://github.com/"
                  label="GitHub"
                  hoverClass="
                    hover:border-white
                    hover:bg-white
                    hover:text-black
                  "
                >
                  <FaGithub size={20} />
                </SocialButton>

                {/* =================================================
                    LINKEDIN
                ================================================= */}

                <SocialButton
                  href="https://www.linkedin.com/in/onkar-pawar-791557275/"
                  label="LinkedIn"
                  hoverClass="
                    hover:border-[#0A66C2]
                    hover:bg-[#0A66C2]
                    hover:text-white
                  "
                >
                  <FaLinkedinIn size={19} />
                </SocialButton>

                {/* =================================================
                    INSTAGRAM
                ================================================= */}

                <SocialButton
                  href="https://www.instagram.com/"
                  label="Instagram"
                  hoverClass="
                    hover:border-pink-500
                    hover:bg-pink-500
                    hover:text-white
                  "
                >
                  <FaInstagram size={20} />
                </SocialButton>

                {/* =================================================
                    TWITTER
                ================================================= */}

                <SocialButton
                  href="https://twitter.com/"
                  label="Twitter"
                  hoverClass="
                    hover:border-white
                    hover:bg-white
                    hover:text-black
                  "
                >
                  <FaTwitter size={18} />
                </SocialButton>

                {/* =================================================
                    WHATSAPP
                ================================================= */}

                <SocialButton
                  href="https://wa.me/7218227174"
                  label="WhatsApp"
                  hoverClass="
                    hover:border-green-500
                    hover:bg-green-500
                    hover:text-white
                  "
                >
                  <FaWhatsapp size={20} />
                </SocialButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* =====================================================
   SOCIAL BUTTON
===================================================== */

function SocialButton({
  href,
  label,
  children,
  hoverClass,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        group

        flex
        items-center
        justify-center

        w-10
        h-10

        sm:w-11
        sm:h-11

        md:w-12
        md:h-12

        rounded-full

        border
        border-zinc-800

        bg-zinc-950

        text-zinc-400

        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-105

        ${hoverClass}
      `}
    >
      <span
        className="
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {children}
      </span>
    </a>
  );
}