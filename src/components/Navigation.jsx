function NavLink({ href, isActive, children }) {
  return (
    <a className={isActive ? 'text-white border-b border-white pb-1' : 'hover:text-white transition-colors'} href={href}>
      {children}
    </a>
  );
}

import { useState } from 'react';

export default function Navigation({ activePage = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = activePage === 'home';
  const isLegacy = activePage === 'legacy';
  const isRoster = activePage === 'roster';
  const isFranchises = activePage === 'franchises';
  const isChampions = activePage === 'champions';
  const isAuction = activePage === 'auction';

  const homeHref = isHome ? '#home' : '/';
  const legacyHref = '/legacy';
  const rosterHref = '/roster';
  const franchisesHref = '/franchises';
  const championsHref = '/champions';

  const linkClass = 'block px-3 py-2 text-[11px] sm:text-[12px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors';


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6" data-purpose="sticky-navbar">
      <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-3 flex items-center gap-12 relative">
        <div className="flex items-center gap-3">
          <div className="bg-lime-400 text-black font-black px-2 py-1 rounded text-sm">TL</div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] font-bold tracking-widest uppercase">Test League</span>
            <span className="text-[8px] text-gray-400 tracking-tighter uppercase">Private Circuit</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
          <NavLink href={homeHref} isActive={isHome}>Home</NavLink>
          <NavLink href={legacyHref} isActive={isLegacy}>Legacy</NavLink>
          <NavLink href={rosterHref} isActive={isRoster}>Roster</NavLink>
          <NavLink href={franchisesHref} isActive={isFranchises}>Franchises</NavLink>
          <NavLink href={championsHref} isActive={isChampions}>Champions</NavLink>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-black/20 text-[#e8d8b8] hover:border-[#f6d59a] hover:text-[#f6d59a]"
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="material-symbols-outlined text-[1.25rem]">menu</span>
        </button>

        <a
          className={`${isAuction ? 'text-white border-b border-white pb-1' : 'hover:text-white transition-colors'} blink-live-draft`}
          href="/auction"
        >
          <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-500 pulse-blue" />
            <span className="text-blue-500">Live Draft</span>
          </span>
        </a>

        {/* Mobile menu */}
        <div
          className={
            menuOpen
              ? 'md:hidden absolute top-full left-0 right-0 mt-3'
              : 'md:hidden absolute top-full left-0 right-0 mt-3 pointer-events-none opacity-0'
          }
        >
          <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl px-3 py-2">
            <a
              href={homeHref}
              className={`${isHome ? 'text-white border-b border-white pb-1' : linkClass}`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href={legacyHref}
              className={`${isLegacy ? 'text-white border-b border-white pb-1' : linkClass}`}
              onClick={() => setMenuOpen(false)}
            >
              Legacy
            </a>
            <a
              href={rosterHref}
              className={`${isRoster ? 'text-white border-b border-white pb-1' : linkClass}`}
              onClick={() => setMenuOpen(false)}
            >
              Roster
            </a>
            <a
              href={franchisesHref}
              className={`${isFranchises ? 'text-white border-b border-white pb-1' : linkClass}`}
              onClick={() => setMenuOpen(false)}
            >
              Franchises
            </a>
            <a
              href={championsHref}
              className={`${isChampions ? 'text-white border-b border-white pb-1' : linkClass}`}
              onClick={() => setMenuOpen(false)}
            >
              Champions
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}


