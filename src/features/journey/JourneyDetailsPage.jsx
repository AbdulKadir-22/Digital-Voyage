import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import journeyData from '../../data/journey.json';

// Components
import JourneyHero from './components/JourneyHero';
import JourneyContent from './components/JourneyContent';
import JourneySidebar from './components/JourneySidebar';
import JourneyNavigation from './components/JourneyNavigation';

const JourneyDetailsPage = () => {
  const { journeyId } = useParams();
  const navigate = useNavigate();
  const [journey, setJourney] = useState(null);

  useEffect(() => {
    const foundJourney = journeyData.blogs.find(b => b.id === journeyId);
    if (foundJourney) {
      setJourney(foundJourney);
      window.scrollTo(0, 0);
    } else {
      navigate('/journey');
    }
  }, [journeyId, navigate]);

  if (!journey) return null;

  const currentJourneyIndex = journeyData.blogs.findIndex(b => b.id === journeyId);
  const prevJourney = journeyData.blogs[currentJourneyIndex - 1];
  const nextJourney = journeyData.blogs[currentJourneyIndex + 1];

  return (
    <div className="relative min-h-screen w-full text-white isolate overflow-x-hidden">
      {/* Background Ambience */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 blur-[120px] z-0"
        style={{
          background: `radial-gradient(circle at 70% 30%, rgba(223, 180, 142, 0.12), transparent 60%)`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        {/* Hero Section */}
        <JourneyHero journey={journey} />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column: Story & Gallery */}
          <div className="lg:col-span-8">
            <JourneyContent journey={journey} />
          </div>

          {/* Right Column: Sidebar Stats & Highlights */}
          <div className="lg:col-span-4">
            <JourneySidebar journey={journey} />
          </div>
        </div>

        {/* Bottom Navigation */}
        <JourneyNavigation 
          prevJourney={prevJourney} 
          nextJourney={nextJourney} 
        />
      </div>
    </div>
  );
};

export default JourneyDetailsPage;
