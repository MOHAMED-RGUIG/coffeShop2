"use client"
import React, { useState } from 'react';
import styles from './page.module.css';

export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullname, email, message }),
    });
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
  };

  return (
    <div className="container col-12">
      <form onSubmit={handleSubmit} className={`col-12 col-md-12 ${styles.contactForm}`}>
        <h1 className={styles.title}>Contact</h1>
        <div className="mb-3 col-6 col-md-6">
          <label htmlFor="fullname" className="form-label  col-6 col-md-6">Full Name:</label>
          <input
            type="text"
            id="fullname"
            className="form-control  col-6 col-md-6"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            required
          />
        </div>

        <div className="mb-3  col-6 col-md-6">
          <label htmlFor="email" className="form-label  col-6 col-md-6">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control  col-6 col-md-6"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="mb-3 col-xs-6 col-6 col-md-6">
          <label htmlFor="message" className="form-label col-xs-6 col-6 col-md-6">Message:</label>
          <textarea
            id="message"
            className="form-control form-label col-xs-6 col-6 col-md-6"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>
        </div>

        <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>
          Send
        </button>
      </form>

      {error && (
        <div className={`alert ${success ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
