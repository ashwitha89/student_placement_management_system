import { useNavigate } from "react-router-dom"

function Options() {
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Select Your Role</h2>

      <br />

      <button onClick={() => navigate("/student/login")}>
        Student
      </button>

      <br /><br />

      <button onClick={() => navigate("/recruiter/login")}>
        Recruiter
      </button>

      <br /><br />

      <button onClick={() => navigate("/admin/login")}>
        Admin
      </button>
    </div>
  )
}

export default Options