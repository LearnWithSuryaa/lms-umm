import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {
  Download,
  Upload,
  Star,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale
);

// Sample data
const courses = [
  {
    title: "Aljabar Linear dan Matriks F",
    category: "Informatika",
    deskripsi: "Pembelajaran dasar aljabar matriks dan vektor.",
    dosen: "Dr. Ahmad Rofi, M.T.",
    materi: 12,
    status: "Aktif",
    assignments: [
      {
        title: "Matriks dan Determinan",
        due: "10 Mei 2025",
        status: "Belum Selesai",
      },
      {
        title: "Vektor dan Ruang Vektor",
        due: "15 Mei 2025",
        status: "Belum Selesai",
      },
    ],
    grades: [], // Tidak ada grades karena tugas belum selesai
    lecturerNotes: `Silakan review kembali materi ruang vektor untuk persiapan UTS minggu depan.`,
  },
  {
    title: "English Proficiency Test Preparation",
    category: "Informatika",
    deskripsi: "Persiapan tes bahasa Inggris untuk mahasiswa.",
    dosen: "Nurul Aini, M.A.",
    materi: 8,
    status: "Aktif",
    assignments: [
      {
        title: "Listening Test",
        due: "12 Mei 2025",
        status: "Belum Selesai",
      },
      { title: "Speaking Test", due: "16 Mei 2025", status: "Selesai" },
    ],
    grades: [{ task: "Speaking Test", score: 80 }], // Nilai diberikan hanya untuk tugas yang selesai
    lecturerNotes: `Jangan lupa latihan listening dari modul yang sudah diberikan di kelas.`,
  },
  {
    title: "Pemrograman Dasar",
    category: "Informatika",
    deskripsi: "Pengenalan konsep dasar dalam pemrograman komputer.",
    dosen: "Dr. Budi Setiawan, M.Sc.",
    materi: 10,
    status: "Aktif",
    assignments: [
      {
        title: "Algoritma Pencarian",
        due: "5 Mei 2025",
        status: "Belum Selesai",
      },
      { title: "Struktur Data", due: "9 Mei 2025", status: "Selesai" },
    ],
    grades: [{ task: "Struktur Data", score: 85 }], // Nilai diberikan hanya untuk tugas yang selesai
    lecturerNotes: `Perhatikan pengertian struktur data yang lebih kompleks untuk persiapan ujian.`,
  },
  {
    title: "Sistem Operasi",
    category: "Informatika",
    deskripsi:
      "Mempelajari konsep dasar sistem operasi dan manajemen sumber daya.",
    dosen: "Ir. Siti Aminah, M.T.",
    materi: 14,
    status: "Aktif",
    assignments: [
      {
        title: "Manajemen Proses",
        due: "13 Mei 2025",
        status: "Belum Selesai",
      },
      { title: "Sistem Berkas", due: "20 Mei 2025", status: "Selesai" },
    ],
    grades: [{ task: "Sistem Berkas", score: 87 }], // Nilai diberikan hanya untuk tugas yang selesai
    lecturerNotes: `Pastikan memahami konsep manajemen proses dan scheduling.`,
  },
  {
    title: "Jaringan Komputer",
    category: "Informatika",
    deskripsi:
      "Pembelajaran tentang arsitektur dan komunikasi data dalam jaringan komputer.",
    dosen: "Dr. Ali Rahman, M.T.",
    materi: 11,
    status: "Aktif",
    assignments: [
      {
        title: "Topologi Jaringan",
        due: "7 Mei 2025",
        status: "Selesai",
      },
      {
        title: "Keamanan Jaringan",
        due: "18 Mei 2025",
        status: "Belum Selesai",
      },
    ],
    grades: [{ task: "Topologi Jaringan", score: 92 }], // Nilai diberikan hanya untuk tugas yang selesai
    lecturerNotes: `Fokus pada topologi jaringan dan pengamanan data dalam jaringan.`,
  },
  {
    title: "Analisis dan Desain Algoritma",
    category: "Informatika",
    deskripsi:
      "Mempelajari teknik-teknik analisis dan desain algoritma untuk masalah komputasi.",
    dosen: "Dr. Yuliana Nur, M.Sc.",
    materi: 13,
    status: "Aktif",
    assignments: [
      {
        title: "Algoritma Pencarian Optimal",
        due: "9 Mei 2025",
        status: "Selesai",
      },
      {
        title: "Pemrograman Dinamis",
        due: "17 Mei 2025",
        status: "Belum Selesai",
      },
    ],
    grades: [{ task: "Algoritma Pencarian Optimal", score: 90 }], // Nilai diberikan hanya untuk tugas yang selesai
    lecturerNotes: `Tugas pemrograman dinamis akan sangat membantu jika dikerjakan lebih awal.`,
  },
];

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses[id];
  const navigate = useNavigate();
  const chartRef = useRef(null);
  const [openTaskIndex, setOpenTaskIndex] = useState(null);
  const [bookmarkedTasks, setBookmarkedTasks] = useState([]);
  const [filter, setFilter] = useState("Semua");

  const toggleDropdown = (index) => {
    setOpenTaskIndex(openTaskIndex === index ? null : index);
  };

  const toggleBookmark = (taskId) => {
    setBookmarkedTasks((prev) =>
      prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId]
    );
  };

  const filteredAssignments = course.assignments.filter((a) => {
    if (filter === "Semua") return true;
    return a.status === filter;
  });

  const totalAssignments = course.assignments.length;
  const completedAssignments = course.assignments.filter(
    (a) => a.status === "Selesai"
  ).length;

  const chartData = {
    labels: course.grades.map((grade) => grade.task),
    datasets: [
      {
        label: "Nilai",
        data: course.grades.map((grade) => grade.score),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Rekap Nilai Tugas",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    const chartInstance = chartRef.current?.chart;
    if (chartInstance) chartInstance.destroy();
  }, []);

  if (!course)
    return (
      <p className="p-6 text-center text-gray-500">
        Mata kuliah tidak ditemukan.
      </p>
    );

  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{
        backgroundImage: `url('/bg-education.png')`,
      }}
    >
      <div className="absolute inset-0 bg-white/55 backdrop-blur-sm z-0" />
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="bg-[#C8102E] text-white px-6 py-4 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1"
            >
              <ArrowLeft size={30} className="cursor-pointer" />
              <span className="text-sm font-bold cursor-pointer">Kembali</span>
            </button>
            <h1 className="text-lg font-bold text-center">
              {course.title}
              <span
                className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                  course.status === "Aktif"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {course.status}
              </span>
            </h1>
            <p className="text-sm text-white/80">{course.dosen}</p>
          </div>
        </nav>

        {/* Main Content */}
        <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tugas Section */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-md p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h2 className="text-2xl font-bold text-gray-800">
                  Daftar Tugas
                </h2>
                <div className="flex items-center gap-2 text-sm">
                  <label className="font-medium">Filter:</label>
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="rounded-md border-gray-300 text-sm px-2 py-1"
                  >
                    <option value="Semua">Semua</option>
                    <option value="Selesai">Selesai</option>
                    <option value="Belum Selesai">Belum Selesai</option>
                  </select>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div
                  className="bg-green-400 h-3 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      (completedAssignments / totalAssignments) * 100
                    }%`,
                  }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {completedAssignments} dari {totalAssignments} tugas telah
                selesai
              </p>

              {/* Tugas List */}
              {filteredAssignments.map((task, idx) => (
                <div
                  key={task.id}
                  className={`border rounded-xl p-5 hover:shadow-md transition-all ${
                    task.status === "Selesai"
                      ? "bg-white/20 backdrop-blur-sm border-green-300"
                      : "bg-white/20 backdrop-blur-sm border-gray-200"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-[#C8102E]">
                        {task.title}
                      </h3>
                      <p className="text-sm mt-1">
                        Batas Pengumpulan:{" "}
                        <span className="font-medium">{task.due}</span>
                      </p>
                      <span
                        className={`inline-block mt-2 px-2 py-0.5 text-xs font-medium rounded-full ${
                          task.status === "Selesai"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {task.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleDropdown(idx)}
                        className="text-blue-600 text-sm hover:underline flex items-center"
                      >
                        {openTaskIndex === idx ? "Tutup" : "Detail"}
                        {openTaskIndex === idx ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>
                      <button onClick={() => toggleBookmark(task.id)}>
                        <Star
                          size={20}
                          className={`${
                            bookmarkedTasks.includes(task.id)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-400"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {openTaskIndex === idx && (
                    <div className="mt-4 border-t pt-4 text-sm text-gray-700 space-y-4">
                      <p>
                        Tugas ini menguji pemahaman Anda terhadap topik:{" "}
                        <span className="italic">{task.title}</span>. Silakan
                        unduh materi referensi dan unggah jawaban sebelum batas
                        waktu.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href="#"
                          className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-gray-800 bg-gradient-to-r from-green-300 to-green-300 rounded hover:brightness-105 transition w-full sm:w-36"
                        >
                          <Download size={16} /> Materi
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-gray-800 bg-gradient-to-r from-blue-300 to-blue-300 rounded hover:brightness-105 transition w-full"
                        >
                          <Upload size={16} /> Kirim Jawaban
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Rekap Nilai */}
            <div className="bg-white/30 backdrop-blur-md rounded-xl shadow p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Rekap Nilai
              </h2>
              {course.grades.length > 0 ? (
                <Line ref={chartRef} data={chartData} options={chartOptions} />
              ) : (
                <p className="text-gray-600 italic">
                  Belum ada nilai tugas yang tersedia.
                </p>
              )}
            </div>
          </div>

          {/* Catatan Dosen + Agenda */}
          <div className="bg-gradient-to-b from-white/40 to-white/20 backdrop-blur-md rounded-xl shadow p-6 flex flex-col gap-y-4">
            {/* Catatan */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Catatan Dosen
              </h2>
              <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {course.lecturerNotes}
              </p>
            </div>

            {/* Ilustrasi & Pesan */}
            <div className="flex flex-col items-center text-center text-gray-600 mt-2">
              <img
                src="/images/college-project-animate.svg"
                alt="Ilustrasi mahasiswa belajar"
                className="w-64 h-auto opacity-90 mb-2"
                loading="lazy"
              />
              <p className="italic text-sm mb-0">
                Konten tambahan akan segera tersedia. Tetap semangat belajar!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
