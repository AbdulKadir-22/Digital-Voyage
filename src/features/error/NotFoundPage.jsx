import CircularNav from '../../components/layout/CircularNav';
import SocialSidebar from '../../components/layout/SocialSidebar';
import NotFoundCard from './components/NotFoundCard';
import QuoteCard from './components/QuoteCard';
import { Bike } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <main className="relative min-h-screen isolate bg-[#090a0f] overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Custom Background for 404 */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat opacity-90 mix-blend-screen"
        style={{ 
          backgroundImage: 'linear-gradient(to bottom, rgba(9,10,15,0.8) 0%, rgba(9,10,15,0.2) 50%, rgba(9,10,15,0.9) 100%), url("/bg-404.png")' 
        }}
      />
      
      {/* Radial glow to highlight the center cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(223,180,142,0.05),transparent_60%)] pointer-events-none z-0" />

      {/* Brand Header */}
      <div className="absolute top-8 left-12 md:left-24 lg:left-32 z-20 flex items-center gap-4 hidden md:flex">
        <Bike size={32} className="text-white/50" strokeWidth={1} />
        <div className="flex flex-col gap-1">
          <h2 className="text-white text-[13px] font-semibold tracking-widest uppercase">Faiz Ansari</h2>
          <p className="text-white/30 text-[9px] tracking-[0.25em] uppercase">Every ride. Every story. Every mile.</p>
        </div>
      </div>

      <CircularNav />
      <SocialSidebar />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full mt-12 md:mt-0">
        <NotFoundCard />
        <QuoteCard />
      </div>
    </main>
  );
};

export default NotFoundPage;
