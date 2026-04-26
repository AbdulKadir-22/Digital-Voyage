import journeyData from '../../../data/journey.json';

const JourneyHeader = () => {
  const { header } = journeyData;

  return (
    <section className="relative w-full max-w-[1100px] mx-auto p-12 rounded-[3rem] 
      bg-transparent
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.4)] 
      backdrop-blur-[12px] overflow-hidden mb-8
      max-md:p-8 max-md:rounded-[2rem] transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)]">
      
      {/* Decorative Glow within card */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[radial-gradient(circle,rgba(223,180,142,0.08),transparent_70%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        <p className="mb-4 text-[#dfb48e] text-[10px] font-semibold tracking-[0.4em] uppercase text-left">
          {header.label}
        </p>

        <h1 className="m-0 text-white text-[clamp(2.4rem,4vw,3.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-left">
          {header.titlePrefix} <span className="text-[#dfb48e]">{header.titleHighlight}</span>
        </h1>

        <p className="mt-6 max-w-[480px] text-white/50 text-[1rem] font-light leading-relaxed text-left whitespace-pre-line">
          {header.description}
        </p>
      </div>
    </section>
  );
};

export default JourneyHeader;
