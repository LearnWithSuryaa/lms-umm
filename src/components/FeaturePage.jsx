export default function FiturPage() {
  const features = [
    {
      title: "Materi Terstruktur",
      desc: "Setiap mata kuliah memiliki modul yang disusun secara sistematis dan mudah dipahami.",
      image: "/illustrations/structured.svg",
    },
    {
      title: "Fleksibilitas Waktu",
      desc: "Belajar secara mandiri kapan saja tanpa terikat jadwal tetap.",
      image: "/illustrations/flexible.svg",
    },
    {
      title: "Kolaborasi Aktif",
      desc: "Mahasiswa dan dosen dapat berdiskusi, memberikan komentar, dan evaluasi secara real-time.",
      image: "/illustrations/collaboration.svg",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[url('/bg-education.png')] bg-cover bg-center py-24 px-6">
      <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fitur Unggulan LMS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fitur-fitur ini dirancang untuk mendukung pengalaman belajar yang lebih efektif, fleksibel, dan kolaboratif.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-24 h-24 mb-5"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Mulai Manfaatkan Fitur LMS Sekarang
          </h3>
          <p className="text-gray-600 mb-6">
            Jelajahi semua fitur dan dukung kesuksesan akademikmu.
          </p>
          <a
            href="/login"
            className="inline-block bg-[#C8102E] hover:bg-[#a40e24] text-white font-semibold px-8 py-3 rounded-full shadow transition"
          >
            Masuk LMS
          </a>
        </div>
      </div>
    </section>
  );
}
