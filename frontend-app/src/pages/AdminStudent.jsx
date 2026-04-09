import { useEffect, useState } from "react";
import axios from "axios";

function AdminStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("https://student-placement-management-system-2.onrender.com/api/auth")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Students</h2>

      {students.map((user) =>
        user.role === "student" && (
          <div key={user._id}>
            <p>{user.name} - {user.email}</p>
          </div>
        )
      )}
    </div>
  );
}

export default AdminStudents;