import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer" className="bg-[#750af5] dark:bg-[#4c0a99] text-white w-full px-[60px] py-[60px]">
            <p className="text-[12px] tracking-[0.2em] uppercase">Get in touch</p>
            <div className="flex flex-col items-start mt-[20px] gap-[12px]">
                <Link
                    href="https://www.linkedin.com/in/baines-blanton/"
                    target="_blank"
                    className="text-[80px] font-bold leading-none transition-colors duration-200 hover:text-[#001F3F] dark:hover:text-[#a06bff]"
                >
                    LinkedIn &rarr;
                </Link>
                <Link
                    href="https://github.com/bainblan"
                    target="_blank"
                    className="text-[80px] font-bold leading-none transition-colors duration-200 hover:text-[#001F3F] dark:hover:text-[#a06bff]"
                >
                    GitHub &rarr;
                </Link>
            </div>
            <div className="flex flex-wrap gap-x-[40px] gap-y-[8px] mt-[40px] text-[16px]">
                <a href="mailto:bainesblanton@gmail.com" className="transition-colors duration-200 hover:text-[#001F3F] dark:hover:text-[#a06bff]">bainesblanton@gmail.com</a>
                <a href="tel:+12298775950" className="transition-colors duration-200 hover:text-[#001F3F] dark:hover:text-[#a06bff]">(229) 877-5950</a>
            </div>
            <div className="flex justify-between items-center mt-[60px] text-[12px]">
                <span>LinkedIn</span>
                <span>© 2026 Baines Blanton</span>
            </div>
        </footer>
    );
}