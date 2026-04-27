import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi';
import { IoBicycleOutline } from 'react-icons/io5';

const Loader = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 20); // 1000ms / 50 steps = 20ms
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0d12] text-white font-sans overflow-hidden"
          style={{
            backgroundImage: "url('/footer-img.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Left Sidebar */}
          <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="flex flex-col items-center gap-6 py-8 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <FiLinkedin className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <FiGithub className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <FiTwitter className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <FiInstagram className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              
              <div className="w-[1px] h-12 bg-gray-500/50 mt-4"></div>
              
              <div className="flex flex-col items-center gap-2 mt-4">
                <span className="text-[10px] tracking-widest text-gray-400 uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
                <div className="w-1 h-6 rounded-full bg-white/20 relative mt-2">
                  <motion.div 
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-1 h-2 bg-[#e68e51] rounded-full shadow-[0_0_8px_#e68e51]"
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="relative flex items-center justify-center w-[500px] h-[500px]">
            {/* SVG Circle Dial */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 500 500">
              <circle 
                cx="250" cy="250" r="240" 
                fill="none" 
                stroke="rgba(255,255,255,0.05)" 
                strokeWidth="2" 
              />
              <motion.circle 
                cx="250" cy="250" r="240" 
                fill="none" 
                stroke="#e68e51" 
                strokeWidth="3" 
                strokeLinecap="round"
                strokeDasharray="1500"
                strokeDashoffset={1500 - (1500 * progress) / 100}
                className="drop-shadow-[0_0_10px_rgba(230,142,81,0.6)]"
              />
              
              {/* Animated Glowing Dot at the end of progress */}
              <motion.circle
                cx="250"
                cy="10"
                r="4"
                fill="#fff"
                style={{
                  rotate: (progress / 100) * 360,
                  transformOrigin: "250px 250px"
                }}
                className="drop-shadow-[0_0_8px_#fff]"
              />

              {/* Tick marks */}
              {Array.from({ length: 48 }).map((_, i) => (
                <line 
                  key={i}
                  x1="250" y1="20" x2="250" y2="28" 
                  stroke={i % 6 === 0 ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)"} 
                  strokeWidth="1.5"
                  transform={`rotate(${i * 7.5} 250 250)`}
                />
              ))}
            </svg>

            {/* Inner Content */}
            <div className="flex flex-col items-center justify-center z-10">
              <IoBicycleOutline className="w-16 h-16 text-[#e68e51] mb-6 drop-shadow-[0_0_15px_rgba(230,142,81,0.4)]" />
              
              <h2 className="text-3xl font-light mb-2">
                Preparing the <span className="text-[#e68e51] font-medium">ride...</span>
              </h2>
              
              <p className="text-gray-400 text-sm tracking-wide mb-10">
                Crafting experiences. Building impact.
              </p>
              
              <div className="w-48 h-[2px] bg-white/10 rounded-full relative mb-4">
                <motion.div 
                  className="absolute left-0 top-0 h-full bg-[#e68e51] rounded-full shadow-[0_0_10px_#e68e51]"
                  style={{ width: `${progress}%` }}
                ></motion.div>
              </div>
              
              <div className="text-[#e68e51] text-sm font-medium tracking-wider">
                {progress}%
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="relative flex items-center px-6 py-2 text-xs tracking-[0.3em] text-gray-400">
              <div className="absolute left-0 top-0 w-2 h-2 border-l border-t border-gray-500"></div>
              <div className="absolute left-0 bottom-0 w-2 h-2 border-l border-b border-gray-500"></div>
              <div className="absolute right-0 top-0 w-2 h-2 border-r border-t border-gray-500"></div>
              <div className="absolute right-0 bottom-0 w-2 h-2 border-r border-b border-gray-500"></div>
              EVERY RIDE. EVERY STORY. EVERY MILE.
            </div>
            <div className="w-1 h-1 bg-[#e68e51] rounded-full shadow-[0_0_8px_#e68e51] mt-6"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
