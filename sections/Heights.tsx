import Image from "next/image";
import mountain from "../images/purple_mountain.jpg";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";

export default function Heights() {
    return (
        <>
            <section id="heights" className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[60px] w-full bg-[#750af5] dark:bg-[#4c0a99] px-6 md:px-[126px] py-16 md:py-[120px]">
                <Reveal className="w-full md:flex-1 max-w-[600px] aspect-[4/3] relative overflow-hidden rounded-[24px]">
                    <Image
                        src={mountain}
                        alt="Snowy mountain peak"
                        fill
                        className="object-cover"
                    />
                </Reveal>
                <RevealGroup className="flex w-full md:flex-1 flex-col items-start gap-6 md:gap-[40px] max-w-[600px]">
                    <RevealItem as="h2" className="text-white font-bold text-[44px] md:text-[96px] leading-[0.9]">
                        REACHING NEW HEIGHTS
                    </RevealItem>
                    <RevealItem>
                        <a
                            href="/baines_spring2026_resume.pdf"
                            download="baines_spring2026_resume.pdf"
                            className="inline-block rounded-full bg-white text-[#001F3F] px-[28px] md:px-[36px] py-[12px] md:py-[14px] text-[16px] md:text-[18px] font-semibold cursor-pointer transition-colors duration-200 hover:bg-[#001F3F] hover:text-white dark:hover:bg-[#a06bff] dark:hover:text-white"
                        >
                            Download Resume
                        </a>
                    </RevealItem>
                </RevealGroup>
            </section>
            <svg
                viewBox="0 0 1440 200"
                preserveAspectRatio="none"
                className="w-full h-[100px] md:h-[220px] block -scale-y-100"
                aria-hidden
            >
                <path d="M0,200 C720,200 720,0 1440,0 L1440,200 Z" className="fill-[#750af5] dark:fill-[#4c0a99]" />
            </svg>
        </>
    );
}
