import "./App.css";
import { c as _c } from "react/compiler-runtime";

function App() {
  return (
    <>
      <header className="hero">
        <nav>
          <h1>ParishFund</h1>
          <button>Apply</button>
        </nav>

        <div className="hero-content">
          <h2>Empowering Parish Communities</h2>
          <p>
            Helping individuals access funding, receive guidance, and grow
            sustainable livelihoods.
          </p>
          <button>Get Started</button>
        </div>
      </header>

      <section className="features">
        <h2>How It Works</h2>
        <div className="grid">
          <div className="card">Apply</div>
          <div className="card">Assessment</div>
          <div className="card">Funding</div>
          <div className="card">Guidance</div>
        </div>
      </section>

      <section className="cta">
        <h2>Start Your Application</h2>
        <button>Apply Now</button>
      </section>
    </>
  );
}

export default App;