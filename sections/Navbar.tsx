"use client";

import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

const LINKS = ["ABOUT", "WORK", "PROJECTS", "CONTACT"];

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="grid grid-cols-3 items-center bg-[#D4AF37] h-[58px] w-full px-6 text-white">
            <p className="font-semibold text-[18px]">Baines Blanton</p>
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
                    {LINKS.map((label) => (
                        <button key={label} className="cursor-pointer">
                            {label}
                        </button>
                    ))}
                </div>
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="#FFFFFF" />
            </div>
        </div>
    );
}
