'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, BookOpen, ShieldAlert, Info, Volume2, VolumeX } from 'lucide-react';
import { VisualNovelEngine } from '@/components/VisualNovelEngine';
import { StoryModal } from '@/components/StoryModal';
import { WarningModal } from '@/components/WarningModal';
import { AboutModal } from '@/components/AboutModal';
import { soundEngine } from '@/lib/soundEngine';

export default function Home() {
  const [view, setView] = useState<'home' | 'game'>('home');
  const [activeModal, setActiveModal] = useState<'none' | 'story' | 'warning' | 'about'>('none');
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (view === 'home') {
      soundEngine.setAmbientTone('warm');
    }
  }, [view]);

  const handleStartGame = () => {
    soundEngine.playChoiceSound();
    soundEngine.setAmbientTone('warm');
    setView('game');
  };

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    soundEngine.setMuted(nextMuted);
    setIsMuted(nextMuted);
  };

  if (view === 'game') {
    return <VisualNovelEngine onBackToHome={() => setView('home')} />;
  }

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-noir-950 text-slate-100 select-none">
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep dark gradient with subtle warm amber highlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0705] via-[#090b10] to-[#040608]" />
        
        {/* Subtle breathing light beam in center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[200px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Noir Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

        {/* Ambient Film Dust texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Top Header: Volume Control & Status */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-tanao-crimson animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Interactive Empathy Experience
          </span>
        </div>

        <button
          onClick={handleToggleMute}
          className="p-2 rounded-full bg-noir-850/80 hover:bg-noir-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
        </button>
      </header>

      {/* Center Hero Section */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-12 flex flex-col items-center text-center my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          {/* Sub-badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-noir-850/90 border border-slate-700/60 text-xs font-mono text-amber-300/90 shadow-md">
            <span>VISUAL NOVEL TƯƠNG TÁC</span>
          </div>

          {/* Main Title: TÀN ẢO */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            TÀN <span className="text-tanao-crimson drop-shadow-[0_0_35px_rgba(217,32,39,0.5)]">ẢO</span>
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-xl md:text-2xl text-slate-300 font-serif italic max-w-2xl mx-auto pt-2">
            “Trải nghiệm một lựa chọn không ai muốn phải chọn.”
          </p>

          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-sans leading-relaxed pt-1">
            Một hành trình thấu cảm và nhận diện bẫy lừa đảo việc làm lương cao, cưỡng ép lao động xuyên biên giới.
          </p>
        </motion.div>

        {/* Main Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-lg"
        >
          {/* [ BẮT ĐẦU ] */}
          <button
            onClick={handleStartGame}
            className="w-full sm:w-auto flex-1 group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-tanao-crimson hover:from-red-500 hover:to-red-600 text-white font-bold text-base tracking-wider uppercase shadow-[0_0_30px_rgba(217,32,39,0.35)] hover:shadow-[0_0_40px_rgba(217,32,39,0.6)] transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-95"
          >
            <Play className="w-5 h-5 fill-current transition-transform group-hover:scale-110" />
            <span>BẮT ĐẦU</span>
          </button>
        </motion.div>

        {/* Secondary Navigation Buttons: [ CÂU CHUYỆN ], [ DẤU HIỆU CẢNH BÁO ], [ VỀ DỰ ÁN ] */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-2.5 w-full max-w-xl"
        >
          <button
            onClick={() => {
              soundEngine.playChoiceSound();
              setActiveModal('story');
            }}
            className="px-4 py-2.5 rounded-xl bg-noir-850/80 hover:bg-noir-800 border border-slate-800 hover:border-slate-700 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-all flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>CÂU CHUYỆN</span>
          </button>

          <button
            onClick={() => {
              soundEngine.playChoiceSound();
              setActiveModal('warning');
            }}
            className="px-4 py-2.5 rounded-xl bg-noir-850/80 hover:bg-noir-800 border border-slate-800 hover:border-slate-700 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-all flex items-center gap-2"
          >
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <span>DẤU HIỆU CẢNH BÁO</span>
          </button>

          <button
            onClick={() => {
              soundEngine.playChoiceSound();
              setActiveModal('about');
            }}
            className="px-4 py-2.5 rounded-xl bg-noir-850/80 hover:bg-noir-800 border border-slate-800 hover:border-slate-700 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-all flex items-center gap-2"
          >
            <Info className="w-4 h-4 text-cyan-400" />
            <span>VỀ DỰ ÁN</span>
          </button>
        </motion.div>
      </div>

      {/* Footer Disclaimer */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 text-center text-xs font-mono text-slate-400">
        <p>Phi lợi nhuận • Nhận diện rủi ro • Phòng chống buôn bán người & lừa đảo việc làm</p>
      </footer>

      {/* Modals */}
      <StoryModal isOpen={activeModal === 'story'} onClose={() => setActiveModal('none')} />
      <WarningModal isOpen={activeModal === 'warning'} onClose={() => setActiveModal('none')} />
      <AboutModal isOpen={activeModal === 'about'} onClose={() => setActiveModal('none')} />
    </main>
  );
}
