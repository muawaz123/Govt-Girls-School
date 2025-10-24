import React from "react";
 
const Subject = () => {
  const cards = [
    { title: "Mathematics", desc: "Develop problem-solving skills, analytical thinking, and a strong foundation in numbers and logic." },
    { title: "Science", desc: "Explore the world of physics, chemistry, and biology with hands-on experiments and inquiry-based learning." },
    { title: "English", desc: "Enhance reading, writing, and communication skills while fostering creativity and critical thinking." },
    { title: "Social Studies", desc: "Learn about history, geography, and civic responsibilities to become informed and responsible citizens." },
    { title: "Computer Science", desc: "Introduction to coding, digital literacy, and technology skills essential for the modern world." },
    { title: "Arts & Crafts", desc: "Encouraging creativity and self-expression through drawing, painting, and various craft activities." }
  ];

  return (
    <section id="subject" className="py-5" style={{ backgroundColor: "var(--light-color)" }}>
      <div className="container">
        <h2 className="text-maroon fw-bold mb-4 text-center">Our Subject Offered</h2>
        <p className="mb-5 text-center">Our school provides a comprehensive curriculum designed to nurture knowledge, creativity, and critical thinking in every student.</p>

        <div className="row g-4">
          {cards.map((c, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div className="card h-100 border-maroon shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-maroon fw-semibold">{c.title}</h5>
                  <hr style={{ color: "var(--primary-color)" }} />
                  <p className="card-text">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subject;
