import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 py-20 bg-gradient-to-br from-red-100 to-white">
        <div className="text-center lg:text-left px-5 max-w-xl">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Belajar Lebih Mudah <br />
            <span className="text-red-600">Dengan LMS Universitas Muhammadiyah Malang</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Platform pembelajaran modern untuk mendukung aktivitas kuliah digital yang interaktif dan efisien.
          </p>
          <a
            href="/login"
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg rounded-xl shadow-lg transition-transform transform hover:scale-105"
          >
            Masuk Sekarang
          </a>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src="/umm.png"
            alt="Online Learning"
            className="w-full rounded-3xl max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-14">
          Fitur Unggulan LMS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "📘",
              title: "Materi Terstruktur",
              desc: "Materi tersedia dalam modul yang mudah dipelajari secara mandiri.",
            },
            {
              icon: "🕒",
              title: "Fleksibilitas Waktu",
              desc: "Belajar kapan saja sesuai jadwal dan kenyamananmu.",
            },
            {
              icon: "👥",
              title: "Kolaborasi Aktif",
              desc: "Diskusi, komentar, dan feedback secara langsung di platform.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl text-red-500 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cara Kerja LMS */}
      <section className="px-6 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Cara Kerja LMS</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "📝", title: "Daftar Akun", desc: "Registrasi melalui portal resmi mahasiswa Telkom University." },
            { icon: "📂", title: "Akses Materi", desc: "Pilih mata kuliah dan mulai belajar melalui modul yang disediakan." },
            { icon: "🧪", title: "Kerjakan Tugas", desc: "Unggah tugas, ikut kuis dan diskusi langsung dari LMS." },
            { icon: "🎓", title: "Pantau Kemajuan", desc: "Lihat nilai, progres belajar, dan feedback dari dosen." },
          ].map((step, index) => (
            <div key={index} className="bg-red-50 rounded-xl p-6 shadow hover:shadow-md transition">
              <div className="text-4xl mb-3 text-red-500">{step.icon}</div>
              <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="px-6 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-14">Apa Kata Mahasiswa?</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Aulia Rahma",
              quote:
                "LMS sangat membantu dalam mengatur jadwal belajar dan mengakses materi kapan saja. Tidak perlu lagi bertanya-tanya soal deadline tugas!",
            },
            {
              name: "Dimas Setiawan",
              quote:
                "Dengan LMS, saya bisa berdiskusi langsung dengan dosen tanpa harus menunggu pertemuan offline. Efisien banget!",
            },
          ].map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
              <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
              <h4 className="font-semibold text-red-600">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
