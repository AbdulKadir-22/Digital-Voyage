import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import skillsData from '../../../data/skills.json';
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaFigma } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiVercel,
  SiEslint,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BiLogoGit } from 'react-icons/bi';
import { ArrowRight } from 'lucide-react';

const iconMap = {
  react: { icon: FaReact, color: 'text-[#61DAFB]' },
  next: { icon: SiNextdotjs, color: 'text-white' },
  ts: { icon: SiTypescript, color: 'text-[#3178C6]' },
  tailwind: { icon: SiTailwindcss, color: 'text-[#38B2AC]' },
  node: { icon: FaNodeJs, color: 'text-[#339933]' },
  express: { icon: SiExpress, color: 'text-white' },
  mongo: { icon: SiMongodb, color: 'text-[#47A248]' },
  postgres: { icon: SiPostgresql, color: 'text-[#336791]' },
  git: { icon: BiLogoGit, color: 'text-[#F05032]' },
  github: { icon: FaGithub, color: 'text-white' },
  docker: { icon: FaDocker, color: 'text-[#2496ED]' },
  vscode: { icon: VscVscode, color: 'text-[#007ACC]' },
  postman: { icon: SiPostman, color: 'text-[#FF6C37]' },
  vercel: { icon: SiVercel, color: 'text-white' },
  eslint: { icon: SiEslint, color: 'text-[#4B32C3]' },
  figma: { icon: FaFigma, color: 'text-[#F24E1E]' },
};

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Tools', 'Others'];

const ToolsGrid = () => {
  const { technologies } = skillsData;
  const [activeTab, setActiveTab] = useState('All');

  const filteredTech = technologies.filter(
    (tech) => activeTab === 'All' || tech.category === activeTab,
  );

  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-[2.2rem] border border-[rgba(223,180,142,0.16)] bg-[linear-gradient(180deg,rgba(13,16,23,0.6),rgba(8,10,16,0.46))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl md:p-7">
      <div className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#dfb48e]">
        Tools & Technologies
      </div>

      <div className="grid w-full grid-cols-5 items-center rounded-full border border-white/8 bg-[rgba(255,255,255,0.02)] p-1">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`cursor-pointer rounded-full px-1 py-2 text-[0.72rem] tracking-wide transition-all duration-300 ${
              activeTab === category
                ? 'border border-[#dfb48e] bg-[linear-gradient(180deg,rgba(223,180,142,0.22),rgba(223,180,142,0.06))] text-[#f2c79e] shadow-[0_0_18px_rgba(223,180,142,0.22)]'
                : 'border border-transparent bg-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence>
          {filteredTech.map((tech) => {
            const IconData = iconMap[tech.iconType];
            const Icon = IconData?.icon;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={tech.id}
                className="group flex aspect-square cursor-pointer flex-col items-center justify-center gap-3 rounded-[1.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] transition-all duration-300 hover:border-[rgba(223,180,142,0.24)] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] bg-[rgba(255,255,255,0.02)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  {Icon && (
                    <Icon className={`h-9 w-9 ${IconData.color} transition-transform duration-300 group-hover:scale-110`} />
                  )}
                </div>
                <span className="text-center text-[0.92rem] font-light text-gray-300 transition-colors group-hover:text-white">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* <div className="mt-2 flex w-full justify-center border-t border-white/6 pt-5">
        <button className="group flex cursor-pointer items-center gap-2 text-[0.78rem] uppercase tracking-[0.24em] text-[#dfb48e] transition-colors hover:text-[#f3c8a4]">
          VIEW ALL TECHNOLOGIES
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div> */}
    </div>
  );
};

export default ToolsGrid;
