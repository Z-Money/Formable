import styles from "./FeatureCard.module.css";

export default function FeatureCard({ icon, title, description }) {
    return (
        <div className={styles.featureCard}>
            {icon}
            <h3 className={styles.h3}>{title}</h3>
            <p className={styles.p}>{description}</p>
        </div>
    )
}