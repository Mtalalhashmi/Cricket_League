import Navigation from '../components/Navigation';
import { players } from '../data/players';

function PlayerCard({ card }) {
  return (
    <article className="card-gradient rounded-2xl overflow-hidden relative group" data-purpose="player-card">
      <div className="absolute top-4 right-4 z-10">
        <span className={`text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-widest badge-blur ${card.badgeClass}`}>
          {card.badge}
        </span>
      </div>

      <div className={`h-48 overflow-hidden relative bg-gradient-to-b ${card.imageGradient} to-transparent`}>
        <img
          alt={card.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          src={card.image}
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{card.name}</h3>
        <p className="text-xs text-gray-400 leading-relaxed mb-6 h-12 overflow-hidden">{card.description}</p>

        <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-6 text-center">
          <div>
            <p className="text-lg font-bold gold-accent leading-none">{card.matches}</p>
            <p className="text-[8px] uppercase tracking-widest text-gray-500 mt-1">Matches</p>
          </div>
          <div>
            <p className="text-lg font-bold gold-accent leading-none">{card.highScore}</p>
            <p className="text-[8px] uppercase tracking-widest text-gray-500 mt-1">High Score</p>
          </div>
          <div>
            <p className="text-lg font-bold gold-accent leading-none">{card.bestSr}</p>
            <p className="text-[8px] uppercase tracking-widest text-gray-500 mt-1">Best SR</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function RosterPage() {
  return (
    <div className="obsidian-grid min-h-screen w-full bg-[#050505] text-white">
      <Navigation activePage="roster" />

      <main className="w-full pt-32 pb-20 px-6 sm:px-8 lg:px-10">
        <section className="w-full text-center mb-16" data-purpose="page-title">
          <h1 className="text-4xl md:text-5xl font-black tracking-[0.3em] uppercase mb-4 gold-accent">Registry Archive</h1>
          <p className="text-gray-500 tracking-widest text-sm uppercase">10 Verified Athlete Contracts</p>
        </section>

        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-purpose="player-registry">
          {players.map((card) => (
            <PlayerCard key={card.name} card={card} />
          ))}
        </section>
      </main>
    </div>
  );
}