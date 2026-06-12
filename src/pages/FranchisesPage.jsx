import Navigation from '../components/Navigation';

const franchises = [
  {
    initials: 'TR',
    name: 'Team Royals',
    mantra: 'Reign Supreme.',
    description:
      'The crown jewel of the league. Team Royals built their identity on elegance and dominance. Boasting the most consistent batting lineup in history, their philosophy of aggressive all-out attacking cricket has never wavered. They remain the benchmark franchise.',
    stats: { wins: '24', titles: '2', losses: '10' },
    form: ['win', 'win', 'win', 'win', 'win', 'loss', 'loss', 'win', 'win'],
    glowClass: 'glow-royals',
    iconClass: 'icon-glow-royals',
    accentClass: 'text-yellow-500',
    cardTone: 'shadow-[0_0_40px_-10px_rgba(255,45,45,0.15)] border border-[rgba(255,45,45,0.1)]',
    iconColor: '#fbbf24',
    emblem: 'crown',
  },
  {
    initials: 'RE',
    name: 'Team Red Eagles',
    mantra: 'Soar Above.',
    description:
      'Team Red Eagles are synonymous with dramatic never-say-die victories. Renowned for their fierce fast-bowling cartels and electrifying fielding, they have built their identity on backing the impossible. Their robust scouting network has produced breakout talent.',
    stats: { wins: '20', titles: '1', losses: '14' },
    form: ['loss', 'loss', 'win', 'loss', 'loss', 'loss', 'loss', 'loss', 'loss'],
    glowClass: 'glow-eagles',
    iconClass: 'icon-glow-eagles',
    accentClass: 'text-red-500',
    cardTone: 'shadow-[0_0_40px_-10px_rgba(255,0,0,0.15)] border border-[rgba(255,0,0,0.1)]',
    iconColor: '#ef4444',
    emblem: 'eagle',
  },
  {
    initials: 'KW',
    name: 'Team Kashmir Warriors',
    mantra: 'Fearless & Fierce.',
    description:
      'Widely regarded as the most tactically astute franchise in the competition. The Warriors blend raw, fearless young talent from the mountains with seasoned experience. Their home surface is the most feared in the league.',
    stats: { wins: '18', titles: '1', losses: '16' },
    form: ['loss', 'win', 'win', 'win', 'win', 'loss', 'loss', 'win', 'win'],
    glowClass: 'glow-warriors',
    iconClass: 'icon-glow-warriors',
    accentClass: 'text-green-400',
    cardTone: 'shadow-[0_0_40px_-10px_rgba(34,197,94,0.15)] border border-[rgba(34,197,94,0.1)]',
    iconColor: '#22c55e',
    emblem: 'star',
  },
];

function FranchiseIcon({ emblem, iconColor }) {
  if (emblem === 'crown') {
    return (
      <svg className="w-16 h-16" viewBox="0 0 64 64" aria-hidden="true" style={{ color: iconColor }}>
        <path fill="currentColor" d="M16 48h32V20l-8 8-8-16-8 16-8-8v28Zm0 4h32v4H16v-4Z" />
      </svg>
    );
  }

  if (emblem === 'eagle') {
    return (
      <svg className="w-16 h-16" viewBox="0 0 64 64" aria-hidden="true" style={{ color: iconColor }}>
        <path fill="currentColor" d="M32 10c10 0 18 8 18 18 0 8-5 15-12 17l-6-8-6 8c-7-2-12-9-12-17 0-10 8-18 18-18Zm0 10 8 14H24l8-14Z" />
      </svg>
    );
  }

  return (
    <svg className="w-16 h-16" viewBox="0 0 64 64" aria-hidden="true" style={{ color: iconColor }}>
      <path fill="currentColor" d="M32 8l8 14 16 2-12 11 3 16-15-8-15 8 3-16-12-11 16-2 8-14Z" />
    </svg>
  );
}

function FormBars({ form }) {
  return (
    <div className="flex gap-1">
      {form.map((result, index) => (
        <div
          key={`${result}-${index}`}
          className={`h-1.5 flex-1 rounded-sm ${result === 'win' ? 'bg-[#22c55e]' : 'bg-[#ef4444]'}`}
        />
      ))}
    </div>
  );
}

function FranchiseCard({ franchise }) {
  return (
    <article className={`bg-[#0d0d0d] rounded-3xl p-8 flex flex-col items-center text-center transition-transform hover:scale-[1.02] ${franchise.cardTone}`} data-purpose="franchise-card">
      <div className="mb-6">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${franchise.iconClass}`} style={{ boxShadow: `0 0 12px ${franchise.iconColor}99` }}>
          <FranchiseIcon emblem={franchise.emblem} iconColor={franchise.iconColor} />
        </div>
      </div>

      <span className="text-[10px] text-gray-500 font-bold tracking-[0.4em] mb-1">{franchise.initials}</span>
      <h2 className="text-2xl font-bold text-white mb-2">{franchise.name}</h2>
      <p className={`italic text-sm mb-8 ${franchise.accentClass}`}>"{franchise.mantra}"</p>
      <p className="text-gray-400 text-xs leading-relaxed mb-10 px-2">{franchise.description}</p>

      <div className="w-full bg-black/40 rounded-xl p-5 border border-white/5">
        <div className="grid grid-cols-3 mb-6">
          <div className="flex flex-col">
            <span className="text-green-400 text-lg font-bold">{franchise.stats.wins}</span>
            <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Wins</span>
          </div>
          <div className="flex flex-col border-x border-white/10">
            <div className="flex items-center justify-center space-x-1">
              <span className="text-yellow-500 text-lg font-bold">{franchise.stats.titles}</span>
            </div>
            <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Titles</span>
          </div>
          <div className="flex flex-col">
            <span className="text-red-500 text-lg font-bold">{franchise.stats.losses}</span>
            <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Losses</span>
          </div>
        </div>

        <div className="w-full text-left">
          <span className="text-[8px] text-gray-600 font-bold uppercase tracking-widest mb-2 block">Recent Form</span>
          <FormBars form={franchise.form} />
        </div>
      </div>
    </article>
  );
}

export default function FranchisesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center w-full bg-[#050505] text-white font-sans">
      <Navigation activePage="franchises" />

      <section className="mt-32 md:mt-40 mb-16 text-center px-6" data-purpose="hero-title">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-[0.3em] uppercase mb-4 text-white">Franchise Pillars</h1>
        <p className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">Three Chartered Network Outposts</p>
      </section>

      <main className="w-full max-w-none px-6 pb-24" data-purpose="franchise-grid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {franchises.map((franchise) => (
            <FranchiseCard key={franchise.name} franchise={franchise} />
          ))}
        </div>
      </main>
    </div>
  );
}