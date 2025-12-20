import Project from "../components/Project";
import botannica from "../images/botannica2.png";
import greentabs from "../images/greentabs.png";

export default function Projects() {
    return (
        <div id="projects" className="flex w-full justify-center items-center px-[126px] py-[135px] bg-[#B2B2B2]">
            <div className="flex flex-col justify-center w-[843px] gap-[78px]">
                <p className="text-black text-center text-[48px] font-bold w-full">PROJECTS</p>
                <div className="flex flex-col gap-[58px] w-full h-fit">
                    <Project name="Botannica" descr="Served as Project Leader for a team developing Botannica, 
                    a website that finds trails and parks in your local area by calling Open Athens API, 
                    lets you log in with your own username and password, schedule group meetups, join already scheduled meetups, 
                    leave park reviews. We started with Figma to prototype the design. Developed using React for website structure, 
                    Node.js and Next.js for full-stack functionality, Typescript for authentication, and MongoDB for the database" pic={botannica} />
                    <Project name="GreenTabs" descr="Finds the energy you use from AI prompting (Figma design only). 
                    Gives you your energy usage from any day, week, month, or year. Calculates energy consumption projections based on global trends. 
                    Includes a Spotify Wrapped feature except it shows your energy usage for the year." pic={greentabs} />
                </div>
            </div>
        </div>
    )
}