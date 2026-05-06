import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h2>Create Account</h2>

      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Phone Number" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button
        className="cta-btn"
        onClick={() => {
          localStorage.setItem("auth", "true");
          navigate("/dashboard");
        }}
      >
        Sign Up
      </button>

      <p>
        Already have an account?{" "}
        <span className="link" onClick={() => navigate("/login")}>
          Login
        </span>
      </p>
    </div>
  );
}

export default Signup;