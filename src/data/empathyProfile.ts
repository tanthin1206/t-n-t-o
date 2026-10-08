export interface EmpathyProfile {
  title: string;
  badge: string;
  description: string;
  moralCore: string;
  advice: string;
}

export const getEmpathyProfile = (
  pressure: number,
  friendTrust: number,
  lastChoiceId?: string
): EmpathyProfile => {
  if (lastChoiceId === 'c_opt_B' || friendTrust >= 70) {
    return {
      title: 'KẺ KIÊN ĐỊNH NHÂN TÍNH',
      badge: 'Người Bảo Vệ Đồng Loại',
      description: 'Dù bị đe dọa trực tiếp về thể xác và cơ hội tự do, bạn kiên quyết không đẩy người bạn thân nhất vào chiếc bẫy. Bạn thà chịu đựng bóng tối một mình hơn là biến bản thân thành công cụ của tội ác.',
      moralCore: 'Phẩm giá con người là thứ không thể đem ra trao đổi hay trả giá.',
      advice: 'Sự kiên định của bạn chính là bức tường thành vững chắc nhất ngăn chặn cạm bẫy lây lan trong xã hội.'
    };
  }

  if (lastChoiceId === 'c_opt_C') {
    return {
      title: 'NGƯỜI MƯU LƯỢC TRONG NGHỊCH CẢNH',
      badge: 'Người Tìm Kiếm Hy Vọng',
      description: 'Bạn không chấp nhận đầu hàng số phận nhưng cũng không mù quáng đối đầu trực diện khi không có vũ khí trong tay. Bạn chọn câu giờ, tìm kiếm kẽ hở công nghệ để phát tín hiệu cầu cứu.',
      moralCore: 'Sự bình tĩnh và trí tuệ là vũ khí sống còn khi đối diện với bạo lực có tổ chức.',
      advice: 'Ngoài đời, hãy ghi nhớ các đầu số cứu nạn khẩn cấp (111, 113) và vị trí đồn công an gần nhất.'
    };
  }

  return {
    title: 'NẠN NHÂN CỦA SỰ DỒN NÉN',
    badge: 'Nỗi Đau Thực Tại',
    description: 'Bị đặt vào tình huống sinh tử khắc nghiệt, bạn buộc phải đưa ra lựa chọn đổi chác linh hồn để sinh tồn. Trò chơi không phán xét bạn, bởi trong chiếc lồng sắt ấy, mọi nạn nhân đều bị bẻ gãy nhân tính.',
    moralCore: 'Không nạn nhân nào đáng bị phán xét khi bị đẩy vào bước đường cùng của tội ác buôn người.',
    advice: 'Đừng bao giờ để bản thân hoặc người thân rơi vào hoàn cảnh không có sự lựa chọn nào tốt.'
  };
};
