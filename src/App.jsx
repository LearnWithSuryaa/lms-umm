import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import CourseDetail from "./components/CourseDetail";
import HelpPage from "./components/HelpPage";
import FeaturePage from "./components/FeaturePage"; // ✅ import halaman fitur

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* Halaman Login */}
        <Route path="/login" element={<LoginForm />} />

        {/* Halaman Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Halaman Detail Mata Kuliah */}
        <Route path="/course/:id" element={<CourseDetail />} />

        {/* Halaman Bantuan */}
        <Route path="/bantuan" element={<HelpPage />} />

        {/* Halaman Fitur Unggulan */}
        <Route path="/fitur" element={<FeaturePage />} /> {/* ✅ */}
      </Routes>
    </Router>
  );
}

export default App;
