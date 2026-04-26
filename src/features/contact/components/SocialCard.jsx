import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import contactData from '../../../data/contact.json';

const iconMap = {
  Linkedin: FaLinkedinIn,
  Github: FaGithub,
  Twitter: FaXTwitter,
  Instagram: FaInstagram,
};

const SocialCard = () => {
  const { socials } = contactData;

  return (
    <div className="relative w-full p-8 rounded-[2.5rem] mt-6
      bg-transparent
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.4)] 
      backdrop-blur-[12px] overflow-hidden transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)]">
      
      <p className="mb-6 text-[#dfb48e] text-[10px] font-semibold tracking-[0.4em] uppercase text-left">
        CONNECT ON SOCIAL
      </p>

      <div className="flex flex-wrap gap-4">
        {socials.map((social) => {
          const Icon = iconMap[social.icon];
          return (
            <a 
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 transition-all duration-300 hover:bg-[#dfb48e26] hover:text-[#dfb48e] hover:border-[#dfb48e4d] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(223,180,142,0.15)]"
            >
              <Icon size={18} strokeWidth={1.5} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialCard;
