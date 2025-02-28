import React, { useState } from "react";
import "./styles/contact.css"; // Create this CSS file for styling

const ContactForm = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // State to manage form errors
    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Validate form inputs
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Submit the form (you can replace this with an API call)
            console.log("Form submitted:", formData);
            alert("Thank you for contacting us! We'll get back to you soon.");
            setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        } else {
            console.log("Form has errors");
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold", marginBottom: "40px" }}>
                    Contact Us
                </h2>

                <form onSubmit={handleSubmit} className="contact-form">
                    {/* Name Field */}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    {/* Email Field */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    {/* Subject Field */}
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Enter the subject"
                        />
                        {errors.subject && <span className="error">{errors.subject}</span>}
                    </div>

                    {/* Message Field */}
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Enter your message"
                            rows="5"
                        />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <div className="form-group">
                        <button type="submit" className="submit-button">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;