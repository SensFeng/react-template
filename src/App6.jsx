import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Home View</h2>
      <p>在react中使用React Router V6指南</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About View</h2>
      <p>在react中使用React Router V6指南</p>
    </div>
  );
};

export default App;
