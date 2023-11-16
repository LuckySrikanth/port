// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Experiences from "./components/Experiences/experiences";
// import Project from "./components/Projects/project";
import Details from "./components/Projects/projectDetails";
import ContactForm from "./components/ContactForm/contactForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Experiences />
      <Details/>
      <ContactForm />
    </div>
  );
}

export default App;
