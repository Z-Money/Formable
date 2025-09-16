import hljs from 'highlight.js';
import 'highlight.js/styles/base16/classic-dark.css';
import styles from "./codeBlock.module.css";
import { IoClipboardOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

export default function CodeBlock({ code, language }) {
    const codeRef = useRef(null);
    const [copied, setCopied] = useState(false);
    useEffect(() => {
        if (codeRef.current) {
            codeRef.current.textContent = code;
            delete codeRef.current.dataset.highlighted;
            hljs.highlightElement(codeRef.current);
        }
    }, [code, language]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    }

    return (
        <div className={styles.container}>
            <pre className={styles.pre}>
                <code ref={codeRef} className={`language-${language} ${styles.code}`} />
            </pre>
            {copied ? (
                <IoCheckmarkCircleOutline className={styles.clipboardIcon} onClick={handleCopy} />
            ) : (
                <IoClipboardOutline className={styles.clipboardIcon} onClick={handleCopy} />
            )}
        </div>
    )
}
