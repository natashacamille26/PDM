import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

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

  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const totalRequested = applications.reduce(
    (sum, app) => sum + Number(app.amount || 0),
    0
  );

  if (!currentUser) return null;

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h2>Parish Dvelopment Model</h2>

        <ul>
          <li>Dashboard</li>
          <li onClick={() => navigate("/applications")}>Applications</li>
        </ul>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </aside>

      <main className="dashboard-main">
        <div className="topbar">
          <h2>Dashboard</h2>

          <div className="user-info">
            <span>Welcome to your PDM, {currentUser.name}</span>
            <div className="avatar">
              {currentUser.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        <div className="stats">
          <div className="card">
            <h3>Total Requested</h3>
            <p>UGX {totalRequested}</p>
          </div>

          <div className="card">
            <h3>Applications</h3>
            <p>{applications.length}</p>
          </div>

          <div className="card">
            <h3>Status</h3>
            <p>
              {applications.length > 0
                ? applications[applications.length - 1].status
                : "No Applications"}
            </p>
          </div>
        </div>

        <div className="activity">
          <h2>Recent Activity</h2>

          {applications.length === 0 ? (
            <p>No recent activity</p>
          ) : (
            applications.map((app) => (
              <p key={app.id}>
                UGX {app.amount} — {app.status}
              </p>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;