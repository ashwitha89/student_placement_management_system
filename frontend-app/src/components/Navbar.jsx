import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "#0a1931",
      color: "white"
    }}>
      {/* Logo / Title */}
      <h2>🎓 Student Placement Management System</h2>

      {/* Only Home */}
      <Link to="/" style={linkStyle}>
        <FaHome /> Home
      </Link>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px"
};

export default Navbar;