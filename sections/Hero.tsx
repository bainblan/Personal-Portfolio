'use client';

import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler";

export default function Hero() {
    return (
        <div id="hero" className="content-stretch flex h-[973px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-full" data-name="Hero">
            <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic p-[10px] relative rounded-[14px] shrink-0 text-nowrap text-center" data-name="Name">
                <p className="bg-clip-text font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[80px] text-shadow-[2px_4px_4px_rgba(0,0,0,0.25)]">
                    Baines Blanton
                </p>
                <p className="font-['Inter:Light',sans-serif] font-light text-[28px]">
                    Computer Science Student
                </p>
                <ThemeTogglerButton />
            </div>
        </div>
    );
}