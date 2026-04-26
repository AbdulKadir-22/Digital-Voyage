import { LayoutGrid, Globe, Smartphone, PenTool } from 'lucide-react';

const iconMap = {
  LayoutGrid,
  Globe,
  Smartphone,
  PenTool,
};

const ProjectsHeader = ({ header, categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="relative w-full max-w-[600px] p-10 rounded-[2.5rem] 
      bg-[rgba(15,17,23,0.02)]
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.4)] 
      backdrop-blur-[12px] overflow-hidden mb-8 transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)]">
      
      <p className="mb-4 text-[#dfb48e] text-[10px] font-semibold tracking-[0.4em] uppercase text-left">
        {header.label}
      </p>

      <h1 className="m-0 text-white text-[2.8rem] font-light leading-[1.1] tracking-[-0.02em] text-left">
        {header.titlePrefix} <span className="text-[#dfb48e]">{header.titleHighlight}</span>
      </h1>

      <p className="mt-4 max-w-[400px] text-white/50 text-sm font-light leading-relaxed text-left whitespace-pre-line mb-8">
        {header.description}
      </p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 border-t border-white/5 pt-6">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon];
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-[2rem] border transition-all duration-300 text-[11px] tracking-wider
                ${isActive 
                  ? 'border-[#dfb48e4d] bg-[rgba(223,180,142,0.08)] text-[#dfb48e] shadow-[0_0_15px_rgba(223,180,142,0.15)]' 
                  : 'border-white/5 bg-white/5 text-white/40 hover:text-white/80 hover:bg-white/10 hover:border-white/10'
                }`}
            >
              <Icon size={14} strokeWidth={1.5} />
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsHeader;
