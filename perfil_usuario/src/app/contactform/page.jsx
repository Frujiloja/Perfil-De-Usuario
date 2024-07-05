"use client"; 
import ScrollReveal from 'scrollreveal';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

const ContactForm = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "10px",
      duration: 2500,
      reset: true,
    });

    sr.reveal(".form", { delay: 300, origin: "top" });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    setSuccessMessage('¡Gracias! Tu mensaje ha sido enviado.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className={styles.fullScreenBackground}>
      <form id='form' className={`${styles.contactForm} form`} onSubmit={handleSubmit}>
        <h1>Contactame</h1>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            ></textarea>
        </div>
        <div className={styles.button}>
          <button type="submit" className={styles.submitButton}>Enviar</button>
        </div>
        <div className={styles.gracias}>
      {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
