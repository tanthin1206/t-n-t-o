'use client';

import React from 'react';
import { X, ShieldAlert, PhoneCall, CheckCircle } from 'lucide-react';
import { WARNING_SIGNS, EMERGENCY_CONTACTS } from '@/data/awarenessData';

interface WarningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WarningModal: React.FC<WarningModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-3xl bg-noir-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[88vh] overflow-y-auto text-slate-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-noir-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">5 Dấu Hiệu Cảnh Báo</h2>
            <p className="text-xs font-mono text-red-400/80 uppercase">Cẩm nang nhận diện & tự bảo vệ</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {WARNING_SIGNS.map((sign, idx) => (
            <div key={sign.id} className="p-4 rounded-xl bg-noir-850 border border-slate-800">
              <h3 className="font-semibold text-white text-sm sm:text-base flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs text-amber-400 font-mono">
                  {idx + 1}
                </span>
                {sign.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 pl-7">
                {sign.description}
              </p>
              <div className="mt-2 text-xs text-emerald-400/90 pl-7 font-mono">
                ✓ Lời khuyên: {sign.realityCheck}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-red-950/30 border border-red-900/40">
          <div className="text-xs font-mono font-bold text-red-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <PhoneCall className="w-4 h-4" />
            Đường dây nóng khẩn cấp khi nghi vấn:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {EMERGENCY_CONTACTS.map((c) => (
              <div key={c.number} className="bg-noir-950/80 p-2.5 rounded-lg border border-slate-800">
                <span className="font-bold text-amber-400 font-mono text-sm">{c.number}</span>: {c.name}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-tanao-crimson hover:bg-red-700 text-white font-medium text-sm transition-colors"
          >
            Đã nắm rõ
          </button>
        </div>
      </div>
    </div>
  );
};
