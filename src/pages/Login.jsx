import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <input type="text" placeholder="Email or Phone" />
      <input type="password" placeholder="Password" />

      <button className="cta-btn">Login</button>

      <p>
        Don’t have an account?{" "}
        <span onClick={() => navigate("/signup")} className="link">
          Sign up
        </span>
      </p>
    </div>
  );
}

export default Login;