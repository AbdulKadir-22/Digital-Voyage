import { useState } from 'react';
import { Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import contactData from '../../../data/contact.json';

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, sent
  const { form } = contactData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="relative w-full p-10 rounded-[2.5rem] 
      bg-transparent
      border border-[#dfb48e26] 
      shadow-[0_0_20px_rgba(223,180,142,0.05),inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.4)] 
      backdrop-blur-[12px] overflow-hidden transition-colors duration-500 hover:border-[#dfb48e4d] hover:bg-[rgba(255,255,255,0.02)]">
      
      <p className="mb-6 text-[#dfb48e] text-[10px] font-semibold tracking-[0.4em] uppercase text-left">
        {form.label}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            required
            className="w-full bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl px-5 py-4 text-white text-sm font-light placeholder:text-white/30 focus:outline-none focus:border-[#dfb48e] focus:bg-[rgba(255,255,255,0.05)] transition-all duration-300"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            required
            className="w-full bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl px-5 py-4 text-white text-sm font-light placeholder:text-white/30 focus:outline-none focus:border-[#dfb48e] focus:bg-[rgba(255,255,255,0.05)] transition-all duration-300"
          />
        </div>
        <input 
          type="text" 
          placeholder="Subject" 
          required
          className="w-full bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl px-5 py-4 text-white text-sm font-light placeholder:text-white/30 focus:outline-none focus:border-[#dfb48e] focus:bg-[rgba(255,255,255,0.05)] transition-all duration-300"
        />
        <textarea 
          placeholder="Your Message" 
          rows={4}
          required
          className="w-full bg-[rgba(255,255,255,0.03)] border border-white/10 rounded-xl px-5 py-4 text-white text-sm font-light placeholder:text-white/30 focus:outline-none focus:border-[#dfb48e] focus:bg-[rgba(255,255,255,0.05)] transition-all duration-300 resize-none"
        />

        <div className="flex flex-wrap items-center justify-between gap-6 mt-4">
          <button 
            type="submit"
            disabled={status !== 'idle'}
            className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-[#dfb48e33] bg-[rgba(223,180,142,0.05)] text-white/70 hover:text-white hover:border-[#dfb48e] hover:bg-[rgba(223,180,142,0.1)] transition-all duration-300 min-w-[200px]"
          >
            {status === 'idle' ? (
              <>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Send Message</span>
                <Send size={14} className="text-[#dfb48e] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </>
            ) : status === 'sending' ? (
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold animate-pulse">Sending...</span>
            ) : (
              <>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-green-400">Sent!</span>
                <CheckCircle2 size={16} className="text-green-400" />
              </>
            )}
          </button>

          <div className="flex items-start gap-3 max-w-[200px]">
            <ShieldCheck size={16} className="text-[#dfb48e] shrink-0 mt-0.5" strokeWidth={1.5} />
            <p className="text-white/30 text-[9px] font-light leading-relaxed whitespace-pre-line">
              {form.privacy}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
