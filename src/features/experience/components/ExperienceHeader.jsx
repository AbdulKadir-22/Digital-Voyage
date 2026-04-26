import experienceData from '../../../data/experience.json';

const ExperienceHeader = () => {
  const { header } = experienceData;

  return (
    <div className="relative w-full p-10 rounded-[2.5rem] 
      bg-transparent
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.4)] 
      backdrop-blur-[12px] overflow-hidden transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)]">
      
      <div className="absolute left-10 top-20 bottom-10 w-[3px] rounded-full bg-gradient-to-b from-[#dfb48e] to-transparent shadow-[0_0_15px_rgba(223,180,142,0.6)]" />

      <p className="mb-6 pl-6 text-[#dfb48e] text-[10px] font-semibold tracking-[0.4em] uppercase text-left">
        {header.label}
      </p>

      <h1 className="m-0 pl-6 text-white text-[2.8rem] font-light leading-[1.1] tracking-[-0.02em] text-left whitespace-pre-line">
        {header.titlePrefix}<span className="text-[#dfb48e]">{header.titleHighlight}</span>
      </h1>

      <p className="mt-6 pl-6 max-w-[500px] text-white/50 text-sm font-light leading-relaxed text-left whitespace-pre-line">
        {header.description}
      </p>
    </div>
  );
};

export default ExperienceHeader;
