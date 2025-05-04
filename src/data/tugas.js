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
      grades: [
        { task: "Tugas 1", score: 85 },
        { task: "Tugas 2", score: 90 },
        { task: "UTS", score: 88 },
      ],
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
      grades: [
        { task: "Listening Test", score: 75 },
        { task: "Speaking Test", score: 80 },
      ],
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
        { title: "Struktur Data", due: "9 Mei 2025", status: "Belum Selesai" },
      ],
      grades: [
        { task: "Tugas 1", score: 80 },
        { task: "Tugas 2", score: 85 },
        { task: "UTS", score: 78 },
      ],
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
        { title: "Sistem Berkas", due: "20 Mei 2025", status: "Belum Selesai" },
      ],
      grades: [
        { task: "Tugas 1", score: 90 },
        { task: "Tugas 2", score: 85 },
        { task: "UTS", score: 87 },
      ],
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
          status: "Belum Selesai",
        },
        {
          title: "Keamanan Jaringan",
          due: "18 Mei 2025",
          status: "Belum Selesai",
        },
      ],
      grades: [
        { task: "Tugas 1", score: 88 },
        { task: "Tugas 2", score: 92 },
        { task: "UTS", score: 85 },
      ],
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
      grades: [
        { task: "Tugas 1", score: 90 },
        { task: "Tugas 2", score: 85 },
        { task: "UTS", score: 80 },
      ],
      lecturerNotes: `Tugas pemrograman dinamis akan sangat membantu jika dikerjakan lebih awal.`,
    },
  ];
  
  export default courses;
  