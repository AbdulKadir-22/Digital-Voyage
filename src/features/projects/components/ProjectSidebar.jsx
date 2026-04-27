import { CheckCircle2, HelpCircle } from 'lucide-react';
import * as SiIcons from 'react-icons/si';
import * as LuIcons from 'lucide-react';

const ProjectSidebar = ({ project }) => {
  const renderIcon = (iconName, size = 18, className = "") => {
    const IconComponent = SiIcons[iconName] || LuIcons[iconName] || HelpCircle;
    return <IconComponent size={size} className={className} />;
  };

  return (
    <div className="flex flex-col gap-8 sticky top-32">
      {/* About The Project Card */}
      <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl shadow-2xl">
        <h3 className="text-[#dfb48e] text-[11px] font-bold tracking-[0.25em] uppercase mb-6">
          ABOUT THE PROJECT
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-8">
          {project.description}
        </p>
        <div className="grid grid-cols-2 gap-6">
          {project.about?.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#dfb48e0d] border border-[#dfb48e1a] flex items-center justify-center text-[#dfb48e]">
                {renderIcon(item.icon)}
              </div>
              <span className="text-[11px] text-white/70 font-medium tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Card */}
      <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl shadow-2xl">
        <h3 className="text-[#dfb48e] text-[11px] font-bold tracking-[0.25em] uppercase mb-6">
          TECHNOLOGIES USED
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {project.technologies?.map((tech, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-white/80 transition-all duration-300 hover:bg-[#dfb48e1a] hover:border-[#dfb48e4d] hover:text-[#dfb48e]"
            >
              {renderIcon(tech.icon, 14)}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features Card */}
      <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl shadow-2xl">
        <h3 className="text-[#dfb48e] text-[11px] font-bold tracking-[0.25em] uppercase mb-6">
          KEY FEATURES
        </h3>
        <ul className="space-y-4">
          {project.features?.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3.5 text-sm text-white/60 leading-relaxed">
              <CheckCircle2 size={16} className="text-[#dfb48e] flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectSidebar;
