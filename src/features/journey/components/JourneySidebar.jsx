import { Calendar, Clock, TrendingUp, Map, CheckCircle2 } from 'lucide-react';

const JourneySidebar = ({ journey }) => {
  const details = [
    { icon: Calendar, label: 'Distance', value: journey.rideDetails?.distance },
    { icon: Clock, label: 'Duration', value: journey.rideDetails?.duration },
    { icon: TrendingUp, label: 'Elevation Gain', value: journey.rideDetails?.elevation },
    { icon: Map, label: 'Road Type', value: journey.rideDetails?.roadType },
  ];

  return (
    <div className="flex flex-col gap-8 sticky top-32">
      {/* Ride Details Card */}
      <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl shadow-2xl">
        <h3 className="text-[#dfb48e] text-[11px] font-bold tracking-[0.25em] uppercase mb-8">
          RIDE DETAILS
        </h3>
        <div className="flex flex-col gap-6">
          {details.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/30 transition-colors group-hover:border-[#dfb48e4d] group-hover:text-[#dfb48e]">
                  <item.icon size={16} />
                </div>
                <span className="text-xs text-white/40 font-medium">{item.label}</span>
              </div>
              <span className="text-sm text-white/80 font-semibold tracking-tight">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights Card */}
      <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl shadow-2xl">
        <h3 className="text-[#dfb48e] text-[11px] font-bold tracking-[0.25em] uppercase mb-8">
          HIGHLIGHTS
        </h3>
        <ul className="space-y-4">
          {journey.highlights?.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3.5 text-sm text-white/60 leading-relaxed group">
              <CheckCircle2 size={16} className="text-[#dfb48e] flex-shrink-0 transition-transform group-hover:scale-110" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Gear Used Card */}
      <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl shadow-2xl">
        <h3 className="text-[#dfb48e] text-[11px] font-bold tracking-[0.25em] uppercase mb-8">
          GEAR USED
        </h3>
        <div className="flex flex-col gap-4">
          {journey.gear?.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 group">
               <div className="w-1.5 h-1.5 rounded-full bg-[#dfb48e] shadow-[0_0_8px_#dfb48e] opacity-40 group-hover:opacity-100 transition-opacity" />
               <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneySidebar;
