import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <h1>Parish Development Model</h1>
      <p>Empowering communities through accessible funding.</p>

      <button className="cta-btn" onClick={() => navigate("/login")}>
        Get Started
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;