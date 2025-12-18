import Image from "next/image"
import hookImg from "../images/hookwritingmeme.jpg"

export default function Projects() {
    return (
        <div className="flex w-full justify-center items-center px-[126px] py-[135px] bg-[#B2B2B2]">
            <div className="flex flex-col justify-center w-[843px] gap-[58px]">
                <p className="text-black text-center text-[48px] font-bold w-full">PROJECTS</p>
                <div className="flex flex-row relative rounded-[52px] w-full px-[68px] py-[37px] bg-[#333c66] gap-[20px] items-center">
                    <div className="w-[321px] h-[321px]">
                        <Image
                            src={hookImg}
                            alt="Project Placeholder"
                            className="w-full h-full object-cover rounded-[12px]"
                            sizes="(max-width: 768px) 100vw, 321px"
                        />
                    </div>
                    <div className="flex flex-col gap-[15px] self-stretch text-white w-[353px]">
                        <p className="text-white font-bold text-[32px] w-full">Project Name</p>
                        <p className="w-full">My project did bloopity blah blah all day all the time on the grind prime time 99 alex stein he da pimp on a blimp eating steak and shrimp</p>
                    </div>
                </div>
            </div>
        </div>
    )
}