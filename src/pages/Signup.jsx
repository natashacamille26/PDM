import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!form.name || !form.email || !form.password) {
      setError("Please fill all required fields");
      return;
    }

    /* GET EXISTING USERS */
    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    /* CHECK IF USER EXISTS */
    const userExists = existingUsers.find(
      (user) => user.email === form.email
    );

    if (userExists) {
      setError("Account already exists");
      return;
    }

    /* SAVE NEW USER */
    const updatedUsers = [...existingUsers, form];

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    /* LOGIN USER */
    localStorage.setItem("auth", "true");
    localStorage.setItem(
      "currentUser",
      JSON.stringify(form)
    );

    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>

      {error && <p className="error">{error}</p>}

      <input
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button className="cta-btn" onClick={handleSignup}>
        Sign Up
      </button>

      <p>
        Already have an account?{" "}
        <span
          className="link"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default Signup;