
export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#0d0c0b]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 py-10 md:px-16 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <div className="text-[2rem] font-black uppercase tracking-tight text-[#f6d59a]" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
            TEST LEAGUE
          </div>
          <p className="mt-4 max-w-xs text-[0.95rem] leading-[1.85] text-[#dfd1b4]" style={{ fontFamily: 'Georgia, serif' }}>
            © 2024 TEST LEAGUE. Managed by Talha Riaz and Muhammad Muzammil. Elite Operational Prestige.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-start gap-x-10 gap-y-4 pt-2 lg:pt-6">
          <a className="text-[0.9rem] font-medium tracking-wide text-[#e8d8b8] transition-colors hover:text-white" href="#">
            Privacy Policy
          </a>
          <a className="text-[0.9rem] font-medium tracking-wide text-[#e8d8b8] transition-colors hover:text-white" href="#">
            Terms of Service
          </a>
          <a className="text-[0.9rem] font-medium tracking-wide text-[#e8d8b8] transition-colors hover:text-white" href="#">
            Draft Regulations
          </a>
          <a className="text-[0.9rem] font-medium tracking-wide text-[#e8d8b8] transition-colors hover:text-white" href="#">
            Press Kit
          </a>
        </div>

        <div className="flex items-center gap-4 pt-1 lg:pt-4">
          <button
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-[#e8d8b8] transition-colors hover:border-[#f6d59a] hover:text-[#f6d59a]"
            type="button"
            aria-label="Language"
          >
            <span className="material-symbols-outlined text-[1.25rem]">language</span>
          </button>
          <button
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-[#e8d8b8] transition-colors hover:border-[#f6d59a] hover:text-[#f6d59a]"
            type="button"
            aria-label="Share"
          >
            <span className="material-symbols-outlined text-[1.15rem]">share</span>
          </button>
        </div>
      </div>
    </footer>
  );
}



