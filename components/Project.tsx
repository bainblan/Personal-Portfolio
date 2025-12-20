import Image, { StaticImageData } from "next/image";

export default function Project({ name, descr, pic }: { name: string, descr: string, pic: StaticImageData }) {
    return (
        <div className="flex flex-row relative rounded-[52px] w-full px-[38px] py-[27px] bg-[#333c66] gap-[20px] items-center">
            <div className="w-[321px] h-[321px]">
                <Image
                    src={pic}
                    alt="Project Placeholder"
                    className="w-full h-full object-cover rounded-[12px]"
                    sizes="(max-width: 768px) 100vw, 321px"
                />
            </div>
            <div className="flex flex-col gap-[15px] self-stretch text-white w-[353px]">
                <p className="text-white font-bold text-[32px] w-full">{name}</p>
                <p className="w-full">{descr}</p>
            </div>
        </div>
    );
} 