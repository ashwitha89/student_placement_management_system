import { useNavigate } from "react-router-dom";

function RecruiterDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Recruiter Dashboard</h1>

      <button onClick={() => navigate("/post-job")}>Post Job</button>
      <button onClick={() => navigate("/view-applications")}>View Applications</button>
    </div>
  );
}

export default RecruiterDashboard;