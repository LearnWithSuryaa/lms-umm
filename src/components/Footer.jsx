export default function Footer() {
  return (
    <footer className="bg-white/20 text-gray-600 mt-20 pt-10 pb-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">
        
        {/* Kolom 1: Logo & Alamat Kampus */}
        <div>
          <img
            src="/Logo UMM Text Universitas.png"
            alt="UMM Logo"
            className="h-14 mx-auto sm:mx-0 mb-3"
          />
          <p className="text-sm leading-relaxed">
            Universitas Muhammadiyah Malang <br />
            Jalan Raya Tlogomas No.246, Malang 65144
          </p>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h4 className="text-base font-semibold mb-3">Navigasi</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-red-600 transition">Beranda</a></li>
            <li><a href="/fitur" className="hover:text-red-600 transition">Fitur</a></li>
            <li><a href="/bantuan" className="hover:text-red-600 transition">Bantuan</a></li>
            <li><a href="/kontak" className="hover:text-red-600 transition">Kontak</a></li>
          </ul>
        </div>

        {/* Kolom 3: Kontak & Sosial */}
        <div>
          <h4 className="text-base font-semibold mb-3">Hubungi Kami</h4>
          <p className="text-sm leading-relaxed">
            Email:{" "}
            <a href="mailto:info@umm.ac.id" className="text-red-600 hover:underline">
              info@umm.ac.id
            </a>
            <br />
            Telepon: (0341) 464318
          </p>
          {/* Tambahkan ikon sosial media jika perlu di sini */}
        </div>
      </div>

      {/* Footer bawah */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t pt-4 px-6">
        &copy; {new Date().getFullYear()} Universitas Muhammadiyah Malang. All rights reserved.
      </div>
    </footer>
  );
}
