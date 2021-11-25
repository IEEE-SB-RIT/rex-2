import './App.css';
import Home from './pages/home';
import PreEvents from './pages/preEvents';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
