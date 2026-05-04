import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="hero">
        <nav className="nav">
          <h1 className="logo">Parish Development Model</h1>
        </nav>

        <div className="hero-content">
          <h2>Empowering Communities Through Accessible Funding</h2>
          <p>
            A digital platform helping parishes access, manage, and grow
            development funds efficiently and transparently.
          </p>

          <button
  className="cta-btn"
  onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
>
  Get Started
</button>
        </div>
      </header>

      <section className="features">
        <div className="card">
          <h3>Access Funding</h3>
          <p>Apply for parish development funds easily.</p>
        </div>

        <div className="card">
          <h3>Track Progress</h3>
          <p>Monitor how funds are used in real-time.</p>
        </div>

        <div className="card">
          <h3>Community Growth</h3>
          <p>Support local initiatives and businesses.</p>
        </div>
      </section>
    </div>
  );
}

export default App;