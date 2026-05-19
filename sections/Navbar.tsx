"use client";

import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

const LINKS = ["ABOUT", "WORK", "PROJECTS", "CONTACT"];

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="flex justify-between items-center bg-[#D4AF37] h-[58px] w-full px-6 text-black">
            <p className="font-semibold text-[18px]">Baines Blanton</p>
            <div className="flex items-center gap-6">
                <div
                    className={`flex items-center gap-6 text-[14px] font-medium transition-all duration-500 ease-out ${
                        isOpen
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-8 pointer-events-none"
                    }`}
                    aria-hidden={!isOpen}
                >
                    {LINKS.map((label) => (
                        <button key={label} className="cursor-pointer">
                            {label}
                        </button>
                    ))}
                </div>
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="#000000" />
            </div>
        </div>
    );
}
