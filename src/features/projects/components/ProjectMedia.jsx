const ProjectMedia = ({ project }) => {
  return (
    <div className="flex flex-col gap-8 mb-16">
      {/* Main Image */}
      <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/20 shadow-2xl">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-auto block transition-transform duration-1000 ease-out group-hover:scale-[1.02]" 
        />
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
      </div>

      {/* Gallery Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {project.gallery?.map((img, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 w-32 md:w-40 aspect-video rounded-2xl overflow-hidden border border-white/10 opacity-50 cursor-pointer transition-all duration-300 hover:opacity-100 hover:border-[#dfb48e] hover:scale-105"
          >
            <img src={img} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectMedia;
