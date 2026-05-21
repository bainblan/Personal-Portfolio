"use client";

import { useState } from "react";
import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";
import { useTheme } from "next-themes";
import { LuSun, LuMoon } from "react-icons/lu";

const LINKS = [
    { label: "HOME", href: "/" },
    { label: "EXPERIENCE", href: "/experience" },
    { label: "PROJECTS", href: "/projects" },
];

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <div className="relative grid grid-cols-2 md:grid-cols-3 items-center bg-[#750af5] dark:bg-[#4c0a99] h-[58px] w-full px-4 md:px-6 text-white">
            <Link href="/#hero" className="font-semibold text-[15px] md:text-[18px] transition-colors duration-200 hover:text-[#001F3F] dark:hover:text-[#a06bff]">BAINES BLANTON</Link>
            <p className="hidden md:block text-center font-semibold tracking-widest text-[14px]">SOFTWARE ENGINEER</p>
            <div className="flex items-center gap-2 md:gap-6 justify-end">
                <div
                    className={`hidden md:flex items-center gap-6 text-[14px] font-medium transition-all duration-500 ease-out ${
                        isOpen
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-8 pointer-events-none"
                    }`}
                    aria-hidden={!isOpen}
                >
                    {LINKS.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            onClick={() => setOpen(false)}
                            className="cursor-pointer transition-colors duration-200 hover:text-[#001F3F] dark:hover:text-[#a06bff]"
                        >
                            {label}
                        </a>
                    ))}
                </div>
                <button
                    type="button"
                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                    aria-label="Toggle dark mode"
                    className="flex items-center justify-center w-[36px] h-[36px] rounded-full transition-colors duration-200 hover:text-[#001F3F] dark:hover:text-[#a06bff] cursor-pointer"
                >
                    <LuMoon size={20} className="block dark:hidden" />
                    <LuSun size={20} className="hidden dark:block" />
                </button>
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="#FFFFFF" />
            </div>

            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-[#750af5] dark:bg-[#4c0a99] overflow-hidden z-50 transition-[max-height,opacity] duration-300 ease-out ${
                    isOpen ? "max-h-[280px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}
                aria-hidden={!isOpen}
            >
                <div className="flex flex-col px-6 py-4 gap-4">
                    {LINKS.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            onClick={() => setOpen(false)}
                            className="text-[16px] font-medium transition-colors duration-200 hover:text-[#001F3F] dark:hover:text-[#a06bff]"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
