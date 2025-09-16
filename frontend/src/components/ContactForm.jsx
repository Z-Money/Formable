import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    problem: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your backend API call
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", problem: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="name">Name</label>
      <input
        className={styles.input}
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label className={styles.label} htmlFor="email">Email</label>
      <input
        className={styles.input}
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label className={styles.label} htmlFor="problem">Problem</label>
      <textarea
        className={styles.textarea}
        id="problem"
        name="problem"
        value={formData.problem}
        onChange={handleChange}
        required
      />

      <button className={styles.button} type="submit">Submit</button>
    </form>
  );
}
