import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
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
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6 tracking-tight">
            Contact Us
          </h2>
          <a
            href="mailto:hello@elevateandprosper.com"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-500 text-lg transition-colors group"
          >
            <svg
              className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            hello@elevateandprosper.com
          </a>
        </div>
      </section>
    </main>
  );
}
