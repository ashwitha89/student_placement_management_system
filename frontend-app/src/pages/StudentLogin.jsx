import { useNavigate, Link } from "react-router-dom";

function StudentLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successful");
    navigate("/student/dashboard");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Login</h1>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        <button type="submit">Login</button>
      </form>

      <br />
      <Link to="/student/register">New user? Register</Link>
    </div>
  );
}

export default StudentLogin;