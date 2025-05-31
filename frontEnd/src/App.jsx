import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./variables.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import About from "./pages/About/About.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import ProtectDashboard from "../utils/ProtectDashboard.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/dashboard"
            element={
              <ProtectDashboard>
                <Dashboard />
                <ProtectDashboard />
              </ProtectDashboard>
            }
          />

          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
