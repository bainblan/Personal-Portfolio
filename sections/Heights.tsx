import Image from "next/image";
import mountain from "../images/purple_mountain.jpg";

export default function Heights() {
    return (
        <>
            <section id="heights" className="flex flex-row items-center justify-center gap-[60px] w-full bg-[#750af5] px-[126px] py-[120px]">
                <div className="flex-1 max-w-[600px] aspect-[4/3] relative overflow-hidden rounded-[24px]">
                    <Image
                        src={mountain}
                        alt="Snowy mountain peak"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-1 flex-col items-start gap-[40px] max-w-[600px]">
                    <h2 className="text-white font-bold text-[96px] leading-[0.9]">
                        REACHING NEW HEIGHTS
                    </h2>
                    <a
                        href="/baines_spring2026_resume.pdf"
                        download="baines_spring2026_resume.pdf"
                        className="rounded-full bg-white text-[#001F3F] px-[36px] py-[14px] text-[18px] font-semibold cursor-pointer transition-colors duration-200 hover:bg-[#001F3F] hover:text-white"
                    >
                        Download Resume
                    </a>
                </div>
            </section>
            <svg
                viewBox="0 0 1440 200"
                preserveAspectRatio="none"
                className="w-full h-[220px] block -scale-y-100"
                aria-hidden
            >
                <path d="M0,200 C720,200 720,0 1440,0 L1440,200 Z" fill="#750af5" />
            </svg>
        </>
    );
}
