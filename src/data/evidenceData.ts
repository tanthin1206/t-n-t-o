export interface EvidenceItem {
  id: string;
  title: string;
  category: 'Tài liệu' | 'Vật chứng' | 'Tin nhắn' | 'Hồ sơ y tế';
  date: string;
  summary: string;
  details: string;
  warningNote: string;
  iconType: 'file' | 'idCard' | 'chat' | 'hospital';
}

export const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    id: 'ev_debt_contract',
    title: 'Biên Bản Khống Nợ $4.000 USD',
    category: 'Tài liệu',
    date: 'Ngày thứ 1 tại khu phức hợp',
    summary: 'Tờ giấy viết tay tự phong chi phí xuất cảnh và ăn ở bất hợp pháp.',
    details: 'Liệt kê các khoản tiền phi lý: Tiền xe đưa đón 800 USD, tiền bảo lãnh cửa khẩu 1.500 USD, tiền ăn ở & đào tạo 1.700 USD. Bắt buộc nạn nhân ký nhận nợ nếu muốn không bị biệt giam.',
    warningNote: 'Bẫy nợ khống là thủ đoạn cốt lõi của tội phạm buôn người để hợp thức hóa việc cưỡng bức lao động.',
    iconType: 'file'
  },
  {
    id: 'ev_confiscated_id',
    title: 'CCCD & Hộ Chiếu Bị Tước Đoạt',
    category: 'Vật chứng',
    date: 'Ngay khi bước qua cổng sắt',
    summary: 'Giấy tờ tùy thân hợp pháp duy nhất của nạn nhân bị quản lý khóa trong két sắt.',
    details: 'Lấy danh nghĩa "làm thủ tục tạm trú công ty", nhưng thực chất là tước đi khả năng di chuyển hợp pháp, khiến nạn nhân không thể trình báo chính quyền địa phương.',
    warningNote: 'Không một doanh nghiệp hợp pháp nào được phép giữ bản chính giấy tờ tùy thân của người lao động.',
    iconType: 'idCard'
  },
  {
    id: 'ev_hospital_bill',
    title: 'Hóa Đơn Tạm Ứng Viện Phí Mẹ Của Nam',
    category: 'Hồ sơ y tế',
    date: '3 ngày trước khi lên đường',
    summary: 'Giấy báo viện phí phẫu thuật 45.000.000 VNĐ đang quá hạn thanh toán.',
    details: 'Khoản chi phí y tế khẩn cấp là điểm yếu chí mạng khiến Nam và nhân vật chính dễ dàng hạ thấp cảnh giác trước những lời hứa hẹn lương cao.',
    warningNote: 'Kẻ lừa đảo thường khai thác tâm lý khủng hoảng tài chính và tình thương gia đình của người trẻ.',
    iconType: 'hospital'
  },
  {
    id: 'ev_fake_gps',
    title: 'Định Vị GPS Giả Mạo & Nick Tuyển Dụng Rác',
    category: 'Tin nhắn',
    date: 'Buổi tối nhận lời mời',
    summary: 'Vị trí ghim tòa nhà văn phòng cao ốc tại TP lớn, thực tế là đưa thẳng lên biên giới.',
    details: 'Tài khoản "Hoàng Tuyển Dụng" sử dụng ảnh đại diện doanh nhân sang trọng tải trên mạng. Số điện thoại là sim rác không chính chủ, sau đó bị hủy kích hoạt hoàn toàn.',
    warningNote: 'Cần kiểm tra mã số thuế công ty trên cổng thông tin quốc gia trước khi ứng tuyển bất kỳ công việc nào.',
    iconType: 'chat'
  }
];
