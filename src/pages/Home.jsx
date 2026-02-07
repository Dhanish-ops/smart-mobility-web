import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome 👋</h1>
      <p>Live traffic & parking updates in Solapur</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        marginTop: "30px"
      }}>
        
        <div className="card">🚦 Live Traffic</div>
        <div className="card">🅿️ Parking</div>
        <div className="card">🧭 Routes</div>
        <div className="card">🚨 Alerts</div>

        {/* NEW CARD */}
        <div
          className="card"
          onClick={() => navigate("/complaint")}
          style={{ cursor: "pointer" }}
        >
          📝 Report Issue
        </div>

      </div>
    </div>
  );
}

export default Home;
