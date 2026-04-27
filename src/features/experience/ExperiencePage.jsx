import SEO from '../../components/SEO';
import ExperienceHeader from './components/ExperienceHeader';
import RolesTimeline from './components/RolesTimeline';
import ImpactSnapshot from './components/ImpactSnapshot';
import Highlights from './components/Highlights';
import ExperienceQuote from './components/ExperienceQuote';

const ExperiencePage = () => {
  return (
    <div className="relative z-10 w-full pt-32 pb-20 px-4 max-w-[1200px] mx-auto flex flex-col items-center">
      <SEO
        title="Experience — Beyond the Code"
        description="Leadership roles, community building, and technical initiatives by Faiz Ansari — General Secretary, Event Head, and more."
        path="/experience"
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:px-10">
        
        {/* Left Column */}
        <div className="flex flex-col w-full">
          <ExperienceHeader />
          <RolesTimeline />
          <div className="max-lg:hidden mt-auto pt-6">
            <ExperienceQuote />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full lg:mt-32">
          {/* <ImpactSnapshot /> */}
          <Highlights />
          
          <div className="lg:hidden mt-6">
            <ExperienceQuote />
          </div>
          
          {/* Bottom Right Quote text */}
          <div className="w-full flex justify-end items-center gap-4 pr-4 lg:mt-auto pt-8">
            <span className="text-[9px] tracking-[0.4em] text-white/30 font-medium uppercase text-right">
              EVERY ROLE. EVERY LESSON. EVERY MILE.
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#dfb48e] shadow-[0_0_8px_#dfb48e]" />
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default ExperiencePage;
