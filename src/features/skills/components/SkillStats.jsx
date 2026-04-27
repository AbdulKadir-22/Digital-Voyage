import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import skillsData from '../../../data/skills.json';

const SkillStats = () => {
  const { stats } = skillsData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {stats.map((stat, index) => {
        const Icon = LucideIcons[stat.icon];

        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group flex min-h-[6.2rem] items-center gap-4 rounded-[1.55rem] border border-[rgba(223,180,142,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_32px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:border-[rgba(223,180,142,0.38)] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(223,180,142,0.24)] bg-[rgba(223,180,142,0.06)] shadow-[0_0_20px_rgba(223,180,142,0.08)]">
              {Icon && <Icon className="h-7 w-7 text-[#dfb48e]" strokeWidth={1.25} />}
            </div>

            <div className="flex flex-col">
              <span className="mb-1 text-[2rem] font-light leading-none text-white">{stat.value}</span>
              <span className="whitespace-pre-line text-[0.85rem] leading-snug text-[#b7bbc5]">
                {stat.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default SkillStats;
