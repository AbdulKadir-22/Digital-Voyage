import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import skillsData from '../../../data/skills.json';

const ProgressSection = () => {
  const { progressCategories, softSkills } = skillsData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex h-full w-full flex-col rounded-[2.2rem] border border-[rgba(223,180,142,0.16)] bg-[linear-gradient(180deg,rgba(13,16,23,0.58),rgba(8,10,16,0.42))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl md:p-7"
    >
      <div className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-[#dfb48e]">My Skills</div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {progressCategories.map((category, idx) => {
          const CatIcon = LucideIcons[category.icon];

          return (
            <div
              key={idx}
              className="flex flex-col gap-6 rounded-[1.7rem] border border-[rgba(223,180,142,0.15)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dfb48e66] bg-[rgba(223,180,142,0.06)]">
                  {CatIcon && <CatIcon className="h-5 w-5 text-[#dfb48e]" strokeWidth={1.5} />}
                </div>
                <h3 className="text-[0.88rem] uppercase tracking-wide text-white">{category.title}</h3>
              </div>

              <div className="flex flex-col gap-5">
                {category.skills.map((skill, sIdx) => (
                  <motion.div key={sIdx} variants={itemVariants} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.98rem] font-light text-[#e3e5ea]">{skill.name}</span>
                      <span className="text-sm text-[#c4a07b]">{skill.percentage}%</span>
                    </div>
                    <div className="h-[5px] w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: 'easeOut' }}
                        className="h-full rounded-full bg-[linear-gradient(90deg,#c98b4e,#dfb48e)] shadow-[0_0_12px_rgba(223,180,142,0.5)]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-5 h-px w-full bg-white/5" />

      <div className="flex flex-col gap-6 rounded-[1.7rem] border border-[rgba(223,180,142,0.15)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dfb48e66] bg-[rgba(223,180,142,0.06)]">
            <LucideIcons.User className="h-5 w-5 text-[#dfb48e]" strokeWidth={1.5} />
          </div>
          <h3 className="text-[1.05rem] uppercase tracking-wide text-[#dfb48e]">Soft Skills</h3>
        </div>

        <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 lg:grid-cols-7">
          {softSkills.map((skill, idx) => {
            const Icon = LucideIcons[skill.icon];

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative flex flex-col items-center gap-3 px-2 text-center"
              >
                {idx !== 0 && (
                  <span className="absolute -left-1 top-1 hidden h-12 w-px bg-white/10 lg:block" />
                )}
                <div className="flex h-11 w-11 items-center justify-center transition-all duration-300">
                  {Icon && <Icon className="h-7 w-7 text-gray-300 transition-colors group-hover:text-[#dfb48e]" strokeWidth={1} />}
                </div>
                <span className="whitespace-pre-line text-[0.92rem] leading-snug text-[#c0c3cc] transition-colors group-hover:text-white">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressSection;
