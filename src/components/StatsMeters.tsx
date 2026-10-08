'use client';

import React from 'react';
import { Volume2, VolumeX, FastForward, History, HelpCircle, GitFork, FolderLock } from 'lucide-react';

interface StatsMetersProps {
  pressure: number;
  hope: number;
  friendTrust: number;
  chapterNumber?: number;
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenHistory: () => void;
  onFastForward: () => void;
  onOpenWarningModal: () => void;
  onOpenFlowchart: () => void;
  onOpenEvidence: () => void;
  reducedMotion: boolean;
}

export const StatsMeters: React.FC<StatsMetersProps> = ({
  pressure,
  hope,
  friendTrust,
  chapterNumber = 1,
  isMuted,
  onToggleMute,
  onOpenHistory,
  onFastForward,
  onOpenWarningModal,
  onOpenFlowchart,
  onOpenEvidence,
  reducedMotion,
}) => {
  const isHighPressure = pressure >= 60;
  const isExtremePressure = pressure >= 80;

  return (
    <header className="w-full max-w-5xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex flex-col md:flex-row items-center justify-between gap-2.5 z-30 select-none">
      {/* Top Left: Chapter Badge & Title */}
      <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-tanao-crimson/20 border border-tanao-crimson/50 text-red-300">
            HỒI {chapterNumber}
          </span>
          <span className="text-xs font-medium text-slate-400 tracking-wide">
            TÀN ẢO
          </span>
        </div>

        {/* Action Controls for Mobile Header */}
        <div className="flex items-center gap-1.5 md:hidden">
          <button
            onClick={onOpenEvidence}
            aria-label="Hồ sơ bằng chứng"
            className="p-1.5 rounded-lg bg-noir-850/80 border border-slate-700/50 text-amber-400"
            title="Hồ sơ bằng chứng"
          >
            <FolderLock className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenFlowchart}
            aria-label="Sơ đồ phân nhánh"
            className="p-1.5 rounded-lg bg-noir-850/80 border border-slate-700/50 text-cyan-400"
            title="Sơ đồ phân nhánh"
          >
            <GitFork className="w-4 h-4" />
          </button>
          <button
            onClick={onToggleMute}
            aria-label={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
            className="p-1.5 rounded-lg bg-noir-850/80 border border-slate-700/50 text-slate-300 hover:text-white"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
          <button
            onClick={onOpenHistory}
            aria-label="Xem lại hội thoại"
            className="p-1.5 rounded-lg bg-noir-850/80 border border-slate-700/50 text-slate-300 hover:text-white"
          >
            <History className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Center: Dynamic Psychological Stats Indicators */}
      <div className="flex items-center gap-3 sm:gap-6 w-full md:w-auto justify-center bg-noir-900/80 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-xl border border-slate-800/80 shadow-lg">
        {/* Pressure Meter */}
        <div className="flex flex-col min-w-[85px] sm:min-w-[110px]">
          <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono mb-1">
            <span className={`font-semibold flex items-center gap-1 ${isExtremePressure ? 'text-red-400 animate-pulse' : isHighPressure ? 'text-amber-400' : 'text-slate-300'}`}>
              ÁP LỰC
              {isExtremePressure && <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />}
            </span>
            <span className="text-slate-400">{pressure}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                isExtremePressure
                  ? 'bg-red-600'
                  : isHighPressure
                  ? 'bg-gradient-to-r from-amber-500 to-red-500'
                  : 'bg-amber-500'
              }`}
              style={{ width: `${Math.min(100, Math.max(0, pressure))}%` }}
            />
          </div>
        </div>

        {/* Hope Meter */}
        <div className="flex flex-col min-w-[85px] sm:min-w-[110px]">
          <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono mb-1">
            <span className="font-semibold text-cyan-400">HY VỌNG</span>
            <span className="text-slate-400">{hope}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan-500 transition-all duration-500"
              style={{ width: `${Math.min(100, Math.max(0, hope))}%` }}
            />
          </div>
        </div>

        {/* Friend Trust Meter */}
        <div className="flex flex-col min-w-[85px] sm:min-w-[110px]">
          <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono mb-1">
            <span className="font-semibold text-emerald-400">TIN CẬY</span>
            <span className="text-slate-400">{friendTrust}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${Math.min(100, Math.max(0, friendTrust))}%` }}
            />
          </div>
        </div>
      </div>

      {/* Top Right: Desktop Controls */}
      <div className="hidden md:flex items-center gap-1.5">
        <button
          onClick={onOpenEvidence}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-noir-850/80 hover:bg-noir-700/80 border border-slate-700/50 text-xs font-medium text-amber-300 hover:text-amber-200 transition-colors"
          title="Hồ sơ chứng cứ & bẫy lừa"
        >
          <FolderLock className="w-3.5 h-3.5 text-amber-400" />
          <span>Chứng Cứ</span>
        </button>

        <button
          onClick={onOpenFlowchart}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-noir-850/80 hover:bg-noir-700/80 border border-slate-700/50 text-xs font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
          title="Sơ đồ cây phân nhánh & tỉ lệ cộng đồng"
        >
          <GitFork className="w-3.5 h-3.5 text-cyan-400" />
          <span>Sơ Đồ</span>
        </button>

        <button
          onClick={onOpenWarningModal}
          className="p-1.5 rounded-lg bg-noir-850/80 hover:bg-noir-700/80 border border-slate-700/50 text-slate-300 hover:text-white transition-colors"
          title="Dấu hiệu cảnh báo lừa đảo"
        >
          <HelpCircle className="w-4 h-4 text-amber-400" />
        </button>

        <button
          onClick={onOpenHistory}
          className="p-1.5 rounded-lg bg-noir-850/80 hover:bg-noir-700/80 border border-slate-700/50 text-slate-300 hover:text-white transition-colors"
          title="Xem lại lịch sử thoại"
        >
          <History className="w-4 h-4" />
        </button>

        <button
          onClick={onFastForward}
          className="p-1.5 rounded-lg bg-noir-850/80 hover:bg-noir-700/80 border border-slate-700/50 text-slate-300 hover:text-white transition-colors"
          title="Tua nhanh chữ"
        >
          <FastForward className="w-4 h-4" />
        </button>

        <button
          onClick={onToggleMute}
          className="p-1.5 rounded-lg bg-noir-850/80 hover:bg-noir-700/80 border border-slate-700/50 text-slate-300 hover:text-white transition-colors"
          title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-red-400" />
          ) : (
            <Volume2 className="w-4 h-4 text-emerald-400" />
          )}
        </button>
      </div>
    </header>
  );
};
