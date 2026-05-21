import Image from "next/image";
import Link from "next/link";
import cpi from "../images/CPI_simple_logo.png";
import ssrl from "../images/ssrl_logo.png";
import airForce from "../images/silver_airforce.png";

export default function Work() {
    return (
        <>
            <section id="work" className="flex flex-row items-center justify-center gap-[60px] w-full px-[126px] py-[120px]">
                <div className="flex flex-1 flex-col items-end gap-[30px] max-w-[600px]">
                    <h2 className="font-bold text-right text-[96px] leading-[0.9]">PUTTING IN THE WORK</h2>
                    <Link
                        href="/experience"
                        className="rounded-full bg-[#750af5] dark:bg-[#4c0a99] text-white px-[36px] py-[14px] text-[18px] font-semibold cursor-pointer transition-colors duration-200 hover:bg-[#001F3F] dark:hover:bg-[#a06bff]"
                    >
                        SEE EXPERIENCE
                    </Link>
                </div>
                <div className="flex-1 max-w-[620px] flex flex-row gap-[24px] p-[32px] rounded-[24px] bg-[#750af5] dark:bg-[#4c0a99]">
                    <Image src={cpi} alt="Construction Partners Inc" className="w-full h-[120px] object-contain" />
                    <Image src={ssrl} alt="SSRL" className="w-full h-[120px] object-contain" />
                    <Image src={airForce} alt="Air Force" className="w-full h-[120px] object-contain" />
                </div>
            </section>
            <svg
                viewBox="0 0 1440 200"
                preserveAspectRatio="none"
                className="w-full h-[220px] block"
                aria-hidden
            >
                <path d="M0,200 C720,200 720,0 1440,0 L1440,200 Z" className="fill-[#750af5] dark:fill-[#4c0a99]" />
            </svg>
        </>
    );
}
