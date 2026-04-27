import SEO from '../../components/SEO';
import HeroCard from './HeroCard';

const Home = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden">
      <SEO
        title="Full Stack Developer & Designer"
        description="Faiz Ansari is a Full Stack Developer and Designer crafting fast, beautiful, and impactful digital experiences. Based in India."
        path="/"
      />
      
      {/* Cinematic Perspective Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vh] pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#dfb48e0a] to-transparent rotate-[-15deg]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#dfb48e0a] to-transparent rotate-[15deg]" />
      </div>

      {/* Main Hero Card */}
      <div className="relative z-10 animate-fade-in-up">
        <HeroCard />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
        <span className="text-[9px] font-bold tracking-[0.4em] text-white/50 uppercase group-hover:text-[#dfb48e] transition-colors">
          DISCOVER
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#dfb48e] to-transparent" />
      </div>

      {/* Decorative Text in background */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 rotate-[-90deg] pointer-events-none hidden xl:block">
        <span className="text-[120px] font-black text-white/[0.02] tracking-tighter uppercase whitespace-nowrap">
          DIGITAL ARCHITECT
        </span>
      </div>
      
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 rotate-[90deg] pointer-events-none hidden xl:block">
        <span className="text-[120px] font-black text-white/[0.02] tracking-tighter uppercase whitespace-nowrap">
          EXPERIENCE DESIGNER
        </span>
      </div>
    </div>
  );
};

export default Home;
