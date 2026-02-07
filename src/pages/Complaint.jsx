import { useState } from "react";

function Complaint() {
  const [location, setLocation] = useState("");
  const [issue, setIssue] = useState("");
  const [photo, setPhoto] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation(
          `${pos.coords.latitude}, ${pos.coords.longitude}`
        );
      },
      () => alert("Location access denied")
    );
  };

  const submitComplaint = (e) => {
    e.preventDefault();

    const complaintData = {
      issue,
      location,
      photo,
    };

    console.log("Complaint Submitted:", complaintData);
    alert("Complaint submitted successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Report a Problem</h2>

      <form onSubmit={submitComplaint}>
        <label>Issue Type</label><br />
        <select onChange={(e) => setIssue(e.target.value)} required>
          <option value="">Select Issue</option>
          <option>Road Damage</option>
          <option>Illegal Parking</option>
          <option>Signal Not Working</option>
          <option>Obstruction</option>
        </select>

        <br /><br />

        <label>Upload Photo</label><br />
        <input type="file" accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])} />

        <br /><br />

        <button type="button" onClick={getLocation}>
          Get Location
        </button>
        <p>{location}</p>

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default Complaint;
