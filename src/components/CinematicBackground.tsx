'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CinematicBackgroundProps {
  theme: 'warm_city' | 'night_road' | 'harsh_neon' | 'cell_dark' | 'messenger_ui' | 'ending_void';
  screenEffect?: 'none' | 'shake' | 'flicker' | 'glitch' | 'red_flash' | 'fade_black';
  reducedMotion?: boolean;
}

export const CinematicBackground: React.FC<CinematicBackgroundProps> = ({
  theme,
  screenEffect = 'none',
  reducedMotion = false,
}) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none transition-colors duration-1000 ${
        screenEffect === 'red_flash' ? 'bg-red-950/40' : ''
      } ${screenEffect === 'flicker' ? 'animate-flicker' : ''}`}
    >
      {/* Background Gradients according to narrative theme */}
      {theme === 'warm_city' && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b120c] via-[#241710] to-[#0c0908]">
          {/* Warm sunset skyline silhouette */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/20 via-orange-950/30 to-black" />
          <svg className="absolute bottom-0 w-full h-64 text-[#120a06] opacity-70" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="currentColor" d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,218.7C840,224,960,192,1080,170.7C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
          {/* Subtle dust particles */}
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:64px_64px] opacity-10" />
        </div>
      )}

      {theme === 'night_road' && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b14] via-[#091424] to-[#04060a]">
          {/* Cold night road with motion streaks */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/60 to-black" />
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent blur-sm" />
          {/* Silhouettes of roadside trees */}
          <svg className="absolute bottom-0 w-full h-80 text-[#03060a] opacity-90" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="currentColor" d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,170.7C672,160,768,192,864,197.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      )}

      {theme === 'harsh_neon' && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0a0e17] to-[#030712]">
          {/* Harsh fluorescent lighting bars */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.5)] opacity-40 animate-pulseGlow" />
          <div className="absolute top-20 right-10 w-32 h-64 border-r-2 border-red-500/20 rotate-12 blur-[1px]" />
          {/* Barbed wire & compound structure pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
      )}

      {theme === 'cell_dark' && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#080b10] to-[#020408]">
          {/* Barred window shadow effect */}
          <div className="absolute top-0 right-1/4 w-72 h-full opacity-15 rotate-6 bg-gradient-to-b from-amber-200/30 via-transparent to-transparent [mask-image:repeating-linear-gradient(90deg,#000,#000_20px,transparent_20px,transparent_40px)]" />
          {/* Claustrophobic heavy vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020408_90%)]" />
        </div>
      )}

      {theme === 'messenger_ui' && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#090d16] via-[#06090e] to-[#020306]">
          {/* Subtle blue pulse simulating smartphone screen reflection in dark room */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-black" />
        </div>
      )}

      {theme === 'ending_void' && (
        <div className="absolute inset-0 bg-[#040608]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,41,59,0.2),transparent_70%)]" />
        </div>
      )}

      {/* Screen noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Screen Glitch Overlay */}
      {screenEffect === 'glitch' && !reducedMotion && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.2, 0.9, 0] }}
          transition={{ duration: 0.3, repeat: 1 }}
          className="absolute inset-0 bg-red-500/20 mix-blend-screen pointer-events-none"
        />
      )}

      {/* Fade to Black transition */}
      {screenEffect === 'fade_black' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-black pointer-events-none z-50"
        />
      )}
    </div>
  );
};
