import { Link } from "react-router";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                {/* Logo + Copyright */}
                <div className={styles.left}>
                    <div className={styles.logo}>YourLogo</div>
                    <p className={styles.copy}>
                        © {new Date().getFullYear()} Formable. All rights reserved.
                    </p>
                </div>

                {/* Navigation Links */}
                <nav className={styles.nav}>
                    <a href="https://github.com/yourusername/yourrepo" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#contact">Contact</a>
                    <Link to="/docs">Docs</Link>
                </nav>

            </div>
        </footer>
    );
}
