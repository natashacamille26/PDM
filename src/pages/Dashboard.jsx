import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div className="dashboard-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>PDM</h2>

        <ul>
          <li>Dashboard</li>
          <li>Applications</li>
          <li>Projects</li>
          <li>Funds</li>
        </ul>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="dashboard-main">
        <div className="topbar">
          <h2>Dashboard</h2>

          <div className="user-info">
            <span>Welcome, User</span>
            <div className="avatar">U</div>
          </div>
        </div>

        <div className="stats">
          <div className="card">
            <h3>Available Funds</h3>
            <p>UGX 1,200,000</p>
          </div>

          <div className="card">
            <h3>Applications</h3>
            <p>3 Active</p>
          </div>

          <div className="card">
            <h3>Projects</h3>
            <p>2 Ongoing</p>
          </div>
        </div>

        <div className="activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>✔ Application submitted</li>
            <li>✔ Funds approved</li>
            <li>✔ Project started</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;