import React from "react";
import math from "../assets/image/Math Teacher.jpg";
import english from "../assets/image/English Teacher.jpg";
import science from "../assets/image/Science Teacher.jpg";
 

const Faculty = () => {
  const teachers = [
    { img: math, name: "Ms. Ayesha Khan", subject: "Mathematics", desc: "Ms. Ayesha encourages curiosity and interactive learning, helping students excel in analytical thinking and problem-solving." },
    { img: english, name: "Mrs. Sana Ali", subject: "English", desc: "Mrs. Sana inspires students to communicate effectively, fostering confidence and a love for literature in every class." },
    { img: science, name: "Ms. Fatima Riaz", subject: "Science", desc: "Ms. Fatima makes science hands-on and engaging, encouraging students to explore, experiment, and think critically." }
  ];

  return (
    <section id="faculty" className="py-5" style={{ backgroundColor: "var(--light-color)" }}>
      <div className="container">
        <h2 className="text-maroon fw-bold mb-3 text-center">Our Dedicated Faculty</h2>
        <p className="text-muted mb-5 text-center">Meet our passionate teachers who inspire, guide, and nurture every student at Government School for Girls.</p>
        <div className="row g-4">
          {teachers.map((t, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div className="card border-maroon h-100 shadow-sm">
                <img src={t.img} className="card-img-top" alt={t.name} style={{ height: 260, objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title text-maroon fw-bold">{t.name}</h5>
                  <p className="card-subtitle mb-2 text-muted fst-italic">{t.subject}</p>
                  <p className="card-text">{t.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
