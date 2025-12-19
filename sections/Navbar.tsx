"use client";

export default function Navbar() {

    const handleClick = (section: string) => {
        const id = section.toLowerCase();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="flex justify-center items-center bg-[#522e8b] h-[58px] w-full px-6">
            <div className="flex justify-between w-[365px] text-[12px]">
                <button className="cursor-pointer" onClick={() => handleClick("Projects")}>Projects</button>
                <button className="cursor-pointer" onClick={() => handleClick("Experience")}>Experience</button>
                <button className="cursor-pointer" onClick={() => handleClick("Skills")}>Skills</button>
                <button className="cursor-pointer" onClick={() => handleClick("Education")}>Education</button>
                <button className="cursor-pointer" onClick={() => handleClick("Contact")}>Contact</button>
            </div>
        </div>
    );
}