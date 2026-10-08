export type SceneId = 
  | 'scene1_recruitment'
  | 'scene1_sub_ask_info'
  | 'scene1_sub_ask_friend'
  | 'scene1_sub_call_recruiter'
  | 'scene1_sub_accept_fast'
  | 'scene2_departure'
  | 'scene3_realization'
  | 'scene4_detention'
  | 'scene5_harsh_choice'
  | 'scene5_messenger_intro'
  | 'scene6_branch_A_compliance'
  | 'scene6_branch_B_defiance'
  | 'scene6_branch_C_stalling'
  | 'scene7_ending_replacement' // Ending 1
  | 'scene7_ending_nobody_wins' // Ending 2
  | 'scene7_ending_sos_signal'  // Ending 3
  | 'scene7_ending_rewind'      // Ending 4
  | 'scene8_epilogue';


export type SpeakerRole = 
  | 'narrator'
  | 'player'
  | 'friend' // Nam
  | 'recruiter' // Hoàng
  | 'driver' // Tài xế
  | 'manager' // Quản lý cơ sở
  | 'system';

export interface DialogueLine {
  id: string;
  speaker: SpeakerRole;
  speakerName?: string;
  text: string;
  emotion?: 'neutral' | 'anxious' | 'fear' | 'hopeful' | 'cold' | 'whisper';
  sfx?: 'heartbeat' | 'door_thud' | 'notification' | 'glitch' | 'typing' | 'ambience_shift';
  screenEffect?: 'none' | 'shake' | 'flicker' | 'glitch' | 'red_flash' | 'fade_black';
  backgroundTheme?: 'warm_city' | 'night_road' | 'harsh_neon' | 'cell_dark' | 'messenger_ui' | 'ending_void';
  pressureDelta?: number;
  hopeDelta?: number;
  friendTrustDelta?: number;
}

export interface ChoiceOption {
  id: string;
  label: string;
  previewText?: string;
  nextSceneId: SceneId;
  pressureDelta?: number;
  hopeDelta?: number;
  friendTrustDelta?: number;
  sfx?: 'choice_click' | 'glitch';
}

export interface Scene {
  id: SceneId;
  title: string;
  chapterNumber?: number;
  dialogues: DialogueLine[];
  choices?: ChoiceOption[];
  isMessengerScene?: boolean;
  backgroundTheme: 'warm_city' | 'night_road' | 'harsh_neon' | 'cell_dark' | 'messenger_ui' | 'ending_void';
  ambientTone?: 'warm' | 'uneasy' | 'dread' | 'silence';
}

export interface GameState {
  currentSceneId: SceneId;
  dialogueIndex: number;
  pressure: number; // 0 - 100
  hope: number;     // 0 - 100
  friendTrust: number; // 0 - 100
  history: {
    speaker: string;
    text: string;
  }[];
  isAudioMuted: boolean;
  reducedMotion: boolean;
  textSpeed: 'normal' | 'fast' | 'instant';
  unlockedEndings: string[];
}
