import { useEffect, useState } from "react"

function RecruiterApplications() {
  const [apps, setApps] = useState([])

  useEffect(() => {
    fetch("https://student-placement-management-system-2.onrender.com/api/jobs/applications")
      .then(res => res.json())
      .then(data => setApps(data))
  }, [])

  const accept = async (id) => {
    await fetch(`https://student-placement-management-system-2.onrender.com/api/jobs/accept/${id}`, {
      method: "POST"
    })
    alert("Accepted ✅")
  }

  return (
    <div>
      <h2>Applications</h2>

      {apps.map(a => (
        <div key={a.id}>
          <p>{a.name} - {a.status}</p>
          <button onClick={() => accept(a.id)}>Accept</button>
        </div>
      ))}
    </div>
  )
}

export default RecruiterApplications