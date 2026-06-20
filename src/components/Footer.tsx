export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <a
          href="/"
          className="text-[26px] font-extrabold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
        >
          AL
        </a>
        <p className="text-sm text-[#555]">
          &copy; {new Date().getFullYear()} Александр. Сделано с душой.
        </p>
      </div>
    </footer>
  );
}
