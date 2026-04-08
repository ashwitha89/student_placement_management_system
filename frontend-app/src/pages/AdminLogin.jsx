import { useNavigate, Link } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Admin Login Success");
    navigate("/admin/dashboard");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Admin Login</h1>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />

        <button type="submit">Login</button>
      </form>

      <br />
      <Link to="/admin/register">New Admin? Register</Link>
    </div>
  );
}

export default AdminLogin;