'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, CornerDownLeft } from 'lucide-react';
import { DialogueLine, ChoiceOption } from '@/types/game';
import { soundEngine } from '@/lib/soundEngine';

interface DialogueBoxProps {
  currentDialogue: DialogueLine;
  isLastLine: boolean;
  choices?: ChoiceOption[];
  onAdvance: () => void;
  onSelectChoice: (choice: ChoiceOption) => void;
  textSpeed?: 'normal' | 'fast' | 'instant';
  reducedMotion?: boolean;
}

export const DialogueBox: React.FC<DialogueBoxProps> = ({
  currentDialogue,
  isLastLine,
  choices,
  onAdvance,
  onSelectChoice,
  textSpeed = 'normal',
  reducedMotion = false,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const typeIndexRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const fullText = currentDialogue.text;

  // Typing effect logic
  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    typeIndexRef.current = 0;

    if (textSpeed === 'instant') {
      setDisplayedText(fullText);
      setIsTyping(false);
      return;
    }

    const intervalMs = textSpeed === 'fast' ? 12 : 25;

    timerRef.current = setInterval(() => {
      if (typeIndexRef.current < fullText.length) {
        const nextChar = fullText[typeIndexRef.current];
        setDisplayedText((prev) => prev + nextChar);
        typeIndexRef.current += 1;

        // Play soft tick on certain characters to avoid audio overload
        if (typeIndexRef.current % 4 === 0) {
          soundEngine.playTypeTick();
        }
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
        setIsTyping(false);
      }
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentDialogue.id, fullText, textSpeed]);

  const handleBoxClick = () => {
    // If still typing, skip to the full line immediately
    if (isTyping) {
      if (timerRef.current) clearInterval(timerRef.current);
      setDisplayedText(fullText);
      setIsTyping(false);
      return;
    }

    // If finished typing and not awaiting choices, advance to next dialogue
    if (!isLastLine || !choices || choices.length === 0) {
      onAdvance();
    }
  };

  const getSpeakerStyle = () => {
    switch (currentDialogue.speaker) {
      case 'player':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 'friend':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
      case 'manager':
        return 'text-red-400 bg-red-500/10 border-red-500/30';
      case 'recruiter':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
      case 'driver':
        return 'text-slate-400 bg-slate-500/10 border-slate-500/30';
      case 'narrator':
        return 'text-slate-300 bg-slate-800/40 border-slate-700/30';
      default:
        return 'text-slate-300 bg-slate-800/40 border-slate-700/30';
    }
  };

  const showChoices = isLastLine && !isTyping && choices && choices.length > 0;

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 pb-4 sm:pb-6 relative z-20">
      {/* Choice Buttons Overlay above dialogue */}
      <AnimatePresence>
        {showChoices && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="mb-3 sm:mb-4 flex flex-col gap-2.5"
          >
            <div className="text-[11px] sm:text-xs font-mono font-medium text-amber-300/80 px-1 tracking-wider uppercase flex items-center gap-1.5">
              <CornerDownLeft className="w-3.5 h-3.5" />
              Lựa chọn hành động của bạn:
            </div>
            {choices.map((choice, idx) => (
              <motion.button
                key={choice.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.2 }}
                onClick={() => {
                  soundEngine.playChoiceSound();
                  onSelectChoice(choice);
                }}
                className="group relative text-left p-3 sm:p-4 rounded-xl bg-noir-850/95 hover:bg-noir-700/90 border border-slate-700/80 hover:border-amber-500/50 shadow-lg hover:shadow-amber-500/10 transition-all duration-200 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="w-6 h-6 rounded-md bg-noir-950 border border-slate-700 flex items-center justify-center text-xs font-mono font-semibold text-slate-400 group-hover:text-amber-400 group-hover:border-amber-500/40 transition-colors">
                    {idx + 1}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-slate-100 group-hover:text-white leading-snug">
                    {choice.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Dialogue Panel */}
      <div
        onClick={handleBoxClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            handleBoxClick();
          }
        }}
        className="w-full relative min-h-[140px] sm:min-h-[155px] p-4 sm:p-6 rounded-2xl bg-noir-900/90 backdrop-blur-xl border border-slate-800 shadow-2xl cursor-pointer select-none transition-all hover:border-slate-700/80 flex flex-col justify-between"
      >
        {/* Subtle inner top glow */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

        {/* Speaker Name Tag */}
        <div className="flex items-center justify-between mb-2">
          {currentDialogue.speaker !== 'narrator' ? (
            <span
              className={`px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold tracking-wide border ${getSpeakerStyle()}`}
            >
              {currentDialogue.speakerName || 'Nhân vật'}
            </span>
          ) : (
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Người dẫn chuyện
            </span>
          )}

          {/* Quick Skip hint */}
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
            {isTyping ? 'Nhấp để hiện đầy đủ' : !showChoices ? 'Nhấp để tiếp tục' : ''}
          </span>
        </div>

        {/* Dialogue Text Content */}
        <div className="text-sm sm:text-base md:text-lg text-slate-100 font-sans leading-relaxed tracking-normal flex-1 flex items-center py-1">
          <p className="whitespace-pre-wrap">
            {displayedText}
            {isTyping && (
              <span className="inline-block w-2 h-4 ml-1 bg-amber-400 animate-pulse" />
            )}
          </p>
        </div>

        {/* Bottom indicator: prompt to tap to advance */}
        <div className="flex justify-end items-center pt-2">
          {!isTyping && (!choices || !isLastLine || choices.length === 0) && (
            <div className="flex items-center gap-1 text-xs font-mono text-amber-400/90 animate-bounce">
              <span>Tiếp tục</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
