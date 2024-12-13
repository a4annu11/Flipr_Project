import React, { useState } from "react";
import axios from "axios";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/subscriptions/subscribe", { email });
      setMessage("Subscribed successfully!");
      setEmail("");
    } catch (err) {
      setMessage("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-heading">Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">
            {loading ? "loading..." : "Subscribe"}
          </button>
          {message && <p className="newsletter-message">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
