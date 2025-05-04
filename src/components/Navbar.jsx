export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo dan Title */}
        <div className="flex items-center gap-4">
          <img
            src="/Logo UMM Text Universitas.png" // Pastikan path logo benar
            alt="UMM Logo"
            className="h-12 w-auto"
          />
          <div>
            <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
              Learning Management System
            </h1>
            <p className="text-sm text-gray-500">Universitas Muhammadiyah Malang</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-gray-600 font-medium">
          <a href="/" className="hover:text-red-600 transition">Beranda</a>
          <a href="/fitur" className="hover:text-red-600 transition">Fitur</a>
          <a href="/bantuan" className="hover:text-red-600 transition">Bantuan</a>
        </nav>
      </div>
    </header>
  );
}