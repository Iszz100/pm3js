import React from 'react';
import './TestimonialQuote.css';

const TestimonialQuote = ({ name, testimonial, date }) => {
  return (
    <div className="testimonial-quote">
      <blockquote className="quote-text">
        "{testimonial}"
      </blockquote>
      <p className="quote-author">
        — {name}, <span className="quote-date">{date}</span>
      </p>
    </div>
  );
};

export default TestimonialQuote;