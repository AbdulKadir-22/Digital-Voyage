import { Users, Calendar, User } from 'lucide-react';
import experienceData from '../../../data/experience.json';

const iconMap = {
  Users,
  Calendar,
  User
};

const RolesTimeline = () => {
  const { roles } = experienceData;

  return (
    <div className="relative w-full p-10 rounded-[2.5rem] mt-6
      bg-transparent
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.4)] 
      backdrop-blur-[12px] overflow-hidden transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)]">
      
      <p className="mb-10 text-[#dfb48e] text-[10px] font-semibold tracking-[0.4em] uppercase text-left">
        LEADERSHIP & ROLES
      </p>

      <div className="relative flex flex-col gap-12">
        {/* Continuous Timeline Line */}
        <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#dfb48e] via-white/10 to-transparent" />

        {roles.map((role) => {
          const Icon = iconMap[role.icon] || Users;
          return (
            <div key={role.id} className="relative flex gap-8 z-10 group">
              {/* Timeline Node */}
              <div className="relative flex-shrink-0 w-12 h-12 rounded-full border border-[#dfb48e4d] bg-[rgba(10,12,18,0.8)] flex items-center justify-center transition-all duration-300 group-hover:border-[#dfb48e] group-hover:shadow-[0_0_20px_rgba(223,180,142,0.3)]">
                <Icon size={18} className="text-white/60 group-hover:text-[#dfb48e] transition-colors duration-300" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow pt-1">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                  <span className="text-[#dfb48e] text-[11px] font-medium tracking-wider">{role.date}</span>
                  <span className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-white/40 text-[9px] font-medium tracking-wider uppercase transition-colors duration-300 group-hover:border-[#dfb48e26] group-hover:text-white/70">
                    {role.category}
                  </span>
                </div>

                <h3 className="text-white/90 text-[1.3rem] font-medium mb-1 leading-tight">{role.title}</h3>
                <p className="text-white/40 text-[11px] font-light tracking-wide mb-4">{role.organization}</p>
                <p className="text-white/60 text-[13px] font-light leading-relaxed max-w-[450px]">
                  {role.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RolesTimeline;
