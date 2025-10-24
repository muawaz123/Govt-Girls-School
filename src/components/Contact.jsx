import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
 

const Contact = () => {
  const formRef = useRef();
  const [showToast, setShowToast] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    formRef.current?.reset();
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <section id="contact" className="py-5" style={{ color: "var(--light-color)" }}>
      <div className="container">
        <h2 className="text-maroon fw-bold mb-5 text-center">Contact Us</h2>
        <p className="mb-5 text-center text-muted">
          Reach out for any queries, feedback, or enrollment information.
        </p>

        <div className="row g-4 align-items-stretch">
          {/* Contact Info Cards */}
          <div className="col-lg-5">
            <div className="h-100 d-flex flex-column justify-content-between">
              
              {/* Email Card */}
              <div className="card text-dark border-maroon h-100 shadow-sm mb-4">
                <div className="card-body text-center" style={{ backgroundColor: "var(--light-color)" }}>
                  <div className="mb-2" style={{ fontSize: 28, color: "var(--primary-color)" }}>
                    <FaEnvelope />
                  </div>
                  <h5 className="card-title fw-semibold">Email</h5>
                  <p className="card-text">info.official@gsg.edu.pk</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="card bg-light text-dark border-maroon h-100 shadow-sm mb-4">
                <div className="card-body text-center" style={{ backgroundColor: "var(--light-color)" }}>
                  <div className="mb-2" style={{ fontSize: 28, color: "var(--primary-color)" }}>
                    <FaPhoneAlt />
                  </div>
                  <h5 className="card-title fw-semibold">Phone</h5>
                  <p className="card-text">+92 300 8045345</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="card bg-light text-dark border-maroon h-100 shadow-sm">
                <div className="card-body text-center" style={{ backgroundColor: "var(--light-color)" }}>
                  <div className="mb-2" style={{ fontSize: 28, color: "var(--primary-color)" }}>
                    <FaMapMarkerAlt />
                  </div>
                  <h5 className="card-title fw-semibold">Address</h5>
                  <p className="card-text">Fasil Town Street No # 2, Lahore, Pakistan</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card text-dark border-maroon h-100 shadow-sm p-4" style={{ backgroundColor: "var(--light-color)" }}>
              <h5 className="fw-bold text-maroon mb-4 text-center">Send Us a Message</h5>
              <form ref={formRef} id="contactForm" onSubmit={onSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control border-maroon focus-maroon rounded-3"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control border-maroon focus-maroon rounded-3"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3 mt-3">
                  <input
                    type="email"
                    className="form-control border-maroon focus-maroon rounded-3"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control border-maroon focus-maroon rounded-3"
                    rows="4"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-maroon px-4 fw-semibold">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast message */}
      {showToast && (
        <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 2000 }}>
          <div className="toast-success" role="alert">
            <p>Thank you for contacting us! We will get back to you soon.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
