import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import projectsData from '../../data/projects.json';

// Components
import ProjectHero from './components/ProjectHero';
import ProjectMedia from './components/ProjectMedia';
import ProjectSidebar from './components/ProjectSidebar';
import ProjectInfoBlocks from './components/ProjectInfoBlocks';
import ProjectNavigation from './components/ProjectNavigation';

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projectsData.projects.find(p => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
      window.scrollTo(0, 0);
    } else {
      navigate('/projects');
    }
  }, [projectId, navigate]);

  if (!project) return null;

  const currentProjectIndex = projectsData.projects.findIndex(p => p.id === projectId);
  const prevProject = projectsData.projects[currentProjectIndex - 1];
  const nextProject = projectsData.projects[currentProjectIndex + 1];

  return (
    <div className="relative min-h-screen w-full text-white isolate overflow-x-hidden">
      {/* Background Ambience */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 blur-[100px] z-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(223, 180, 142, 0.15), transparent 70%)`
        }}
      />
      
      {/* Background Image Suggestion (Subtle) */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] grayscale z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        {/* Back Link */}
        <Link 
          to="/projects" 
          className="group inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase transition-colors hover:text-[#dfb48e] mb-12"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          BACK TO PROJECTS
        </Link>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Left Column: Core Info & Media */}
          <div className="lg:col-span-7 flex flex-col">
            <ProjectHero project={project} />
            <ProjectMedia project={project} />
            <ProjectInfoBlocks project={project} />
          </div>

          {/* Right Column: Sidebar Details */}
          <div className="lg:col-span-5">
            <ProjectSidebar project={project} />
          </div>
        </div>

        {/* Bottom Navigation */}
        <ProjectNavigation 
          prevProject={prevProject} 
          nextProject={nextProject} 
        />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
