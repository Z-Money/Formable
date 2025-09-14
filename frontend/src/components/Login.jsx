import { useState } from "react"
import Signup from "./Signup"
import ForgotPassword from './ForgotPassword'
import styles from '../pages/AuthPage.module.css'

export default function Login({ setCurrentContent }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Create an Account");
        setErrorText('');
    };

    const handleForgotPassword = () => {
        setCurrentContent(<ForgotPassword setCurrentContent={setCurrentContent} />);
    };

    const handleSignup = () => {
        setCurrentContent(<Signup setCurrentContent={setCurrentContent} />);
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Login</h1>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <span onClick={handleForgotPassword} className={styles.forgotPassword}>Forgot Password?</span>
                <button type="submit" className={styles.submitBtn}>Login</button>
                <p className={styles.errorText}>{errorText}</p>
                <span className={styles.signupText}>Don't have an account?&nbsp;<span onClick={handleSignup} className={styles.signup}>Sign Up</span>
                </span>
            </form>
        </>
    )
}