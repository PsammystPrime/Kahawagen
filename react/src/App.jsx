import { useState } from "react";
import "./App.css";

export function Navbar() {
  return (
    <header>
      <div className="logo">
        <img
          src="./public/logo.jpeg"
          alt="KahawaGen logo"
          className="logoImg"
        />
        <h1>KAHAWA-GEN</h1>
      </div>
      <nav>
        <button className="about">About</button>
        <button className="services">Services</button>
        <button className="location">Find Us</button>
      </nav>
    </header>
  );
}
function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
