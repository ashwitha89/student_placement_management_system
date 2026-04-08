import { useNavigate } from "react-router-dom";

function AdminRegister() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Admin Registered Successfully");
    navigate("/admin/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Admin Register</h1>

      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Admin Name" required /><br /><br />
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default AdminRegister;