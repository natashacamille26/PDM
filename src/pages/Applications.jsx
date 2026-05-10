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
    const allApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const userApplications = allApplications.filter(
      (app) =>
        app.userEmail === currentUser.email
    );

    setApplications(userApplications);
  }, [currentUser.email]);

  /* SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.amount || !form.purpose) {
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

    /* GET ALL APPS */
    const allApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    /* ADD NEW */
    const updatedApplications = [
      ...allApplications,
      newApplication,
    ];

    /* SAVE */
    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );

    /* SHOW ONLY CURRENT USER APPS */
    const userApplications = updatedApplications.filter(
      (app) =>
        app.userEmail === currentUser.email
    );

    setApplications(userApplications);

    /* RESET FORM */
    setForm({
      amount: "",
      purpose: "",
    });
  };

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
          placeholder="Purpose"
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

      <div className="applications-list">
        <h3>Your Applications</h3>

        {applications.length === 0 ? (
          <p>No applications yet.</p>
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