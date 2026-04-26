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

  if (Math.abs(clockwise) < Math.abs(counterClockwise)) {
    return clockwise;
  }

  if (Math.abs(counterClockwise) < Math.abs(clockwise)) {
    return counterClockwise;
  }

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
    <div
      className={`relative rounded-full flex items-center justify-center pointer-events-auto shadow-[0_0_50px_rgba(0,0,0,0.8)] ${wheelClassName}`}
    >
      <div
        className="absolute inset-[-12px] rounded-full opacity-60"
        style={{
          background:
            'repeating-conic-gradient(from 0deg, #dfb48e 0deg 0.5deg, transparent 0.5deg 4deg)',
          maskImage: 'radial-gradient(transparent 69%, black 71%)',
          WebkitMaskImage: 'radial-gradient(transparent 69%, black 71%)',
        }}
      />

      <div className="absolute inset-0 rounded-full bg-[#1c1e26] border border-[rgba(255,255,255,0.08)] shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-transparent" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <div
            key={angle}
            className="absolute top-1/2 left-1/2 w-1/2 h-px bg-[rgba(255,255,255,0.06)] origin-left"
            style={{ transform: `rotate(${angle}deg)` }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[42%] h-[42%] origin-left overflow-hidden flex items-center"
          style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%)' }}
        >
          <div className="w-full h-full bg-gradient-to-r from-[#dfb48e33] to-transparent blur-[1px]" />
        </div>

        <div
          className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-3 bg-[#dfb48e]"
          style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%)' }}
        />
      </div>

      <div className="absolute w-[34%] h-[34%] rounded-full border border-[#dfb48e66] bg-[#14161d] shadow-[0_0_20px_rgba(223,180,142,0.1)] flex items-center justify-center z-20 w-">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(223,180,142,0.05),transparent_70%)]" />
        <div className="relative text-center">
          <p className="text-[9px] tracking-[0.28em] text-[rgba(255,255,255,0.42)]">ACTIVE</p>
          <p className="mt-1 text-[9px] tracking-[0.22em] text-[#dfb48e]">{activeItem.toUpperCase()}</p>
        </div>
      </div>

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
            aria-pressed={isSelected}
            aria-label={`Go to ${item.label}`}
            onClick={() => {
              setSelectedItem(item.id);
              onSelect?.();
            }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onFocus={() => setHoveredItem(item.id)}
            onBlur={() => setHoveredItem(null)}
            className={`absolute top-1/2 left-1/2 z-30 flex items-center justify-center rounded-full cursor-pointer outline-none transition-transform duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#dfb48e] ${
              isActive ? 'scale-110' : 'scale-100 hover:scale-105'
            }`}
            style={{
              transform: `translate(calc(-50% + ${x * radius}px), calc(-50% + ${y * radius}px))`,
              width: '5.5rem',
              height: '5.5rem',
            }}
          >
            <div className="flex flex-col items-center justify-center rounded-full px-2 py-3 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#dfb48e]">
              <item.icon
                size={iconSize}
                className={`transition-all duration-300 ${
                  isActive
                    ? 'text-[#dfb48e] drop-shadow-[0_0_10px_rgba(223,180,142,0.8)]'
                    : hoveredItem === item.id
                      ? 'text-gray-300'
                      : 'text-gray-500'
                }`}
                strokeWidth={isActive ? 2 : 1.6}
              />
              <span
                className={`mt-2 font-medium tracking-[0.16em] transition-colors duration-300 ${labelSizeClass} ${
                  isActive
                    ? 'text-[#dfb48e]'
                    : hoveredItem === item.id
                      ? 'text-gray-300'
                      : 'text-gray-600'
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
  
  // Sync selectedItem with current route
  const currentPathId = location.pathname === '/' ? 'home' : location.pathname.substring(1);
  const selectedItem = navItems.some(i => i.id === currentPathId) ? currentPathId : 'home';
  
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [rotation, setRotation] = useState(() => {
    const activeIndex = navItems.findIndex((item) => item.id === selectedItem);
    return activeIndex >= 0 ? navItems[activeIndex].angle : navItems[0].angle;
  });

  const activeItem = hoveredItem || selectedItem;
  const activeIndex = useMemo(
    () => navItems.findIndex((item) => item.id === activeItem),
    [activeItem],
  );
  const previousIndexRef = useRef(activeIndex);

  useEffect(() => {
    const previousIndex = previousIndexRef.current;
    if (activeIndex < 0 || previousIndex === activeIndex) {
      return;
    }

    const stepDelta = getStepDelta(previousIndex, activeIndex, navItems.length);
    setRotation((current) => current + stepDelta * SEGMENT_ANGLE);
    previousIndexRef.current = activeIndex;
  }, [activeIndex]);

  return (
    <>
      <nav
        className="fixed top-5 right-5 z-50 hidden md:flex md:w-56 md:h-56 lg:top-8 lg:right-8 lg:w-64 lg:h-64 items-center justify-center pointer-events-none"
        onMouseLeave={() => setHoveredItem(null)}
      >
        <WheelFace
          activeItem={activeItem}
          hoveredItem={hoveredItem}
          rotation={rotation}
          selectedItem={selectedItem}
          setHoveredItem={setHoveredItem}
          setSelectedItem={(id) => navigate(id === 'home' ? '/' : `/${id}`)}
          radius={88}
          iconSize={20}
          labelSizeClass="text-[10px]"
          wheelClassName="w-full h-full"
        />
      </nav>

      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          type="button"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-wheel-nav"
          aria-label={isMobileOpen ? 'Close navigation wheel' : 'Open navigation wheel'}
          onClick={() => {
            if (isMobileOpen) {
              setHoveredItem(null);
            }
            setIsMobileOpen((open) => !open);
          }}
          className={`group relative flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(24,27,35,0.88)] text-[#dfb48e] shadow-[0_20px_50px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-all duration-500 ${
            isMobileOpen ? 'scale-95 rotate-90' : 'scale-100 rotate-0'
          }`}
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(223,180,142,0.16),transparent_68%)] opacity-80" />
          {isMobileOpen ? <X size={24} /> : <Disc3 size={24} className="transition-transform duration-500 group-hover:rotate-180" />}
        </button>

        <div
          className={`pointer-events-none absolute top-[calc(100%+1rem)] right-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMobileOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-4 scale-90 opacity-0'
          }`}
        >
          <div className="pointer-events-auto rounded-[2rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(15,17,23,0.72)] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
            <div
              id="mobile-wheel-nav"
              className="relative flex items-center justify-center"
              style={{
                width: 'min(17rem, calc(100vw - 2.5rem))',
                height: 'min(17rem, calc(100vw - 2.5rem))',
              }}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <WheelFace
                activeItem={activeItem}
                hoveredItem={hoveredItem}
                rotation={rotation}
                selectedItem={selectedItem}
                setHoveredItem={setHoveredItem}
                setSelectedItem={(id) => navigate(id === 'home' ? '/' : `/${id}`)}
                onSelect={() => {
                  setHoveredItem(null);
                  setIsMobileOpen(false);
                }}
                radius={78}
                iconSize={18}
                labelSizeClass="text-[9px]"
                wheelClassName="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CircularNav;
