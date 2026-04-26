import HeroBackground from './features/hero/components/HeroBackground';
import HeroCard from './features/hero/components/HeroCard';
import CircularNav from './features/navigation/components/CircularNav';
import SocialSidebar from './features/hero/components/SocialSidebar';

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden isolate bg-[#17191f]">
      <HeroBackground />
      <CircularNav />
      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none max-md:relative max-md:inset-auto max-md:min-h-screen max-md:px-4 max-md:py-24">
        <div className="pointer-events-auto flex flex-col items-center">
          <HeroCard />
          <SocialSidebar />
        </div>
      </div>
    </main>
  );
}




export default App;
