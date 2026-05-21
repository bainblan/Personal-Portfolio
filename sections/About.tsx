import Image from "next/image";
import headshot from "../images/profheadshot.jpg";

export default function About() {
    return (
        <>
            <section id="about" className="flex flex-row items-center justify-center gap-[60px] w-full px-[126px] py-[120px]">
                <div className="flex flex-1 flex-col items-start gap-[30px] max-w-[600px]">
                    <h2 className="font-bold text-[96px] leading-[0.9]">ABOUT</h2>
                    <p className="text-[18px] leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                    <p className="text-[18px] leading-relaxed">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="flex-1 max-w-[500px]">
                    <Image
                        src={headshot}
                        alt="Baines Blanton headshot"
                        className="w-full h-auto rounded-[24px]"
                    />
                </div>
            </section>
            <svg
                viewBox="0 0 1440 200"
                preserveAspectRatio="none"
                className="w-full h-[220px] block -scale-y-100"
                aria-hidden
            >
                <path d="M0,200 C720,200 720,0 1440,0 L0,0 Z" className="fill-[#750af5] dark:fill-[#4c0a99]" />
            </svg>
        </>
    );
}
