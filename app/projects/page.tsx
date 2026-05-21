import Image, { type StaticImageData } from "next/image";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import ymp from "@/images/ympfaith.png";
import knocklock from "@/images/knocklock.png";
import bizniz from "@/images/biznizpic.png";
import space from "@/images/ssrlinterviewproj.png";
import harvest from "@/images/harvestathens.png";
import ssrl from "@/images/cubesat.png";

type Project = {
    name: string;
    date: string;
    description: string;
    github: string;
    image: StaticImageData;
    span: "wide" | "regular";
};

const PROJECTS: Project[] = [
    {
        name: "Knocklock",
        date: "February 2026",
        description:
            "Hackathon-winning smart lock that recognizes secret knock patterns. Took 'Best .tech Domain' at UGA Hacks XI.",
        github: "https://knocklock.vercel.app",
        image: knocklock,
        span: "wide",
    },
    {
        name: "Bizniz",
        date: "April 2026",
        description: "No more having to store business cards, look at them once, forget where you put them, or most likely, just throw them away. Bizniz is a digital rolodex that allows users to store and share business contacts. Scan the QR code on someone's Bizniz card with a mobile phone, and it will be added to your Bizniz rolodex.",
        github: "https://github.com/bainblan/bizniz-rolodex",
        image: bizniz,
        span: "regular",
    },
    {
        name: "3D Solar System",
        date: "February 2026",
        description: "The redesign of the SSRL website's front page that I submitted as my final round interview project for the Frontend Web Developer position. As you scroll down you see different planets with a corresponding SSRL mission next to them. Built with ThreeJS and React.",
        github: "https://ssrlfrontpage.vercel.app",
        image: space,
        span: "regular",
    },
    {
        name: "harvestathens.org",
        date: "December 2025",
        description: "Official website for Harvest Athens, a UGA student ministry that focuses on sharing the gospel through respectful conversations with people in downtown Athens.",
        github: "https://harvestathens.org",
        image: harvest,
        span: "regular",
    },
    {
        name: "Updated SSRL Website",
        date: "May 2026",
        description: "As SSRL's Frontend Web Developer, my partner and I completely redesigned the SSRL website to me more modern, mobile-friendly, accessible, and compliant with UGA branding guidelines.",
        github: "https://smallsatelliteresearchlaboratoryuga.github.io/",
        image: ssrl,
        span: "regular",
    },
    {
        name: "youngmindspodcast.com",
        date: "January 2026",
        description:
            "Official website of the Young Minds Podcast, featuring episode links, contributor bios, about page, contact form, merch store, and fully functioning checkout with CashApp.",
        github: "https://youngmindspodcast.com",
        image: ymp,
        span: "wide",
    },
];

export default function ProjectsPage() {
    return (
        <>
            <Navbar />
            <main className="w-full">
                <header className="flex items-end justify-between px-[126px] pt-[120px] pb-[60px] gap-[40px]">
                    <h1 className="font-bold text-[96px] leading-[0.9]">PROJECTS</h1>
                    <p className="text-[#001F3F]/75 dark:text-white/75 text-[18px] max-w-[420px] pb-[12px]">
                        A selection of things I&apos;ve built. Click to view the project.
                    </p>
                </header>
                <div className="grid grid-cols-4 gap-[24px] px-[126px] pb-[160px]">
                    {PROJECTS.map((p) => (
                        <article
                            key={p.name}
                            className={`${p.span === "wide" ? "col-span-2" : "col-span-1"} group bg-white dark:bg-[#171717] rounded-[24px] overflow-hidden flex flex-col border-2 border-[#750af5]/15 dark:border-[#4c0a99]/40`}
                        >
                            <a
                                href={p.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative aspect-[16/10] overflow-hidden"
                                aria-label={`${p.name} on GitHub`}
                            >
                                <Image
                                    src={p.image}
                                    alt={p.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </a>
                            <div className="flex flex-col gap-[10px] p-[28px]">
                                <p className="text-[12px] tracking-[0.2em] uppercase text-[#750af5] dark:text-[#a06bff] font-semibold">
                                    {p.date}
                                </p>
                                <h2 className="text-[#001F3F] dark:text-white font-bold text-[28px] leading-tight">{p.name}</h2>
                                <p className="text-[#001F3F]/75 dark:text-white/75 text-[16px] leading-relaxed">{p.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
