export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-20 pt-10 pb-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Kolom 1: Logo & Kampus */}
        <div>
          <img
            src="/Logo UMM Text Universitas.png"
            alt="UMM Logo"
            className="h-14 mx-auto md:mx-0 mb-3"
          />
          <p className="text-sm">
            Universitas Muhammadiyah Malang <br />
            Jalan Raya Tlogomas No.246, Malang 65144
          </p>
        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h4 className="text-base font-semibold mb-2">Navigasi</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-red-600 transition">Beranda</a></li>
            <li><a href="/fitur" className="hover:text-red-600 transition">Fitur</a></li>
            <li><a href="/bantuan" className="hover:text-red-600 transition">Bantuan</a></li>
            <li><a href="/kontak" className="hover:text-red-600 transition">Kontak</a></li>
          </ul>
        </div>

        {/* Kolom 3: Kontak & Sosial */}
        <div>
          <h4 className="text-base font-semibold mb-2">Hubungi Kami</h4>
          <p className="text-sm">
            Email: <a href="mailto:info@umm.ac.id" className="text-red-600 hover:underline">info@umm.ac.id</a><br />
            Telepon: (0341) 464318
          </p>
          {/* Tambahan ikon sosial media bisa disertakan nanti */}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t pt-4">
        &copy; {new Date().getFullYear()} Universitas Muhammadiyah Malang. All rights reserved.
      </div>
    </footer>
  );
}
