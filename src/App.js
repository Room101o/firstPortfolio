import './App.css';
// import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <NavBar/>
      {/* <Hero/> */}
      <Skills/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
