import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-amber-50/30" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <div className="animate-fade-up">
                <span className="inline-block text-xs font-semibold tracking-widest text-teal-600 uppercase mb-6 bg-teal-50 px-4 py-2 rounded-full">
                  Startup Growth Partner
                </span>
              </div>

              <h1 className="animate-fade-up animation-delay-100 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Take your startup
                <span className="text-teal-600"> to the next level.</span>
              </h1>

              <p className="animate-fade-up animation-delay-200 text-lg text-slate-600 mb-8 max-w-lg">
                We help ambitious tech founders scale their businesses with strategic guidance, operational excellence, and proven growth frameworks.
              </p>

              <div className="animate-fade-up animation-delay-300 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-600/25 hover:-translate-y-0.5"
                >
                  Get Started
                </Link>
                <Link
                  href="#services"
                  className="border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-full transition-all hover:bg-slate-50"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* Right - Logo */}
            <div className="animate-scale-in animation-delay-200 relative flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
                <Image
                  src="/logo.png"
                  alt="Elevate & Prosper"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-white border-y border-slate-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
            Trusted by innovative startups
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {["TechFlow", "InnovateLabs", "ScaleUp", "GrowthBox", "LaunchPad"].map((name, i) => (
              <div
                key={name}
                className="text-xl font-display font-bold text-slate-300 hover:text-slate-400 transition-colors cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest text-teal-600 uppercase mb-4">
              What We Do
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Services that drive growth
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From strategy to execution, we provide the expertise your startup needs to thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Growth Strategy",
                description: "Data-driven strategies to identify opportunities and accelerate your market expansion.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Product Innovation",
                description: "Transform ideas into market-ready products with our product development expertise.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Team Building",
                description: "Build high-performing teams with our recruitment and culture development programs.",
              },
            ].map((service, i) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
              >
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest text-teal-600 uppercase mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                We've been in your shoes
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Founded by entrepreneurs who've built and scaled multiple startups, we understand the challenges you face. Our hands-on approach means we're partners in your success, not just consultants.
              </p>

              <div className="space-y-6">
                {[
                  { number: "50+", label: "Startups Helped" },
                  { number: "$100M+", label: "Funding Raised" },
                  { number: "95%", label: "Client Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="text-3xl font-display font-bold text-teal-600">
                      {stat.number}
                    </div>
                    <div className="text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🎯", title: "Focused Approach", desc: "Tailored strategies for your unique challenges" },
                { icon: "⚡", title: "Fast Results", desc: "See measurable progress within weeks" },
                { icon: "🤝", title: "True Partnership", desc: "We're invested in your long-term success" },
                { icon: "📈", title: "Proven Methods", desc: "Battle-tested frameworks that work" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-50 rounded-2xl p-6 hover:bg-teal-50 transition-colors"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-display font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-teal-600 to-teal-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-800/30 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to elevate your startup?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your growth goals. Schedule a free consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-slate-50 text-teal-700 font-bold px-10 py-4 rounded-full transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            Schedule a Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
