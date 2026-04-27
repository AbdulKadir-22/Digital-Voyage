import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import HeroBackground from './components/layout/HeroBackground';
import CircularNav from './components/layout/CircularNav';
import SocialSidebar from './components/layout/SocialSidebar';
import Footer from './components/layout/Footer';
import Loader from './components/ui/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let timeout;
    
    // Show loader on route change or initial load
    setIsLoading(true);

    if (isInitialLoad) {
      // 1 second for initial load
      timeout = setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }, 1000);
    } else {
      // Less than 1 second for subsequent navigations
      timeout = setTimeout(() => {
        setIsLoading(false);
      }, 400); // 400ms feels snappy but visible
    }

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <Loader isLoading={isLoading} />
      
      {/* Mount main content only after initial load so loader gets total priority */}
      {!isInitialLoad && (
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
      )}
    </>
  );
}

export default App;
