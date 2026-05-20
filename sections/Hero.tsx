export default function Hero() {
    return (
        <div id="hero" className="content-stretch flex h-[calc(100vh-58px)] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-full" data-name="Hero">
            <div className="flex flex-row items-center gap-[60px] p-[10px] relative shrink-0" data-name="HeroContent">
                <div className="flex flex-col items-start font-['Inter:Semi_Bold',sans-serif] font-semibold text-9xl leading-[0.95]">
                    <p>Baines</p>
                    <p>Blanton</p>
                </div>
                <nav className="flex flex-col min-w-[340px] border-t border-[#750af5]/40">
                    {[
                        { label: "ABOUT", href: "#about" },
                        { label: "WORK", href: "#work" },
                        { label: "PROJECTS", href: "#projects" },
                        { label: "CONTACT", href: "#footer" },
                    ].map(({ label, href }, i) => (
                        <a
                            key={label}
                            href={href}
                            className="group flex items-center gap-[24px] py-[20px] border-b border-[#750af5]/40 transition-colors duration-200 hover:text-[#750af5]"
                        >
                            <span className="font-mono text-[14px] opacity-50">{String(i + 1).padStart(2, "0")}</span>
                            <span className="flex-1 text-[26px] font-semibold tracking-wide">{label}</span>
                            <span className="text-[20px] transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                        </a>
                    ))}
                </nav>
            </div>
            <svg
                viewBox="0 0 1440 200"
                preserveAspectRatio="none"
                className="absolute bottom-0 left-0 w-full h-[220px] block pointer-events-none"
                aria-hidden
            >
                <path d="M0,200 C720,200 720,0 1440,0 L1440,200 Z" fill="#750af5" />
            </svg>
        </div>
    );
}
