import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import "./App.css";

const App = () => {


  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
