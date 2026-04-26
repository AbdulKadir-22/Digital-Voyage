import { motion } from 'framer-motion';
import { 
  Home, 
  Compass, 
  Folder, 
  CodeXml, 
  Mail, 
  Heart, 
  Bike,
  Link2
} from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import content from '../../data/content.json';

const iconMap = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  twitter: FaXTwitter,
  instagram: FaInstagram,
};


const Footer = () => {
  const { footer, hero, socials } = content;

  const navLinks = [
    { label: 'HOME', icon: Home },
    { label: 'JOURNEY', icon: Compass },
    { label: 'PROJECTS', icon: Folder },
    { label: 'SKILLS', icon: CodeXml },
    { label: 'CONTACT', icon: Mail },
  ];

  return (
    <footer className="relative w-full py-20 px-4 mt-20 overflow-hidden">
      {/* Footer Background Image Overlay - Vibrancy for glass blur */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat saturate-[1.5] brightness-[1.1]"
        style={{ 
          backgroundImage: 'linear-gradient(180deg, rgba(15, 18, 24, 0.9) 0%, rgba(15, 18, 24, 0.4) 40%, rgba(15, 18, 24, 0.8) 100%), url("/footer-img.png")' 
        }}
      />

      
      {/* Top Fade-in for smooth transition */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0f1117] to-transparent z-0" />




      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Main Glass Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="footer-glass-card relative w-full overflow-hidden rounded-[3.25rem] 
            bg-transparent
            border border-[#dfb48e26] 
            shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0)] 
            backdrop-blur-[12px] p-12 transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)]"
        >


          {/* Decorative Glow */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[radial-gradient(circle,rgba(223,180,142,0.05),transparent_70%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1.2fr_1fr_1fr] gap-12 items-start">
            
            {/* Branding & Nav */}
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full border-2 border-[#dfb48e] flex items-center justify-center relative group">
                  <div className="absolute inset-0 rounded-full bg-[#dfb48e] opacity-10 blur-md group-hover:opacity-20 transition-opacity" />
                  <span className="text-2xl font-light tracking-tighter text-[#dfb48e]">FA</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-light tracking-wider text-white uppercase">
                    {hero.firstName} <span className="text-[#dfb48e]">{hero.lastName}</span>
                  </h3>
                  <p className="text-[10px] tracking-[0.3em] text-white/30 uppercase font-medium">
                    {footer.tagline}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 mt-2">
                {navLinks.map((link) => (
                  <a key={link.label} href={`#${link.label.toLowerCase()}`} className="flex flex-col items-center gap-2 group">
                    <link.icon size={16} className="text-white/30 group-hover:text-[#dfb48e] transition-colors" />
                    <span className="text-[8px] tracking-[0.2em] text-white/20 group-hover:text-[#dfb48e] transition-colors">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Middle Section - Quote & Bike */}
            <div className="flex flex-col items-center text-center gap-6 pt-4 border-l border-white/5 px-8">
              <div className="relative w-40 h-28 flex items-center justify-center">
                {/* Arc */}
                <div className="absolute inset-0 border-t-2 border-[#dfb48e33] rounded-[100%_100%_0_0] h-full" />
                <motion.div 
                   animate={{ left: ["0%", "100%", "0%"] }}
                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                   className="absolute top-0 w-1 h-1 rounded-full bg-[#dfb48e] shadow-[0_0_8px_#dfb48e]" 
                />
                <Bike size={48} className="text-[#dfb48e66]" strokeWidth={1} />
              </div>
              <p className="text-sm text-white/60 font-light max-w-[180px] leading-relaxed">
                The journey is the reward. Keep pedaling <span className="text-[#dfb48e]">forward.</span>
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-6 pt-2">
              <h4 className="text-[10px] tracking-[0.4em] text-[#dfb48e] font-semibold uppercase">Quick Links</h4>
              <ul className="flex flex-col gap-3">
                {footer.quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[11px] text-white/40 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#dfb48e] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-6 pt-2">
              <h4 className="text-[10px] tracking-[0.4em] text-[#dfb48e] font-semibold uppercase">Let's Connect</h4>
              <div className="flex gap-3">
                {socials.map((social) => {
                  const Icon = iconMap[social.id];
                  return (
                    <a key={social.id} href={social.href} className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white/40 hover:text-[#dfb48e] hover:border-[#dfb48e33] transition-all">
                      <Icon size={18} strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>

              <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-2 group cursor-pointer hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <Bike size={18} className="text-[#dfb48e]" />
                  <p className="text-[10px] text-white/60 font-light leading-snug">
                    Let's build something great <span className="text-[#dfb48e]">together.</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar inside Card */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-[#dfb48e]" />
              <p className="text-[10px] text-white/30 tracking-wider">
                {footer.copyright}
              </p>
            </div>

            <div className="flex items-center gap-4 text-white/10">
              <div className="h-px w-8 bg-current" />
              <Link2 size={16} />
              <div className="h-px w-8 bg-current" />
            </div>


            <div className="flex items-center gap-2">
              <p className="text-[10px] text-white/30 tracking-wider font-light">
                Designed & Built with passion
              </p>
              <Heart size={12} className="text-[#dfb48e66]" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
