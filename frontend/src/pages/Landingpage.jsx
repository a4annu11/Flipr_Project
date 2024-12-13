import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Hero0 from "../components/Hero-0/Hero0";
import WhyChooseUs from "../components/WhyChoose/WhyChooseUs";
import AboutUs from "../components/AboutUs/AboutUs";
import Clients from "../components/Clients/Clients";
import Projects from "../components/Projects/Projects";
import ContactForm from "../components/Contact/ContactForm";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import LearnMoreSection from "../components/LearnMoreSection";

const Landingpage = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <Hero0 />
      <Hero />
      <WhyChooseUs />
      <AboutUs />
      <Projects />
      <Clients />
      {/* <ContactForm /> */}
      <LearnMoreSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Landingpage;
