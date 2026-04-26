import { MapPin, Clock, Zap } from 'lucide-react';
import contactData from '../../../data/contact.json';

const LocationCard = () => {
  const { location } = contactData;

  return (
    <div className="relative w-full p-8 rounded-[2.5rem] 
      bg-transparent
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.4)] 
      backdrop-blur-[12px] overflow-hidden transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)]">
      
      <p className="mb-6 text-[#dfb48e] text-[10px] font-semibold tracking-[0.4em] uppercase text-left">
        {location.label}
      </p>

      {/* Map Graphic Container */}
      <div className="relative w-full h-[200px] rounded-2xl overflow-hidden border border-white/5 mb-8 bg-[rgba(10,12,18,0.5)]">
        
        {/* CSS Dot Grid Map simulation */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '12px 12px'
          }}
        />

        {/* Decorative lines to simulate routes */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-6" />

        {/* Location Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#dfb48e] rounded-full blur-xl opacity-40 animate-pulse" />
            <MapPin size={32} className="text-[#dfb48e] relative z-10 drop-shadow-[0_0_10px_rgba(223,180,142,0.5)]" fill="rgba(223,180,142,0.2)" />
          </div>
        </div>

        {/* Location Tooltip style label */}
        <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2">
          <p className="text-white/90 text-[11px] font-medium leading-tight">{location.city}</p>
          <p className="text-white/40 text-[9px] font-light">{location.country}</p>
        </div>
      </div>

      {/* Info Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/5 pt-6">
        
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#dfb48e]">
            <Clock size={16} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] text-white/40 tracking-wider mb-1 uppercase font-semibold">Available</span>
            <span className="text-[11px] text-white/80 font-light">{location.availability}</span>
          </div>
        </div>

        <div className="hidden sm:block w-px h-8 bg-white/10" />

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#dfb48e]">
            <Zap size={16} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] text-white/40 tracking-wider mb-1 uppercase font-semibold">Response Time</span>
            <span className="text-[11px] text-white/80 font-light">{location.responseTime}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LocationCard;
