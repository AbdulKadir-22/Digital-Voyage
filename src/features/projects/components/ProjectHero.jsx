import { ArrowLeft } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

const ProjectHero = ({ project }) => {
  return (
    <div className="flex flex-col mb-12">
      <span className="inline-block px-4 py-1.5 rounded-full border border-[#dfb48e33] bg-[#dfb48e1a] text-[#dfb48e] text-[10px] font-bold tracking-[0.2em] uppercase w-fit mb-6">
        {project.categoryLabel}
      </span>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-2 tracking-tight leading-tight">
        {project.title}
      </h1>
      
      <h2 className="text-xl md:text-2xl text-white/50 font-normal mb-8 max-w-2xl leading-relaxed">
        {project.subtitle}
      </h2>
      
      <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-2xl mb-10 font-light">
        {project.longDescription}
      </p>

      <div className="flex flex-wrap gap-4">
        <a 
          href={project.liveLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center gap-3 px-8 py-4 bg-[#dfb48e] text-[#0f1117] rounded-full text-[11px] font-bold tracking-[0.15em] transition-all duration-500 hover:bg-white hover:shadow-[0_10px_30px_rgba(223,180,142,0.3)] hover:-translate-y-1"
        >
          VISIT LIVE SITE 
          <ArrowLeft size={18} className="rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        
        <a 
          href={project.codeLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full text-[11px] font-bold tracking-[0.15em] backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
        >
          VIEW CODE 
          <SiGithub size={18} className="transition-transform duration-300 group-hover:scale-110" />
        </a>
      </div>
    </div>
  );
};

export default ProjectHero;
