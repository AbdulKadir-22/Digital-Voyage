import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';

const ProjectNavigation = ({ prevProject, nextProject }) => {
  return (
    <div className="mt-24 pt-10 border-t border-white/10 flex items-center justify-between gap-4">
      {/* Previous Project */}
      <div className="flex-1">
        {prevProject && (
          <Link 
            to={`/projects/${prevProject.id}`} 
            className="group flex items-center gap-4 text-left transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 transition-all duration-300 group-hover:border-[#dfb48e4d] group-hover:text-[#dfb48e] group-hover:-translate-x-1">
              <ChevronLeft size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold tracking-[0.3em] text-white/30 uppercase mb-1">
                PREV PROJECT
              </span>
              <span className="text-base md:text-lg font-medium text-white/80 transition-colors group-hover:text-[#dfb48e]">
                {prevProject.title}
              </span>
            </div>
          </Link>
        )}
      </div>

      {/* View All */}
      <Link 
        to="/projects" 
        className="group flex flex-col items-center gap-3 px-6 py-2 transition-all duration-300"
      >
        <LayoutGrid size={22} className="text-[#dfb48e] transition-transform duration-500 group-hover:rotate-90" />
        <span className="text-[9px] font-bold tracking-[0.25em] text-white/40 uppercase group-hover:text-white">
          VIEW ALL PROJECTS
        </span>
      </Link>

      {/* Next Project */}
      <div className="flex-1 flex justify-end">
        {nextProject && (
          <Link 
            to={`/projects/${nextProject.id}`} 
            className="group flex items-center gap-4 text-right transition-all duration-300"
          >
            <div className="flex flex-col">
              <span className="text-[9px] font-bold tracking-[0.3em] text-white/30 uppercase mb-1">
                NEXT PROJECT
              </span>
              <span className="text-base md:text-lg font-medium text-white/80 transition-colors group-hover:text-[#dfb48e]">
                {nextProject.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 transition-all duration-300 group-hover:border-[#dfb48e4d] group-hover:text-[#dfb48e] group-hover:translate-x-1">
              <ChevronRight size={20} />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectNavigation;
