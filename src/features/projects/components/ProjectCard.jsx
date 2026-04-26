import { ArrowUpRight, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative w-full rounded-[2rem] p-4 pb-6
      bg-[rgba(15,17,23,0.02)]
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_12px_40px_rgba(0,0,0,0.3)] 
      backdrop-blur-[12px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col">
      
      {/* Project Image Container */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-black/20">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] to-transparent opacity-60 mix-blend-multiply" />
        
        {/* Top Right Arrow Icon */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/50 group-hover:bg-[#dfb48e26] group-hover:text-[#dfb48e] group-hover:border-[#dfb48e4d] transition-colors duration-300">
          <ArrowUpRight size={14} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col px-2 flex-grow">
        <div className="flex items-center mb-3">
          <span className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-white/40 text-[9px] font-semibold tracking-[0.2em] uppercase">
            {project.categoryLabel}
          </span>
        </div>

        <h3 className="text-xl font-medium text-white/90 mb-2 leading-tight">
          {project.title}
        </h3>
        
        <p className="text-white/50 text-xs font-light leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <a href={project.link} className="mt-auto group/link flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#dfb48e] hover:text-[#ffceaa] transition-colors uppercase font-medium">
          View Project
          <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
