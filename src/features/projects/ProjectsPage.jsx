import { useState, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import SEO from '../../components/SEO';
import ProjectsHeader from './components/ProjectsHeader';
import ProjectCard from './components/ProjectCard';
import projectsData from '../../data/projects.json';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(4); // For pagination

  const { header, categories, projects, bottomQuote } = projectsData;

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter(p => p.categoryId === activeCategory);
  }, [projects, activeCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setVisibleCount(4); // Reset pagination on filter change
  };

  return (
    <div className="relative z-10 w-full pt-32 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center">
      <SEO
        title="Projects — Ideas. Code. Impact."
        description="A showcase of web apps and mobile apps built by Faiz Ansari — from performance dashboards to cycling companion apps."
        path="/projects"
      />
      {/* Header Section */}
      <div className="w-full flex justify-start mb-4 lg:pl-10">
        <ProjectsHeader 
          header={header} 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />
      </div>

      {/* Grid Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:px-10">
        {visibleProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Load More Button */}
      {hasMore ? (
        <button 
          onClick={handleLoadMore}
          className="group flex items-center justify-between px-8 py-4 rounded-full border border-white/10 bg-[rgba(15,17,23,0.5)] backdrop-blur-md text-white/50 hover:text-white hover:border-[#dfb48e4d] hover:bg-[rgba(223,180,142,0.05)] transition-all duration-300 mb-16 w-full max-w-[320px]"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Load More Projects</span>
          <ChevronDown size={14} className="text-[#dfb48e] transition-transform duration-300 group-hover:translate-y-1" />
        </button>
      ) : (
        <div className="mb-16 h-[54px]" /> // Spacer to maintain layout when no load more button
      )}

      {/* Dynamic Bottom Quote */}
      <div className="w-full flex justify-end items-center gap-4 pr-4 lg:pr-10">
        <span className="text-[9px] tracking-[0.4em] text-white/30 font-medium uppercase text-right whitespace-pre-line leading-relaxed">
          {bottomQuote}
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-[#dfb48e] shadow-[0_0_8px_#dfb48e]" />
      </div>
    </div>
  );
};

export default ProjectsPage;
