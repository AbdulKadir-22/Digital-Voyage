const QuoteCard = () => {
  return (
    <div className="relative w-full max-w-[480px] px-8 py-5 rounded-[2rem] mt-8
      bg-[rgba(15,17,23,0.02)]
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.5)] 
      backdrop-blur-[16px] overflow-hidden transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)] flex items-center gap-6 z-10">
      
      <span className="text-[#dfb48e] text-4xl font-serif leading-none italic mt-2 opacity-80">"</span>
      
      <p className="text-white/50 text-[11px] font-light leading-loose tracking-wide">
        Not all those who wander are lost.<br />
        Sometimes, we just find <span className="text-[#dfb48e]">better roads.</span>
      </p>
    </div>
  );
};

export default QuoteCard;
