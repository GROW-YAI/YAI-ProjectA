import React, { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./styles/testimonials.css"; 
import test1 from '../../public/test1.jpg';
import test2 from '../../public/test2.jpg';
import test3 from '../../public/test3.jpg';

const Testimonials = forwardRef((props, ref) => {
    const testimonials = [
        {
            id: 1,
            name: "Mama Rosina",
            role: "Farmer, Western Region of Ghana",
            comment: "This product has completely transformed our workflow. Highly recommended!",
            image: test2, 
            rating: 5, 
        },
        {
            id: 2,
            name: "Laadi Tarati",
            role: "Maize, Sorghum, Millet and Rice farmer, Northern Region of Ghana",
            comment: "Excellent service and support. The team is always responsive and helpful.",
            image: test1, 
            rating: 4, 
        },
        {
            id: 3,
            name: "Joseph Ayidoni",
            role: "Farmer, Northern Region of Ghana",
            comment: "The quality of the product is outstanding. It exceeded our expectations.",
            image: test3, 
            rating: 4.5, 
        },
    ];

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating); 
        const hasHalfStar = rating % 1 !== 0; 

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} className="star full" />);
        }

        if (hasHalfStar) {
            stars.push(<FontAwesomeIcon key="half" icon={faStar} className="star half" />);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="star empty" />);
        }

        return stars;
    };

    return (
        <section ref={ref} id="testimonials" className="testimonials-section">
            <div className="testimonial-container">
                <h1 style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold", marginBottom: "40px" }}>
                    What Our Clients Say
                </h1>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-content">
                                <p className="testimonial-comment">"{testimonial.comment}"</p>

                                <div className="star-rating">
                                    {renderStars(testimonial.rating)}
                                </div>

                                <div className="testimonial-author">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="author-image"
                                    />
                                    <div className="author-details">
                                        <h4 className="author-name">{testimonial.name}</h4>
                                        <p className="author-role">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Testimonials;