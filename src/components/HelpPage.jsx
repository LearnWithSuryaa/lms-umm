export default function HelpPage() {
  const steps = [
    {
      title: "Daftar Akun",
      desc: "Registrasi dengan akun mahasiswa untuk mulai menggunakan LMS.",
      image: "/illustrations/register.svg",
    },
    {
      title: "Akses Materi",
      desc: "Pilih mata kuliah lalu baca atau tonton materi pembelajaran.",
      image: "/illustrations/learning.svg",
    },
    {
      title: "Kerjakan Tugas",
      desc: "Kerjakan tugas, kuis, atau forum diskusi dari dosen langsung.",
      image: "/illustrations/task.svg",
    },
    {
      title: "Pantau Kemajuan",
      desc: "Lihat nilai, progres pembelajaran, dan umpan balik dari dosen.",
      image: "/illustrations/progress.svg",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[url('/bg-education.png')] bg-cover bg-center py-24 px-6">
      <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cara Kerja LMS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sistem kami mempermudah mahasiswa dan dosen dalam mengelola proses pembelajaran daring secara efektif dan efisien.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-24 h-24 mb-5"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Siap memulai perjalanan belajar kamu?
          </h3>
          <p className="text-gray-600 mb-6">
            Masuk sekarang dan nikmati kemudahan belajar dengan LMS kami.
          </p>
          <a
            href="/login"
            className="inline-block bg-[#C8102E] hover:bg-[#a40e24] text-white font-semibold px-8 py-3 rounded-full shadow transition"
          >
            Masuk Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
