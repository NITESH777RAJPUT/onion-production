import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import OurServices from "../components/OurServices";
import Services from "../components/Services";
import About from "../components/About";
import Process from "../components/Process";
import Team from "../components/Team";
import WhyChoose from "../components/WhyChoose";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />

      {/* OUR SERVICES */}
      <OurServices />

      {/* WHAT WE DO */}
      <Services />

      <About />
      <Process />
      <Team />
      <WhyChoose />
      <Portfolio />
      <Testimonials />
      <Brands />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;