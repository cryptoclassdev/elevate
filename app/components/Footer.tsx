export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Elevate & Prosper
        </p>
      </div>
    </footer>
  );
}
