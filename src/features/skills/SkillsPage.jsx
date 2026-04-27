import React from 'react';
import { motion } from 'framer-motion';
import { Bike } from 'lucide-react';
import SkillStats from './components/SkillStats';
import ProgressSection from './components/ProgressSection';
import ToolsGrid from './components/ToolsGrid';

const SkillsPage = () => {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-4 pb-10 pt-24 font-sans md:px-6 md:pl-28 md:pr-[260px] lg:pl-32 lg:pr-[320px] lg:pt-28"
    >
      <div className="pointer-events-none absolute inset-x-6 top-12 bottom-6 hidden rounded-[2.8rem] border border-[rgba(223,180,142,0.2)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] lg:block" />
      <div className="pointer-events-none absolute left-2 top-24 hidden h-[34rem] w-[11rem] rounded-[4rem] border border-[rgba(223,180,142,0.45)] border-r-0 opacity-70 blur-[0.2px] lg:block" />
      <div className="pointer-events-none absolute right-0 top-20 hidden h-[46rem] w-[10rem] rounded-[999px] border border-[rgba(223,180,142,0.2)] border-l-0 opacity-60 lg:block" />
      <div className="pointer-events-none absolute inset-x-10 bottom-8 hidden h-px bg-gradient-to-r from-transparent via-[rgba(223,180,142,0.25)] to-transparent lg:block" />

      <motion.section
        variants={childVariants}
        className="relative mb-8 overflow-hidden rounded-[2.4rem] border border-[rgba(223,180,142,0.18)] bg-[linear-gradient(180deg,rgba(10,12,18,0.48),rgba(10,12,18,0.32))] px-6 py-8 shadow-[0_30px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl md:mb-10 md:px-8 md:py-10 lg:min-h-[23rem] lg:px-12 lg:py-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_10%,rgba(223,180,142,0.12),transparent_26%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.04),transparent_22%)]" />

        <div className="relative max-w-[42rem]">
          <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#dfb48e]">
            My Skills
          </div>
          <h1 className="mb-5 text-[2.7rem] font-light leading-[1.02] text-white sm:text-5xl lg:text-[4.15rem]">
            Built Different.
            <br />
            Trained to <span className="font-medium text-[#dfb48e]">Deliver.</span>
          </h1>
          <div className="mb-6 h-[3px] w-24 rounded-full bg-[#dfb48e] shadow-[0_0_18px_rgba(223,180,142,0.8)]" />
          <p className="mb-8 max-w-xl text-sm leading-8 text-[#b8bcc8] md:text-[1.05rem]">
            A blend of technical expertise, creative thinking and problem solving - on and off the bike.
          </p>

          <SkillStats />
        </div>
      </motion.section>

      <motion.div
        variants={childVariants}
        className="grid w-full grid-cols-1 items-stretch gap-6 xl:grid-cols-[1.48fr_0.82fr] xl:gap-7"
      >
        <ProgressSection />
        <ToolsGrid />
      </motion.div>

      <motion.div
        variants={childVariants}
        className="relative mt-8 flex flex-col gap-5 rounded-[2rem] border border-[rgba(223,180,142,0.15)] bg-[rgba(11,14,20,0.34)] px-5 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:mt-10"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#dfb48e] bg-[radial-gradient(circle,rgba(223,180,142,0.12),rgba(223,180,142,0.02))] shadow-[0_0_24px_rgba(223,180,142,0.16)]">
            <Bike className="h-6 w-6 text-[#dfb48e]" strokeWidth={1.4} />
          </div>
          <p className="text-sm text-[#b7bac4]">Every ride. Every story. Every mile.</p>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <p className="text-right text-[11px] uppercase tracking-[0.3em] text-[#9ba0ab]">
            Keep Pedaling. Keep Building.
          </p>
          <span className="h-2.5 w-2.5 rounded-full bg-[#dfb48e] shadow-[0_0_14px_rgba(223,180,142,0.9)]" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsPage;
