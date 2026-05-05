import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h2>Welcome</h2>
      <p>Select how you want to continue</p>

      <button className="cta-btn" onClick={() => navigate("/login")}>
        Login
      </button>

      <button className="cta-btn" onClick={() => navigate("/signup")}>
        Sign Up
      </button>
    </div>
  );
}

export default Auth;