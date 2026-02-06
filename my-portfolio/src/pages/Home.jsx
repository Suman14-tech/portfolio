import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">

        {/* AVATAR */}
        <div className="avatar">S</div>

        <h1>Hi, I'm <span>Suman</span></h1>
        <p>MCA Student | React | Python | Aspiring Software Engineer</p>

        <div className="btn-group">
          <a
            href="mailto:suman@gmail.com"
            className="btn primary"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN-ID"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </div>
  );
}

export default Home;
