import contactData from '../../../data/contact.json';

const QuoteCard = () => {
  const { quote } = contactData;

  return (
    <div className="relative w-full max-w-[500px] px-8 py-5 rounded-[2rem] mt-6
      bg-transparent
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.4)] 
      backdrop-blur-[12px] overflow-hidden transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)] flex items-center gap-6">
      
      <span className="text-[#dfb48e] text-4xl font-serif leading-none italic mt-2 opacity-80 shrink-0">"</span>
      
      <div className="flex flex-col gap-1">
        <p className="text-white/60 text-[11px] font-light leading-relaxed tracking-wide">
          {quote.text}
        </p>
        <p className="text-[#dfb48e] text-[9px] tracking-[0.2em] uppercase text-right mt-1 opacity-70">
          — {quote.author}
        </p>
      </div>
    </div>
  );
};

export default QuoteCard;
