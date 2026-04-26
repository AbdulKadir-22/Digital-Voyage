import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  { id: 'linkedin', icon: FaLinkedinIn, href: 'https://linkedin.com' },
  { id: 'github', icon: FaGithub, href: 'https://github.com' },
  { id: 'twitter', icon: FaXTwitter, href: 'https://twitter.com' },
  { id: 'instagram', icon: FaInstagram, href: 'https://instagram.com' },
];


const SocialSidebar = () => {
  return (
    <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 p-4 rounded-full 
      bg-gradient-to-b from-[rgba(62,67,80,0.1)] to-[rgba(24,27,35,0.24)] 
      bg-[rgba(29,31,39,0.34)] border border-[rgba(255,255,255,0.11)] 
      shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.3)] 
      backdrop-blur-xl
      max-md:static max-md:left-auto max-md:top-auto max-md:z-10 max-md:mt-5 max-md:flex-row max-md:translate-y-0 max-md:gap-3 max-md:px-4 max-md:py-3">
      
      {socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-white/5 active:scale-90"
        >
          <social.icon 
            size={18} 
            className="text-[rgba(255,255,255,0.56)] transition-all duration-300 group-hover:text-[#dfb48e] group-hover:drop-shadow-[0_0_8px_rgba(223,180,142,0.6)]" 
          />
          
          {/* Tooltip (Optional, but looks premium) */}
          <span className="absolute left-14 px-3 py-1.5 rounded-lg bg-[#1c1e26] border border-[rgba(255,255,255,0.1)] text-[#dfb48e] text-[10px] font-medium tracking-wider opacity-0 -translate-x-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 max-md:hidden">
            {social.id.toUpperCase()}
          </span>
        </a>
      ))}
      
      {/* Decorative Line at the bottom as seen in image */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent mt-2 max-md:hidden" />
    </aside>
  );
};

export default SocialSidebar;
