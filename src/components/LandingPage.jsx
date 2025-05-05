import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section id="beranda" className="bg-gradient-to-br from-red-100 to-white">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 gap-12 min-h-[80vh] sm:min-h-screen py-10">
          {/* Teks */}
          <div
            className="text-center lg:text-left lg:w-1/2 px-2"
            data-aos="fade-up"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
              Belajar Lebih Mudah <br />
              <span className="text-red-600">
                Dengan LMS Universitas Muhammadiyah Malang
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
              Platform pembelajaran modern untuk mendukung aktivitas kuliah
              digital yang interaktif dan efisien.
            </p>
            <a
              href="/login"
              className="inline-block px-6 sm:px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-base sm:text-lg rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              Masuk Sekarang
            </a>
          </div>

          {/* Ilustrasi */}
          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="fade-left"
          >
            <img
              src="/images/At the office-amico.svg"
              alt="Ilustrasi kantor"
              className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-full max-w-md lg:max-w-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <div className="bg-[url('/bg-education.png')] bg-cover bg-center bg-no-repeat">
        <div className="bg-white/70 backdrop-blur-sm">
          {/* Features Section */}
          <section id="fitur" className="px-6 py-20" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-800">
              Fitur Unggulan LMS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-[#C8102E]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 20l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 12l9-5-9-5-9 5 9 5z"
                      />
                    </svg>
                  ),
                  title: "Materi Terstruktur",
                  desc: "Setiap mata kuliah memiliki modul yang disusun secara sistematis dan mudah dipahami.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-[#C8102E]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  title: "Fleksibilitas Waktu",
                  desc: "Belajar secara mandiri kapan saja tanpa terikat jadwal tetap.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-[#C8102E]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 4a4 4 0 110 8 4 4 0 010-8zM8 4a4 4 0 110 8 4 4 0 010-8z"
                      />
                    </svg>
                  ),
                  title: "Kolaborasi Aktif",
                  desc: "Mahasiswa dan dosen dapat berdiskusi, memberikan komentar, dan evaluasi secara real-time.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/90 rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
                  data-aos="zoom-in"
                  data-aos-delay={`${index * 100}`}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Cara Kerja LMS */}
          <section id="bantuan" className="px-6 py-20" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
              Cara Kerja LMS
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-[#C8102E] mx-auto mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 20v-1a4 4 0 014-4h6a4 4 0 014 4v1"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 12a4 4 0 100-8 4 4 0 000 8z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 11l2 2 4-4"
                      />
                    </svg>
                  ),
                  title: "Daftar Akun",
                  desc: "Registrasi dengan akun mahasiswa untuk mulai menggunakan LMS.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-[#C8102E] mx-auto mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  ),
                  title: "Akses Materi",
                  desc: "Pilih mata kuliah lalu baca atau tonton materi pembelajaran.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-[#C8102E] mx-auto mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 4h6a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2z" />
                      <path d="M9 10h6M9 14h6M9 18h6" />
                      <path d="M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                    </svg>
                  ),
                  title: "Kerjakan Tugas",
                  desc: "Kerjakan tugas, kuis, atau forum diskusi dari dosen langsung.",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-[#C8102E] mx-auto mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3v18h18" />
                      <rect x="7" y="10" width="4" height="6" />
                      <rect x="13" y="6" width="4" height="10" />
                    </svg>
                  ),
                  title: "Pantau Kemajuan",
                  desc: "Lihat nilai, progres pembelajaran, dan umpan balik dari dosen.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white/90 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  {step.icon}
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimoni Section */}
          <section className="px-6 py-20" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-14 text-gray-800">
              Apa Kata Mahasiswa?
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Muhammad Surya Informatika F",
                  quote:
                    "LMS sangat membantu dalam mengatur jadwal belajar dan mengakses materi kapan saja. Tidak perlu lagi bertanya-tanya soal deadline tugas!",
                },
                {
                  name: "Satriya Dwi Mahardhika Informatika F",
                  quote:
                    "Dengan LMS, saya bisa berdiskusi langsung dengan dosen tanpa harus menunggu pertemuan offline. Efisien banget!",
                },
              ].map((t, index) => (
                <div
                  key={index}
                  className="bg-white/90 p-6 rounded-xl shadow-md border-l-4 border-red-500"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
                  <h4 className="font-semibold text-red-600">{t.name}</h4>
                </div>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}
