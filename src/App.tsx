import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarHomepage from "./components/NavBarHomepage";
import HomePage from "./components/HomePage";

function App() {
  return (
      <Router>
          <NavBarHomepage />
          <Routes >
              <Route path="/" element={<HomePage />} />
              {/*<Route path="/resume" element={Resume} />*/}
              {/*<Route path="/pets" element={Pets} />*/}
              {/*<Route path="/projects" element={Projects} />*/}
              {/*<Route path="/" element={Home} />*/}
          </Routes >
      </Router>
  );
}

export default App;