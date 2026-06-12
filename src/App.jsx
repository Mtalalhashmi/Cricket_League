import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import LegacyPage from './pages/LegacyPage';
import RosterPage from './pages/RosterPage';
import FranchisesPage from './pages/FranchisesPage';
import ChampionsPage from './pages/ChampionsPage';
import LiveAuctionPage from './pages/LiveAuctionPage';
import './App.css';

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (pathname === '/legacy') {
    return <LegacyPage />;
  }

  if (pathname === '/roster') {
    return <RosterPage />;
  }

  if (pathname === '/franchises') {
    return <FranchisesPage />;
  }

  if (pathname === '/champions') {
    return <ChampionsPage />;
  }

  if (pathname === '/auction' || pathname === '/live-auction') {
    return <LiveAuctionPage />;
  }

  return (
    <div className="w-full bg-background overflow-x-hidden flex flex-col">
      <Navigation activePage="home" />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;

