import Image from "next/image";
import cpiLogo from "../images/cpilogo.png";

export default function Experience() {
    return (
        <div id="experience" className="flex w-full justify-center items-center px-[126px] py-[135px] bg-[#B2B2B2]">
            <div className="flex flex-col w-[843px] gap-[78px]">
                <p className="text-black text-center text-[48px] font-bold w-full">EXPERIENCE</p>
                <div className="flex flex-col justify-between w-full gap-[25px]">
                    <Image src={cpiLogo} alt="CPI Logo" className="w-full"/>
                    <div className="flex flex-row w-full h-[52px] justify-between">
                        <div className="flex flex-col h-full justify-between">
                            <p className="text-black text-[24px] font-bold">Construction Partners Inc</p>
                            <p className="text-black text-[18px]">Information Technology Intern</p>
                        </div>
                        <div className="flex flex-col h-full justify-between">
                            <p className="text-black text-[24px] text-right italic">Valdosta, GA</p>
                            <p className="text-black text-[18px] text-right italic">May 2025 - Aug 2025</p>
                        </div> 
                    </div>
                    <ul className="flex flex-col text-black list-disc pl-[20px]">
                        <li>Resolved 250+ IT support tickets, took many calls, troubleshooted issues related to user accounts, software installations, and network access for CPI’s 5,000+ employees</li>
                        <li>Increased the department’s helpdesk efficiency by 14%</li>
                        <li>Utilized Microsoft Azure for cloud license management and enterprise IT infrastructure</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}