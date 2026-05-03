import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CoinbaseOne from './components/CoinbaseOne';
import BaseApp from './components/BaseApp';
import MarketData from './components/MarketData';
import CryptoBasics from './components/CryptoBasics';
import CTA from './components/CTA';
import LegalDisclosure from './components/LegalDisclosure';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Explore from './pages/Explore';
import Learn from './pages/Learn';
import AssetDetail from './pages/AssetDetail';
import Profile from './pages/Profile';
import AddCrypto from './pages/AddCrypto';
import ProjectBanner from './components/ProjectBanner';
import FooterDisclaimer from './components/FooterDisclaimer';

const HomePage = () => (
  <>
    <Hero />
    <MarketData />
    <Features />
    <CoinbaseOne />
    <BaseApp />
    <CryptoBasics />
    <CTA />
    <LegalDisclosure />
  </>
);

const AppContent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signup' || location.pathname === '/signin' || location.pathname === '/profile' || location.pathname === '/add-crypto';

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <ProjectBanner />
      {!isAuthPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/price/:asset" element={<AssetDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-crypto" element={<AddCrypto />} />
        </Routes>
      </main>
      <FooterDisclaimer />
      {!isAuthPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
