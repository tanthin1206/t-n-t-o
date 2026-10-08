'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SpeakerRole } from '@/types/game';

import { getAssetPath } from '@/lib/assetPath';

interface CharacterAvatarProps {
  speaker: SpeakerRole;
  speakerName?: string;
  emotion?: 'neutral' | 'anxious' | 'fear' | 'hopeful' | 'cold' | 'whisper';
  reducedMotion?: boolean;
}

export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({
  speaker,
  speakerName,
  emotion = 'neutral',
  reducedMotion = false,
}) => {
  if (speaker === 'narrator' || speaker === 'system') {
    return null;
  }

  // Visual configuration based on speaker
  const getConfig = () => {
    switch (speaker) {
      case 'player':
        return {
          label: speakerName || 'Bạn (Nhân vật chính)',
          imageSrc: getAssetPath('/characters/player.jpg'),
          borderColor: 'border-amber-500/40',
          accent: '#f59e0b',
          glow: 'shadow-[0_0_40px_rgba(245,158,11,0.2)]',
          roleTag: 'Nạn nhân',
          roleColor: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
        };
      case 'friend':
        return {
          label: speakerName || 'Nam (Bạn thân)',
          imageSrc: getAssetPath('/characters/friend.jpg'),
          borderColor: 'border-cyan-500/40',
          accent: '#06b6d4',
          glow: 'shadow-[0_0_40px_rgba(6,182,212,0.2)]',
          roleTag: 'Bạn thân',
          roleColor: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40',
        };
      case 'recruiter':
        return {
          label: speakerName || 'Hoàng (Tuyển dụng)',
          imageSrc: getAssetPath('/characters/recruiter.jpg'),
          borderColor: 'border-purple-500/40',
          accent: '#a855f7',
          glow: 'shadow-[0_0_40px_rgba(168,85,247,0.2)]',
          roleTag: 'Kẻ dụ dỗ',
          roleColor: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
        };
      case 'driver':
        return {
          label: speakerName || 'Tài xế trung chuyển',
          imageSrc: getAssetPath('/characters/driver.jpg'),
          borderColor: 'border-slate-500/40',
          accent: '#64748b',
          glow: 'shadow-[0_0_35px_rgba(100,116,139,0.15)]',
          roleTag: 'Đưa đón',
          roleColor: 'bg-slate-900/80 text-slate-300 border-slate-600/40',
        };
      case 'manager':
        return {
          label: speakerName || 'Quản lý cơ sở',
          imageSrc: getAssetPath('/characters/manager.jpg'),
          borderColor: 'border-red-600/50',
          accent: '#dc2626',
          glow: 'shadow-[0_0_50px_rgba(220,38,38,0.3)]',
          roleTag: 'Cai quản',
          roleColor: 'bg-red-950/80 text-red-300 border-red-600/50',
        };
      default:
        return {
          label: speakerName || '',
          imageSrc: '/characters/player.jpg',
          borderColor: 'border-gray-500/30',
          accent: '#94a3b8',
          glow: '',
          roleTag: 'Nhân vật',
          roleColor: 'bg-gray-900/80 text-gray-300 border-gray-700',
        };
    }
  };

  const config = getConfig();

  const getEmotionLabel = () => {
    switch (emotion) {
      case 'fear': return 'Hoảng loạn';
      case 'anxious': return 'Bất an';
      case 'cold': return 'Lạnh lùng';
      case 'whisper': return 'Thao túng';
      case 'hopeful': return 'Hy vọng';
      default: return 'Trực diện';
    }
  };

  return (
    <div className="flex flex-col items-center justify-end h-full max-h-[480px] pointer-events-none select-none relative z-10 pb-2">
      {/* Ambient Backlight Halo behind the character */}
      <div 
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-25 -z-10 transition-colors duration-700"
        style={{ backgroundColor: config.accent }}
      />

      {/* Character Portrait Card with Gentle Breathing */}
      <motion.div
        animate={
          reducedMotion
            ? {}
            : {
                y: [0, -5, 0],
                transition: {
                  duration: speaker === 'manager' ? 3.8 : 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }
        }
        className="relative flex flex-col items-center"
      >
        {/* Visual Novel Graphic Novel Character Frame */}
        <div
          className={`relative w-48 h-64 sm:w-56 sm:h-76 md:w-60 md:h-84 rounded-2xl overflow-hidden border ${config.borderColor} ${config.glow} bg-noir-950/80 backdrop-blur-sm shadow-2xl transition-all duration-500`}
        >
          {/* Character 2D Graphic Novel Artwork */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={config.imageSrc}
            alt={config.label}
            className="w-full h-full object-cover object-top transition-transform duration-700"
          />

          {/* Bottom vignette overlay to blend into dialogue box */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-noir-950 via-noir-950/60 to-transparent pointer-events-none" />

          {/* Subtle top edge specular highlight */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          {/* Top corner role badge */}
          <div className="absolute top-2.5 left-2.5">
            <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold tracking-wider uppercase border shadow-md ${config.roleColor}`}>
              {config.roleTag}
            </span>
          </div>

          {/* Bottom emotion status badge */}
          <div className="absolute bottom-2.5 inset-x-0 flex justify-center">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-noir-950/90 border border-slate-700/80 text-slate-300 shadow-md">
              {getEmotionLabel()}
            </span>
          </div>
        </div>

        {/* Character Name Label */}
        <div className="mt-2.5 px-3 py-0.5 rounded-lg bg-noir-900/90 border border-slate-800 text-xs sm:text-sm font-semibold tracking-wide text-slate-200 text-center drop-shadow-md">
          {config.label}
        </div>
      </motion.div>
    </div>
  );
};
