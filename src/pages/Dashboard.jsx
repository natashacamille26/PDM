import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const [applications, setApplications] = useState([]);

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

  /* LOGOUT */
  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("currentUser");

    navigate("/");
  };

  /* CALCULATIONS */
  const totalFundsRequested = applications.reduce(
    (total, app) => total + Number(app.amount),
    0
  );

  return (
    <div className="dashboard-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>PDM</h2>

        <ul>
          <li>Dashboard</li>

          <li
            onClick={() =>
              navigate("/applications")
            }
          >
            Applications
          </li>

          <li>Projects</li>
          <li>Funds</li>
        </ul>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="dashboard-main">
        {/* TOPBAR */}
        <div className="topbar">
          <h2>Dashboard</h2>

          <div className="user-info">
            <span>
              Welcome, {currentUser?.name}
            </span>

            <div className="avatar">
              {currentUser?.name
                ?.charAt(0)
                .toUpperCase()}
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="card">
            <h3>Total Requested</h3>

            <p>
              UGX {totalFundsRequested}
            </p>
          </div>

          <div className="card">
            <h3>Applications</h3>

            <p>
              {applications.length} Active
            </p>
          </div>

          <div className="card">
            <h3>Status</h3>

            <p>
              {applications.length > 0
                ? "Pending Review"
                : "No Applications"}
            </p>
          </div>
        </div>

        {/* ACTIVITY */}
        <div className="activity">
          <h2>Recent Activity</h2>

          {applications.length === 0 ? (
            <p>No recent activity</p>
          ) : (
            applications.map((app) => (
              <p key={app.id}>
                ✔ Requested UGX {app.amount}
              </p>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;