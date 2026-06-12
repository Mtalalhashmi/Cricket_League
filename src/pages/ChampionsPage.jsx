import Navigation from '../components/Navigation';

const champions = [
  {
    season: 'S4',
    year: 'Year 2023',
    title: 'Team Royals',
    icon: '👑',
    iconClass: 'text-[#FDB813]',
    runnerUp: 'Team Red Eagles',
    quote: 'A dominant campaign setting a league NRR record. Ten wins from twelve games — a masterclass in total cricket.',
    mvp: 'Muzzumil',
    statLine: '524 runs & 18 wkts in the tournament',
    result: 'Royals won by 7 wickets',
    cardClass: 'card-glow-red',
  },
  {
    season: 'S3',
    year: 'Year 2022',
    title: 'Team Kashmir Warriors',
    icon: '★',
    iconClass: 'text-green-500',
    runnerUp: 'Team Royals',
    quote: "Maiden title. The Warriors' bowling attack was unplayable on the turner, restricting Royals to 30 runs under par.",
    mvp: 'Saqib',
    statLine: '8 wickets in the final week alone',
    result: 'Kashmir won by 18 runs',
    cardClass: 'card-glow-green',
  },
  {
    season: 'S2',
    year: 'Year 2021',
    title: 'Team Red Eagles',
    icon: '🦅',
    iconClass: 'text-red-700',
    runnerUp: 'Team Kashmir Warriors',
    quote: 'The most iconic chase in league history. Needing 12 off the last over, Eagles pulled off the improbable and cemented their legacy.',
    mvp: 'Saad',
    statLine: '197* in the playoffs — a record',
    result: 'Eagles won by 4 wickets',
    cardClass: 'card-glow-maroon',
  },
];

function ChampionCard({ champion }) {
  return (
    <div className={`rounded-xl p-8 flex items-center ${champion.cardClass}`} data-purpose="champion-card">
      <div className="flex-shrink-0 w-16 h-16 bg-[#FDB813] rounded-lg flex flex-col items-center justify-center mr-8 shadow-[0_0_20px_rgba(253,184,19,0.3)]">
        <span className="text-black font-black text-xl">{champion.season}</span>
      </div>

      <div className="flex-grow min-w-0">
        <div className="text-[10px] text-[#FDB813] font-bold tracking-widest uppercase mb-1">{champion.year}</div>
        <div className="flex items-center mb-1">
          <span className={`mr-2 ${champion.iconClass}`}>{champion.icon}</span>
          <h2 className="text-2xl font-black uppercase">{champion.title}</h2>
        </div>
        <p className="text-xs text-zinc-400 mb-3">
          <span className="font-bold">Runner-up:</span> {champion.runnerUp}
        </p>
        <p className="text-[11px] italic text-zinc-500 max-w-sm leading-relaxed">"{champion.quote}"</p>
      </div>

      <div className="flex-shrink-0 border-l border-zinc-800 pl-8 ml-4 text-right min-w-[200px] hidden md:block">
        <div className="text-[9px] text-zinc-500 font-bold tracking-widest uppercase mb-1">Tournament MVP</div>
        <div className="text-lg font-black uppercase">{champion.mvp}</div>
        <div className="text-xs text-[#FDB813] font-bold py-1 border-y border-zinc-800 my-2">{champion.statLine}</div>
        <div className="text-[10px] text-zinc-400">{champion.result}</div>
      </div>
    </div>
  );
}

export default function ChampionsPage() {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-white font-sans antialiased pb-20">
      <Navigation activePage="champions" />

      <section className="text-center mb-16 px-4 pt-28 md:pt-32" data-purpose="page-title">
        <h1 className="text-3xl md:text-4xl font-black tracking-[0.4em] uppercase mb-2 text-white">Hall of Champions</h1>
        <p className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase font-bold">Historical Record Ledger</p>
      </section>

      <main className="max-w-4xl mx-auto px-4 space-y-6 w-full" data-purpose="champions-feed">
        {champions.map((champion) => (
          <ChampionCard key={champion.season} champion={champion} />
        ))}
      </main>
    </div>
  );
}