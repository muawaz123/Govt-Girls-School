import React, { useRef, useState } from "react";
import darkLogo from "../assets/image/dark-logo.png";
 

const Admission = () => {
  const [showModal, setShowModal] = useState(false);
  const [showThank, setShowThank] = useState(false);
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setShowThank(true);
    setTimeout(() => setShowThank(false), 3000);
    formRef.current?.reset();
  };

  return (
    <section id="admission" className="py-5" style={{ backgroundColor: "#f8fafd" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 d-flex justify-content-center align-items-center">
            <img src={darkLogo} alt="GSG School" className="img-fluid rounded-3 border-0" style={{ maxWidth: 250 }} />
          </div>
          <div className="col-lg-6">
            <h2 className="text-maroon fw-bold">Join Government School for Girls</h2>
            <p className="lead">Empowering the next generation with education, confidence, and excellence. Apply now to be a part of our vibrant community.</p>
            <button className="btn btn-maroon px-4 fw-semibold" onClick={() => setShowModal(true)}>Apply Now</button>
          </div>
        </div>
      </div>

      {/* modal */}
      {showModal && (
        <div className="modal" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="modal-content" style={{ maxWidth: 900 }}>
            <div className="modal-header bg-maroon text-white" style={{ padding: "1rem" }}>
              <h5>Student Admission Form</h5>
              <button onClick={() => setShowModal(false)} style={{ background: "transparent", border: "none", color: "#fff", fontSize: 18 }}>✕</button>
            </div>
            <div className="modal-body" style={{ padding: "1rem" }}>
              <p className="mb-4">Please fill out the form below. All fields are required.</p>
              <form id="admissionForm" ref={formRef} onSubmit={onSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control border-maroon focus-maroon rounded-3" placeholder="Enter the Name" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Father Name</label>
                    <input type="text" className="form-control border-maroon focus-maroon rounded-3" placeholder="Enter Father Name" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Date of Birth</label>
                    <input type="date" className="form-control border-maroon focus-maroon rounded-3" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Contact Number</label>
                    <input type="tel" className="form-control border-maroon focus-maroon rounded-3" placeholder="03XX-XXXXXXX" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control border-maroon focus-maroon rounded-3" placeholder="email@gmail.com" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Grade Level Applying For</label>
                    <select className="form-select border-maroon focus-maroon rounded-3 select-maroon" required defaultValue="6">
                      <option value="" disabled>Select</option>
                      <option value="6">Grade 6</option>
                      <option value="7">Grade 7</option>
                      <option value="8">Grade 8</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Address</label>
                    <textarea className="form-control border-maroon focus-maroon rounded-3" rows="3" placeholder="Enter address" required></textarea>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-maroon px-5 fw-semibold">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* thank you */}
      {showThank && (
        <div className="modal" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="modal-content text-center" style={{ maxWidth: 500 }}>
            <div className="modal-header" style={{ backgroundColor: "var(--primary-color)", color: "#fff", padding: "1rem" }}>
              <h5>Application Received</h5>
            </div>
            <div className="modal-body" style={{ padding: "1rem" }}>
              <p>Thank you for applying! Please prepare for your admission test. You will receive further information via email.</p>
            </div>
            <div className="modal-footer" style={{ justifyContent: "center", padding: "1rem" }}>
              <button className="btn btn-maroon" onClick={() => { /* just close */ }}>Okay</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Admission;
