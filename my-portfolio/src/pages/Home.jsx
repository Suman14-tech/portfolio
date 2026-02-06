import React from "react";
import Button from "../components/Button.jsx";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-text">
        <h1>Hi, I’m Suman</h1>
        <p>React Developer | MCA Student</p>
        <Button text="View Projects" href="#projects" />
      </div>
    </section>
  );
}

export default Home;
