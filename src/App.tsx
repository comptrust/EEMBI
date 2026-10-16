import React, { useState } from 'react';
import { PageView } from './types.ts';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HomeView } from './components/HomeView.tsx';
import { FounderView } from './components/FounderView.tsx';
import { LeadershipView } from './components/LeadershipView.tsx';
import { ProgramsView } from './components/ProgramsView.tsx';
import { NewsArticleView } from './components/NewsArticleView.tsx';
import { DonationView } from './components/DonationView.tsx';
import { ContactView } from './components/ContactView.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';

function MainLayout() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [previousView, setPreviousView] = useState<PageView>('home');

  const handleNavigate = (view: PageView) => {
    if (currentView !== view) {
      setPreviousView(currentView);
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenDonation = () => {
    setPreviousView(currentView);
    setCurrentView('donation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Universal Top Navigation with EN / FR language switcher */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenDonation={handleOpenDonation}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenDonation={handleOpenDonation}
            onOpenNewsArticle={() => handleNavigate('news')}
          />
        )}

        {currentView === 'founder' && (
          <FounderView
            onNavigate={handleNavigate}
            onOpenDonation={handleOpenDonation}
          />
        )}

        {currentView === 'leadership' && (
          <LeadershipView
            onNavigate={handleNavigate}
            onOpenDonation={handleOpenDonation}
          />
        )}

        {currentView === 'news' && (
          <NewsArticleView
            onBack={() => handleNavigate('home')}
            onNavigate={handleNavigate}
            onOpenDonation={handleOpenDonation}
          />
        )}

        {currentView === 'programs' && (
          <ProgramsView
            onNavigate={handleNavigate}
            onOpenDonation={handleOpenDonation}
          />
        )}

        {currentView === 'donation' && (
          <DonationView
            onBack={() => handleNavigate(previousView === 'donation' ? 'home' : previousView)}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
            onOpenDonation={handleOpenDonation}
          />
        )}
      </main>

      {/* Universal Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDonation={handleOpenDonation}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}
