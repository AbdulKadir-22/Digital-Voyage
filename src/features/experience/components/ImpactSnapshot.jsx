import { Users, CalendarDays, UserCheck, Trophy } from 'lucide-react';
import experienceData from '../../../data/experience.json';

const iconMap = {
  Users,
  CalendarDays,
  UserCheck,
  Trophy
};

const ImpactSnapshot = () => {
  const { impact } = experienceData;

  return (
    <div className="relative w-full p-8 rounded-[2.5rem] 
      bg-transparent
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.4)] 
      backdrop-blur-[12px] overflow-hidden transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)]">
      
      <p className="mb-8 text-[#dfb48e] text-[10px] font-semibold tracking-[0.4em] uppercase text-left">
        {impact.label}
      </p>

      <div className="grid grid-cols-2 gap-6">
        {impact.stats.map((stat, index) => {
          const Icon = iconMap[stat.icon] || Users;
          return (
            <div 
              key={stat.id} 
              className={`flex items-center gap-4 ${
                index < 2 ? 'pb-6 border-b border-white/5' : ''
              } ${
                index % 2 === 0 ? 'pr-6 border-r border-white/5' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full border border-white/10 bg-[rgba(255,255,255,0.02)] flex items-center justify-center text-white/50 transition-colors duration-300 hover:text-[#dfb48e] hover:border-[#dfb48e4d]">
                <Icon size={18} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-white/90 text-xl font-medium tracking-tight mb-0.5">{stat.value}</span>
                <span className="text-white/40 text-[9px] font-light uppercase tracking-wider">{stat.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImpactSnapshot;
