import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    if (!storedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (
      email !== storedUser.email ||
      password !== storedUser.password
    ) {
      setError("Invalid email or password");
      return;
    }

    localStorage.setItem("auth", "true");
    localStorage.setItem("currentUser", JSON.stringify(storedUser));
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      {error && <p className="error">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="cta-btn" onClick={handleLogin}>
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