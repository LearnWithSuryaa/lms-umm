import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("202410370110053");
  const [password, setPassword] = useState("2024");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "202410370110053" && password === "2024") {
      navigate("/dashboard");
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="relative min-h-screen bg-[url('/bg-education.png')] bg-cover bg-center flex items-center justify-center px-4">
      {/* Overlay blur */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0" />

      {/* Kontainer responsif */}
      <div className="relative z-10 w-full max-w-5xl bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Form Login */}
        <div className="w-full md:w-1/2">
          <div className="text-center mb-6">
            <img
              src="/Logo UMM Text Universitas.png"
              alt="Logo UMM"
              className="h-16 mx-auto mb-2"
            />
            <h1 className="text-2xl font-bold text-gray-800">Masuk</h1>
            <p className="text-sm text-gray-500">
              Akses materi, tugas, dan diskusi perkuliahan
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email / NIM
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Dosen / NIM Mahasiswa"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password / PIC
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
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

        {/* SVG Illustration */}
        <div className="hidden md:block w-full md:w-1/2">
          <img
            src="/images/secure-login-animate.svg"
            alt="Secure login illustration"
            className="w-full h-auto max-h-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
