import FeatureCard from "./FeatureCard";
import { BsFiletypeHtml } from "react-icons/bs";

import styles from './FeaturesSection.module.css'

export default function FeaturesSection() {
    return (
        <section className={styles.featuresSection} id="features">
            <h2 className={styles.h2}>Build forms in your style</h2>
            <div className={styles.container}>
                <FeatureCard icon={<BsFiletypeHtml />} title="Simple HTML forms" description="Set your forms action to our API. No server required" />
                <FeatureCard icon={<BsFiletypeHtml />} title="Placeholder" description="Build forms..." />
                <FeatureCard icon={<BsFiletypeHtml />} title="Placeholder" description="Build forms..." />
            </div>
        </section>
    )
}