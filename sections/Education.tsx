import Image from "next/image";
import ugaLogo from "../images/university-of-georgia-logo.png"

export default function Education() {
    return (
        <div className="flex w-full justify-center items-center px-[126px] py-[135px] bg-[#B2B2B2]">
            <div className="flex flex-col justify-center w-[843px] gap-[78px]">
                <p className="text-black text-center text-[48px] font-bold w-full">EDUCATION</p>
                <div className="flex flex-col w-full h-fit">
                    <Image src={ugaLogo} alt="uga logo" className="w-full h-fit" />
                    <div className="flex flex-col justify-between w-full h-[247px]">
                        <div className="flex flex-row justify-between w-full h-fit text-black">
                            <div className="flex flex-col text-black text-[24px]">
                                <p className="text-[32px] font-bold">University of Georgia</p>
                                <p className="text-[28px] italic ml-auto">Franklin College of Arts and Sciences</p>
                            </div>
                            <p className="text-[28px] italic font-light">GPA 3.64</p>
                        </div>
                        <div className="flex flex-row text-[28px] italic w-full text-black justify-between">
                            <p>Bachelor of Science - Computer Science</p>
                            <p className="font-light">Fall 2026</p>
                        </div>
                        <div className="flex flex-row text-[28px] italic w-full text-black justify-between">
                            <p>Master of Science - Computer Science</p>
                            <p className="font-light">Fall 2027</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}