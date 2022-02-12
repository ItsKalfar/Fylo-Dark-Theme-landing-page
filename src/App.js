import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import Teams from "./Components/Teams/Teams";
import Testimonials from "./Components/Testimonials/Teastimonial";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="emptyBackground"></div>
      <Features />
      <Teams />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
