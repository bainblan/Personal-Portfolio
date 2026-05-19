import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <div id="footer" className="flex w-full justify-between items-center h-[58px] px-6 bg-[#D4AF37] text-white text-[12px]">
            <p>Copyright © 2025 Baines Blanton</p>
            <div className="flex w-[70px] justify-between items-center text-white">
                <Link href="https://github.com/bainblan" target="_blank" aria-label="GitHub">
                    <Github className="w-[20px] h-[20px] cursor-pointer" />
                </Link>
                <Link href="https://www.linkedin.com/in/baines-blanton-34514a331/" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="w-[20px] h-[20px] cursor-pointer" />
                </Link>
            </div>
        </div>
    );
}
