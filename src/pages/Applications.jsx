import { useEffect, useState } from "react";

function Applications() {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const [applications, setApplications] = useState([]);

  const [form, setForm] = useState({
    amount: "",
    purpose: "",
  });

  /* LOAD USER APPLICATIONS */
  useEffect(() => {
    const storedApps =
      JSON.parse(localStorage.getItem("applications")) || [];

    const userApps = storedApps.filter(
      (app) => app.userEmail === currentUser.email
    );

    setApplications(userApps);
  }, []);

  /* SUBMIT APPLICATION */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.amount || !form.purpose) {
      return;
    }

    const newApplication = {
      id: Date.now(),
      userEmail: currentUser.email,
      applicantName: currentUser.name,
      amount: form.amount,
      purpose: form.purpose,
      status: "Pending",
    };

    const storedApps =
      JSON.parse(localStorage.getItem("applications")) || [];

    const updatedApps = [...storedApps, newApplication];

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApps)
    );

    setApplications([
      ...applications,
      newApplication,
    ]);

    setForm({
      amount: "",
      purpose: "",
    });
  };

  return (
    <div className="applications-page">
      <h2>Funding Applications</h2>

      {/* FORM */}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount Needed (UGX)"
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

        <button className="cta-btn">
          Submit Application
        </button>
      </form>

      {/* APPLICATION LIST */}
      <div className="applications-list">
        <h3>Your Applications</h3>

        {applications.length === 0 ? (
          <p>No applications submitted yet.</p>
        ) : (
          applications.map((app) => (
            <div className="card" key={app.id}>
              <p>
                <strong>Name:</strong>{" "}
                {app.applicantName}
              </p>

              <p>
                <strong>Amount:</strong> UGX{" "}
                {app.amount}
              </p>

              <p>
                <strong>Purpose:</strong>{" "}
                {app.purpose}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {app.status}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Applications;