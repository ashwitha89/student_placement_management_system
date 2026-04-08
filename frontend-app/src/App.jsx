import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Navbar
import Navbar from "./components/Navbar";

// Home
import Home from "./pages/Home";

// Student
import StudentLogin from "./pages/StudentLogin";
import StudentRegister from "./pages/StudentRegister";
import StudentDashboard from "./pages/StudentDashboard";
import Profile from "./pages/Profile";
import ApplyJob from "./pages/Apply";

// Recruiter
import RecruiterLogin from "./pages/RecruiterLogin";
import RecruiterRegister from "./pages/RecruiterRegister";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import PostJob from "./pages/PostJob";
import ViewApplications from "./pages/ViewApplications";

// Admin
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import AdminDashboard from "./pages/AdminDashboard";
import AdminStudents from "./pages/AdminStudent";
import AdminRecruiters from "./pages/AdminRecruiter";
import AdminJobs from "./pages/AdminJobs";

function App() {
  return (
    <Router>

      {/* ✅ NAVBAR ADDED */}
      <Navbar />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* STUDENT */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/apply/:id" element={<ApplyJob />} />

        {/* RECRUITER */}
        <Route path="/recruiter/login" element={<RecruiterLogin />} />
        <Route path="/recruiter/register" element={<RecruiterRegister />} />
        <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/view-applications" element={<ViewApplications />} />

        {/* ADMIN */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<AdminStudents />} />
        <Route path="/admin/recruiters" element={<AdminRecruiters />} />
        <Route path="/admin/jobs" element={<AdminJobs />} />

        {/* FALLBACK */}
        <Route path="*" element={<h1>Page Not Found</h1>} />

      </Routes>
    </Router>
  );
}

export default App;