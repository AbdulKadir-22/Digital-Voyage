import HeroBackground from './features/hero/components/HeroBackground';
import HeroCard from './features/hero/components/HeroCard';
import CircularNav from './features/navigation/components/CircularNav';

function App() {
  return (
    <main className="relative min-h-screen grid place-items-center p-[clamp(1.25rem,3vw,2.5rem)] overflow-hidden isolate max-md:p-4 max-md:place-items-stretch">
      <CircularNav />
      <HeroBackground />
      <HeroCard />
    </main>
  );
}


export default App;

