import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            We'd love to hear from you.
          </p>
          <a
            href="mailto:hello@elevateandprosper.link"
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
            hello@elevateandprosper.link
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
