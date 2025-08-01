'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.feedback) {
      setError('Please fill in all fields.');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
    setFormData({ name: '', email: '', feedback: '' });

    // TODO: send feedback to backend or API
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '0 1rem' }}>
      <h1>Contact Me</h1>

      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
        <h2>About Me</h2>
        <p><strong>Name:</strong> Nidhi SK</p>
        <p><strong>Email:</strong> <a href="nidhisk196@gmail.com" style={{ color: '3730a3' }}>nidhisk196@gmail.com</a></p>
        <p>
          <strong>GitHub:</strong> <a href="https://github.com/Nid-build01it" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>github.com/Nid-build01it</a>
        </p>
        <p>
          <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/nidhi-sk" target="_blank" rel="noopener noreferrer" style={{ color: '#4f46e5' }}>linkedin.com/in/nidhi-sk</a>
        </p>
      </section>

      <section>
        <p>I'd love to hear your feedback or questions! Please fill out the form below.</p>

        {submitted && <p style={{ color: 'green' }}>Thank you for your feedback! I'll get back to you soon.</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>
            Name:<br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
            />
          </label>

          <label>
            Email:<br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
            />
          </label>

          <label>
            Feedback:<br />
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message here..."
              style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
            />
          </label>

          <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
