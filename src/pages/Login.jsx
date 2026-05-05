import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <input type="text" placeholder="Email or Phone" />
      <input type="password" placeholder="Password" />

      <button
        className="cta-btn"
        onClick={() => {
          localStorage.setItem("auth", "true");
          navigate("/dashboard");
        }}
      >
        Login
      </button>

      <p>
        Don’t have an account?{" "}
        <span className="link" onClick={() => navigate("/signup")}>
          Sign up
        </span>
      </p>
    </div>
  );
}

export default Login;