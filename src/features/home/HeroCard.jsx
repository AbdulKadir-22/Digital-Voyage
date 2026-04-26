import { ArrowRight } from 'lucide-react';
import content from '../../data/content.json';

const HeroCard = () => {
  const { hero } = content;

  return (
    <section className="relative z-10 w-full max-w-[465px] min-h-[315px] p-8 rounded-[2.5rem] 
      bg-transparent
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.4)] 
      backdrop-blur-[12px] overflow-hidden flex flex-col justify-center transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)]
      max-md:p-6 max-md:rounded-[1.75rem] max-md:max-w-full">
      
      {/* Decorative Glow within card */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[radial-gradient(circle,rgba(223,180,142,0.08),transparent_70%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        <p className="mb-4 text-white/40 text-[9px] font-medium tracking-[0.4em] uppercase text-left">
          {hero.greeting}
        </p>

        <h1 className="m-0 text-white text-[clamp(2.4rem,5vw,3.2rem)] font-light leading-[1.1] tracking-[-0.02em] text-left">
          {hero.firstName} <span className="text-[#dfb48e]">{hero.lastName}</span>
        </h1>

        <div className="w-full h-px my-6 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

        <p className="flex flex-wrap gap-2.5 mb-4 text-white/70 text-[clamp(0.9rem,1.2vw,1rem)] font-light text-left">
          {hero.roles.map((role, index) => (
            <span key={role} className="flex items-center gap-2.5">
              <span>{role}</span>
              {index < hero.roles.length - 1 && (
                <span className="text-white/20">•</span>
              )}
            </span>
          ))}
        </p>

        <p className="max-w-[360px] mb-8 text-white/50 text-[1rem] font-light leading-relaxed text-left">
          {hero.description}
        </p>

        <a 
          className="group inline-flex items-center gap-5 w-fit pl-5 pr-2 py-1.5 border border-white/10 rounded-full bg-white/5 text-white/80 text-[10px] font-medium tracking-[0.2em] backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:border-white/20" 
          href="#work"
        >
          {hero.ctaText}
          <span className="inline-grid place-items-center w-8 h-8 rounded-full border border-white/10 bg-white/5 text-white/60 transition-transform duration-500 group-hover:translate-x-1">
            <ArrowRight size={16} strokeWidth={1.5} />
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroCard;
