'use client';

import React from 'react';
import { X, Heart, Shield, Sparkles } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-noir-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto text-slate-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-noir-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Heart className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Về Dự Án “TÀN ẢO”</h2>
            <p className="text-xs font-mono text-cyan-400/80 uppercase">Trải nghiệm tương tác nâng cao nhận thức</p>
          </div>
        </div>

        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
          <p>
            <strong className="text-white">“TÀN ẢO”</strong> là một dự án web game Visual Novel tương tác mang tính xã hội, được thiết kế nhằm nâng cao nhận thức và đồng cảm với các nạn nhân bị lừa đảo việc làm và cưỡng ép lao động xuyên biên giới.
          </p>

          <div className="p-4 rounded-xl bg-noir-850 border border-slate-800 space-y-2">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              Tôn chỉ nội dung:
            </h3>
            <ul className="text-xs sm:text-sm text-slate-400 space-y-1.5 list-disc pl-4">
              <li>Không miệt thị hoặc đổ lỗi cho nạn nhân.</li>
              <li>Không thương mại hóa hay giải trí bằng bạo lực đồ họa / máu me.</li>
              <li>Tập trung vào áp lực tâm lý, sự thao túng và các lựa chọn đạo đức khắc nghiệt.</li>
              <li>Lan tỏa thông điệp phòng ngừa thiết thực tới cộng đồng người trẻ.</li>
            </ul>
          </div>

          <p className="text-xs text-slate-400">
            Dự án hoạt động phi lợi nhuận dưới dạng nguyên mẫu web tương tác. Mọi sự tương đồng về tên nhân vật hay địa danh cụ thể đều mang tính đại diện nghệ thuật để phục vụ mục đích tuyên truyền phòng chống tội phạm.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
