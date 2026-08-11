"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Globe,
  Sun,
  Moon,
  Trophy,
  Send,
  Briefcase,
  Rocket,
  BookOpen,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [time, setTime] = useState("");
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const aboutMenuRef = useRef(null);

  // 12 Hour Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      hours = hours ? hours : 12;

      setTime(
        `${String(hours).padStart(2, "0")}:${minutes}:${seconds} ${ampm}`
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  // Theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Close About menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutMenuRef.current && !aboutMenuRef.current.contains(event.target)) {
        setShowAboutMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close About menu when pressing Escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setShowAboutMenu(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  // Toggle About menu
  const toggleAboutMenu = () => {
    setShowAboutMenu(!showAboutMenu);
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-5">
      <div className="max-w-7xl mx-auto">
        <nav className="glass-navbar rounded-full px-8 h-20 flex items-center justify-between relative">
          {/* Clock */}
          <div className="font-black tracking-[3px] text-2xl light text-white md:text-3xl">
            {time}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="px-7 py-3 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition"
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div
              ref={aboutMenuRef}
              className="relative"
              onMouseEnter={() => setShowAboutMenu(true)}
              onMouseLeave={() => setShowAboutMenu(false)}
            >
              <button
                onClick={toggleAboutMenu}
                className="flex items-center gap-2 text-white hover:text-cyan-400 transition"
              >
                About
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    showAboutMenu ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-14 left-1/2 -translate-x-1/2 transition-all duration-300 ${
                  showAboutMenu
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-5 invisible"
                }`}
              >
                <div className="bg-[#1b1b1b]/95 backdrop-blur-xl border border-white/10 rounded-[35px] p-6 shadow-2xl flex gap-6">
                  <DockIcon
                    href="/achievement"
                    icon={<Trophy size={28} />}
                    label="Achievement"
                    onClick={() => setShowAboutMenu(false)}
                  />

                  <DockIcon
                    href="/journey"
                    icon={<Send size={28} />}
                    label="Journey"
                    onClick={() => setShowAboutMenu(false)}
                  />

                  <DockIcon
                    href="/experience"
                    icon={<Briefcase size={28} />}
                    label="Experience"
                    onClick={() => setShowAboutMenu(false)}
                  />

                  

                 
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-[110px] h-[46px] rounded-full bg-neutral-800 text-white font-medium transition hover:bg-cyan-900 hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="hidden  text-white md:flex items-center gap-3">
            <IconButton>
              <Search size={18} />
            </IconButton>

            <IconButton>
              <Globe size={18} />
            </IconButton>

            <IconButton onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </IconButton>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="glass mt-4 rounded-3xl p-6 md:hidden">
            <div className="flex flex-col gap-5">
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>

              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>

              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>

              <div className="flex gap-3 pt-3">
                <IconButton>
                  <Search size={18} />
                </IconButton>

                <IconButton>
                  <Globe size={18} />
                </IconButton>

                <IconButton onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </IconButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function IconButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-11 w-11 rounded-full glass flex items-center justify-center hover:scale-110 transition"
    >
      {children}
    </button>
  );
}

function DockIcon({ icon, label, href, onClick }) {
  return (
    <Link href={href} className="relative group" onClick={onClick}>
      {/* Tooltip */}
      <span className="absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white text-black px-3 py-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
        {label}
      </span>

      {/* Icon */}
      <button
        className="
          w-20 h-20
          rounded-3xl
          bg-white/10
          border border-white/10
          flex items-center justify-center
          text-white
          transition-all duration-300
          hover:scale-110
          hover:-translate-y-2
          hover:bg-cyan-500/20
        "
      >
        {icon}
      </button>
    </Link>
  );
}