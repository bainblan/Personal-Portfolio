import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Heights from "../sections/Heights";
import About from "../sections/About";
import Winner from "../sections/Winner";
import Footer from "../sections/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Heights />
            <About />
            <Winner />
            <Footer />
        </>
    );
}
