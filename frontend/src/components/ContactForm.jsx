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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(import.meta.env.VITE_API_BASE_URL + '/api/forms/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (response.status != 200) {
      alert("Error submitting form!");
    } else {
      alert("Form submitted successfully!");
    }
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
