import React, { useState } from "react";
import contactusformbg from '../assets/images/contactusformbg.png';


const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, email, phone, message, service } = formData;

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (!/^[0-9]{7,15}$/.test(phone)) {
      newErrors.phone = "Phone number must be 7 to 15 digits.";
    }

    if (!service) newErrors.service = "Please select a service.";
    if (!message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    alert("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      service: "",
    });

    setErrors({});
  };

  return (
    
    <div className="contact-container">
      <div className="contactform-title">
        <h2 className="heading">Let’s Get Your Journey Started</h2>
        <p className="subheading">
          Have questions or ready to begin your visa or travel process? Get in
          touch with our expert team today.
        </p>
      </div>
      <div className="contacblock-detail">
        <div className="form-section">
          <form onSubmit={handleSubmit} noValidate>
          <div>
              <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
                 {errors.name && <span className="error">{errors.name}</span>}
          </div>
       
<div>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="row">
              <div>
                <label htmlFor="service">Select Service</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select Service</option>
                  <option value="visa">Visa Consultation</option>
                  <option value="travel">Travel Booking</option>
                  <option value="immigration">Immigration Help</option>
                </select>
                {errors.service && (
                  <span className="error">{errors.service}</span>
                )}
              </div>

              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
            </div>
<div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Message..."
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="map-section">
        <iframe
  src="https://maps.google.com/maps?q=C-804,%20Titanium%20City%20Center%20Business%20Park,%20100%20Feet%20Rd,%20Satellite,%20Ahmedabad,%20Gujarat%20380015&z=14&output=embed"
  title="Ahmedabad Location"
  loading="lazy"
  width="100%"
  height="350"
  style={{ border: 0, borderRadius: "20px" }}
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
