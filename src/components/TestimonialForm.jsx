import React, { useState } from 'react';
import './TestimonialForm.css';

const TestimonialForm = ({ onAddTestimonial }) => {
  const [name, setName] = useState('');
  const [testimonial, setTestimonial] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !testimonial) return;
    onAddTestimonial({ name, testimonial, date: new Date().toLocaleDateString() });
    setName('');
    setTestimonial('');
  };

  return (
    <form className="testimonial-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Berikan Testimoni Anda</h2>
      <div className="form-group">
        <label htmlFor="name">Nama:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="testimonial">Testimoni:</label>
        <textarea
          id="testimonial"
          value={testimonial}
          onChange={(e) => setTestimonial(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="submit-button">Kirim</button>
    </form>
  );
};

export default TestimonialForm;