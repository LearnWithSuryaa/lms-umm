import { HelpCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.05)]"
      role="banner"
      aria-label="Navigasi utama LMS UMM"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo dan Title */}
        <div className="flex items-center gap-4">
          <img
            src="/Logo UMM Text Universitas.png"
            alt="Logo Universitas Muhammadiyah Malang"
            className="h-12 w-auto"
          />
          <div>
            <h1 className="text-xl font-semibold text-gray-800 leading-tight">
              Learning Management System
            </h1>
            <p className="text-sm text-gray-500 tracking-wide">
              Universitas Muhammadiyah Malang
            </p>
          </div>
        </div>

        {/* Navigasi Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600 font-medium">
          <NavLink href="#beranda" label="Beranda" />
          <NavLink href="/fitur" label="Fitur" />
          <div className="border-l h-5 border-gray-300 mx-2" />
          <NavLink href="/bantuan" label="Bantuan" icon={<HelpCircle className="w-4 h-4" />} />
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, label, icon }) {
  return (
    <a
      href={href}
      className="relative flex items-center gap-1 hover:text-red-600 transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-red-600 hover:after:w-full after:transition-all"
    >
      {icon}
      {label}
    </a>
  );
}
