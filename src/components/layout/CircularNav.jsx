import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Home,
  Compass,
  Folder,
  CodeXml,
  Briefcase,
  Mail,
  Disc3,
  X,
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'HOME', icon: Home, angle: -90 },
  { id: 'journey', label: 'JOURNEY', icon: Compass, angle: -30 },
  { id: 'projects', label: 'PROJECTS', icon: Folder, angle: 30 },
  { id: 'skills', label: 'SKILLS', icon: CodeXml, angle: 90 },
  { id: 'experience', label: 'EXPERIENCE', icon: Briefcase, angle: 150 },
  { id: 'contact', label: 'CONTACT', icon: Mail, angle: 210 },
];

const SEGMENT_ANGLE = 360 / navItems.length;

function getStepDelta(fromIndex, toIndex, totalItems) {
  const clockwise = (toIndex - fromIndex + totalItems) % totalItems;
  const counterClockwise = clockwise - totalItems;
  if (Math.abs(clockwise) < Math.abs(counterClockwise)) return clockwise;
  if (Math.abs(counterClockwise) < Math.abs(clockwise)) return counterClockwise;
  return toIndex > fromIndex ? clockwise : counterClockwise;
}

function WheelFace({
  activeItem,
  hoveredItem,
  rotation,
  selectedItem,
  setHoveredItem,
  setSelectedItem,
  onSelect,
  radius,
  iconSize,
  labelSizeClass,
  wheelClassName,
}) {
  return (
    <div className={`relative rounded-full flex items-center justify-center pointer-events-auto shadow-[0_0_80px_rgba(0,0,0,0.9)] ${wheelClassName}`}>
      
      {/* Outer Gear Ring (SVG) */}
      <svg className="absolute inset-[-15%] w-[130%] h-[130%] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-700" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="#dfb48e" strokeWidth="0.1" strokeDasharray="0.5 2.5" />
        <circle cx="50" cy="50" r="46" fill="none" stroke="#dfb48e" strokeWidth="0.05" strokeDasharray="4 2" />
        {/* Gear Teeth */}
        {[...Array(60)].map((_, i) => (
          <rect key={i} x="49.8" y="0" width="0.4" height="2" fill="#dfb48e" transform={`rotate(${i * 6} 50 50)`} />
        ))}
      </svg>

      {/* Main Wheel Body */}
      <div className="absolute inset-0 rounded-full bg-[#0c0d12] border border-[rgba(223,180,142,0.15)] shadow-[inset_0_2px_20px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Dynamic Glass Texture */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.05] via-transparent to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(223,180,142,0.05),transparent_50%)]" />
      </div>

      {/* Segment Dividers with Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <div key={angle} className="absolute top-1/2 left-1/2 w-1/2 h-[0.5px] bg-gradient-to-r from-transparent via-[#dfb48e1a] to-[#dfb48e33] origin-left" style={{ transform: `rotate(${angle}deg)` }} />
        ))}
      </div>

      {/* Active Selection Scanner/Indicator */}
      <div className="absolute inset-[-5%] pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform" style={{ transform: `rotate(${rotation}deg)` }}>
        {/* Holographic Beam */}
        <div 
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[50%] h-[45%] origin-left"
          style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%)' }}
        >
          <div className="w-full h-full bg-gradient-to-r from-[#dfb48e4d] via-[#dfb48e1a] to-transparent blur-[2px] opacity-60" />
        </div>
        
        {/* Glowing Pointer Tip */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-1 h-4 bg-[#dfb48e] shadow-[0_0_15px_#dfb48e]" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
        
        {/* Scanner Line */}
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-px h-[40%] bg-gradient-to-b from-transparent via-[#dfb48e] to-transparent opacity-40" />
      </div>

      {/* Central Core - Holographic Look */}
      <div className="absolute w-[36%] h-[36%] rounded-full border border-[#dfb48e33] bg-[#0a0b0f] shadow-[0_0_30px_rgba(223,180,142,0.15)] flex items-center justify-center z-20">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(223,180,142,0.08),transparent_70%)] animate-pulse" />
        <div className="absolute inset-2 rounded-full border border-white/5 border-dashed animate-spin-slow opacity-20" />
        <div className="relative text-center">
          <p className="text-[8px] font-bold tracking-[0.4em] text-white/30 uppercase leading-none">SYSTEM</p>
          <p className="mt-1.5 text-[9px] font-black tracking-[0.2em] text-[#dfb48e] uppercase truncate max-w-[50px]">{activeItem}</p>
        </div>
      </div>

      {/* Navigation Nodes */}
      {navItems.map((item) => {
        const isActive = activeItem === item.id;
        const isSelected = selectedItem === item.id;
        const rad = (item.angle * Math.PI) / 180;
        const x = Math.cos(rad);
        const y = Math.sin(rad);

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setSelectedItem(item.id);
              onSelect?.();
            }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onFocus={() => setHoveredItem(item.id)}
            onBlur={() => setHoveredItem(null)}
            className={`absolute top-1/2 left-1/2 z-30 flex items-center justify-center rounded-full cursor-pointer outline-none transition-all duration-500 ${
              isActive ? 'scale-110' : 'scale-100 opacity-60 hover:opacity-100 hover:scale-105'
            }`}
            style={{
              transform: `translate(calc(-50% + ${x * radius}px), calc(-50% + ${y * radius}px))`,
              width: '5rem',
              height: '5rem',
            }}
          >
            <div className="flex flex-col items-center justify-center relative group/btn">
              {/* Active Node Glow */}
              {isActive && (
                <div className="absolute inset-0 bg-[#dfb48e1a] blur-xl rounded-full scale-150 animate-pulse" />
              )}
              
              <div className={`p-3 rounded-full transition-all duration-500 ${isActive ? 'bg-[#dfb48e0d] border border-[#dfb48e33]' : ''}`}>
                <item.icon
                  size={iconSize}
                  className={`transition-all duration-500 ${
                    isActive
                      ? 'text-[#dfb48e] drop-shadow-[0_0_12px_rgba(223,180,142,0.8)]'
                      : 'text-white/40 group-hover/btn:text-white/80'
                  }`}
                  strokeWidth={isActive ? 2.5 : 1.5}
                />
              </div>
              <span
                className={`mt-2 font-bold tracking-[0.25em] transition-all duration-500 ${labelSizeClass} ${
                  isActive
                    ? 'text-[#dfb48e]'
                    : 'text-white/20 group-hover/btn:text-white/60'
                }`}
              >
                {item.label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

const CircularNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPathId = location.pathname === '/' ? 'home' : location.pathname.substring(1);
  const selectedItem = navItems.some(i => i.id === currentPathId) ? currentPathId : 'home';
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [rotation, setRotation] = useState(() => {
    const activeIndex = navItems.findIndex((item) => item.id === selectedItem);
    return activeIndex >= 0 ? navItems[activeIndex].angle : navItems[0].angle;
  });

  const activeItem = hoveredItem || selectedItem;
  const activeIndex = useMemo(() => navItems.findIndex((item) => item.id === activeItem), [activeItem]);
  const previousIndexRef = useRef(activeIndex);

  useEffect(() => {
    const previousIndex = previousIndexRef.current;
    if (activeIndex < 0 || previousIndex === activeIndex) return;
    const stepDelta = getStepDelta(previousIndex, activeIndex, navItems.length);
    setRotation((current) => current + stepDelta * SEGMENT_ANGLE);
    previousIndexRef.current = activeIndex;
  }, [activeIndex]);

  return (
    <>
      <nav
        className="fixed top-6 right-6 z-50 hidden md:flex w-52 h-52 lg:w-60 lg:h-60 items-center justify-center pointer-events-none group"
        onMouseLeave={() => setHoveredItem(null)}
      >
        <WheelFace
          activeItem={activeItem}
          hoveredItem={hoveredItem}
          rotation={rotation}
          selectedItem={selectedItem}
          setHoveredItem={setHoveredItem}
          setSelectedItem={(id) => navigate(id === 'home' ? '/' : `/${id}`)}
          radius={82}
          iconSize={20}
          labelSizeClass="text-[8px]"
          wheelClassName="w-full h-full"
        />
      </nav>

      {/* Mobile Nav Toggle */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0c0d12cc] text-[#dfb48e] shadow-2xl backdrop-blur-xl transition-all duration-500 ${
            isMobileOpen ? 'scale-90 rotate-90' : 'scale-100'
          }`}
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(223,180,142,0.15),transparent_70%)] animate-pulse" />
          {isMobileOpen ? <X size={20} /> : <Disc3 size={20} className="animate-spin-slow" />}
        </button>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              className="absolute top-16 right-0 p-3 rounded-[2.5rem] border border-white/10 bg-[#0c0d12ee] backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] pointer-events-auto"
            >
              <div className="w-[15rem] h-[15rem]">
                <WheelFace
                  activeItem={activeItem}
                  hoveredItem={hoveredItem}
                  rotation={rotation}
                  selectedItem={selectedItem}
                  setHoveredItem={setHoveredItem}
                  setSelectedItem={(id) => {
                    navigate(id === 'home' ? '/' : `/${id}`);
                    setIsMobileOpen(false);
                  }}
                  radius={72}
                  iconSize={18}
                  labelSizeClass="text-[8px]"
                  wheelClassName="w-full h-full"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};


export default CircularNav;
