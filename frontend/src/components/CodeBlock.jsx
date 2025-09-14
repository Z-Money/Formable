import hljs from 'highlight.js';
import 'highlight.js/styles/base16/classic-dark.css';
import styles from "./CodeBlock.module.css";
import { IoClipboardOutline } from "react-icons/io5";
import { useEffect, useRef } from "react";

export default function CodeBlock({ code, language }) {
    const codeRef = useRef(null);
    useEffect(() => {
        if (codeRef.current) {
            codeRef.current.textContent = code;
            delete codeRef.current.dataset.highlighted;
            hljs.highlightElement(codeRef.current);
        }
    }, [code, language]);

    return (
        <div className={styles.container}>
            <pre className={styles.pre}>
                <code ref={codeRef} className={`language-${language} ${styles.code}`} />
            </pre>
            <IoClipboardOutline className={styles.clipboardIcon} onClick={() => navigator.clipboard.writeText(code)} />
        </div>
    )
}