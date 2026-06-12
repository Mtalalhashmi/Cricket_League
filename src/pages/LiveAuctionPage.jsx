import { useMemo, useState } from 'react';
import Navigation from '../components/Navigation';
import { players } from '../data/players';

const teamSeed = [
  { name: 'Team Royals', budget: 3000000, squad: [] },
  { name: 'Team Red Eagles', budget: 3000000, squad: [] },
  { name: 'Team Kashmir Warriors', budget: 3000000, squad: [] },
];

function formatCurrency(value) {
  return `₹${new Intl.NumberFormat('en-IN').format(value)}`;
}

function AuctionCard({ player }) {
  return (
    <section className="col-span-12 lg:col-span-8" data-purpose="player-auction-display">
      <div className="glass-card rounded-[2rem] overflow-hidden border-white/10 flex flex-col h-[600px]">
        <div className="relative flex-grow dotted-bg flex items-center justify-center bg-gradient-to-b from-green-950/20 to-transparent">
          <div className="absolute top-8 left-8 bg-black/80 p-4 rounded-xl border border-white/10" data-purpose="valuation-badge">
            <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Base Valuation</p>
            <p className="text-xl font-black text-gold">{formatCurrency(player.basePrice)}</p>
          </div>

          <div className="relative w-64 h-64 rounded-full border-4 border-green-800/30 overflow-hidden shadow-[0_0_100px_rgba(34,197,94,0.1)]">
            <img alt={`${player.name} Profile`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src={player.image} />
          </div>
        </div>

        <div className="bg-black/60 p-12 flex justify-between items-end border-t border-white/10">
          <div className="max-w-md">
            <h2 className="text-6xl font-black mb-4">{player.name}</h2>
            <span className="inline-block px-4 py-1.5 rounded-full border border-green-500/50 text-[10px] font-black uppercase tracking-widest text-green-400 mb-6" data-purpose="player-role">
              {player.role}
            </span>
            <p className="text-zinc-400 text-sm leading-relaxed">{player.description}</p>
          </div>

          <div className="flex gap-12 text-center">
            <div>
              <p className="text-3xl font-black text-gold">{player.matches}</p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 mt-1">Matches</p>
            </div>
            <div>
              <p className="text-3xl font-black text-gold">{player.highScore}</p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 mt-1">High Score</p>
            </div>
            <div>
              <p className="text-3xl font-black text-gold">{player.strikeRate}</p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 mt-1">Strike Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Controls({ currentBid, currentTeam, hammerEnabled, onRaise, onPass, onHammer, teams }) {
  return (
    <aside className="col-span-12 lg:col-span-4 space-y-6" data-purpose="auction-controls">
      <div className="glass-card rounded-[1.5rem] p-8 text-center border-cyan/20 bg-cyan/5">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-4">Current Maximum Bid</p>
        <div className="text-6xl font-black text-cyan drop-shadow-[0_0_15px_rgba(0,209,255,0.3)]">{formatCurrency(currentBid)}</div>
        <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-zinc-500">{currentTeam ? `Bidding: ${currentTeam}` : 'No active bid yet'}</p>
      </div>

      <div className="space-y-3">
        <button
className="w-full bg-cyan hover:bg-cyan/90 text-white disabled:text-white py-5 rounded-xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-cyan/20 disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={onRaise}
          type="button"
        >
          ↑ Command Raise
        </button>
        <div className="grid grid-cols-2 gap-3">
          <button
            className="border border-green-500/30 hover:bg-green-500/10 text-green-400 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={onHammer}
            type="button"
            disabled={!hammerEnabled}
          >
            🔨 Hammer
          </button>
          <button
            className="border border-red-500/30 hover:bg-red-500/10 text-red-400 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all"
            onClick={onPass}
            type="button"
          >
            Pass
          </button>
        </div>
      </div>

      <div className="glass-card rounded-[1.5rem] p-6 border-white/5">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Allocated</h3>
          <span className="bg-zinc-800 text-zinc-400 text-[10px] w-6 h-6 flex items-center justify-center rounded-full">{teams.reduce((count, team) => count + team.squad.length, 0)}</span>
        </div>
        <div className="space-y-4">
          {teams.map((team) => (
            <div key={team.name} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
              <div>
                <p className="font-black text-sm text-white">{team.squad[0]?.name || team.name}</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{team.squad[0] ? team.name : 'TEAM WALLET'}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-cyan">{formatCurrency(team.budget)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function AuctionHeader() {
  return (
    <div className="max-w-7xl mx-auto w-full px-8 mt-12 flex justify-between items-end border-b border-white/5 pb-2">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00d1ff]" />
        <span className="text-xs font-black text-cyan uppercase tracking-widest">Live Auction</span>
      </div>
      <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest text-zinc-500">
        <a className="text-cyan border-b-2 border-cyan pb-2" href="#">Control Panel</a>
        <a className="hover:text-white transition-colors pb-2" href="#">Franchise Ledgers</a>
        <span className="pb-2">1/10</span>
      </div>
    </div>
  );
}

export default function LiveAuctionPage() {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentBid, setCurrentBid] = useState(players[0].basePrice);
  const [biddingTeam, setBiddingTeam] = useState(teamSeed[0].name);
  const [teams, setTeams] = useState(teamSeed);
  const [soldPlayers, setSoldPlayers] = useState([]);
  const [passedPlayers, setPassedPlayers] = useState([]);
  const [passedTeams, setPassedTeams] = useState([]);
  const [passReadyToAdvance, setPassReadyToAdvance] = useState(false);

  const currentPlayer = players[currentPlayerIndex];
  const isCurrentPlayerSold = soldPlayers.some((player) => player.name === currentPlayer?.name);
  const activeTeams = useMemo(() => teams.filter((team) => !passedTeams.includes(team.name)), [passedTeams, teams]);
  const hammerEnabled = Boolean(biddingTeam) && !isCurrentPlayerSold;

  const resetForPlayer = (nextIndex) => {
    if (nextIndex >= players.length) {
      return false;
    }

    if (soldPlayers.some((player) => player.name === players[nextIndex].name)) {
      return false;
    }

    setCurrentPlayerIndex(nextIndex);
    setCurrentBid(players[nextIndex].basePrice);
    setBiddingTeam(teamSeed[0].name);
    setPassedTeams([]);
    setPassReadyToAdvance(false);
    return true;
  };

  const advancePlayer = () => {
    resetForPlayer(currentPlayerIndex + 1);
  };

  const handleRaise = () => {
    if (!currentPlayer || activeTeams.length === 0 || isCurrentPlayerSold) return;

    const nextBid = currentBid + 50000;
    const activeTeamIndex = activeTeams.findIndex((team) => team.name === biddingTeam);
    const nextTeam = activeTeams[(activeTeamIndex + 1) % activeTeams.length] || activeTeams[0];

    setCurrentBid(nextBid);
    if (nextTeam) {
      setBiddingTeam(nextTeam.name);
    }
  };

  const handlePass = () => {
    if (!biddingTeam || isCurrentPlayerSold) return;

    if (passReadyToAdvance) {
      setPassedPlayers((current) => [...current, currentPlayer]);
      setPassedTeams([]);
      setPassReadyToAdvance(false);
      advancePlayer();
      return;
    }

    const nextPassedTeams = passedTeams.includes(biddingTeam) ? passedTeams : [...passedTeams, biddingTeam];
    setPassedTeams(nextPassedTeams);

    const remainingTeams = teams.filter((team) => !nextPassedTeams.includes(team.name));
    if (remainingTeams.length > 0) {
      setBiddingTeam(remainingTeams[0].name);
      return;
    }

    setPassReadyToAdvance(true);
  };

  const handleHammer = () => {
    if (!hammerEnabled || !biddingTeam || isCurrentPlayerSold) return;

    setTeams((currentTeams) =>
      currentTeams.map((team) => {
        if (team.name !== biddingTeam) {
          return team;
        }

        return {
          ...team,
          budget: team.budget - currentBid,
          squad: [...team.squad, { ...currentPlayer, soldFor: currentBid }],
        };
      }),
    );

    setSoldPlayers((current) => [...current, { ...currentPlayer, soldFor: currentBid, team: biddingTeam }]);
    advancePlayer();
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-white bg-[#0e0e0f] dotted-bg">
      <Navigation activePage="auction" />
      <AuctionHeader />

      <main className="flex-grow container mx-auto px-8 py-8 grid grid-cols-12 gap-8 items-start">
        <AuctionCard player={currentPlayer} />
        <Controls
          currentBid={currentBid}
          currentTeam={biddingTeam}
          hammerEnabled={hammerEnabled}
          onHammer={handleHammer}
          onPass={handlePass}
          onRaise={handleRaise}
          teams={teams}
        />
      </main>

      <section className="container mx-auto px-8 pb-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 glass-card rounded-[1.5rem] p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Sold Players</h3>
            <span className="text-[10px] text-zinc-500">{soldPlayers.length}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {soldPlayers.length === 0 ? (
              <p className="text-sm text-zinc-500 col-span-full">No players sold yet.</p>
            ) : (
              soldPlayers.map((player) => (
                <div key={`${player.name}-${player.team}`} className="bg-black/40 rounded-xl p-4 border border-white/5 flex justify-between items-center">
                  <div>
                    <p className="font-black text-white">{player.name}</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{player.team}</p>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-green-400">Sold</p>
                  </div>
                  <p className="text-cyan font-black">{formatCurrency(player.soldFor)}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 glass-card rounded-[1.5rem] p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Passed Players</h3>
            <span className="text-[10px] text-zinc-500">{passedPlayers.length}</span>
          </div>
          <div className="space-y-3">
            {passedPlayers.length === 0 ? (
              <p className="text-sm text-zinc-500">No passes recorded yet.</p>
            ) : (
              passedPlayers.map((player) => (
                <div key={player.name} className="bg-black/40 rounded-xl p-4 border border-white/5">
                  <p className="font-black text-white">{player.name}</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Passed</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8 pb-12">
        <div className="glass-card rounded-[1.5rem] p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Current Queue</h3>
            <span className="text-[10px] text-zinc-500">{currentPlayerIndex + 1}/{players.length}</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {players.map((player, index) => (
              <button
                key={player.name}
                className={`rounded-xl border p-3 text-center transition-all text-left ${index === currentPlayerIndex ? 'border-cyan-400 bg-cyan-400/10 shadow-[0_0_20px_rgba(0,209,255,0.12)]' : 'border-white/5 bg-black/30 hover:border-cyan-400/40 hover:bg-cyan-400/5'} ${soldPlayers.some((soldPlayer) => soldPlayer.name === player.name) ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => resetForPlayer(index)}
                type="button"
                disabled={soldPlayers.some((soldPlayer) => soldPlayer.name === player.name)}
              >
                <img alt={player.name} src={player.image} className="w-12 h-12 rounded-full object-cover mx-auto mb-2 grayscale" />
                <p className="text-xs font-black">{player.name}</p>
                <p className="text-[10px] text-zinc-500">{formatCurrency(player.basePrice)}</p>
                {soldPlayers.some((soldPlayer) => soldPlayer.name === player.name) ? <p className="mt-2 text-[10px] font-black uppercase tracking-widest text-green-400">Sold</p> : null}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}