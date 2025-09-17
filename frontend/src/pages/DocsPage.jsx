import CodeBlock from "../components/CodeBlock";
import styles from "./DocsPage.module.css";

export default function DocsPage() {
    const codeSegments = [
        `<form action="https://formable.web.app/api/forms/<formId>/submit" method="POST">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <button type="submit">Send</button>
</form>`.trim(),
        `async function handleSubmit(e) {
  e.preventDefault();
  const formData = { name: "Alice", email: "alice@example.com" };

  await fetch("https://formable.web.app/api/forms/<formId>/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
}`.trim()
    ];

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <h1 className={styles.title}>Formable Docs</h1>
                <p className={styles.subtitle}>
                    Learn how to integrate Formable into your website in minutes.
                </p>
            </div>

            {/* Section: Getting Started */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>1. Create a Form</h2>
                <p>
                    Log in to your <strong>Formable Dashboard</strong> and create a new form.
                    Copy the <code>formId</code> that will be used in your website’s form action.
                </p>
            </section>

            {/* Section: HTML Form Integration */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>2. Add to Your Website</h2>
                <p>
                    In your HTML, set the form <code>action</code> to Formable’s endpoint with your form ID:
                </p>
                <CodeBlock code={codeSegments[0]} language="html" />
            </section>

            {/* Section: Viewing Responses */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>3. View Responses</h2>
                <p>
                    Log in to the dashboard and open your form to see collected responses.
                    Data is stored securely and only visible to you.
                </p>
            </section>

            {/* Section: Example with React */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Optional: React Integration</h2>
                <p>
                    You can also handle submissions directly in React using <code>fetch</code>:
                </p>
                <CodeBlock code={codeSegments[1]} language="js" />
            </section>
        </div>
    );
}