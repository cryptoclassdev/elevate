import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-white to-slate-50">
      <Header />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-teal-50/40 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="text-center relative z-10">
          {/* Logo */}
          <div className="mx-auto mb-10 w-48 h-48 md:w-64 md:h-64 relative drop-shadow-xl">
            <Image
              src="/logo.png"
              alt="Elevate & Prosper"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Visually hidden h1 for accessibility */}
          <h1 className="sr-only">Elevate & Prosper</h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-slate-600 font-light tracking-wide">
            Take your tech start-up to the next level!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
