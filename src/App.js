import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Admission from "./components/Admission";
import Faculty from "./components/Faculty";
import Subject from "./components/Subject";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Admission />
        <Faculty />
        <Subject />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
