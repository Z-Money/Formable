import FeatureCard from "./FeatureCard"
import { BsFiletypeHtml } from "react-icons/bs"
import { FiInbox } from "react-icons/fi"
import { RxInput } from "react-icons/rx"

import styles from './FeaturesSection.module.css'

export default function FeaturesSection() {
    return (
        <section className={styles.featuresSection} id="features">
            <h2 className={styles.h2}>Build forms in your style</h2>
            <div className={styles.container}>
                <FeatureCard icon={<BsFiletypeHtml />} title="Simple HTML forms" description="Set your forms action to our API. No server required." />
                <FeatureCard icon={<FiInbox />} title="View your forms" description="View all responses to your forms via your inbox." />
                <FeatureCard icon={<RxInput />} title="Custom inputs" description="We accept all types of inputs, so you can submit any values, no problem." />
            </div>
        </section>
    )
}