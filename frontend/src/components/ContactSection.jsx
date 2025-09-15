import ContactForm from './ContactForm'
import styles from './ContactSection.module.css'

export default function ContactSection() {
    return (
        <section className={styles.contactSection} id="contact">
            <h1 className={styles.h1}>Contact Us</h1>
            <h2 className={styles.h2}>Have a problem with your forms or more questions? Contact us using the form below.</h2>
            <ContactForm />
        </section>
    )
}