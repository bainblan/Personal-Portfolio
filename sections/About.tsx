import Image from "next/image";
import headshot from "../images/profheadshot.jpg";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";

export default function About() {
    return (
        <>
            <section id="about" className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[60px] w-full px-6 md:px-[126px] py-16 md:py-[120px]">
                <RevealGroup className="flex w-full md:flex-1 flex-col items-start gap-5 md:gap-[30px] max-w-[600px]">
                    <RevealItem as="h2" className="font-bold text-[48px] md:text-[96px] leading-[0.9]">ABOUT</RevealItem>
                    <RevealItem as="p" className="text-[16px] md:text-[18px] leading-relaxed">
                        Baines is a full-stack developer and computer science student at the University of Georgia, and the current Frontend Web Developer for UGA&apos;s Small Satellite Research Laboratory. Most of his free time goes into building web applications; a few of his favorites are on the projects page.
                    </RevealItem>
                    <RevealItem as="p" className="text-[16px] md:text-[18px] leading-relaxed">
                        This summer, Baines is interning at Robins Air Force Base, working on software testing and training AI models. He&apos;ll graduate with his B.S. in December 2026, then continue straight into a Master&apos;s in Computer Science at UGA through the Double Dawgs program, finishing in December 2027.
                    </RevealItem>
                </RevealGroup>
                <Reveal delay={0.15} className="w-full md:flex-1 max-w-[500px]">
                    <Image
                        src={headshot}
                        alt="Baines Blanton headshot"
                        className="w-full h-auto rounded-[24px]"
                    />
                </Reveal>
            </section>
            <svg
                viewBox="0 0 1440 200"
                preserveAspectRatio="none"
                className="w-full h-[100px] md:h-[220px] block -scale-y-100"
                aria-hidden
            >
                <path d="M0,200 C720,200 720,0 1440,0 L0,0 Z" className="fill-[#750af5] dark:fill-[#4c0a99]" />
            </svg>
        </>
    );
}
