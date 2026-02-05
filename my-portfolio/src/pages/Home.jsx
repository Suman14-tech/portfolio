import "./Home.css";

function Home() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="hero">
        <h1>Hi, I’m Suman</h1>
        <p>React Developer | MCA Student</p>
        <a href="#projects" className="btn">View Projects</a>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I am an MCA student passionate about building responsive and
          high-performance web applications using React.js and modern
          JavaScript.
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Skills</h2>
        <ul className="skills">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Python</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <h2>Projects</h2>
        <div className="projects">
          <div className="card">
            <h3>Personal Portfolio</h3>
            <p>Responsive portfolio built using React and Vite.</p>
          </div>

          <div className="card">
            <h3>Python Project</h3>
            <p>Basic automation and data processing using Python.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Contact</h2>
        <p>Email: your-email@gmail.com</p>
        <p>GitHub: github.com/Suman14-tech</p>
        <p>LinkedIn: linkedin.com/in/your-profile</p>
      </section>
    </div>
  );
}

export default Home;
