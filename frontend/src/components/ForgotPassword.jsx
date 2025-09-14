import { useState } from "react"
import Login from "./Login"
import styles from '../pages/AuthPage.module.css'

export default function ForgotPassword({ setCurrentContent }) {
    const [email, setEmail] = useState('');
    const [errorText, setErrorText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Forgot Password");
        setErrorText('');
    };

    const handleLogin = () => {
        setCurrentContent(<Login setCurrentContent={setCurrentContent} />);
    };

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Forgot Password</h1>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button type="submit" className={styles.submitBtn}>Send Email</button>
                <p className={styles.errorText}>{errorText}</p>
                <span className={styles.signupText}>Already have an account?&nbsp;<span onClick={handleLogin} className={styles.signup}>Login</span>
                </span>
            </form>
        </>
    )
}