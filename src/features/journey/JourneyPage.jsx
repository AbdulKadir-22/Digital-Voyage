import SEO from '../../components/SEO';
import JourneyHeader from './components/JourneyHeader';
import MedalsSection from './components/MedalsSection';
import TravelBlogsSection from './components/TravelBlogsSection';
import journeyData from '../../data/journey.json';

const JourneyPage = () => {
  return (
    <div className="relative z-10 w-full pt-32 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center">
      <SEO
        title="My Journey — Miles, Medals & Memories"
        description="Explore Faiz Ansari's cycling journey — races, medals, and travel stories from across India and beyond."
        path="/journey"
      />
      <JourneyHeader />
      <MedalsSection />
      <TravelBlogsSection />

      {/* Dynamic Bottom Quote */}
      <div className="w-full max-w-[1100px] flex justify-end items-center gap-3 pr-4">
        <span className="text-[10px] tracking-[0.4em] text-white/30 font-medium uppercase">
          {journeyData.bottomQuote}
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#dfb48e] shadow-[0_0_8px_#dfb48e]" />
      </div>
    </div>
  );
};

export default JourneyPage;
