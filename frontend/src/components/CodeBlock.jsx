import hljs from 'highlight.js';
import 'highlight.js/styles/base16/classic-dark.css';
import styles from "./CodeBlock.module.css";
import { IoClipboardOutline } from "react-icons/io5";
import { useEffect } from "react";

export default function CodeBlock({ code, language }) {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return (
        <pre className={styles.pre}>
            <code className={`language-${language} ${styles.code}`}>{code}</code>
            <IoClipboardOutline className={styles.clipboardIcon} onClick={() => navigator.clipboard.writeText(code)} />
        </pre>
    )
}