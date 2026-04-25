import { ArrowRight } from 'lucide-react';

const HeroCard = () => {
  return (
    <section className="relative z-10 w-full max-w-[550px] min-h-[380px] p-[clamp(1.5rem,2.5vw,2.2rem)] rounded-[2.5rem] 
      bg-gradient-to-b from-[rgba(62,67,80,0.14)] to-[rgba(24,27,35,0.32)] 
      bg-[rgba(29,31,39,0.42)] border border-[rgba(255,255,255,0.16)] 
      shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(255,255,255,0.04),0_24px_60px_rgba(6,7,12,0.34),0_0_0_1px_rgba(255,255,255,0.03)] 
      backdrop-blur-[26px] backdrop-saturate-[1.08] overflow-hidden flex flex-col justify-center
      md:p-[clamp(1.2rem,2.1vw,1.7rem)]
      max-md:min-h-auto max-md:p-8 max-md:rounded-[1.75rem] max-md:justify-start">
      
      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] 
        bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_84%_86%,rgba(236,176,124,0.2),transparent_17%)] opacity-95" />
      <div className="absolute -right-[6%] -bottom-[12%] w-72 h-72 pointer-events-none 
        bg-[radial-gradient(circle,rgba(243,178,126,0.34),transparent_65%)] blur-[18px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="mb-[0.8rem] text-[rgba(255,255,255,0.68)] text-[0.85rem] font-normal tracking-[0.22em] uppercase">
          HELLO, I'M
        </p>

        <h1 className="m-0 text-[#f7f4ef] text-[clamp(2.5rem,5.5vw,3.6rem)] font-light leading-[0.98] tracking-[-0.05em]">
          <span className="hero-title-primary">Faiz</span>{' '}
          <span className="text-[#dfb48e]">Ansari</span>
        </h1>

        <div className="w-full max-w-[400px] h-px my-[1.2rem] mb-[0.9rem] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.16)] to-transparent max-md:w-full" aria-hidden="true" />

        <p className="flex flex-wrap justify-center gap-[0.5rem] m-0 text-[rgba(255,255,255,0.78)] text-[clamp(0.9rem,1.6vw,1.1rem)] font-light leading-relaxed max-md:text-base">
          <span>Full Stack Developer</span>
          <span className="text-[rgba(255,255,255,0.5)]" aria-hidden="true">&bull;</span>
          <span>Designer</span>
          <span className="text-[rgba(255,255,255,0.5)]" aria-hidden="true">&bull;</span>
          <span>Problem Solver</span>
        </p>

        <p className="w-full max-w-[380px] my-[1.2rem] mb-[1.5rem] text-[rgba(255,255,255,0.82)] text-[clamp(0.95rem,1.4vw,1.1rem)] font-light leading-relaxed max-md:text-base max-md:mb-6">
          I craft digital experiences that are fast, beautiful and impactful.
        </p>


        <a 
          className="inline-flex items-center gap-[0.8rem] w-fit min-h-[3.2rem] pl-5 pr-2 py-2 border border-[rgba(255,255,255,0.18)] rounded-full bg-[rgba(255,255,255,0.045)] text-[#f6f3ef] text-[0.75rem] font-normal tracking-[0.16em] backdrop-blur-xl transition-all duration-300 hover:-translate-y-px hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.28)] hover:shadow-[0_10px_24px_rgba(5,7,13,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ecb78cd9] focus-visible:outline-offset-[3px] max-md:w-full max-md:justify-between max-md:text-base" 
          href="#work"
        >
          <span>EXPLORE MY WORK</span>
          <span className="inline-grid place-items-center w-[2.4rem] h-[2.4rem] rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[rgba(255,255,255,0.82)]" aria-hidden="true">
            <ArrowRight size={20} strokeWidth={1.65} />
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroCard;
