import { Star, Rocket, Target } from 'lucide-react';
import experienceData from '../../../data/experience.json';

const iconMap = {
  Star,
  Rocket,
  Target
};

const Highlights = () => {
  const { highlights } = experienceData;

  return (
    <div className="relative w-full p-8 rounded-[2.5rem] mt-6
      bg-transparent
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.4)] 
      backdrop-blur-[12px] overflow-hidden transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)]">
      
      <p className="mb-8 text-[#dfb48e] text-[10px] font-semibold tracking-[0.4em] uppercase text-left">
        {highlights.label}
      </p>

      <div className="flex flex-col gap-6">
        {highlights.items.map((item, index) => {
          const Icon = iconMap[item.icon] || Star;
          return (
            <div key={item.id} className={`flex gap-5 items-start ${index < highlights.items.length - 1 ? 'pb-6 border-b border-white/5' : ''}`}>
              <div className="w-10 h-10 shrink-0 rounded-full border border-white/10 bg-[rgba(255,255,255,0.02)] flex items-center justify-center text-[#dfb48e] transition-transform duration-300 hover:scale-110 hover:border-[#dfb48e4d]">
                <Icon size={16} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white/90 text-[13px] font-medium tracking-wide mb-1.5">{item.title}</h3>
                <p className="text-white/50 text-[11px] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Highlights;
