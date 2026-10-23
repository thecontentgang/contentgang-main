"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      href: "#",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      ),
    },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-3 sm:top-6 sm:px-4">
      <nav
        className={`flex w-full flex-col overflow-hidden border border-gray-200 bg-white shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? "max-w-[760px] rounded-2xl" : "max-w-[420px] rounded-[16px]"
          }`}
      >
        {/* =========================
            TOP BAR
        ========================== */}
        <div className="relative grid h-16 w-full flex-shrink-0 grid-cols-[1fr_auto_1fr] items-center px-2 sm:px-3">
          {/* LEFT - MENU */}
          <div className="flex items-center justify-start">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative z-20 flex h-11 w-11 items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4429] focus-visible:ring-offset-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <div className="relative flex h-6 w-6 items-center justify-center">
                <span
                  className={`absolute block h-[1.8px] rounded-full bg-[#111015] transition-all duration-300 ease-in-out ${isOpen
                      ? "w-[24px] rotate-45 translate-y-0"
                      : isHovered
                        ? "w-[16px] translate-y-[-3.25px] translate-x-[4px]"
                        : "w-[24px] translate-y-[-3.25px]"
                    }`}
                />
                <span
                  className={`absolute block h-[1.8px] rounded-full bg-[#111015] transition-all duration-300 ease-in-out ${isOpen
                      ? "w-[24px] -rotate-45 translate-y-0"
                      : isHovered
                        ? "w-[16px] translate-y-[3.25px] translate-x-[-4px]"
                        : "w-[24px] translate-y-[3.25px]"
                    }`}
                />
              </div>
            </button>
          </div>

          {/* CENTER - LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="The ContentGang home"
            className="relative z-20 flex items-center justify-center -ml-8 sm:-ml-10"
          >
            <Image
              src="/images/TCG-black-logo.png"
              alt="The ContentGang"
              width={220}
              height={64}
              priority
              className="block h-9 w-auto object-cover sm:h-11 md:h-14 rounded-lg"
            />
          </Link>

          {/* RIGHT - CTA */}
          <div className="flex items-center justify-end">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="relative z-20 inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-[#EC4429] px-3 py-2.5 text-xs font-semibold text-white shadow-md transition-colors duration-300 hover:bg-[#111015] sm:px-5 sm:py-3 sm:text-sm"
            >
              <span className="hidden sm:inline">Book a Call</span>
              <span className="sm:hidden">Book a Call</span>
            </Link>
          </div>
        </div>

        {/* =========================
            EXPANDED MENU
        ========================== */}
        <div
          className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
        >
          <div className="overflow-hidden">
            <div className="max-h-[75vh] overflow-y-auto px-4 pb-5 pt-3 sm:px-6 sm:pb-6 sm:pt-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* LEFT - NAVIGATION */}
                <div className="flex flex-col">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400 sm:mb-4">
                    Destinations
                  </p>

                  <div className="grid grid-cols-2 gap-3 md:flex md:flex-col md:gap-1.5">
                    {navLinks.map((item, i) => (
                      <div
                        key={item.name}
                        className={`transition-all duration-500 ease-out transform ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                          }`}
                        style={{ transitionDelay: isOpen ? `${0.1 + i * 0.05}s` : "0s" }}
                      >
                        <Link
                          href={item.path}
                          onClick={closeMenu}
                          className="group flex items-center justify-between rounded-lg bg-transparent px-3 py-2 text-base text-gray-800 transition-colors duration-300 hover:bg-[#FEF9F6] hover:text-black focus-visible:bg-[#FEF9F6] focus-visible:outline-none sm:px-4 sm:text-lg md:text-2xl"
                        >
                          <span>{item.name}</span>
                          <ArrowUpRight
                            size={24}
                            strokeWidth={1.8}
                            className="hidden -translate-x-4 text-gray-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-black group-hover:opacity-100 md:block"
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT - IMAGE + SOCIAL */}
                <div
                  className={`flex flex-col justify-between rounded-xl border border-gray-100 bg-[#FEF9F6] p-4 sm:p-6 md:mt-0 transition-all duration-500 ease-out transform ${isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                  style={{ transitionDelay: isOpen ? "0.2s" : "0s" }}
                >
                  <div className="relative mb-2 h-32 w-full overflow-hidden rounded-lg sm:h-40 md:h-48">
                    <Image
                      src="/images/creative-gang.png"
                      alt="The ContentGang team"
                      fill
                      sizes="(min-width: 768px) 360px, 100vw"
                      className="object-contain"
                    />
                  </div>

                  {/* SOCIAL */}
                  <div className="mt-6 sm:mt-8">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Connect
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((social) => (
                        <Link
                          key={social.name}
                          href={social.href}
                          aria-label={social.name}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:-translate-y-1 hover:border-[#EC4429] hover:text-[#EC4429] hover:shadow-sm"
                        >
                          {social.icon}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}