import { Compass, ArrowRight, Bike } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundCard = () => {
  return (
    <div className="relative w-full max-w-[400px] p-10 rounded-[2.5rem] 
      bg-[rgba(15,17,23,0.02)]
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.5)] 
      backdrop-blur-[16px] overflow-hidden transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)] flex flex-col items-center z-10">
      
      <div className="w-full flex items-center justify-start gap-4 mb-8">
        <p className="text-[#dfb48e] text-[12px] font-semibold tracking-[0.4em]">404</p>
        <div className="h-px bg-white/10 flex-grow" />
      </div>
      
      <h1 className="text-white text-[7.5rem] font-bold leading-[0.9] tracking-tighter mb-4 opacity-90" style={{ textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}>
        404
      </h1>
      
      <p className="text-white/90 text-2xl font-light mb-8 text-center self-start text-left">
        Looks like you took<br />
        a <span className="text-[#dfb48e]">wrong turn.</span>
      </p>

      <div className="w-full border-t border-white/10 pt-6 pb-4 flex items-center gap-4">
        <Compass className="text-[#dfb48e] shrink-0" size={24} strokeWidth={1} />
        <p className="text-white/40 text-xs font-light leading-relaxed">
          The road you're looking for<br />
          doesn't exist or has been moved.
        </p>
      </div>

      <Link to="/" className="w-full mt-4 flex items-center justify-between px-6 py-4 rounded-[2rem] border border-[#dfb48e33] bg-[rgba(223,180,142,0.05)] text-white/70 hover:text-white hover:border-[#dfb48e] hover:bg-[rgba(223,180,142,0.1)] transition-all duration-300 group">
        <span className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase font-semibold">
          <Bike size={18} strokeWidth={1.5} className="text-[#dfb48e]" />
          Ride Back Home
        </span>
        <ArrowRight size={16} className="text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
      </Link>
    </div>
  );
};

export default NotFoundCard;
