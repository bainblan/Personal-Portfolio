export default function Skill({ name }: { name: string }) {
    return (
        <div className="flex flex-row text-[32px] rounded-[52px] w-fit h-fit px-[28px] py-[28px] bg-[#333c66] items-center">
            {name}
        </div>
    );
}