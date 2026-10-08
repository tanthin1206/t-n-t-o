'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameState, ChoiceOption, SceneId } from '@/types/game';
import { STORY_SCENES } from '@/data/storyData';
import { soundEngine } from '@/lib/soundEngine';
import { CinematicBackground } from './CinematicBackground';
import { CharacterAvatar } from './CharacterAvatar';
import { StatsMeters } from './StatsMeters';
import { DialogueBox } from './DialogueBox';
import { MessengerSimulator } from './MessengerSimulator';
import { EpilogueScreen } from './EpilogueScreen';
import { HistoryModal } from './HistoryModal';
import { WarningModal } from './WarningModal';
import { EvidenceDrawer } from './EvidenceDrawer';
import { FlowchartModal } from './FlowchartModal';

interface VisualNovelEngineProps {
  onBackToHome: () => void;
}

const INITIAL_STATE: GameState = {
  currentSceneId: 'scene1_recruitment',
  dialogueIndex: 0,
  pressure: 15,
  hope: 80,
  friendTrust: 85,
  history: [],
  isAudioMuted: false,
  reducedMotion: false,
  textSpeed: 'normal',
  unlockedEndings: [],
};

export const VisualNovelEngine: React.FC<VisualNovelEngineProps> = ({ onBackToHome }) => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [isEvidenceOpen, setIsEvidenceOpen] = useState(false);
  const [isFlowchartOpen, setIsFlowchartOpen] = useState(false);
  const [lastChoiceId, setLastChoiceId] = useState<string | undefined>(undefined);
  const [activeScreenEffect, setActiveScreenEffect] = useState<'none' | 'shake' | 'flicker' | 'glitch' | 'red_flash' | 'fade_black'>('none');

  const currentScene = STORY_SCENES[gameState.currentSceneId] || STORY_SCENES['scene1_recruitment'];
  const currentDialogue = currentScene.dialogues[gameState.dialogueIndex] || currentScene.dialogues[0];
  const isLastLine = gameState.dialogueIndex >= currentScene.dialogues.length - 1;

  // Sync ambient tone with scene
  useEffect(() => {
    soundEngine.setAmbientTone(currentScene.ambientTone || 'warm');
  }, [currentScene]);

  // Trigger dialogue SFX and screen effects
  useEffect(() => {
    if (!currentDialogue) return;

    // Apply delta to stats if defined
    if (currentDialogue.pressureDelta || currentDialogue.hopeDelta || currentDialogue.friendTrustDelta) {
      setGameState((prev) => ({
        ...prev,
        pressure: Math.min(100, Math.max(0, prev.pressure + (currentDialogue.pressureDelta || 0))),
        hope: Math.min(100, Math.max(0, prev.hope + (currentDialogue.hopeDelta || 0))),
        friendTrust: Math.min(100, Math.max(0, prev.friendTrust + (currentDialogue.friendTrustDelta || 0))),
      }));
    }

    // Play dialogue SFX
    if (currentDialogue.sfx) {
      switch (currentDialogue.sfx) {
        case 'heartbeat':
          soundEngine.playHeartbeat(gameState.pressure / 100);
          break;
        case 'door_thud':
          soundEngine.playDoorThud();
          break;
        case 'notification':
          soundEngine.playNotification();
          break;
        case 'glitch':
          soundEngine.playGlitchSound();
          break;
      }
    }

    // Apply screen effect (shake is completely omitted to avoid dizziness)
    if (currentDialogue.screenEffect && currentDialogue.screenEffect !== 'none' && currentDialogue.screenEffect !== 'shake') {
      setActiveScreenEffect(currentDialogue.screenEffect);
      const timer = setTimeout(() => {
        setActiveScreenEffect('none');
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setActiveScreenEffect('none');
    }
  }, [currentDialogue?.id]);

  // Periodic heartbeat when pressure is severe (>75%)
  useEffect(() => {
    if (gameState.pressure >= 75) {
      const interval = setInterval(() => {
        soundEngine.playHeartbeat(gameState.pressure / 100);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [gameState.pressure]);

  // Advance dialogue within current scene
  const handleAdvance = useCallback(() => {
    if (!currentDialogue) return;

    // Append to transcript history
    setGameState((prev) => {
      const speakerName = currentDialogue.speakerName || 
        (currentDialogue.speaker === 'narrator' ? 'Người dẫn chuyện' : 'Nhân vật');
      const newHistory = [
        ...prev.history,
        { speaker: speakerName, text: currentDialogue.text }
      ];

      if (prev.dialogueIndex < currentScene.dialogues.length - 1) {
        return {
          ...prev,
          dialogueIndex: prev.dialogueIndex + 1,
          history: newHistory,
        };
      }
      return { ...prev, history: newHistory };
    });
  }, [currentDialogue, currentScene.dialogues.length]);

  // Branch selection
  const handleSelectChoice = useCallback((choice: ChoiceOption) => {
    setLastChoiceId(choice.id);
    setActiveScreenEffect('none');

    setGameState((prev) => {
      const nextPressure = Math.min(100, Math.max(0, prev.pressure + (choice.pressureDelta || 0)));
      const nextHope = Math.min(100, Math.max(0, prev.hope + (choice.hopeDelta || 0)));
      const nextTrust = Math.min(100, Math.max(0, prev.friendTrust + (choice.friendTrustDelta || 0)));

      // Save choice label in history
      const newHistory = [
        ...prev.history,
        { speaker: 'Lựa chọn của bạn', text: `→ ${choice.label}` }
      ];

      return {
        ...prev,
        currentSceneId: choice.nextSceneId,
        dialogueIndex: 0,
        pressure: nextPressure,
        hope: nextHope,
        friendTrust: nextTrust,
        history: newHistory,
      };
    });
  }, []);

  const handleToggleMute = () => {
    const nextMuted = !gameState.isAudioMuted;
    soundEngine.setMuted(nextMuted);
    setGameState((prev) => ({ ...prev, isAudioMuted: nextMuted }));
  };

  const handleFastForward = () => {
    setGameState((prev) => ({
      ...prev,
      textSpeed: prev.textSpeed === 'normal' ? 'fast' : prev.textSpeed === 'fast' ? 'instant' : 'normal',
    }));
  };

  const handleRestartGame = () => {
    setGameState({
      ...INITIAL_STATE,
      isAudioMuted: gameState.isAudioMuted,
      reducedMotion: gameState.reducedMotion,
    });
    setLastChoiceId(undefined);
    setActiveScreenEffect('none');
  };

  const handleJumpToScene = (sceneId: SceneId) => {
    setActiveScreenEffect('none');
    if (STORY_SCENES[sceneId]) {
      setGameState((prev) => ({
        ...prev,
        currentSceneId: sceneId,
        dialogueIndex: 0,
      }));
    }
  };

  // If in Epilogue scene, render full Epilogue screen directly
  if (gameState.currentSceneId === 'scene8_epilogue') {
    return (
      <div className="relative min-h-screen w-full bg-gradient-to-b from-[#0d131f] via-[#06090e] to-[#030407] overflow-y-auto">
        <EpilogueScreen
          pressure={gameState.pressure}
          friendTrust={gameState.friendTrust}
          lastChoiceId={lastChoiceId}
          onRestartGame={handleRestartGame}
          onGoHome={onBackToHome}
          onOpenFlowchart={() => setIsFlowchartOpen(true)}
        />
        {/* Flowchart Modal also available in Epilogue */}
        <FlowchartModal
          isOpen={isFlowchartOpen}
          onClose={() => setIsFlowchartOpen(false)}
          currentSceneId={gameState.currentSceneId}
          onJumpToScene={handleJumpToScene}
        />
      </div>
    );
  }

  const isTunnelVisionActive = gameState.pressure >= 75;

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-between bg-black text-slate-100">
      {/* Dynamic Cinematic Background */}
      <CinematicBackground
        theme={currentScene.backgroundTheme}
        screenEffect={activeScreenEffect}
        reducedMotion={gameState.reducedMotion}
      />

      {/* Claustrophobic Tunnel Vision Vignette when pressure is severe (>75%) */}
      {isTunnelVisionActive && (
        <div className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-1000 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.85)_95%)]" />
      )}

      {/* Top Stats Bar */}
      <StatsMeters
        pressure={gameState.pressure}
        hope={gameState.hope}
        friendTrust={gameState.friendTrust}
        chapterNumber={currentScene.chapterNumber}
        isMuted={gameState.isAudioMuted}
        onToggleMute={handleToggleMute}
        onOpenHistory={() => setIsHistoryOpen(true)}
        onFastForward={handleFastForward}
        onOpenWarningModal={() => setIsWarningOpen(true)}
        onOpenFlowchart={() => setIsFlowchartOpen(true)}
        onOpenEvidence={() => setIsEvidenceOpen(true)}
        reducedMotion={gameState.reducedMotion}
      />

      {/* Center Narrative / Interaction Area */}
      <div className="flex-1 flex flex-col items-center justify-center relative w-full px-4 overflow-hidden z-20">
        {currentScene.isMessengerScene ? (
          // Simulated Messenger UI with 20s tension timer for Scene 5
          <MessengerSimulator
            friendName="Nam"
            choices={currentScene.choices || []}
            onSelectOption={handleSelectChoice}
            pressure={gameState.pressure}
          />
        ) : (
          // Standard Visual Novel Character Display with upgraded 2D graphic novel art
          <CharacterAvatar
            speaker={currentDialogue.speaker}
            speakerName={currentDialogue.speakerName}
            emotion={currentDialogue.emotion}
            reducedMotion={gameState.reducedMotion}
          />
        )}
      </div>

      {/* Bottom Dialogue Box (Hidden during Messenger simulation) */}
      {!currentScene.isMessengerScene && (
        <DialogueBox
          currentDialogue={currentDialogue}
          isLastLine={isLastLine}
          choices={currentScene.choices}
          onAdvance={handleAdvance}
          onSelectChoice={handleSelectChoice}
          textSpeed={gameState.textSpeed}
          reducedMotion={gameState.reducedMotion}
        />
      )}

      {/* Dialogue History Modal */}
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={gameState.history}
      />

      {/* Warning Signs Modal */}
      <WarningModal
        isOpen={isWarningOpen}
        onClose={() => setIsWarningOpen(false)}
      />

      {/* Evidence & Clues Drawer */}
      <EvidenceDrawer
        isOpen={isEvidenceOpen}
        onClose={() => setIsEvidenceOpen(false)}
      />

      {/* Interactive Decision Flowchart Modal */}
      <FlowchartModal
        isOpen={isFlowchartOpen}
        onClose={() => setIsFlowchartOpen(false)}
        currentSceneId={gameState.currentSceneId}
        onJumpToScene={handleJumpToScene}
      />
    </div>
  );
};
