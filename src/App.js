import React from "react";
import '../src/components/style.css'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Mercury from "./components/Mercury";
import Venus from "./components/Venus";
import Earth from "./components/Earth";
import Mars from "./components/Mars";
import Jupiter from "./components/Jupiter";
import Saturn from "./components/Saturn";
import Neptune from "./components/Neptune";
import Uranus from "./components/Uranus";

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Mercury />} />
            <Route path="/mercury" element={<Mercury />} />
            <Route path="/venus" element={<Venus />} />
            <Route path="/earth" element={<Earth />} />
            <Route path="/mars" element={<Mars />} />
            <Route path="/jupiter" element={<Jupiter />} />
            <Route path="/saturn" element={<Saturn />} />
            <Route path="/uranus" element={<Uranus />} />
            <Route path="/neptune" element={<Neptune />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
