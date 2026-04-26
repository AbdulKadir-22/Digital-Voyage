import { ArrowRight } from 'lucide-react';
import journeyData from '../../../data/journey.json';

const MedalsSection = () => {
  const { medals } = journeyData;

  return (
    <section className="relative w-full max-w-[1100px] mx-auto p-10 rounded-[2.5rem] 
      bg-transparent
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_12px_40px_rgba(0,0,0,0.3)] 
      backdrop-blur-[12px] overflow-hidden mb-8
      max-md:p-6 max-md:rounded-[2rem] transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)]">
      
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <h2 className="text-[#dfb48e] text-[10px] font-semibold tracking-[0.4em] uppercase">
            Medals & Achievements
          </h2>
          <a href="#medals" className="group flex items-center gap-2 text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
            View All
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {medals.map((medal) => (
            <div key={medal.id} className="flex items-center gap-4 group">
              <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:border-[#dfb48e4d] group-hover:shadow-[0_0_20px_rgba(223,180,142,0.2)]">
                <img src={medal.image} alt={medal.title} className="w-12 h-12 object-contain" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] tracking-[0.1em] text-white/40 uppercase">{medal.type}</span>
                <h3 className="text-[13px] font-medium text-white/90 leading-tight">{medal.title}</h3>
                <span className="text-[10px] text-white/30 tracking-wider font-light">{medal.date} • {medal.distance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedalsSection;
