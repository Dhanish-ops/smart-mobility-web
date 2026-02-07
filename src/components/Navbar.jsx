import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      padding: "12px",
      backgroundColor: "#1f2937",
      display: "flex",
      gap: "20px"
    }}>
      <Link to="/" style={{ color: "white" }}>Traffic</Link>
      <Link to="/parking" style={{ color: "white" }}>Parking</Link>
      <Link to="/routes" style={{ color: "white" }}>Routes</Link>
      <Link to="/complaint" style={{ color: "white" }}>
        Report Issue
      </Link>
    </nav>
  );
}

export default Navbar;
