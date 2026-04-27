import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const JourneyNavigation = ({ prevJourney, nextJourney }) => {
  return (
    <div className="mt-24 pt-10 border-t border-white/10 flex items-center justify-end gap-12">
      {/* Previous Story */}
      {prevJourney && (
        <Link 
          to={`/journey/${prevJourney.id}`} 
          className="group flex items-center gap-4 text-left transition-all duration-300"
        >
          <ChevronLeft size={20} className="text-white/30 transition-transform group-hover:text-[#dfb48e] group-hover:-translate-x-1" />
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase group-hover:text-white">
            PREV STORY
          </span>
        </Link>
      )}

      {/* Next Story */}
      {nextJourney && (
        <Link 
          to={`/journey/${nextJourney.id}`} 
          className="group flex items-center gap-4 text-right transition-all duration-300"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase group-hover:text-white">
            NEXT STORY
          </span>
          <ChevronRight size={20} className="text-white/30 transition-transform group-hover:text-[#dfb48e] group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
};

export default JourneyNavigation;
