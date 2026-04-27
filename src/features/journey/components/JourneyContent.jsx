// import { Twitter, Facebook, Link as LinkIcon } from 'lucide-react';

const JourneyContent = ({ journey }) => {
  return (
    <div className="flex flex-col gap-12">
      {/* The Journey Text Section */}
      <div className="flex flex-col gap-6">
        <h3 className="text-[#dfb48e] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">
          THE JOURNEY
        </h3>
        {journey.fullStory?.map((para, idx) => (
          <p key={idx} className="text-white/50 text-[15px] leading-relaxed font-light">
            {para}
          </p>  
        ))}
      </div>

      {/* Quote Section */}
      {journey.quote && (
        <div className="p-8 md:p-10 rounded-[2rem] bg-[#dfb48e08] border border-[#dfb48e1a] relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#dfb48e4d]" />
          <span className="absolute top-6 right-8 text-6xl text-[#dfb48e1a] font-serif group-hover:text-[#dfb48e33] transition-colors">"</span>
          <p className="text-lg md:text-xl text-white/80 font-medium italic mb-4 leading-relaxed">
            {journey.quote.text}
          </p>
          <p className="text-[#dfb48e] text-xs font-bold tracking-[0.2em] uppercase">
            — {journey.quote.author}
          </p>
        </div>
      )}

      {/* Gallery Section */}
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-12 md:col-span-8 rounded-[2rem] overflow-hidden border border-white/10 group">
          <img src={journey.gallery?.[0]} alt="Main gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
           {journey.gallery?.slice(1, 4).map((img, idx) => (
             <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 aspect-video md:aspect-square group">
               <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
             </div>
           ))}
        </div>
      </div>

      {/* Social Share */}
      {/* <div className="flex flex-col gap-6 mt-8">
        <span className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">
          SHARE THIS JOURNEY
        </span>
        <div className="flex gap-4">
          {[Twitter, Facebook, LinkIcon].map((Icon, idx) => (
            <button 
              key={idx}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/40 transition-all duration-300 hover:border-[#dfb48e4d] hover:text-[#dfb48e] hover:bg-[#dfb48e1a] hover:-translate-y-1"
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default JourneyContent;
