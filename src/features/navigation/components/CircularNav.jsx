import React, { useState } from 'react';
import { Home, Compass, Folder, CodeXml, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'HOME', icon: Home, angle: -90 },
  { id: 'journey', label: 'JOURNEY', icon: Compass, angle: -30 },
  { id: 'projects', label: 'PROJECTS', icon: Folder, angle: 30 },
  { id: 'skills', label: 'SKILLS', icon: CodeXml, angle: 90 },
  { id: 'experience', label: 'EXPERIENCE', icon: Briefcase, angle: 150 },
  { id: 'contact', label: 'CONTACT', icon: Mail, angle: 210 },
];

const CircularNav = () => {
  const [selectedItem, setSelectedItem] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);

  const activeItem = hoveredItem || selectedItem;

  return (
    <nav
      className="fixed top-8 right-8 z-50 w-64 h-64 flex items-center justify-center pointer-events-none"
      onMouseLeave={() => setHoveredItem(null)}
    >
      {/* Outer Notched Edge */}
      <div className="absolute inset-[-12px] rounded-full opacity-60"
        style={{
          background: `repeating-conic-gradient(from 0deg, #dfb48e 0deg 0.5deg, transparent 0.5deg 4deg)`,
          maskImage: 'radial-gradient(transparent 69%, black 71%)',
          WebkitMaskImage: 'radial-gradient(transparent 69%, black 71%)'
        }}
      />

      {/* Outer Wheel Container */}
      <div className="relative w-full h-full rounded-full flex items-center justify-center pointer-events-auto shadow-[0_0_50px_rgba(0,0,0,0.8)]">

        {/* Main Wheel Background */}
        <div className="absolute inset-0 rounded-full bg-[#1c1e26] border border-[rgba(255,255,255,0.08)] shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-transparent" />
        </div>

        {/* Radial Dividers */}
        <div className="absolute inset-0 pointer-events-none">
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <div
              key={angle}
              className="absolute top-1/2 left-1/2 w-1/2 h-px bg-[rgba(255,255,255,0.06)] origin-left"
              style={{ transform: `rotate(${angle}deg)` }}
            />
          ))}
        </div>

        {/* Active Segment Highlight */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)"
          style={{
            transform: `rotate(${navItems.find(i => i.id === activeItem)?.angle}deg)`,
          }}
        >
          {/* Highlighted Wedge - Positioned at 0deg (Right) */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[110px] h-[110px] origin-left overflow-hidden flex items-center"
            style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%)' }}>
            <div className="w-full h-full bg-gradient-to-r from-[#dfb48e33] to-transparent blur-[1px]" />
          </div>

          {/* Outer Pointer */}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-3 bg-[#dfb48e]"
            style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%)' }} />
        </div>


        {/* Central Ring */}
        <div className="absolute w-[86px] h-[86px] rounded-full border border-[#dfb48e66] bg-[#14161d] shadow-[0_0_20px_rgba(223,180,142,0.1)] flex items-center justify-center z-20">
          <div className="w-[85%] h-[85%] rounded-full border border-[rgba(255,255,255,0.03)] shadow-inner" />
          {/* Inner Glow */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(223,180,142,0.05),transparent_70%)]" />
        </div>

        {/* Navigation Items */}
        {navItems.map((item) => {
          const isActive = activeItem === item.id;
          const radius = 86; // Slightly increased distance from center
          const rad = (item.angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              className="absolute group transition-all duration-300 z-30 flex flex-col items-center justify-center w-1 h-12"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isActive ? 1.1 : 1})`,
              }}
            >
              <div className="flex flex-col items-center translate-y-[16px]">
                <item.icon
                  size={22}
                  className={`transition-all duration-300 ${isActive ? 'text-[#dfb48e] drop-shadow-[0_0_10px_rgba(223,180,142,0.8)]' : 'text-gray-500 group-hover:text-gray-300'}`}
                  strokeWidth={isActive ? 2 : 1.5}
                />
                <span className={`mt-1 text-[10px] font-medium tracking-[0.1em] transition-colors duration-300 ${isActive ? 'text-[#dfb48e]' : 'text-gray-600 group-hover:text-gray-400'}`}>
                  {item.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default CircularNav;
