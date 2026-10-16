/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Compass, Cpu, Sparkles, Network, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 25, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden bg-radial-vignette bg-tech-grid">
      {/* Subtle coordinate overlay & precision vector markers */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out opacity-25"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#E82127]/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      {/* Engineering HUD Corner markers */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-6 left-6 hidden md:block text-[10px] font-mono text-[#A7ADB4] text-left"
      >
        <div>SYS_REF: MK-2026-ENG</div>
        <div>COORDINATES: 25.9972° N, 97.1561° W</div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-6 right-6 hidden md:block text-[10px] font-mono text-[#A7ADB4] text-right"
      >
        <div>RESEARCH SPECIFICATION</div>
        <div>VERIFICATION: UNCLASSIFIED</div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto space-y-6"
      >
        {/* Subtle engineering kicker */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#A7ADB4] bg-[#0B0D0F]/80 border border-[#20242A] px-3 py-1 rounded"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E82127] animate-pulse" />
          <span>{language === 'ar' ? 'موسوعة الهندسة والتكنولوجيا المستقلة' : 'INDEPENDENT ENGINEERING & RESEARCH LAB'}</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          variants={titleVariants}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase font-display leading-none"
        >
          {t('heroTitle')}
        </motion.h1>

        {/* Subtitle */}
        <motion.div 
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl font-light tracking-widest text-[#FFFFFF]/90 font-display uppercase border-y border-[#20242A] py-2 max-w-2xl mx-auto"
        >
          {t('heroSubtitle')}
        </motion.div>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-sm sm:text-base text-[#A7ADB4] max-w-2xl mx-auto leading-relaxed font-normal"
        >
          {t('heroDescription')}
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <motion.a
            href="#timeline"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-5 py-3 rounded bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors shadow-lg"
          >
            <Compass className="w-4 h-4 text-black" />
            <span>{t('btnExploreJourney')}</span>
          </motion.a>

          <motion.a
            href="#companies"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-5 py-3 rounded bg-[#0B0D0F] border border-[#20242A] text-white font-medium text-xs tracking-wider uppercase hover:border-white/30 hover:bg-[#141820] transition-colors"
          >
            <Cpu className="w-4 h-4 text-[#E82127]" />
            <span>{t('btnExploreCompanies')}</span>
          </motion.a>

          <motion.a
            href="#techmap"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-5 py-3 rounded bg-[#0B0D0F] border border-[#20242A] text-white font-medium text-xs tracking-wider uppercase hover:border-white/30 hover:bg-[#141820] transition-colors"
          >
            <Network className="w-4 h-4 text-cyan-400" />
            <span>{t('btnTechMap')}</span>
          </motion.a>

          <motion.a
            href="#news"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-5 py-3 rounded bg-[#0B0D0F] border border-[#20242A] text-[#A7ADB4] font-medium text-xs tracking-wider uppercase hover:text-white hover:border-[#E82127]/50 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-[#E82127]" />
            <span>{t('btnLatestDevelopments')}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
