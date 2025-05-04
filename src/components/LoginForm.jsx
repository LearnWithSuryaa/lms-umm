import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("202410370110053");
  const [password, setPassword] = useState("2024");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi login sederhana
    if (email === "202410370110053" && password === "2024") {
      navigate("/dashboard");
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
        {/* Logo */}
        <div className="text-center mb-6">
          <img
            src="/Logo UMM Text Universitas.png"
            alt="Logo UMM"
            className="h-16 mx-auto mb-2"
          />
          <h1 className="text-2xl font-bold text-black mt-1">Masuk</h1>
          <p className="text-sm text-gray-500 mt-1">
            Akses materi, tugas, dan diskusi perkuliahan
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              placeholder="Email Dosen / NIM Mahasiswa"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password/PIC</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#C8102E] hover:bg-[#a40e24] text-white py-2.5 rounded-xl font-semibold transition duration-300"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
