import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "16px" }}>
        <h3>Welcome 👋</h3>
        <p>Live traffic & parking updates in Solapur</p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "12px",
          marginTop: "20px"
        }}>
          <DashboardCard icon="🚦" title="Live Traffic" />
          <DashboardCard icon="🅿️" title="Parking" />
          <DashboardCard icon="🧭" title="Routes" />
          <DashboardCard icon="🚓" title="Alerts" />
        </div>
      </div>
    </>
  );
}

function DashboardCard({ icon, title }) {
  return (
    <div style={{
      background: "#f5f5f5",
      borderRadius: "14px",
      padding: "20px",
      textAlign: "center",
      fontSize: "16px",
      fontWeight: "500"
    }}>
      <div style={{ fontSize: "30px" }}>{icon}</div>
      <div>{title}</div>
    </div>
  );
}
