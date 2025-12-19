import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
            <Experience />
            <Skills />
            <Education />
            <Contact />
            <Footer />
        </>
    );
}