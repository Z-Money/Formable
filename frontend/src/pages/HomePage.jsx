import Navbar from "../components/Navbar";
import HomePageHeroBlock from "../components/HomePageHeroBlock";
import FeaturesSection from "../components/FeaturesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <HomePageHeroBlock />
            <FeaturesSection />
            <ContactSection />
            <Footer />
        </div>
    )
}