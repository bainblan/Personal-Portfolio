import Skill from "../components/Skill";

export default function Skills() {
    return (
        <div id="skills" className="flex w-full justify-center items-center px-[126px] py-[135px] bg-[#B2B2B2]">
            <div className="flex flex-col w-[399px] gap-[78px]">
                <p className="text-black text-center text-[48px] font-bold w-full">SKILLS</p>
                <div className="flex flex-col gap-[10px] w-fit h-fit items-center mx-auto">     
                    <Skill name="Java" />
                    <Skill name="Python" />
                    <Skill name="C" />
                    <Skill name="HTML5" />
                    <Skill name="Tailwind" />
                    <Skill name="CSS" />
                    <Skill name="JavaScript" />
                    <Skill name="TypeScript" />
                    <Skill name="ReactJS" />
                    <Skill name="NodeJS" />
                    <Skill name="NextJS" />
                    <Skill name="MongoDB" />
                    <Skill name="Supabase" />
                    <Skill name="Postman" />
                    <Skill name="Figma" />
                </div>
            </div>
        </div>
    );
}