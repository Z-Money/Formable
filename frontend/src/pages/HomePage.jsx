import Navbar from "../components/Navbar";
import HomePageHeroBlock from "../components/HomePageHeroBlock";
import FeaturesSection from "../components/FeaturesSection";

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <HomePageHeroBlock />
            <FeaturesSection />
        </div>
    )
}