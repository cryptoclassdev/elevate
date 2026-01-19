export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center">
          {/* Logo Placeholder */}
          <div className="mx-auto mb-8 w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center">
            <span className="text-white text-2xl font-bold">E&P</span>
          </div>

          {/* Company Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Elevate & Prosper
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-gray-600">
            Take your tech start-up to the next level!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <a
            href="mailto:hello@elevateandprosper.com"
            className="text-emerald-600 hover:text-emerald-500 text-lg transition-colors"
          >
            hello@elevateandprosper.com
          </a>
        </div>
      </section>
    </main>
  );
}
