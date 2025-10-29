// File: src/components/Testimonials.jsx
import React, { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import test1 from '../../public/test1.jpg';
import test2 from '../../public/test2.jpg';
import test3 from '../../public/test3.jpg';
import './styles/testimonials.css';

const Testimonials = forwardRef((props, ref) => {
  const testimonials = [
    {
      id: 1,
      name: "Mama Rosina",
      role: "Smallholder Farmer — Tarkwa, Western Region",
      comment:
        "Ever since we started using the recommended seeds and advice, our harvests have been healthier and more reliable. The training and support made planting simpler and less stressful.",
      image: test2,
      rating: 5,
    },
    {
      id: 2,
      name: "Laadi Tarati",
      role: "Maize, Sorghum, Millet & Rice Farmer — Northern Region (12 acres)",
      comment:
        "The guidance and inputs fit our land and climate. When the rains were late this season, the techniques we learned helped the crops recover faster.",
      image: test1,
      rating: 4,
    },
    {
      id: 3,
      name: "Joseph Ayidoni",
      role: "Commercial Farmer — Northern Region (25+ acres)",
      comment:
        "The product quality and ongoing farm-support saved time and reduced losses. Operationally it has helped our team plan and sell more consistently.",
      image: test3,
      rating: 4.5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          className="star full"
          aria-hidden="true"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          key="half"
          icon={faStarHalfAlt}
          className="star half"
          aria-hidden="true"
        />
      );
    }

    const emptyCount = 5 - (fullStars + (hasHalfStar ? 1 : 0));
    for (let i = 0; i < emptyCount; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faStar}
          className="star empty"
          aria-hidden="true"
        />
      );
    }

    return (
      <div className="star-rating" aria-label={`Rating: ${rating} out of 5`}>
        {stars}
      </div>
    );
  };

  return (
    <section ref={ref} id="testimonials" className="testimonials-section">
      <div className="testimonial-container">
        <h2 className="testimonials-title">What farmers are saying</h2>

        <div className="testimonials-grid" role="list">
          {testimonials.map((t) => (
            <article key={t.id} className="testimonial-card" role="listitem">
              <figure className="testimonial-figure">
                <blockquote className="testimonial-comment">
                  “{t.comment}”
                </blockquote>

                {renderStars(t.rating)}

                <figcaption className="testimonial-author">
                  <img
                    src={t.image}
                    alt={`${t.name} — ${t.role}`}
                    className="author-image"
                    loading="lazy"
                    width="72"
                    height="72"
                  />
                  <div className="author-details">
                    <p className="author-name">{t.name}</p>
                    <p className="author-role">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Testimonials;
