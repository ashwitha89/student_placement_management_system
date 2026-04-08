import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      
      {/* ✅ Smaller subtitle instead of big heading */}
      <h2 style={{ color: "white", marginBottom: "30px" }}>
        Welcome to Placement Portal
      </h2>

      <Link to="/student/login">
        <button className="btn">Student Login</button>
      </Link>

      <br /><br />

      <Link to="/recruiter/login">
        <button className="btn">Recruiter Login</button>
      </Link>

      <br /><br />

      <Link to="/admin/login">
        <button className="btn">Admin Login</button>
      </Link>
    </div>
  );
}

export default Home;