'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RotateCcw, 
  Home, 
  PhoneCall, 
  ShieldAlert, 
  Briefcase, 
  MapPin, 
  FileText, 
  Users, 
  Share2,
  Check,
  GitFork,
} from 'lucide-react';
import { WARNING_SIGNS, EMERGENCY_CONTACTS } from '@/data/awarenessData';
import { soundEngine } from '@/lib/soundEngine';

interface EpilogueScreenProps {
  pressure?: number;
  friendTrust?: number;
  lastChoiceId?: string;
  onRestartGame: () => void;
  onGoHome: () => void;
  onOpenFlowchart?: () => void;
}

export const EpilogueScreen: React.FC<EpilogueScreenProps> = ({
  onRestartGame,
  onGoHome,
  onOpenFlowchart,
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(
        `Trải nghiệm web game "TÀN ẢO" - Thấu cảm và nhận diện 5 dấu hiệu bẫy lừa đảo việc làm xuyên biên giới: ${window.location.href}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const getIcon = (id: number) => {
    switch (id) {
      case 1: return <Briefcase className="w-5 h-5 text-amber-400" />;
      case 2: return <MapPin className="w-5 h-5 text-cyan-400" />;
      case 3: return <ShieldAlert className="w-5 h-5 text-red-400" />;
      case 4: return <FileText className="w-5 h-5 text-purple-400" />;
      case 5: return <Users className="w-5 h-5 text-emerald-400" />;
      default: return <AlertTriangle className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 text-slate-100 z-30 flex flex-col min-h-screen justify-between">
      {/* Primary Reflection Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/80 text-xs font-mono text-red-300">
          <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
          THÔNG ĐIỆP XÃ HỘI
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          Bạn vừa chơi một trò chơi.
          <br />
          <span className="text-tanao-crimson font-serif italic text-xl sm:text-3xl font-normal block mt-2">
            “Nhưng ngoài đời, không có nút Restart.”
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
          Nạn nhân của các vụ buôn người và cưỡng bức lao động trực tuyến không phải là những kẻ đáng trách. 
          Họ là những người trẻ đang chật vật mưu sinh, bị dồn vào bước đường cùng và mắc bẫy bởi những mạng lưới thao túng tinh vi.
        </p>
      </motion.div>

      {/* 5 Warning Signs Section */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider font-mono">
              5 DẤU HIỆU CẢNH BÁO BẪY LỪA ĐẢO VIỆC LÀM
            </h2>
          </div>

          {onOpenFlowchart && (
            <button
              onClick={() => {
                soundEngine.playChoiceSound();
                onOpenFlowchart();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900/80 border border-cyan-700/60 text-xs font-mono text-cyan-300 transition-colors"
            >
              <GitFork className="w-3.5 h-3.5" />
              <span>Xem Sơ Đồ Phân Nhánh</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {WARNING_SIGNS.map((sign, index) => (
            <div
              key={sign.id}
              className={`p-4 rounded-2xl bg-noir-900/90 border border-slate-800/90 hover:border-slate-700 transition-all ${
                index === 4 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-noir-800 border border-slate-700/60 flex-shrink-0">
                  {getIcon(sign.id)}
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="text-xs sm:text-sm font-semibold text-white">
                    {index + 1}. {sign.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    {sign.description}
                  </p>
                  <div className="text-[11px] font-mono text-amber-300/90 bg-amber-950/20 border-l-2 border-amber-500/60 pl-2 py-0.5 mt-1">
                    Thực tế: {sign.realityCheck}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Hotline Support Box */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-950/40 via-noir-900 to-noir-900 border border-red-900/50 mb-8"
      >
        <div className="flex items-center gap-2 mb-3 text-red-400 font-mono text-xs uppercase tracking-wider font-bold">
          <PhoneCall className="w-4 h-4" />
          ĐƯỜNG DÂY NÓNG CỨU HỘ VÀ TỐ GIÁC TỘI PHẠM
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {EMERGENCY_CONTACTS.map((c) => (
            <div key={c.number} className="p-2.5 rounded-xl bg-noir-850 border border-slate-800">
              <div className="text-base font-mono font-bold text-amber-400">{c.number}</div>
              <div className="text-xs font-medium text-slate-200 mt-0.5">{c.name}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{c.note}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Action Footer Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pb-8">
        <button
          onClick={() => {
            soundEngine.playChoiceSound();
            onRestartGame();
          }}
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-tanao-crimson hover:bg-red-700 text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-red-900/30 flex items-center justify-center gap-2 transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>CHƠI LẠI ĐỂ THỬ CÁC NHÁNH KHÁC</span>
        </button>

        {onOpenFlowchart && (
          <button
            onClick={() => {
              soundEngine.playChoiceSound();
              onOpenFlowchart();
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-noir-800 hover:bg-slate-800 border border-cyan-800 text-cyan-300 font-medium text-xs flex items-center justify-center gap-2 transition-all"
          >
            <GitFork className="w-4 h-4" />
            <span>SƠ ĐỒ CÂY QUYẾT ĐỊNH</span>
          </button>
        )}

        <button
          onClick={() => {
            soundEngine.playChoiceSound();
            onGoHome();
          }}
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-noir-800 hover:bg-noir-700 border border-slate-700 text-slate-200 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>VỀ TRANG CHỦ</span>
        </button>

        <button
          onClick={handleShare}
          className="w-full sm:w-auto px-4 py-3 rounded-xl bg-noir-850 hover:bg-noir-700 border border-slate-700 text-slate-300 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-all"
          title="Sao chép link chia sẻ thông điệp"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400">Đã sao chép</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4" />
              <span>Chia sẻ cảnh báo</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
