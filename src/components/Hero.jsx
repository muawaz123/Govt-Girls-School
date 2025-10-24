import React, { useEffect, useState } from "react";
import img1 from "../assets/image/image8.jpg";
import img2 from "../assets/image/image2.jpg";
import img3 from "../assets/image/image3.jpg";
import img4 from "../assets/image/image4.jpg";
import img5 from "../assets/image/image5.jpg";
 

const slides = [
  {
    image: img1,
    title: "Welcome to Government School for Girls",
    text: "Empowering the next generation with education and excellence.",
    btnText: "Apply Now",
    btnHref: "admission"
  },
  {
    image: img2,
    title: "Quality Education",
    text: "Nurturing confidence, discipline, and lifelong learning for every girl.",
    btnText: "Meet Our Teachers",
    btnHref: "faculty"
  },
  {
    image: img3,
    title: "Quality Education",
    text: "Nurturing confidence, discipline, and lifelong learning for every girl.",
    btnText: "Meet Our Teachers",
    btnHref: "faculty"
  },
  {
    image: img4,
    title: "Bright Future Begins Here",
    text: "Empowering the next generation with education and excellence.",
    btnText: "Apply Now",
    btnHref: "admission"
  },
  {
    image: img5,
    title: "Bright Future Begins Here",
    text: "Join a community that inspires growth, creativity, and confidence.",
    btnText: "Contact Us",
    btnHref: "contact"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  const goTo = (n) => setCurrent((n + slides.length) % slides.length);

  return (
    <section id="home" className="py-0">
      <div className="carousel slide position-relative">
        {slides.map((s, i) => (
          <div key={i} className={`carousel-item position-relative ${i === current ? "active" : ""}`} style={{ display: i === current ? "block" : "none" }}>
            <img src={s.image} className="d-block w-100" alt={s.title} style={{ height: "85vh", objectFit: "cover", objectPosition: "center" }} />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-center text-white">
              <div className="bg-maroon-overlay rounded p-3 p-md-4" style={{ maxWidth: 800 }}>
                <h2 className="fw-bold fs-3 fs-md-2">{s.title}</h2>
                <p className="lead mb-3">{s.text}</p>
                <a href={`#${s.btnHref}`} className="btn btn-light fw-semibold mt-2 px-4 text-maroon" onClick={(e)=>{ e.preventDefault(); document.getElementById(s.btnHref)?.scrollIntoView({behavior:"smooth"}) }}>{s.btnText}</a>
              </div>
            </div>
          </div>
        ))}

        {/* controls */}
        <button onClick={() => goTo(current - 1)} aria-label="prev" style={{ position: "absolute", left: 60, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.4)", color: "#fff", border: 0, padding: 8, borderRadius: 6 }}>
          ‹
        </button>
        <button onClick={() => goTo(current + 1)} aria-label="next" style={{ position: "absolute", right: 60, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.4)", color: "#fff", border: 0, padding: 8, borderRadius: 6 }}>
          ›
        </button>

        {/* indicators */}
        <div className="carousel-indicators" style={{ display: "flex", justifyContent: "left", gap: 5, marginTop: 16 }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ width: 12, height: 12, borderRadius: 12, border: "none", background: i === current ? "var(--primary-color)" : "#ccc" }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;