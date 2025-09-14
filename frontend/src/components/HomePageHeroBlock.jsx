import { Link } from "react-router";
import CodeBlock from "./CodeBlock";
import styles from './HomePageHeroBlock.module.css';

export default function HomePageHeroBlock() {

    const htmlCode = `
<form action="formable.onrender.com/f/{form_id}" method="post">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" />
    <label for="email">Email</label>
    <input type="email" name="email" id="email" />
    <button type="submit">Submit</button>
</form>
    `.trim();

    return (
        <section className={styles.heroBlock} id="home">
            <h1 className={styles.h1}>The perfect solution to all your form needs</h1>
            <p className={styles.p}>Use your form. Submit to Formable's API. Get results.</p>
            <Link to="/auth?signup" className={styles.signupBtn}>Get Started</Link>
            <CodeBlock code={htmlCode} language="xml" />
            <p className={`${styles.p} ${styles.p2}`}>Formable adapts to your website's style and theme</p>
        </section>
    )
}