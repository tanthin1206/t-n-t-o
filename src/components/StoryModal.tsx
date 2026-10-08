'use client';

import React from 'react';
import { X, BookOpen, AlertCircle, Compass } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
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
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Bối Cảnh Câu Chuyện</h2>
            <p className="text-xs font-mono text-amber-400/80 uppercase">Hành trình rơi vào ảo vọng</p>
          </div>
        </div>

        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
          <p>
            Trong bối cảnh áp lực kinh tế và khủng hoảng việc làm, hàng nghìn lao động trẻ và sinh viên mới ra trường trở thành mục tiêu săn lùng của các đường dây buôn người xuyên quốc gia.
          </p>
          <p>
            Các đối tượng dựng lên những quảng cáo tuyển dụng hào nhoáng: <span className="text-amber-300 font-semibold">“Việc nhẹ lương cao, trực tổng đài, bao ăn ở từ A–Z”</span>. 
            Nhưng thực chất, nạn nhân bị đưa lậu qua các đường mòn biên giới hẻo lánh, bị tước đoạt giấy tờ tùy thân và giam cầm trong những khu liên hợp biệt lập.
          </p>
          <div className="p-4 rounded-xl bg-noir-850 border border-slate-800 space-y-2">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              Tại sao lại là “TÀN ẢO”?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              “Tàn” trong tro tàn, hoang tàn. “Ảo” trong ảo tưởng, cạm bẫy trực tuyến. Khi ảo vọng về sự đổi đời dễ dãi vỡ tan, thứ còn sót lại là nỗi đau thực tế và sự giằng xé đạo đức khôn cùng.
            </p>
          </div>
          <p className="text-xs sm:text-sm italic text-slate-400 border-l-2 border-slate-700 pl-3">
            Trò chơi đặt bạn vào chính lằn ranh nghiệt ngã ấy: Khi tự do của bạn chỉ có thể đổi bằng số phận của người bạn thân nhất, bạn sẽ làm gì?
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors"
          >
            Đã hiểu
          </button>
        </div>
      </div>
    </div>
  );
};
