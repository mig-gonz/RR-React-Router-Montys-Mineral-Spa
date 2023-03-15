import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Crystals from "./components/Crystals";

function App() {
  const packages = [
    "Activate your Crystals",
    "Monkey Meditation",
    "Soak in the Hotsprings",
    "Hypnotherapy",
    "Mineral Bath",
  ];

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>
          <div className="navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/packages">Our Packages</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/packages/*"
            element={<Packages packages={packages} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/crystals" element={<Crystals />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
