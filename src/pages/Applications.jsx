import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Applications() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [applications, setApplications] = useState([]);
  const [form, setForm] = useState({
    amount: "",
    purpose: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!storedUser) {
      navigate("/login");
      return;
    }

    setCurrentUser(storedUser);

    const allApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const userApplications = allApplications.filter(
      (app) => app.userEmail === storedUser.email
    );

    setApplications(userApplications);
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentUser) return;

    if (!form.amount || !form.purpose) {
      alert("Please fill all fields");
      return;
    }

    const newApplication = {
      id: Date.now(),
      applicantName: currentUser.name,
      userEmail: currentUser.email,
      amount: form.amount,
      purpose: form.purpose,
      status: "Pending",
    };

    const allApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const updatedApplications = [...allApplications, newApplication];

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );

    const userApplications = updatedApplications.filter(
      (app) => app.userEmail === currentUser.email
    );

    setApplications(userApplications);

    setForm({
      amount: "",
      purpose: "",
    });
  };

  if (!currentUser) return null;

  return (

    
    <div className="applications-page">
      <h2>Funding Applications</h2>

      

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount Needed"
          value={form.amount}
          onChange={(e) =>
            setForm({
              ...form,
              amount: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Purpose of funding"
          value={form.purpose}
          onChange={(e) =>
            setForm({
              ...form,
              purpose: e.target.value,
            })
          }
        />

        <button type="submit" className="cta-btn">
          Submit Application
        </button>
      </form>

      <div className="applications-list">
        <h3>Your Applications</h3>

        {applications.length === 0 ? (
          <p>No applications yet.</p>
        ) : (
          applications.map((app) => (
            <div className="card" key={app.id}>
              <p><strong>Name:</strong> {app.applicantName}</p>
              <p><strong>Amount:</strong> UGX {app.amount}</p>
              <p><strong>Purpose:</strong> {app.purpose}</p>
              <p><strong>Status:</strong> {app.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Applications;