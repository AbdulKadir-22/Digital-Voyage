import { FileText, CheckCircle2 } from 'lucide-react';

const ProjectInfoBlocks = ({ project }) => {
  return (
    <div className="flex flex-col gap-16 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Challenge */}
        <div className="flex flex-col">
          <h3 className="text-[#dfb48e] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            THE CHALLENGE
          </h3>
          <p className="text-white/50 text-[15px] leading-relaxed font-light">
            {project.challenge}
          </p>
        </div>

        {/* Approach */}
        <div className="flex flex-col">
          <h3 className="text-[#dfb48e] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            MY APPROACH
          </h3>
          <p className="text-white/50 text-[15px] leading-relaxed font-light">
            {project.approach}
          </p>
          {project.pdfLink && (
            <a 
              href={project.pdfLink} 
              className="inline-flex items-center gap-2 mt-6 text-[#dfb48e] text-[10px] font-bold tracking-[0.1em] border-b border-[#dfb48e4d] pb-1 w-fit transition-all duration-300 hover:text-white hover:border-white"
            >
              CASE STUDY PDF <FileText size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05]">
        <h3 className="text-[#dfb48e] text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
          RESULTS
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.results?.map((res, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <CheckCircle2 size={20} className="text-[#dfb48e] flex-shrink-0 mt-1" />
              <span className="text-white/80 text-lg md:text-xl font-medium leading-tight">
                {res}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectInfoBlocks;
