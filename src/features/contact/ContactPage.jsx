import SEO from '../../components/SEO';
import ContactHeader from './components/ContactHeader';
import ContactForm from './components/ContactForm';
import LocationCard from './components/LocationCard';
import SocialCard from './components/SocialCard';
import QuoteCard from './components/QuoteCard';

const ContactPage = () => {
  return (
    <div className="relative z-10 w-full pt-32 pb-20 px-4 max-w-[1200px] mx-auto flex flex-col items-center">
      <SEO
        title="Contact — Let's Build Something Great"
        description="Get in touch with Faiz Ansari for collaboration, freelance work, or just to say hi. Based in India, available globally."
        path="/contact"
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:px-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6 w-full">
          <ContactHeader />
          <ContactForm />
          <div className="max-lg:hidden">
            <QuoteCard />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 lg:mt-32 w-full">
          <LocationCard />
          <SocialCard />
          
          <div className="lg:hidden">
            <QuoteCard />
          </div>
          
          {/* Bottom Right Quote text */}
          <div className="w-full flex justify-end items-center gap-4 pr-4 lg:mt-auto pt-8">
            <span className="text-[9px] tracking-[0.4em] text-white/30 font-medium uppercase text-right">
              LET'S CREATE IMPACT TOGETHER.
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#dfb48e] shadow-[0_0_8px_#dfb48e]" />
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default ContactPage;
