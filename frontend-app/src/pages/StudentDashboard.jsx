import { useEffect, useState } from "react";
import axios from "axios";

function StudentDashboard() {
  const [applications, setApplications] = useState([]);

  // ✅ Get logged-in user email from localStorage
  const studentEmail = localStorage.getItem("email");

  // 🔁 Fetch applications
  const fetchApplications = () => {
    axios
      .get("http://localhost:5000/api/applications")
      .then((res) => setApplications(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchApplications();

    const interval = setInterval(fetchApplications, 3000);
    return () => clearInterval(interval);
  }, []);

  // ✅ If no email → show all (fallback)
  const filteredApps = studentEmail
    ? applications.filter((app) => app.email === studentEmail)
    : applications;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Student Dashboard</h1>

      <h2>Your Applications</h2>

      {filteredApps.length === 0 ? (
        <p>No applications yet</p>
      ) : (
        filteredApps.map((app) => (
          <div
            key={app._id}
            style={{
              border: "1px solid black",
              margin: "15px auto",
              padding: "15px",
              width: "300px",
              borderRadius: "10px",
            }}
          >
            <p><b>Name:</b> {app.name}</p>
            <p><b>Email:</b> {app.email}</p>
            <p><b>CGPA:</b> {app.cgpa}</p>
            <p><b>Year:</b> {app.year}</p>

            <p>
              <b>Status:</b>{" "}
              <span
                style={{
                  color:
                    app.status === "Accepted"
                      ? "green"
                      : app.status === "Rejected"
                      ? "red"
                      : "orange",
                  fontWeight: "bold",
                }}
              >
                {app.status}
              </span>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentDashboard;