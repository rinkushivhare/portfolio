import './App.css';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import FAQs from './sections/faqs/FAQs';
import Footer from './sections/footer/Footer';
import Contact from './sections/contact/Contact';
import Portfolio from './sections/portfolio/Portfolio'
import Services from './sections/services/Services';
import Testimonials from './sections/testimonials/Testimonials';
import FloatingNav from './sections/floating-nav/FloatingNav';

function App() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>  
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <FAQs/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  );
}

export default App;
