import Image from "next/image";
import Link from "next/link";
import hackathon from "../images/Hackathon.jpg";

export default function Winner() {
    return (
        <>
            <section id="winner" className="flex flex-row items-center justify-center gap-[60px] w-full bg-[#750af5] dark:bg-[#4c0a99] px-[126px] py-[120px]">
                <div className="flex-1 max-w-[600px]">
                    <Image
                        src={hackathon}
                        alt="UGA Hacks XI award"
                        className="w-full h-auto rounded-[24px]"
                    />
                </div>
                <div className="flex flex-1 flex-col items-start gap-[30px] max-w-[600px]">
                    <h2 className="text-white font-bold text-[96px] leading-[0.9]">WINNER</h2>
                    <p className="text-white text-[20px] leading-relaxed">
                        Baines and friends won &apos;Best .tech Domain&apos; at UGA Hacks XI for Knocklock.tech
                    </p>
                    <Link
                        href="/projects"
                        className="rounded-full bg-white text-[#001F3F] px-[36px] py-[14px] text-[18px] font-semibold cursor-pointer transition-colors duration-200 hover:bg-[#001F3F] hover:text-white dark:hover:bg-[#a06bff] dark:hover:text-white"
                    >
                        SEE PROJECTS
                    </Link>
                </div>
            </section>
             <svg
                viewBox="0 0 1440 200"
                preserveAspectRatio="none"
                className="w-full h-[220px] block -scale-y-100"
                aria-hidden
            >
                <path d="M0,200 C720,200 720,0 1440,0 L1440,200 Z" className="fill-[#750af5] dark:fill-[#4c0a99]" />
            </svg>
        </>
    );
}
