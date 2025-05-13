import { useState } from 'react';
import Sidebar from './components/Sidebar';
import PageHeader from './components/PageHeader';
import MainContentWrapper from './components/MainContent';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      
      <button 
        className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-brand-blue text-white rounded-md shadow-lg"
        onClick={toggleMobileMenu}
        aria-label="Open navigation menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/30 z-30"
          onClick={toggleMobileMenu}
        ></div>
      )}

      <div className={`transition-transform duration-300 ease-in-out lg:ml-sidebar ${isMobileMenuOpen && false ? 'transform translate-x-[280px]' : ''}`}> 
        <PageHeader />
        <MainContentWrapper />
      </div>
    </div>
  );
}

export default App;