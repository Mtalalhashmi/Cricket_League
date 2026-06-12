function NavLink({ href, isActive, children }) {
  return (
    <a className={isActive ? 'text-white border-b border-white pb-1' : 'hover:text-white transition-colors'} href={href}>
      {children}
    </a>
  );
}

export default function Navigation({ activePage = 'home' }) {
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6" data-purpose="sticky-navbar">
      <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-3 flex items-center gap-12">
        <div className="flex items-center gap-3">
          <div className="bg-lime-400 text-black font-black px-2 py-1 rounded text-sm">TL</div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] font-bold tracking-widest uppercase">Test League</span>
            <span className="text-[8px] text-gray-400 tracking-tighter uppercase">Private Circuit</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
          <NavLink href={homeHref} isActive={isHome}>
            Home
          </NavLink>
          <NavLink href={legacyHref} isActive={isLegacy}>
            Legacy
          </NavLink>
          <NavLink href={rosterHref} isActive={isRoster}>
            Roster
          </NavLink>
          <NavLink href={franchisesHref} isActive={isFranchises}>
            Franchises
          </NavLink>
          <NavLink href={championsHref} isActive={isChampions}>
            Champions
          </NavLink>
        </div>

        <a className={`${isAuction ? 'text-white border-b border-white pb-1' : 'hover:text-white transition-colors'} blink-live-draft`} href="/auction">
          <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-500 pulse-blue" />
            <span className="text-blue-500">Live Draft</span>
          </span>
        </a>
      </div>
    </nav>
  );
}

