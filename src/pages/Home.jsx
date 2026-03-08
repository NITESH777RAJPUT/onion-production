import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Team from "../components/Team"; // Naya component import kiya
import WhyChoose from "../components/WhyChoose";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Process from "../components/Process";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Process />  {/* "The Secret Recipe" wala look */}
      <Team /> {/* Yahan Team section add kar diya hai */}
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