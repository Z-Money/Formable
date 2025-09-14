import { Link } from "react-router";
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <ul className={styles.leftSection}>
                    <a href="#home"><li>Logo</li></a>
                </ul>
                <ul className={styles.middleSection}>
                    <a href="#home"><li>Home</li></a>
                    <a href="#features"><li>Features</li></a>
                    <a href="#contact"><li>Contact</li></a>
                </ul>
                <ul className={styles.rightSection}>
                    <Link to="/auth?login"><li>Login</li></Link>
                    <Link to="/auth?signup"><li className={styles.navBtn}>Get Started</li></Link>
                </ul>
            </ul>
        </nav>
    )
}