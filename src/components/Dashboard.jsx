import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const courses = [
    {
      title: "Aljabar Linear dan Matriks F",
      category: "Informatika",
      deskripsi: "Pembelajaran dasar aljabar matriks dan vektor.",
      dosen: "Dr. Ahmad Rofi, M.T.",
      materi: 12,
      status: "Aktif",
    },
    {
      title: "English Proficiency Test Preparation",
      category: "Informatika",
      deskripsi: "Persiapan tes bahasa Inggris untuk mahasiswa.",
      dosen: "Nurul Aini, M.A.",
      materi: 8,
      status: "Aktif",
    },
    {
      title: "Ibadah dan Mu'amalah F",
      category: "Informatika",
      deskripsi: "Studi tentang fiqh ibadah dan mu'amalah dalam Islam.",
      dosen: "Ust. Rahmatullah, Lc.",
      materi: 10,
      status: "Aktif",
    },
    {
      title: "Kalkulus F",
      category: "Informatika",
      deskripsi: "Dasar-dasar kalkulus diferensial dan integral.",
      dosen: "Dr. Hj. Sri Mulyani, M.Si.",
      materi: 14,
      status: "Aktif",
    },
    {
      title: "Dasar Pemrograman",
      category: "Informatika",
      deskripsi: "Konsep dasar algoritma dan pemrograman.",
      dosen: "Dwi Lestari, M.Kom.",
      materi: 9,
      status: "Aktif",
    },
    {
      title: "Etika Profesi",
      category: "Informatika",
      deskripsi: "Pembahasan tentang etika dalam profesi TI.",
      dosen: "Dr. Budi Santoso, M.T.",
      materi: 7,
      status: "Aktif",
    },
  ];

  const announcements = [
    "Pengumpulan tugas Kalkulus maksimal tanggal 6 Mei 2025.",
    "UTS akan dimulai minggu depan. Cek jadwal di halaman akademik.",
    "Forum diskusi Ibadah dan Mu’amalah telah dibuka.",
    "Batas pengisian KRS online adalah tanggal 10 Mei 2025.",
  ];

  const todaySchedule = [
    { time: "08.00 - 09.40", course: "Kalkulus F", room: "D4.204" },
    { time: "10.00 - 11.40", course: "Ibadah dan Mu'amalah F", room: "Online (Zoom)" },
  ];

  const bookmarkedTasks = [
    {
      title: "Tugas 1 - Kalkulus F",
      due: "6 Mei 2025",
      status: "Belum Selesai",
    },
    {
      title: "Tugas 2 - Ibadah dan Mu'amalah F",
      due: "8 Mei 2025",
      status: "Belum Selesai",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/Logo UMM Text Universitas.png" alt="UMM Logo" className="h-10" />
            <h1 className="text-xl font-bold text-[#C8102E]">Polysynchronous Learning Design</h1>
          </div>
          <div className="text-sm text-gray-600">Selamat datang, Widya Amelia</div>
        </div>
      </header>

      {/* Konten */}
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-10">
        {/* Statistik Ringkas */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow border-l-4 border-[#C8102E]">
            <h4 className="text-sm text-gray-500">Mata Kuliah</h4>
            <p className="text-2xl font-bold text-[#C8102E]">{courses.length}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow border-l-4 border-[#C8102E]">
            <h4 className="text-sm text-gray-500">Total Materi</h4>
            <p className="text-2xl font-bold text-[#C8102E]">
              {courses.reduce((sum, c) => sum + c.materi, 0)}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow border-l-4 border-[#C8102E]">
            <h4 className="text-sm text-gray-500">Status</h4>
            <p className="text-2xl font-bold text-green-600">Aktif</p>
          </div>
        </section>

        {/* Jadwal Hari Ini */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Jadwal Hari Ini</h2>
          <div className="bg-white rounded-xl shadow p-4 space-y-2">
            {todaySchedule.map((item, idx) => (
              <div key={idx} className="flex justify-between text-sm text-gray-700">
                <span>{item.time}</span>
                <span>{item.course}</span>
                <span>{item.room}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bookmark Tugas */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Tugas Ditandai</h2>
          <div className="bg-white rounded-xl shadow p-4 space-y-3">
            {bookmarkedTasks.map((task, idx) => (
              <div
                key={idx}
                className="flex items-start justify-between border-b pb-2 last:border-none last:pb-0"
              >
                <div>
                  <h4 className="font-semibold text-sm text-[#C8102E]">{task.title}</h4>
                  <p className="text-xs text-gray-500">Batas: {task.due}</p>
                </div>
                <span
                  className={`text-xs font-medium ${
                    task.status === "Selesai" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Pengumuman */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Pengumuman</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {announcements.map((text, idx) => (
              <div
                key={idx}
                className="flex items-start bg-white rounded-2xl shadow-md p-4 border-l-4 border-[#C8102E] hover:shadow-lg transition"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#C8102E] flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm text-gray-700">{text}</p>
                  <span className="text-xs text-gray-400">Diperbarui: 3 Mei 2025</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mata Kuliah */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Mata Kuliah Saya</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <Link key={idx} to={`/course/${idx}`}>
                <div className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-md transition cursor-pointer">
                  <img
                    src="/course-placeholder.webp"
                    alt={course.title}
                    className="w-full h-40 object-cover rounded-t-2xl"
                  />
                  <div className="p-5 space-y-1">
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                      {course.category}
                    </span>
                    <h3 className="font-semibold text-lg text-gray-800">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.deskripsi}</p>
                    <div className="text-sm text-gray-500 mt-2">
                      <div>
                        <strong>Dosen:</strong> {course.dosen}
                      </div>
                      <div>
                        <strong>Jumlah Materi:</strong> {course.materi}
                      </div>
                      <div>
                        <strong>Status:</strong>{" "}
                        <span className="text-green-600">{course.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
