export interface WarningSign {
  id: number;
  title: string;
  description: string;
  realityCheck: string;
  icon: string;
}

export const WARNING_SIGNS: WarningSign[] = [
  {
    id: 1,
    title: 'Việc nhẹ, lương cao bất thường',
    description: 'Tuyển dụng nhập liệu, trực page, chơi game... nhưng hứa hẹn lương từ 20–35 triệu/tháng mà không yêu cầu bằng cấp hay kinh nghiệm.',
    realityCheck: 'Không có công ty hợp pháp nào trả mức thu nhập phi lý cho những công việc phổ thông giản đơn.',
    icon: 'Briefcase'
  },
  {
    id: 2,
    title: 'Bao trọn gói xuất cảnh "chui" / đường mòn lối mở',
    description: 'Đối tượng quảng cáo lo toàn bộ chi phí đi lại, hộ chiếu, đưa đón tận nơi nhưng đi qua các đường mòn biên giới không có visa lao động hợp pháp.',
    realityCheck: 'Đây là hình thức xuất cảnh trái phép, người lao động lập tức trở thành đối tượng cư trú bất hợp pháp và mất quyền bảo hộ lãnh sự cơ bản.',
    icon: 'MapPin'
  },
  {
    id: 3,
    title: 'Thu giữ giấy tờ tùy thân & kiểm soát điện thoại',
    description: 'Ngay khi tới nơi, quản lý yêu cầu nộp CMND/CCCD, hộ chiếu, điện thoại với lý do "bảo mật công ty" hoặc "làm thủ tục tạm trú".',
    realityCheck: 'Hành vi tước đoạt giấy tờ và phương tiện liên lạc nhằm cô lập nạn nhân hoàn toàn khỏi sự trợ giúp của gia đình và pháp luật.',
    icon: 'ShieldAlert'
  },
  {
    id: 4,
    title: 'Hợp đồng miệng hoặc điều khoản bẫy nợ vô lý',
    description: 'Không có hợp đồng lao động ký trước khi đi, hoặc khi sang tới nơi bị ép ký văn bản ép buộc nợ tiền xe, tiền ăn, tiền công môi giới hàng ngàn USD.',
    realityCheck: 'Khoản "nợ khống" này là công cụ cưỡng bức lao động, buộc nạn nhân phải làm việc từ 14–16 tiếng/ngày hoặc bắt người nhà nộp tiền chuộc.',
    icon: 'FileText'
  },
  {
    id: 5,
    title: 'Ép buộc dụ dỗ bạn bè, người thân làm chỉ tiêu',
    description: 'Nạn nhân bị ép dùng tài khoản mạng xã hội cá nhân để lừa gạt, dụ dỗ chính bạn bè, người thân sang thế chân để đổi lấy lời hứa tự do.',
    realityCheck: 'Tội phạm khai thác chính niềm tin giữa những người thân thiết để nhân rộng mạng lưới nạn nhân.',
    icon: 'Users'
  }
];

export const EMERGENCY_CONTACTS = [
  {
    name: 'Tổng đài Quốc gia Phòng chống Mua bán người',
    number: '111',
    note: 'Miễn phí cước gọi 24/7, tiếp nhận tố giác tội phạm và hỗ trợ nạn nhân khẩn cấp'
  },
  {
    name: 'Lực lượng Cảnh sát Phản ứng nhanh',
    number: '113',
    note: 'Tiếp nhận tin báo tội phạm khẩn cấp trên toàn quốc'
  },
  {
    name: 'Tổng đài Bảo hộ Công dân - Cục Lãnh sự Bộ Ngoại giao',
    number: '+84 981 84 84 84',
    note: 'Hỗ trợ công dân Việt Nam gặp nạn hoặc bị lừa đảo cưỡng bức tại nước ngoài'
  }
];
