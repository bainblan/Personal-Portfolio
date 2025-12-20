import Image from "next/image";
import cpiLogo from "../images/cpilogo.png";

export default function Experience() {
    return (
        <div id="experience" className="flex w-full justify-center items-center px-4 sm:px-8 md:px-16 lg:px-[126px] py-12 sm:py-16 md:py-24 lg:py-[135px] bg-[#B2B2B2]">
            <div className="flex flex-col w-full max-w-[843px] gap-8 sm:gap-12 md:gap-[78px]">
                <p className="text-black text-center text-3xl sm:text-4xl md:text-[48px] font-bold w-full">EXPERIENCE</p>
                <div className="flex flex-col justify-between w-full gap-[25px]">
                    <Image src={cpiLogo} alt="CPI Logo" className="w-full"/>
                    <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-0 sm:justify-between">
                        <div className="flex flex-col gap-1 sm:gap-0 sm:justify-between">
                            <p className="text-black text-xl sm:text-2xl md:text-[24px] font-bold">Construction Partners Inc</p>
                            <p className="text-black text-base sm:text-lg md:text-[18px]">Information Technology Intern</p>
                        </div>
                        <div className="flex flex-col gap-1 sm:gap-0 sm:justify-between sm:text-right">
                            <p className="text-black text-xl sm:text-2xl md:text-[24px] italic">Valdosta, GA</p>
                            <p className="text-black text-base sm:text-lg md:text-[18px] italic">May 2025 - Aug 2025</p>
                        </div> 
                    </div>
                    <ul className="flex flex-col text-black list-disc pl-5 sm:pl-[20px] gap-2 text-sm sm:text-base">
                        <li>Resolved 250+ IT support tickets, took many calls, troubleshooted issues related to user accounts, software installations, and network access for CPI&apos;s 5,000+ employees</li>
                        <li>Increased the department&apos;s helpdesk efficiency by 14%</li>
                        <li>Utilized Microsoft Azure for cloud license management and enterprise IT infrastructure</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}