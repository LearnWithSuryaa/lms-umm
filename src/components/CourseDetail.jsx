import React, { useState, useEffect, useRef } from "react";
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale } from "chart.js";
import { Line } from "react-chartjs-2";
import { Download, Upload, Star, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Register Chart.js components yang dibutuhkan
ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale);

export default function CourseDetail() {
  const [openTaskIndex, setOpenTaskIndex] = useState(null);
  const [bookmarkedTasks, setBookmarkedTasks] = useState([]);
  const navigate = useNavigate();
  const chartRef = useRef(null); // Menggunakan referensi untuk mengelola chart

  const toggleDropdown = (index) => {
    setOpenTaskIndex(openTaskIndex === index ? null : index);
  };

  const toggleBookmark = (index) => {
    setBookmarkedTasks((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const tasks = [
    {
      title: "Tugas 1 - Limit Fungsi",
      due: "6 Mei 2025",
      description:
        "Kerjakan soal limit pada modul 2 dan unggah dalam bentuk PDF.",
      materialUrl: "#",
      submitUrl: "#",
    },
    {
      title: "Tugas 2 - Turunan",
      due: "13 Mei 2025",
      description: "Kerjakan soal turunan fungsi dari latihan modul 4.",
      materialUrl: "#",
      submitUrl: "#",
    },
  ];

  const grades = [
    { task: "Tugas 1", score: 90 },
    { task: "Tugas 2", score: 80 },
    { task: "UTS", score: 85 },
  ];

  const lecturerNotes = `Silakan pelajari kembali materi limit fungsi karena akan keluar di UTS minggu depan. Jika ada pertanyaan, boleh langsung hubungi saya melalui forum diskusi.`;

  const courseTitle = "Kalkulus F";
  const lecturerName = "Dr. Hj. Sri Mulyani, M.Si.";

  // Data untuk grafik
  const chartData = {
    labels: grades.map((grade) => grade.task),
    datasets: [
      {
        label: "Nilai",
        data: grades.map((grade) => grade.score),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 1,
      },
    ],
  };

  // Opsi untuk grafik
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
    // Menghancurkan chart jika ada untuk mencegah error canvas
    const chartInstance = chartRef.current?.chart;
    if (chartInstance) {
      chartInstance.destroy();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-[#C8102E] text-white px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Kiri - Tombol Kembali */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 hover:underline"
          >
            <ArrowLeft size={30} className="cursor-pointer" />
          </button>

          {/* Tengah - Nama Matkul */}
          <h1 className="text-lg font-bold text-center">{courseTitle}</h1>

          {/* Kanan - Nama Dosen */}
          <p className="text-sm text-white/80">{lecturerName}</p>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - 2/3 */}
        <div className="lg:col-span-2 space-y-6">
          {/* List Tugas */}
          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Daftar Tugas
            </h2>
            <div className="space-y-4">
              {tasks.map((task, idx) => (
                <div
                  key={idx}
                  className="border rounded-lg p-4 bg-gray-50 hover:bg-white transition"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-[#C8102E]">
                        {task.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Batas Pengumpulan: {task.due}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => toggleDropdown(idx)}
                        className="flex items-center gap-1 text-sm text-blue-600 border border-blue-600 px-2 py-1 rounded hover:bg-blue-50 transition"
                      >
                        {openTaskIndex === idx ? (
                          <>
                            <span>Tutup</span>
                            <ChevronUp size={16} />
                          </>
                        ) : (
                          <>
                            <span>Detail</span>
                            <ChevronDown size={16} />
                          </>
                        )}
                      </button>

                      <button onClick={() => toggleBookmark(idx)}>
                        <Star
                          size={20}
                          className={`${
                            bookmarkedTasks.includes(idx)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-400"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {openTaskIndex === idx && (
                    <div className="mt-3 text-sm text-gray-700 space-y-3 border-t pt-3">
                      <p>{task.description}</p>
                      <div className="flex gap-3">
                        <a
                          href={task.materialUrl}
                          className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition w-36"
                        >
                          <Download size={16} /> Materi
                        </a>
                        <a
                          href={task.submitUrl}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
                        >
                          <Upload size={16} /> Kirim Jawaban
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Rekap Nilai dengan Grafik */}
          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Rekap Nilai
            </h2>
            {/* Grafik Nilai */}
            <div>
              <Line ref={chartRef} data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Right Column - Catatan Dosen */}
        <div className="bg-white rounded-xl shadow p-5 h-fit">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Catatan Dosen
          </h2>
          <p className="text-sm text-gray-700 whitespace-pre-line">
            {lecturerNotes}
          </p>
        </div>
      </div>
    </div>
  );
}
