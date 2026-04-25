import HeroBackground from './features/hero/components/HeroBackground';
import HeroCard from './features/hero/components/HeroCard';
import CircularNav from './features/navigation/components/CircularNav';

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden isolate bg-[#17191f]">
      <CircularNav />
      <HeroBackground />
      <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
        <div className="pointer-events-auto">
          <HeroCard />
        </div>
      </div>
    </main>
  );
}



export default App;

