import { useState } from "react"
import Login from "./Login"
import styles from '../pages/AuthPage.module.css'

export default function Signup({ setCurrentContent }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        const data = await response.json();
        if (response.status != 201) {
            setErrorText(data.message);
        } else {
            setCurrentContent(<Login setCurrentContent={setCurrentContent} />);
        }
    };

    const handleLogin = () => {
        setCurrentContent(<Login setCurrentContent={setCurrentContent} />);
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Sign Up</h1>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className={styles.submitBtn}>Sign Up</button>
                <p className={styles.errorText}>{errorText}</p>
                <span className={styles.signupText}>Already have an account?&nbsp;<span onClick={handleLogin} className={styles.signup}>Login</span>
                </span>
            </form>
        </>
    )
}