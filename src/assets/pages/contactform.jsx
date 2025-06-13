import React, { useState } from "react";
import emailjs from "emailjs-com";

// // EmailJS configuration
// const SERVICE_ID = "service_xzn5ptl";
// const TEMPLATE_ID = "template_hd3w9fk";
// const PUBLIC_KEY = "k3QGljmrRy7NTog3W";


const SERVICE_ID = "service_xzn5ptl";     // from EmailJS dashboard
const TEMPLATE_ID = "template_hd3w9fk";   // from EmailJS dashboard
const PUBLIC_KEY = "k3QGljmrRy7NTog3W";

function Contactform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Failed to send message. Please try again later.");
        setLoading(false);
      });
  };

  if (submitted) {
    return (
      <div className="p-6 text-center h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-green-600 mb-2">Thank You!</h2>
        <p className="text-lg">Your message has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <div className="contactus-form max-w-xl mx-auto p-6">
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="inputcommon-group">
          <label className="input-lable">Your Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input-field"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="inputcommon-group">
          <label className="input-lable">Your Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        {/* Subject & Phone */}
        <div className="input-twoblock flex flex-col md:flex-row gap-4">
          <div className="inputcommon-group flex-1">
            <label className="input-lable">Subject <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              className="input-field"
              value={formData.subject}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.subject && <p className="text-red-500">{errors.subject}</p>}
          </div>

          <div className="inputcommon-group flex-1">
            <label className="input-lable">Phone Number <span className="text-red-500">*</span></label>
            <input
              type="tel"
              name="phone"
              placeholder="Your Number"
              maxLength={10}
              className="input-field"
              value={formData.phone}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="inputcommon-group">
          <label className="input-lable">Message <span className="text-red-500">*</span></label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter Message..."
            className="input-textarea"
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="blue-button" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Contactform;
