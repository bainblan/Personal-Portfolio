import Image from "next/image";
import linkedin from "../images/linkedinicon.png";
import github from "../images/githublogo.png";
import Link from "next/link";

export default function Footer() {
    return (
        <div id="footer" className="flex w-full justify-between items-center h-[58px] px-6 bg-[#522e8b] text-[12px]">
            <p>Copyright © 2025 Baines Blanton</p>
            <div className="flex w-[70px] justify-between items-center">
                <Link href="https://github.com/bainblan" target="_blank">
                    <Image src={github} alt="GitHub Logo" className="w-[20px] h-[20px] cursor-pointer" />
                </Link>
                <Link href="https://www.linkedin.com/in/baines-blanton-34514a331/" target="_blank">
                    <Image src={linkedin} alt="LinkedIn Logo" className="w-[20px] h-[20px] cursor-pointer" />
                </Link>
            </div>
        </div>
    );
}