import { useState } from "react";

function Complaint() {
  const [issue, setIssue] = useState("");
  const [photo, setPhoto] = useState(null);
  const [userLocation, setUserLocation] = useState("");

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation(
        `${position.coords.latitude}, ${position.coords.longitude}`
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const complaintData = {
      issue,
      photo,
      location: userLocation,
    };

    console.log("Complaint Submitted:", complaintData);
    alert("Complaint submitted successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Report an Issue</h2>

      <form onSubmit={handleSubmit}>
        <label>Issue Type</label><br />
        <select value={issue} onChange={(e) => setIssue(e.target.value)}>
          <option value="">Select</option>
          <option value="Traffic">Traffic</option>
          <option value="Parking">Parking</option>
          <option value="Road Damage">Road Damage</option>
        </select>

        <br /><br />

        <label>Upload Photo</label><br />
        <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />

        <br /><br />

        <button type="button" onClick={getLocation}>
          Get Location
        </button>

        <p>{userLocation}</p>

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default Complaint;
