export default function Navbar() {
    return (
        <div className="bg-[#522e8b] h-[58px] relative shrink-0 w-full top-0 z-50" data-name="Navbar">
            <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white w-[365px]">
                    <p className="leading-[normal] text-nowrap">Projects</p>
                    <p className="leading-[normal] text-nowrap">Experience</p>
                    <p className="leading-[normal] text-nowrap">Skills</p>
                    <p className="leading-[normal] text-nowrap">Education</p>
                    <p className="leading-[normal] text-nowrap">Contact</p>
                </div>
            </div>
        </div>
    );
}