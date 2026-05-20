"use client";

import { useState } from "react";
import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";

const LINKS = [
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#work" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#footer" },
];

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="grid grid-cols-3 items-center bg-[#750af5] h-[58px] w-full px-6 text-white">
            <Link href="/#hero" className="font-semibold text-[18px] transition-colors duration-200 hover:text-[#001F3F]">BAINES BLANTON</Link>
            <p className="text-center font-semibold tracking-widest text-[14px]">SOFTWARE ENGINEER</p>
            <div className="flex items-center gap-6 justify-end">
                <div
                    className={`flex items-center gap-6 text-[14px] font-medium transition-all duration-500 ease-out ${
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
                            className="cursor-pointer transition-colors duration-200 hover:text-[#001F3F]"
                        >
                            {label}
                        </a>
                    ))}
                </div>
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="#FFFFFF" />
            </div>
        </div>
    );
}
