import { RevealGroup, RevealItem } from "../components/Reveal";

export default function Hero() {
    return (
        <div id="hero" className="flex min-h-[calc(100vh-58px)] md:h-[calc(100vh-58px)] items-center justify-center overflow-clip px-4 md:p-[10px] py-12 md:py-0 relative w-full" data-name="Hero">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[60px] p-[10px] relative w-full md:w-auto" data-name="HeroContent">
                <RevealGroup stagger={0.1} className="flex flex-col items-start font-['Inter:Semi_Bold',sans-serif] font-semibold text-6xl sm:text-7xl md:text-9xl leading-[0.95]">
                    <RevealItem as="p">Baines</RevealItem>
                    <RevealItem as="p">Blanton</RevealItem>
                </RevealGroup>
                <RevealGroup as="nav" stagger={0.1} delayChildren={0.25} className="flex flex-col w-full md:min-w-[340px] md:w-auto border-t border-[#750af5]/40 dark:border-[#a06bff]/40">
                    {[
                        { label: "ABOUT", href: "#about" },
                        { label: "PROJECTS", href: "#winner" },
                        { label: "WORK", href: "#work" },
                        { label: "CONTACT", href: "#footer" },
                    ].map(({ label, href }, i) => (
                        <RevealItem key={label}>
                            <a
                                href={href}
                                className="group flex items-center gap-[16px] md:gap-[24px] py-[14px] md:py-[20px] border-b border-[#750af5]/40 dark:border-[#a06bff]/40 transition-colors duration-200 hover:text-[#750af5] dark:hover:text-[#a06bff]"
                            >
                                <span className="font-mono text-[12px] md:text-[14px] opacity-50">{String(i + 1).padStart(2, "0")}</span>
                                <span className="flex-1 text-[18px] md:text-[26px] font-semibold tracking-wide">{label}</span>
                                <span className="text-[18px] md:text-[20px] transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                            </a>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
            <svg
                viewBox="0 0 1440 200"
                preserveAspectRatio="none"
                className="absolute bottom-0 left-0 w-full h-[100px] md:h-[220px] block pointer-events-none"
                aria-hidden
            >
                <path d="M0,200 C720,200 720,0 1440,0 L1440,200 Z" className="fill-[#750af5] dark:fill-[#4c0a99]" />
            </svg>
        </div>
    );
}
