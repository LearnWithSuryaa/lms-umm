import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Selamat datang kembali 👋
        </h1>
        <p className="text-gray-600 mb-8">
          Ini adalah dashboard Anda. Akses semua yang Anda butuhkan untuk pembelajaran digital.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kartu Fitur */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#C8102E] mb-2">📘 Materi Kuliah</h3>
            <p className="text-gray-600 text-sm">
              Lihat dan unduh semua materi pembelajaran dari dosen Anda.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#C8102E] mb-2">📝 Tugas & Kuis</h3>
            <p className="text-gray-600 text-sm">
              Cek tugas aktif, kuis, dan deadline yang harus segera diselesaikan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[#C8102E] mb-2">💬 Forum Diskusi</h3>
            <p className="text-gray-600 text-sm">
              Berdiskusi dengan teman sekelas dan dosen dalam satu platform.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          Anda terakhir login: <span className="font-medium">4 Mei 2025</span>
        </div>
      </main>

      <Footer />
    </div>
  );
}
