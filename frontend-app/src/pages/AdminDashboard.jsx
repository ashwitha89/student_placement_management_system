import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Admin Dashboard</h1>
      <h3>Manage System</h3>

      <br />

      <button onClick={() => navigate("/admin/students")}>
        View Students
      </button>

      <br /><br />

      <button onClick={() => navigate("/admin/recruiters")}>
        View Recruiters
      </button>

      <br /><br />

      <button onClick={() => navigate("/admin/jobs")}>
        View Jobs
      </button>

      <br /><br />

      <button onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;