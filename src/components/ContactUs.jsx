import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for contacting us.");
  };

  return (
    <section className="contact-outer py-5">
      <div className="container">
        <h2 className="text-center w-100 mb-3 text-capitalize fw-normal">
          Contact Us
        </h2>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info bg-white p-4 rounded-3">
              <img
                src="src/assets/images/images/contact.png"
                alt="Get in Touch"
                className="w-100 rounded-3"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="col-md-6">
            <div className="contact-form bg-white p-4 rounded-3">
              <h4 className="fw-semibold">Send Us a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
