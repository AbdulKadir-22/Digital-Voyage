import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import content from '../../data/content.json';

const iconMap = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  twitter: FaXTwitter,
  instagram: FaInstagram,
};

const SocialSidebar = () => {
  const { socials } = content;

  return (
    <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6 p-2 rounded-3xl 
      bg-[rgba(29,31,39,0.2)] border border-[rgba(255,255,255,0.08)] 
      shadow-[0_20px_40px_rgba(0,0,0,0.3)] 
      backdrop-blur-xl
      max-md:relative max-md:left-auto max-md:top-auto max-md:translate-y-0 max-md:flex-row max-md:p-4 max-md:mt-8 max-md:rounded-full max-md:mx-auto">
      
      <div className="flex flex-col gap-6 py-4 max-md:flex-row max-md:py-0 max-md:gap-8">
        {socials.map((social) => {
          const Icon = iconMap[social.id];
          return (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-10 h-10 transition-all duration-300 active:scale-90 max-md:w-8 max-md:h-8"
            >
              {Icon && (
                <Icon 
                  size={20} 
                  className="text-[rgba(255,255,255,0.6)] transition-all duration-300 group-hover:text-[#dfb48e] group-hover:drop-shadow-[0_0_8px_rgba(223,180,142,0.6)] max-md:size-[18px]" 
                />
              )}
            </a>
          );
        })}
      </div>

      <div className="w-[1px] h-12 bg-white/10 max-md:hidden" />

      <div className="flex flex-col items-center gap-4 pb-4 max-md:hidden">
        <span className="[writing-mode:vertical-lr] text-[9px] tracking-[0.3em] text-white/40 font-medium">SCROLL</span>
        <div className="relative w-px h-16 bg-white/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#dfb48e] animate-scroll-line" />
        </div>
      </div>
    </aside>
  );
};

export default SocialSidebar;
