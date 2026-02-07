import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Complaint from "./pages/Complaint";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complaint" element={<Complaint />} />
      </Routes>
    </Router>
  );
}

export default App;
