'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, GitFork, ArrowDown, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import { FLOWCHART_NODES, FlowNode } from '@/data/flowchartData';
import { SceneId } from '@/types/game';
import { soundEngine } from '@/lib/soundEngine';

interface FlowchartModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSceneId?: string;
  onJumpToScene?: (sceneId: SceneId) => void;
}

export const FlowchartModal: React.FC<FlowchartModalProps> = ({
  isOpen,
  onClose,
  currentSceneId,
  onJumpToScene,
}) => {
  if (!isOpen) return null;

  const chapters = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-4xl h-[88vh] bg-noir-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-noir-850 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/80 text-cyan-400">
              <GitFork className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider font-mono">
                SƠ ĐỒ CÂY QUYẾT ĐỊNH & PHÂN NHÁNH
              </h2>
              <p className="text-xs font-mono text-slate-400">
                Khám phá mọi ngã rẽ và thống kê lựa chọn của cộng đồng
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-noir-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Flowchart Diagram Tree Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {chapters.map((chap) => {
            const nodesInChap = FLOWCHART_NODES.filter((n) => n.chapter === chap);
            if (nodesInChap.length === 0) return null;

            return (
              <div key={chap} className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-xs font-mono font-bold tracking-wider text-amber-300 uppercase">
                    HỒI {chap}
                  </span>
                  <div className="flex-1 h-px bg-slate-800" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {nodesInChap.map((node) => {
                    const isCurrent = node.sceneId === currentSceneId;
                    const isEnding = node.type === 'ending';

                    return (
                      <div
                        key={node.id}
                        className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                          isCurrent
                            ? 'bg-amber-950/30 border-amber-500 shadow-lg shadow-amber-500/10'
                            : isEnding
                            ? 'bg-noir-800/90 border-red-800/80 shadow-md'
                            : 'bg-noir-850/80 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold uppercase ${
                                isEnding
                                  ? 'bg-red-950 text-red-300 border border-red-800/60'
                                  : isCurrent
                                  ? 'bg-amber-950 text-amber-300 border border-amber-800/60'
                                  : 'bg-slate-800 text-slate-400'
                              }`}
                            >
                              {isEnding ? 'KẾT THÚC' : node.type === 'choice' ? 'NGÃ RẼ' : 'TIẾN TRÌNH'}
                            </span>

                            {node.communityPercentage && (
                              <span className="text-[11px] font-mono font-bold text-cyan-400">
                                {node.communityPercentage}% chọn
                              </span>
                            )}
                          </div>

                          <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                            {node.title}
                          </h3>
                          <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                            {node.description}
                          </p>
                        </div>

                        {onJumpToScene && node.sceneId && (
                          <div className="mt-3 pt-2 border-t border-slate-800/80 flex justify-end">
                            <button
                              onClick={() => {
                                soundEngine.playChoiceSound();
                                onJumpToScene(node.sceneId as SceneId);
                                onClose();
                              }}
                              className="text-[11px] font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
                            >
                              <span>Chơi từ đoạn này</span>
                              <span>→</span>
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-noir-850 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>* Tỉ lệ dựa trên mô phỏng phản xạ tâm lý đạo đức người chơi</span>
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
