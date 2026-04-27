import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const JourneyHero = ({ journey }) => {
  return (
    <div className="relative w-full mb-16 group">
      {/* Background with Image */}
      <div className="relative w-full aspect-[21/9] md:aspect-[25/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black/20">
        <img 
          src={journey.image} 
          alt={journey.title} 
          className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-[#0f1117]/40 to-transparent" />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#dfb48e33] bg-[#dfb48e1a] text-[#dfb48e] text-[10px] font-bold tracking-[0.2em] uppercase w-fit mb-6 animate-fade-in">
            {journey.label}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 tracking-tight leading-tight">
            {journey.title} <span className="text-[#dfb48e]">{journey.titleHighlight}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 font-light mb-8 max-w-2xl">
            {journey.description}
          </p>

          <div className="flex flex-wrap gap-6 text-white/50 text-xs md:text-sm font-medium tracking-wide">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#dfb48e]" />
              <span>{journey.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#dfb48e]" />
              <span>{journey.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#dfb48e]" />
              <span>{journey.location}</span>
            </div>
            <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">
              {journey.tag}
            </div>
          </div>
        </div>
      </div>

      {/* Back Button Floating */}
      <Link 
        to="/journey" 
        className="absolute -top-12 left-2 group flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase transition-colors hover:text-[#dfb48e]"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        BACK TO JOURNEY
      </Link>
    </div>
  );
};

export default JourneyHero;
