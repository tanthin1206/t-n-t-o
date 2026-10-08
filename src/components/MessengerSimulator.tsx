'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Video, Info, Lock, AlertTriangle, Clock, Keyboard } from 'lucide-react';
import { ChoiceOption } from '@/types/game';
import { soundEngine } from '@/lib/soundEngine';
import { getAssetPath } from '@/lib/assetPath';

interface MessengerSimulatorProps {
  friendName?: string;
  onSelectOption: (option: ChoiceOption) => void;
  choices: ChoiceOption[];
  pressure: number;
}

export const MessengerSimulator: React.FC<MessengerSimulatorProps> = ({
  friendName = 'Nam',
  onSelectOption,
  choices,
  pressure,
}) => {
  const [messages, setMessages] = useState<
    { id: string; sender: 'friend' | 'system'; text: string; time: string }[]
  >([]);
  const [isTyping, setIsTyping] = useState(true);
  const [incomingFinished, setIncomingFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(20);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [selectedDraft, setSelectedDraft] = useState<ChoiceOption | null>(null);
  const [typedLength, setTypedLength] = useState(0);

  // Simulated incoming message sequence
  useEffect(() => {
    const sequence = [
      { text: 'Ê, công việc đó thật à?', delay: 500 },
      { text: 'Mày đang làm ở đâu vậy? Mấy hôm nay tao không liên lạc được.', delay: 1800 },
      { text: 'Tao cũng đang tính tìm việc. Mẹ tao đang chờ mổ mà thiếu tiền...', delay: 3500 },
      { text: 'Nếu ổn thì tao sang làm cùng mày luôn được không?', delay: 5200 },
    ];

    const timeouts: NodeJS.Timeout[] = [];

    sequence.forEach((item, index) => {
      const t = setTimeout(() => {
        setIsTyping(true);
        soundEngine.playNotification();

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: `msg_${index}`,
              sender: 'friend',
              text: item.text,
              time: 'Vừa xong',
            },
          ]);
          if (index === sequence.length - 1) {
            setIsTyping(false);
            setIncomingFinished(true);
            setIsTimerActive(true);
          }
        }, 500);
      }, item.delay);

      timeouts.push(t);
    });

    return () => {
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, []);

  // Tension Countdown Timer
  useEffect(() => {
    if (!isTimerActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // If time expires without user choice, automatically pick the stalling option (Option C)
          const fallbackChoice = choices.find((c) => c.id === 'c_opt_C') || choices[0];
          if (fallbackChoice) {
            soundEngine.playDoorThud();
            onSelectOption(fallbackChoice);
          }
          return 0;
        }

        if (prev <= 6) {
          soundEngine.playHeartbeat(0.9);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerActive, timeLeft, choices, onSelectOption]);

  const handleSimulateKeypress = () => {
    soundEngine.playTypeTick();
    if (!selectedDraft) {
      // Pick first draft as default
      setSelectedDraft(choices[0]);
      setTypedLength(6);
    } else {
      setTypedLength((prev) => Math.min(selectedDraft.label.length, prev + 5));
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col h-[550px] sm:h-[620px] bg-[#0c1017] rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden relative">
      {/* Manager Threat & Countdown Timer Header */}
      <div className="bg-red-950/80 border-b border-red-900/80 px-4 py-2 flex flex-col gap-1 text-xs font-mono text-red-300">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-bold animate-pulse text-red-200">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            {timeLeft <= 5
              ? 'QUẢN LÝ: “MÀY LỀ MỀ QUÁ RỒI ĐẤY! BẤM NHANH!”'
              : 'QUẢN LÝ ĐANG ĐỨNG CHẰM CHẰM PHÍA SAU'}
          </span>
          {incomingFinished && (
            <span
              className={`flex items-center gap-1 font-bold ${
                timeLeft <= 5 ? 'text-red-400 text-sm animate-ping' : 'text-amber-400'
              }`}
            >
              <Clock className="w-3.5 h-3.5" /> {timeLeft}s
            </span>
          )}
        </div>

        {/* Visual Countdown Progress Bar */}
        {incomingFinished && (
          <div className="w-full h-1 bg-red-950 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                timeLeft <= 5 ? 'bg-red-500' : 'bg-amber-500'
              }`}
              style={{ width: `${(timeLeft / 20) * 100}%` }}
            />
          </div>
        )}
      </div>

      {/* Messenger Header */}
      <div className="bg-noir-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getAssetPath('/characters/friend.jpg')}
              alt={friendName}
              className="w-10 h-10 rounded-full object-cover object-top border border-cyan-500/50 shadow-md"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-noir-900" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white flex items-center gap-1.5">
              <span>{friendName}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                Bạn thân
              </span>
            </div>
            <div className="text-xs text-emerald-400 font-mono">Đang hoạt động</div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-500">
          <Phone className="w-4 h-4 cursor-not-allowed opacity-50" />
          <Video className="w-4 h-4 cursor-not-allowed opacity-50" />
          <Info className="w-4 h-4 text-slate-400" />
        </div>
      </div>

      {/* Message History Feed */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 flex flex-col justify-end">
        <div className="text-center my-1">
          <span className="inline-flex items-center gap-1 text-[10px] text-slate-500 bg-noir-850 px-2.5 py-0.5 rounded-full border border-slate-800">
            <Lock className="w-3 h-3 text-slate-400" /> Tin nhắn mã hóa đầu cuối
          </span>
        </div>

        {messages.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-end gap-2 max-w-[85%]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getAssetPath('/characters/friend.jpg')}
              alt={friendName}
              className="w-7 h-7 rounded-full object-cover object-top border border-cyan-600/60 flex-shrink-0 mb-1"
            />
            <div className="bg-[#1e293b] text-slate-100 px-3.5 py-2.5 rounded-2xl rounded-bl-sm text-xs sm:text-sm leading-relaxed border border-slate-700/60 shadow-md">
              {m.text}
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-1 text-slate-500 pl-8 py-1">
            <span className="text-xs font-mono">{friendName} đang soạn tin</span>
            <span className="inline-flex gap-1">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
            </span>
          </div>
        )}
      </div>

      {/* Choices & Forced Typing Interactive Section */}
      <div className="p-3 bg-noir-900 border-t border-slate-800 flex flex-col gap-2">
        <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 px-1 uppercase tracking-wider flex items-center justify-between">
          <span>Chọn tin nhắn phản hồi:</span>
          <span className="text-amber-400/90">Áp lực đè nặng</span>
        </div>

        {/* Choice Buttons */}
        <div className="space-y-1.5">
          {choices.map((choice) => (
            <button
              key={choice.id}
              onClick={() => {
                soundEngine.playChoiceSound();
                onSelectOption(choice);
              }}
              className="w-full text-left p-2.5 sm:p-3 rounded-xl bg-noir-800 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/60 transition-all text-xs sm:text-sm font-medium text-slate-200 hover:text-white flex items-center justify-between group active:scale-[0.99]"
            >
              <span className="pr-2">{choice.label}</span>
              <Send className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
