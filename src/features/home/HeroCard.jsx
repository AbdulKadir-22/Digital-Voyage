import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Sparkles, Download } from 'lucide-react';
import content from '../../data/content.json';
import resumeFile from '../../data/Resume.pdf';

const HeroCard = () => {
  const { hero } = content;

  return (
    <section className="relative z-10 w-full max-w-[580px] p-10 md:p-12 rounded-[3rem] 
      bg-white/[0.03]
      border border-white/10 
      shadow-[0_0_50px_rgba(223,180,142,0.03),inset_0_1px_1px_rgba(255,255,255,0.05),0_30px_70px_rgba(0,0,0,0.5)] 
      backdrop-blur-[20px] overflow-hidden flex flex-col justify-center transition-all duration-700 hover:border-white/20 hover:bg-white/[0.05]
      max-md:p-8 max-md:rounded-[2rem] max-md:max-w-full group">

      
      {/* Dynamic Animated Glows */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-[radial-gradient(circle,rgba(223,180,142,0.1),transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[radial-gradient(circle,rgba(223,180,142,0.05),transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-1000 delay-200" />

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        
        {/* Status & Location Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#dfb48e0d] border border-[#dfb48e1a] animate-pulse">
            <div className="w-1.5 h-1.5 rounded-full bg-[#dfb48e] shadow-[0_0_8px_#dfb48e]" />
            <span className="text-[9px] font-bold tracking-[0.15em] text-[#dfb48e] uppercase">{hero.status}</span>
          </div>
          <div className="flex items-center gap-2 text-white/30 text-[9px] font-bold tracking-[0.15em] uppercase">
            <MapPin size={12} className="text-[#dfb48e/50]" />
            <span>{hero.location}</span>
          </div>
        </div>

        <p className="mb-4 text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase text-left flex items-center gap-3">
          <Sparkles size={14} className="text-[#dfb48e]" />
          {hero.greeting}
        </p>

        <h1 className="m-0 text-white text-[clamp(2.8rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-left">
          {hero.firstName} <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#dfb48e] to-[#ffceaa] drop-shadow-[0_0_15px_rgba(223,180,142,0.3)]">{hero.lastName}</span>
        </h1>

        <div className="w-20 h-1 mt-8 mb-8 bg-gradient-to-r from-[#dfb48e] to-transparent rounded-full opacity-50" />

        <p className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-white/80 text-[clamp(1rem,1.5vw,1.1rem)] font-medium text-left">
          {hero.roles.map((role, index) => (
            <span key={role} className="flex items-center gap-4 group/role">
              <span className="group-hover/role:text-[#dfb48e] transition-colors">{role}</span>
              {index < hero.roles.length - 1 && (
                <span className="text-white/10 w-1 h-1 rounded-full bg-white/20" />
              )}
            </span>
          ))}
        </p>

        <p className="max-w-[420px] mb-10 text-white/50 text-[1rem] font-light leading-relaxed text-left">
          {hero.description}
        </p>

        {/* Highlights/Metrics Grid */}
        <div className="grid grid-cols-3 gap-6 mb-10 pt-8 border-t border-white/5">
          {hero.highlights.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-lg md:text-xl font-semibold text-white/90 tracking-tight">{item.value}</span>
              <span className="text-[9px] font-bold tracking-[0.1em] text-white/30 uppercase">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <Link 
            to="/projects"
            className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden rounded-full bg-[#dfb48e] text-[#0f1117] text-[11px] font-bold tracking-[0.2em] transition-all duration-500 hover:bg-white hover:shadow-[0_15px_35px_rgba(223,180,142,0.3)] hover:-translate-y-1" 
          >
            <span className="relative z-10 flex items-center gap-3">
              {hero.ctaText}
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-500 group-hover:translate-x-1.5" />
            </span>
          </Link>
          
          <a 
            href={resumeFile} 
            download="Faiz_Ansari_Resume.pdf"
            className="group flex items-center gap-3 text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase hover:text-white transition-all duration-300"
          >
            <Download size={14} className="transition-transform group-hover:-translate-y-0.5" />
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
};


export default HeroCard;
