import { Mail, Phone, MapPin } from 'lucide-react';
import contactData from '../../../data/contact.json';

const iconMap = {
  Mail,
  Phone,
  MapPin,
};

const ContactHeader = () => {
  const { header, details } = contactData;

  return (
    <div className="relative w-full p-10 rounded-[2.5rem] 
      bg-transparent
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.4)] 
      backdrop-blur-[12px] overflow-hidden transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)]">
      
      <p className="mb-6 text-[#dfb48e] text-[10px] font-semibold tracking-[0.4em] uppercase text-left">
        {header.label}
      </p>

      <h1 className="m-0 text-white text-[2.8rem] font-light leading-[1.1] tracking-[-0.02em] text-left whitespace-pre-line">
        {header.titlePrefix}<span className="text-[#dfb48e]">{header.titleHighlight}</span>
      </h1>

      <p className="mt-6 mb-10 max-w-[400px] text-white/50 text-sm font-light leading-relaxed text-left whitespace-pre-line">
        {header.description}
      </p>

      <div className="flex flex-wrap gap-8 border-t border-white/5 pt-8">
        {details.map((detail, index) => {
          const Icon = iconMap[detail.icon];
          return (
            <div key={index} className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#dfb48e]">
                <Icon size={16} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/40 tracking-wider mb-1">{detail.label}</span>
                <span className="text-sm text-white/90 font-light">{detail.value}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactHeader;
