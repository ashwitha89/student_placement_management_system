import { useNavigate, Link } from "react-router-dom";

function RecruiterLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Recruiter Login Success");
    navigate("/recruiter/dashboard");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Recruiter Login</h1>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        <button type="submit">Login</button>
      </form>

      <br />
      <Link to="/recruiter/register">New Recruiter? Register</Link>
    </div>
  );
}

export default RecruiterLogin;