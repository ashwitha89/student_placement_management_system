import { useNavigate } from "react-router-dom";

function StudentRegister() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registered Successfully");
    navigate("/student/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Register</h1>

      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Name" required /><br /><br />
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default StudentRegister;