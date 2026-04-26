import { ArrowRight } from 'lucide-react';
import journeyData from '../../../data/journey.json';

const TravelBlogsSection = () => {
  const { blogs } = journeyData;

  return (
    <section className="relative w-full max-w-[1100px] mx-auto p-10 rounded-[2.5rem] 
      bg-transparent
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_12px_40px_rgba(0,0,0,0.3)] 
      backdrop-blur-[12px] overflow-hidden mb-12
      max-md:p-6 max-md:rounded-[2rem] transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)]">
      
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <h2 className="text-[#dfb48e] text-[10px] font-semibold tracking-[0.4em] uppercase">
            Travel Blogs
          </h2>
          <a href="#blogs" className="group flex items-center gap-2 text-[10px] tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
            Explore All
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x scrollbar-hide">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="group relative flex-none rounded-2xl overflow-hidden snap-start transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 w-[180px] hover:w-[320px] h-[240px] cursor-pointer"
            >
              <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                {blog.label && (
                  <span className="text-[#dfb48e] text-[9px] font-semibold tracking-[0.2em] uppercase mb-2">
                    {blog.label}
                  </span>
                )}
                <h3 className="font-medium text-white/90 leading-tight mb-2 text-sm group-hover:text-lg transition-all duration-500">
                  {blog.title}
                </h3>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <div className="overflow-hidden">
                    {blog.description && (
                      <p className="text-white/60 text-xs font-light leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {blog.description}
                      </p>
                    )}
                  </div>
                </div>
                <span className="text-[9px] text-white/40 tracking-wider font-light">
                  {blog.date} • {blog.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelBlogsSection;
