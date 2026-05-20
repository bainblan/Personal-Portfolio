export default function Hero() {
    return (
        <div id="hero" className="content-stretch flex h-[calc(100vh-58px)] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-full" data-name="Hero">
            <div className="flex flex-row items-center gap-[60px] p-[10px] relative shrink-0" data-name="HeroContent">
                <div className="flex flex-col items-start font-['Inter:Semi_Bold',sans-serif] font-semibold text-9xl leading-[0.95]">
                    <p>Baines</p>
                    <p>Blanton</p>
                </div>
                <div className="flex flex-col gap-[14px] p-[20px] rounded-[24px] border-2 border-[#D4AF37]">
                    {["ABOUT", "WORK", "PROJECTS", "CONTACT"].map((label) => (
                        <button
                            key={label}
                            className="rounded-full bg-[#D4AF37] text-white px-[28px] py-[10px] text-[16px] font-medium cursor-pointer transition-opacity hover:opacity-90"
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
            <svg
                viewBox="0 0 1440 200"
                preserveAspectRatio="none"
                className="absolute bottom-0 left-0 w-full h-[220px] block pointer-events-none"
                aria-hidden
            >
                <path d="M0,200 C720,200 720,0 1440,0 L1440,200 Z" fill="#D4AF37" />
            </svg>
        </div>
    );
}
