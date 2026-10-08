'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FolderLock, FileText, CreditCard, HeartPulse, MessageSquare, AlertCircle } from 'lucide-react';
import { EVIDENCE_ITEMS, EvidenceItem } from '@/data/evidenceData';
import { soundEngine } from '@/lib/soundEngine';

interface EvidenceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EvidenceDrawer: React.FC<EvidenceDrawerProps> = ({ isOpen, onClose }) => {
  const [selectedItem, setSelectedItem] = useState<EvidenceItem>(EVIDENCE_ITEMS[0]);

  if (!isOpen) return null;

  const getIcon = (type: EvidenceItem['iconType']) => {
    switch (type) {
      case 'file': return <FileText className="w-5 h-5 text-red-400" />;
      case 'idCard': return <CreditCard className="w-5 h-5 text-amber-400" />;
      case 'hospital': return <HeartPulse className="w-5 h-5 text-cyan-400" />;
      case 'chat': return <MessageSquare className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm p-0 sm:p-4">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="w-full sm:max-w-xl h-full bg-noir-900 border-l sm:border border-slate-700/80 sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-noir-850 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-800/80 text-red-400">
              <FolderLock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider font-mono">
                HỒ SƠ BẰNG CHỨNG & VẬT CHỨNG
              </h2>
              <p className="text-xs font-mono text-slate-400">Hồ sơ thực tế về các thủ đoạn bẫy người</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-noir-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body: Tabs & Detail View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {/* Quick Selection Pills */}
          <div className="grid grid-cols-2 gap-2">
            {EVIDENCE_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  soundEngine.playChoiceSound();
                  setSelectedItem(item);
                }}
                className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 ${
                  selectedItem.id === item.id
                    ? 'bg-noir-800 border-amber-500/80 shadow-lg shadow-amber-500/10'
                    : 'bg-noir-850/60 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">{getIcon(item.iconType)}</div>
                <div className="overflow-hidden">
                  <div className="text-xs font-semibold text-white truncate">{item.title}</div>
                  <div className="text-[10px] font-mono text-slate-400">{item.category}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Evidence Dossier Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedItem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl bg-noir-850 border border-slate-700/80 space-y-4 shadow-xl"
            >
              {/* Dossier Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-red-950/80 border border-red-700/80 text-red-300">
                  {selectedItem.category}
                </span>
                <span className="text-xs font-mono text-slate-400">{selectedItem.date}</span>
              </div>

              {/* Title & Summary */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">{selectedItem.title}</h3>
                <p className="text-xs sm:text-sm text-amber-300/90 font-mono mt-1">
                  {selectedItem.summary}
                </p>
              </div>

              {/* Full Inspection Description */}
              <div className="p-3.5 rounded-xl bg-noir-950 border border-slate-800/90 text-xs sm:text-sm leading-relaxed text-slate-300">
                {selectedItem.details}
              </div>

              {/* Warning note */}
              <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-900/60 flex items-start gap-2.5 text-xs text-red-300">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="font-semibold text-red-200">Bài học cảnh giác:</strong>{' '}
                  {selectedItem.warningNote}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-noir-850 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors"
          >
            Đóng Hồ Sơ
          </button>
        </div>
      </motion.div>
    </div>
  );
};
