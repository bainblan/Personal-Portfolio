import Image from "next/image";
import cpi from "../images/CPI_simple_logo.png";
import ssrl from "../images/ssrl_logo.png";
import airForce from "../images/air_force_logo.png";

export default function Work() {
    return (
        <section id="work" className="flex flex-row items-center justify-center gap-[60px] w-full px-[126px] py-[120px]">
            <div className="flex flex-1 flex-col items-end gap-[30px] max-w-[600px]">
                <h2 className="font-bold text-right text-[96px] leading-[0.9]">PUTTING IN THE WORK</h2>
                <a
                    href="#experience"
                    className="rounded-full bg-[#D4AF37] text-white px-[36px] py-[14px] text-[18px] font-semibold cursor-pointer transition-opacity hover:opacity-90"
                >
                    SEE EXPERIENCE
                </a>
            </div>
            <div className="flex-1 max-w-[620px] flex flex-row gap-[24px] p-[32px] rounded-[24px] border-2 border-[#D4AF37]">
                <Image src={cpi} alt="Construction Partners Inc" className="w-full h-[120px] object-contain" />
                <Image src={ssrl} alt="SSRL" className="w-full h-[120px] object-contain" />
                <Image src={airForce} alt="Air Force" className="w-full h-[120px] object-contain" />
            </div>
        </section>
    );
}
