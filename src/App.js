import './App.css';
import Home from './pages/home';
import PreEvents from './pages/preEvents';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
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
          <Route exact path="/" element={<Home />} />
          <Route path="/pre-event" element={<PreEvents />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
