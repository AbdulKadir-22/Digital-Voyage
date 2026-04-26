import { Outlet } from 'react-router-dom';
import HeroBackground from './components/layout/HeroBackground';
import CircularNav from './components/layout/CircularNav';
import SocialSidebar from './components/layout/SocialSidebar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <main className="relative min-h-screen isolate bg-[#0f1117] scroll-smooth">
      <CircularNav />
      {/* Content Section */}
      <div className="relative min-h-screen w-full flex flex-col items-center">
        <HeroBackground />
        <Outlet />
        <SocialSidebar />
      </div>



      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;
