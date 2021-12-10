import './App.css';
import Home from './pages/home';
import PreEvents from './pages/preEvents';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Workshops from './pages/workshops';
import Speakers from './pages/speakers';
function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("Clicked!");
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <div className="App">
      
        <Navbar isOpen={isOpen} toggle={toggle} />
       
          <Routes>
          <Route path="/" element={<Home/>} />

          </Routes>
          
          <ScrollToTop>
          <Routes>
          <Route path="/pre-event" element={<PreEvents/>} />
          
          <Route path="/workshops" element={<Workshops/>} />
          
          <Route path="/speakers" element={<Speakers/>} />
          
          
          </Routes>
          </ScrollToTop>
          
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
