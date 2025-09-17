import { useState } from "react"
import { useNavigate } from "react-router"
import Signup from "./Signup"
import ForgotPassword from './ForgotPassword'
import styles from '../pages/AuthPage.module.css'

export default function Login({ setCurrentContent }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();
        if (response.status != 200) {
            setErrorText(data.message);
        } else {
            localStorage.setItem('id', data.id);
            navigate("/dashboard");
        }
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