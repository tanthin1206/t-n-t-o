'use client';

import React from 'react';
import { X, History } from 'lucide-react';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: { speaker: string; text: string }[];
}

export const HistoryModal: React.FC<HistoryModalProps> = ({ isOpen, onClose, history }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-noir-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[85vh] flex flex-col text-slate-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-noir-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4 flex-shrink-0">
          <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300">
            <History className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Lịch Sử Thoại</h2>
            <p className="text-xs font-mono text-slate-400">Các đoạn hội thoại đã trải qua</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3.5 pr-2 py-2">
          {history.length === 0 ? (
            <div className="text-center py-10 text-slate-500 text-sm">Chưa có lịch sử thoại.</div>
          ) : (
            history.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-noir-850 border border-slate-800/80 space-y-1">
                <div className="text-xs font-mono font-semibold text-amber-400/90">{item.speaker}</div>
                <div className="text-sm text-slate-200 leading-relaxed">{item.text}</div>
              </div>
            ))
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-slate-800 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
