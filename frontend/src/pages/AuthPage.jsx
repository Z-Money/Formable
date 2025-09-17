import { useEffect, useState } from "react"
import { useSearchParams } from "react-router"
import Login from "../components/Login"
import Signup from "../components/Signup"
import styles from "./AuthPage.module.css"

export default function AuthPage() {
    const [currentContent, setCurrentContent] = useState('');
    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.has("signup")) {
            setCurrentContent(<Signup setCurrentContent={setCurrentContent} />);
        } else {
            setCurrentContent(<Login setCurrentContent={setCurrentContent} />);
        }
    }, [searchParams]);

    return (
        <div className={styles.centerBox}>
            <div className={styles.container}>
                {currentContent}
            </div>
        </div>
    )
}