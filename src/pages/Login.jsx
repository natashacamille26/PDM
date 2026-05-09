import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    if (!matchedUser) {
      setError("Invalid email or password");
      return;
    }

    /* LOGIN */
    localStorage.setItem("auth", "true");

    localStorage.setItem(
      "currentUser",
      JSON.stringify(matchedUser)
    );

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
        <span
          className="link"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </span>
      </p>
    </div>
  );
}

export default Login;