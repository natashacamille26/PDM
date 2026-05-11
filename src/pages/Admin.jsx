import { useEffect, useState } from "react";

function Admin() {
  const [applications, setApplications] = useState([]);

  /* LOAD ALL APPLICATIONS */
  useEffect(() => {
    const storedApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    setApplications(storedApplications);
  }, []);

  /* UPDATE STATUS */
  const updateStatus = (id, status) => {
    const updatedApplications = applications.map((app) =>
      app.id === id
        ? { ...app, status }
        : app
    );

    setApplications(updatedApplications);

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );
  };

  return (
    <div className="admin-page">
      <h1>Admin Approval Dashboard</h1>

      {applications.length === 0 ? (
        <p>No applications submitted.</p>
      ) : (
        applications.map((app) => (
          <div className="card" key={app.id}>
            <p>
              <strong>Name:</strong>{" "}
              {app.applicantName}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {app.userEmail}
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

            <div className="admin-buttons">
              <button
                className="approve-btn"
                onClick={() =>
                  updateStatus(app.id, "Approved")
                }
              >
                Approve
              </button>

              <button
                className="reject-btn"
                onClick={() =>
                  updateStatus(app.id, "Rejected")
                }
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Admin;