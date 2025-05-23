import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Book, FileText, Activity } from "lucide-react";
import Footer from "./Footer";
import courses from "../data/courses";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("jadwal");

  const todaySchedule = [
    { time: "08:00 - 09:30", course: "Pemrograman Dasar", room: "Lab 1" },
    {
      time: "10:00 - 11:30",
      course: "Aljabar Linear dan Matriks",
      room: "Ruang 205",
    },
    { time: "13:00 - 14:30", course: "Struktur Data", room: "Lab 2" },
    { time: "15:00 - 16:30", course: "Bahasa Inggris", room: "Ruang 101" },
  ];

  const bookmarkedTasks = [
    {
      title: "Matematika Dasar",
      assignments: [
        { title: "Tugas 2", due: "2025-05-12", status: "Belum Selesai" },
      ],
    },
    {
      title: "Aljabar Linear dan Matriks",
      assignments: [
        { title: "Tugas 4", due: "2025-05-12", status: "Belum Selesai" },
      ],
    },
    {
      title: "Pemrograman Web",
      assignments: [
        { title: "Tugas 1", due: "2025-05-08", status: "Belum Selesai" },
      ],
    },
  ];

  const announcements = [
    {
      title: "Perubahan Jadwal UTS",
      date: "2025-05-01",
      description:
        "UTS untuk mata kuliah Struktur Data dimajukan ke tanggal 6 Mei.",
    },
    {
      title: "Pengumpulan Tugas",
      date: "2025-05-03",
      description:
        "Tugas Pemrograman Web dikumpulkan paling lambat pukul 23.59.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[url('/bg-education.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-white/75 backdrop-blur-sm z-0" />
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 md:gap-6">
              <img
                src="/Logo UMM Text Universitas.png"
                alt="UMM Logo"
                className="h-10 md:h-12"
              />
              <h1 className="text-lg md:text-xl font-semibold text-[#C8102E] text-center md:text-left">
                Polysynchronous Learning Design
              </h1>
            </div>
            <div className="text-sm text-gray-600 text-center md:text-right">
              Selamat datang, Widya Amelia
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
          {/* Statistik Modern */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCardModern
              label="Mata Kuliah"
              value={courses.length}
              icon={<Book className="w-6 h-6 text-[#C8102E]" />}
              bg="bg-red-50"
            />
            <StatCardModern
              label="Total Materi"
              value={courses.reduce((sum, c) => sum + c.materi, 0)}
              icon={<FileText className="w-6 h-6 text-blue-300" />}
              bg="bg-red-50"
            />
            <StatCardModern
              label="Status"
              value="Aktif"
              icon={<Activity className="w-6 h-6 text-green-300" />}
              bg="bg-red-50"
            />
          </section>

          {/* Tabs Jadwal dan Tugas */}
          <section>
            <div className="flex space-x-4 border-b mb-4 overflow-x-auto">
              <button
                onClick={() => setActiveTab("jadwal")}
                className={`px-4 py-2 whitespace-nowrap font-medium ${
                  activeTab === "jadwal"
                    ? "border-b-2 border-[#C8102E] text-[#C8102E]"
                    : "text-gray-500 hover:text-[#C8102E]"
                }`}
              >
                Jadwal Hari Ini
              </button>
              <button
                onClick={() => setActiveTab("tugas")}
                className={`px-4 py-2 whitespace-nowrap font-medium ${
                  activeTab === "tugas"
                    ? "border-b-2 border-[#C8102E] text-[#C8102E]"
                    : "text-gray-500 hover:text-[#C8102E]"
                }`}
              >
                Tugas Ditandai
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 overflow-x-auto">
              {activeTab === "jadwal" ? (
                <table className="w-full text-sm text-gray-700 border-collapse">
                  <thead>
                    <tr className="text-left bg-gray-100">
                      <th className="p-2">Waktu</th>
                      <th className="p-2">Mata Kuliah</th>
                      <th className="p-2">Ruangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todaySchedule.map((item, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="p-2">{item.time}</td>
                        <td className="p-2">{item.course}</td>
                        <td className="p-2">{item.room}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="space-y-4">
                  {bookmarkedTasks.map((task, idx) => (
                    <div
                      key={idx}
                      className="space-y-2 border-b pb-4 last:border-none last:pb-0"
                    >
                      <h4 className="font-semibold text-lg text-[#C8102E]">
                        {task.title}
                      </h4>
                      {task.assignments.map((assignment, assignmentIdx) => (
                        <div
                          key={assignmentIdx}
                          className="text-sm text-gray-600"
                        >
                          <p className="text-base font-medium">
                            {assignment.title}
                          </p>
                          <p>Batas: {assignment.due}</p>
                          <span
                            className={`font-medium ${
                              assignment.status === "Selesai"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {assignment.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Pengumuman */}
          <section>
            <SectionTitle title="Pengumuman" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {announcements.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 border-l-4 border-[#C8102E] hover:shadow-lg transition"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#C8102E] flex items-center justify-center text-white font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="ml-6 space-y-2">
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <span className="text-xs text-gray-400">
                      Diperbarui: {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mata Kuliah */}
          <section>
            <SectionTitle title="Mata Kuliah Saya" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, idx) => (
                <Link key={idx} to={`/course/${idx}`} state={{ course }}>
                  <div className="flex flex-col h-full bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer">
                    <img
                      src="/course-placeholder.webp"
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                    <div className="flex flex-col flex-grow p-6 space-y-4">
                      <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full w-fit">
                        {course.category}
                      </span>
                      <h3 className="font-semibold text-xl text-gray-800 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
                        {course.deskripsi}
                      </p>
                      <div className="text-sm text-gray-500 space-y-1">
                        <div>
                          <strong>Dosen:</strong> {course.dosen}
                        </div>
                        <div>
                          <strong>Materi:</strong> {course.materi}
                        </div>
                        <div>
                          <strong>Status:</strong>{" "}
                          <span className="text-green-600">
                            {course.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

// 🔧 Komponen statistik modern
function StatCardModern({ label, value, icon, bg }) {
  return (
    <div
      className={`p-5 rounded-2xl shadow-md hover:shadow-lg transition-all ${bg}`}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-white rounded-xl shadow-sm">{icon}</div>
        <div>
          <h4 className="text-sm text-gray-500 font-medium">{label}</h4>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title }) {
  return <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>;
}
