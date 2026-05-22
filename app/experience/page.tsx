import Link from "next/link";
import Image from "next/image";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import scruggs from "@/images/cpi_pic.jpg";
import ssrlInAction from "@/images/ssrl_inaction.jpg";
import rafbHighShot from "@/images/rafb_high_shot.jpg";

// TODO: fill in company, jobTitle, dates, description, image, and company website (href) for each entry.
// To use a real image, replace the placeholder <div> inside the <Link> with:
//   <Image src={yourImage} alt={company} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
const EXPERIENCES = [
    {
        company: "Construction Partners Inc",
        jobTitle: "Information Technology Intern",
        dates: "May 2025 — August 2025",
        description:
            "Resolved 250+ IT support tickets, took many calls, and troubleshooted issues related to user accounts, software installations, and network access for CPI’s 5,000+ employees. Utilized Microsoft Azure for cloud license management and enterprise IT infrastructure",
        href: "https://constructionpartners.net/",
        image: scruggs,
    },
    {
        company: "UGA Small Satellite Research Laboratory",
        jobTitle: "Frontend Web Developer",
        dates: "February 2026 — Present",
        description:
            "Responsible for redesigning, maintaining, and updating the SSRL website using NextJS and React. Worked with a partner to make the site >90% accessible and mobile-friendly. Also made the site comply with UGA branding guidelines.",
        href: "https://smallsat.uga.edu/",
        image: ssrlInAction,
    },
    {
        company: "Warner Robins Air Force Base",
        jobTitle: "Computer Science Intern",
        dates: "June 2026 — July 2026",
        description:
            "Will be responsible for software testing, quality assurance, and will get involved with training AI models.",
        href: "https://www.robins.af.mil/",
        image: rafbHighShot,
    },
];

export default function ExperiencePage() {
    return (
        <>
            <Navbar />
            <main className="w-full">
                <header className="px-6 md:px-[126px] pt-16 md:pt-[120px] pb-10 md:pb-[60px]">
                    <Reveal>
                        <h1 className="font-bold text-[48px] md:text-[96px] leading-[0.9]">EXPERIENCE</h1>
                    </Reveal>
                </header>
                <div className="flex flex-col gap-16 md:gap-[100px] px-6 md:px-[126px] pb-20 md:pb-[160px]">
                    {EXPERIENCES.map((exp, i) => (
                        <article
                            key={i}
                            className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-[60px]`}
                        >
                            <Reveal className="w-full md:flex-1 max-w-[600px]">
                                <Link
                                    href={exp.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative block w-full aspect-[4/3] overflow-hidden rounded-[24px]"
                                >
                                    <Image
                                        src={exp.image}
                                        alt={exp.company}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/60 flex items-center justify-center">
                                        <span className="text-white text-[20px] font-semibold tracking-wider opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                            Visit Website &rarr;
                                        </span>
                                    </div>
                                </Link>
                            </Reveal>
                            <RevealGroup className="w-full md:flex-1 max-w-[600px] flex flex-col gap-[12px] md:gap-[16px]">
                                <RevealItem as="h2" className="font-bold text-[32px] md:text-[48px] leading-[1]">{exp.company}</RevealItem>
                                <RevealItem as="p" className="text-[18px] md:text-[22px] font-medium italic opacity-80">{exp.jobTitle}</RevealItem>
                                <RevealItem as="p" className="text-[12px] md:text-[13px] uppercase tracking-[0.2em] opacity-60">{exp.dates}</RevealItem>
                                <RevealItem as="p" className="text-[16px] md:text-[18px] leading-relaxed">{exp.description}</RevealItem>
                            </RevealGroup>
                        </article>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
