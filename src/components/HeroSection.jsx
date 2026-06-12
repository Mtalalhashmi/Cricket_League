export default function HeroSection() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-secondary-container/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] radial-glow opacity-50" />

        {/* Radar Graphic */}
        <div className="absolute top-[10%] left-[-5%] w-[800px] h-[800px] border border-white/5 rounded-full animate-radar flex items-center justify-center opacity-30">
          <div className="w-[600px] h-[600px] border border-white/5 rounded-full" />
          <div className="w-[400px] h-[400px] border border-white/10 rounded-full" />
          <div className="w-[200px] h-[200px] border border-white/20 rounded-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-16 grid grid-cols-12 items-center gap-8 lg:gap-10">
        <div className="col-span-12 lg:col-span-7 flex flex-col items-start gap-4">
          <div className="flex items-center gap-4 bg-surface-container-high/50 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full">
            <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse" />
            <span className="font-label-caps text-label-caps text-on-surface tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Exclusivity Confirmed</span>
          </div>

          <h1 className="font-display-lg text-[72px] md:text-[120px] lg:text-[180px] leading-[0.85] font-black uppercase victory-text-gradient select-none" style={{ fontFamily: 'Anybody, sans-serif' }}>
            TEST<br />LEAGUE
          </h1>

          <div className="hidden lg:block absolute -left-12 top-1/2 -rotate-90 origin-left">
            <span className="font-label-caps text-label-caps text-on-surface-variant/40 tracking-[0.5em]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              OPERATIONAL PRESTIGE • EST 2024
            </span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:pl-12 flex flex-col gap-5 lg:mt-32" id="legacy">
          <div className="border-l-[4px] border-[#f3d59b] pl-4 py-1">
            <p className="text-[1.08rem] leading-[1.7] text-[#eadfcf] font-semibold" style={{ fontFamily: 'Georgia, serif' }}>
              Managed by the visionaries <span className="text-primary font-bold">Talha Riaz</span> and{' '}
              <span className="text-primary font-bold">Muhammad Muzammil</span>, the TEST LEAGUE represents the absolute
              pinnacle of cricket governance and elite operational prestige.
            </p>
          </div>

          <p className="max-w-md text-[1.02rem] leading-[1.8] text-[#d7c8ae]" style={{ fontFamily: 'Georgia, serif' }}>
            Experience a digital interface designed for champions, where every move is calculated, and every victory is
            etched into the legacy of the game.
          </p>

          <div className="flex flex-wrap gap-5 mt-8">
            <a
              className="bg-[#ffc21f] text-[#3b2d00] px-10 py-4 text-[1.15rem] font-black shadow-[0_16px_40px_rgba(255,194,31,0.18)] transition-transform duration-300 hover:-translate-y-0.5 inline-flex items-center gap-3"
              href="/auction"
              style={{ fontFamily: 'Arial Black, Arial, sans-serif', clipPath: 'polygon(0 0, 92% 0, 100% 18%, 100% 100%, 0 100%)' }}
            >
              Enter Live Draft
            </a>
            <a className="group flex items-center gap-4 text-[#8ed9ea] text-[1.1rem] font-bold hover:text-white transition-colors" href="/legacy" style={{ fontFamily: 'Arial, sans-serif' }}>
              Discover the Legacy
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform text-[1.2rem]">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-1 mt-10 max-w-[420px]" id="roster">
            <div className="bg-[#111111] border border-white/6 px-6 py-8 min-h-[160px] flex flex-col justify-between">
              <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#bda98a] font-semibold" style={{ fontFamily: 'Georgia, serif' }}>Total Prize Pool</div>
              <div className="text-[3rem] leading-none font-black text-[#f3d79e]" style={{ fontFamily: 'Georgia, serif' }}>$2.5M+</div>
            </div>
            <div className="bg-[#111111] border border-white/6 px-6 py-8 min-h-[160px] flex flex-col justify-between">
              <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#bda98a] font-semibold" style={{ fontFamily: 'Georgia, serif' }}>Live Viewers</div>
              <div className="text-[3rem] leading-none font-black text-[#8ed9ea]" style={{ fontFamily: 'Georgia, serif' }}>842K</div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-40 relative px-5 md:px-16 max-w-[1440px] mx-auto" id="franchises">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="lg:w-1/3 max-w-[380px]">
            <h2 className="text-[3rem] sm:text-[3.6rem] leading-[0.92] font-black text-white mb-8" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>
              Elite
              <br />
              Franchises
            </h2>
            <p className="text-[1rem] leading-[1.7] text-[#cbb694] mb-10 max-w-sm" style={{ fontFamily: 'Georgia, serif' }}>
              Six world-class organizations competing for immortality on the pitch.
            </p>
            <div className="flex flex-col gap-0 border-t border-white/5">
              <div className="py-6 border-b border-white/5 transition-colors cursor-pointer group">
                <span className="block mb-1 text-[0.8rem] font-semibold text-[#d8c4a0]" style={{ fontFamily: 'Georgia, serif' }}>01</span>
                <h3 className="text-[2rem] leading-none font-black text-[#f0f0f0] group-hover:translate-x-2 transition-transform" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>Obsidian Titans</h3>
              </div>
              <div className="py-6 border-b border-white/5 transition-colors cursor-pointer group">
                <span className="block mb-1 text-[0.8rem] font-semibold text-[#d8c4a0]" style={{ fontFamily: 'Georgia, serif' }}>02</span>
                <h3 className="text-[2rem] leading-none font-black text-[#f0f0f0] group-hover:translate-x-2 transition-transform" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>Solar Sentinels</h3>
              </div>
              <div className="py-6 border-b border-white/5 transition-colors cursor-pointer group">
                <span className="block mb-1 text-[0.8rem] font-semibold text-[#d8c4a0]" style={{ fontFamily: 'Georgia, serif' }}>03</span>
                <h3 className="text-[2rem] leading-none font-black text-[#f0f0f0] group-hover:translate-x-2 transition-transform" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>Azure Apex</h3>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 relative">
            <div className="relative w-full aspect-[16/9] min-h-[420px] rounded-[1.25rem] overflow-hidden group shadow-[0_40px_120px_rgba(0,0,0,0.55)] border border-white/10 bg-black" id="champions">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="A high-contrast cinematic shot of a modern cricket stadium at night under intense floodlights. The field is lush green, and the stands are filled with cheering spectators. A single player stands in the center of the pitch, glowing slightly from the overhead lights, creating a heroic and high-stakes atmosphere. The overall style is dark, sleek, and prestigious, utilizing deep blacks and vibrant stadium lighting."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2MCFR0PzltmPEaex8NJiKbnwn1qAW3KEuht4BE66mg5b6Kz7k7S5QzKzGnpG928blV5JRoBkV0Leg9FLpTXbO4LHAA2PfVzz5gvx_bAuaXK7fTVE-jf9PKiyFvIRN0lEsBkrrMwro3ewzAAQ9Ji0mA0irtv5JmbYWHadwmRUf_jFGp20r0ETsozWSWWAEbEQxxoi39Pd5TymY8XDJeqDhXugZCf5IU4TLnoNHvzGbsojslWygJ0_023-17w6XUL_cOfMM0H2xq6Wz"
                alt="Live Scene"
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_22%),linear-gradient(to_bottom,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.34)_45%,rgba(0,0,0,0.82)_100%)]" />
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-80" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_bottom,transparent_0%,rgba(0,0,0,0.18)_35%,rgba(0,0,0,0.66)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 max-w-[92%]">
                <div className="inline-block mb-3 bg-[#f5d79d] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-black shadow-[0_8px_24px_rgba(0,0,0,0.35)]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Live Scene
                </div>
                <h3 className="max-w-4xl text-4xl leading-none font-black text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.7)] sm:text-5xl lg:text-6xl" style={{ fontFamily: 'Anybody, sans-serif' }}>
                  The Colosseum of Cricket
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

