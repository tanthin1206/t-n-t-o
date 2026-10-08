export interface FlowNode {
  id: string;
  chapter: number;
  title: string;
  description: string;
  type: 'start' | 'choice' | 'checkpoint' | 'ending';
  communityPercentage?: number; // Simulated realistic empathy statistics
  parentIds: string[];
  sceneId?: string;
}

export const FLOWCHART_NODES: FlowNode[] = [
  {
    id: 'f_start',
    chapter: 1,
    title: 'Hồi 1: Lời Mời Kỳ Lạ',
    description: 'Nhận tin nhắn tuyển dụng 25 triệu/tháng không kinh nghiệm.',
    type: 'start',
    parentIds: [],
    sceneId: 'scene1_recruitment'
  },
  {
    id: 'f_c1_info',
    chapter: 1,
    title: 'Hỏi thêm hợp đồng',
    description: 'Tin vào lời hứa giấy phép và ứng lương trước.',
    type: 'choice',
    communityPercentage: 34,
    parentIds: ['f_start'],
    sceneId: 'scene1_sub_ask_info'
  },
  {
    id: 'f_c1_friend',
    chapter: 1,
    title: 'Hỏi ý kiến Nam',
    description: 'Được Nam can ngăn nhưng vẫn vì nợ nần mà đi.',
    type: 'choice',
    communityPercentage: 38,
    parentIds: ['f_start'],
    sceneId: 'scene1_sub_ask_friend'
  },
  {
    id: 'f_c1_call',
    chapter: 1,
    title: 'Gọi điện chốt lịch',
    description: 'Bị thuyết phục bởi chiêu trò khan hiếm chỉ tiêu.',
    type: 'choice',
    communityPercentage: 16,
    parentIds: ['f_start'],
    sceneId: 'scene1_sub_call_recruiter'
  },
  {
    id: 'f_c1_accept',
    chapter: 1,
    title: 'Đồng ý đi gấp',
    description: 'Quyết định vội vã trong áp lực cùng quẫn.',
    type: 'choice',
    communityPercentage: 12,
    parentIds: ['f_start'],
    sceneId: 'scene1_sub_accept_fast'
  },
  {
    id: 'f_c2_car',
    chapter: 2,
    title: 'Hồi 2: Chuyến Xe Đêm',
    description: 'Đi đường tránh trạm, dừng chân tại đường mòn biên giới lúc 2:40 sáng.',
    type: 'checkpoint',
    parentIds: ['f_c1_info', 'f_c1_friend', 'f_c1_call', 'f_c1_accept'],
    sceneId: 'scene2_departure'
  },
  {
    id: 'f_c3_trap',
    chapter: 3,
    title: 'Hồi 3: Bức Màn Rơi Xuống',
    description: 'Bị giữ CCCD và điện thoại. Quản lý hét: "Về đâu?"',
    type: 'checkpoint',
    parentIds: ['f_c2_car'],
    sceneId: 'scene3_realization'
  },
  {
    id: 'f_c4_cell',
    chapter: 4,
    title: 'Hồi 4: Những Bức Tường Câm Lặng',
    description: 'Bị giam cầm cách ly, tiếng bước chân canh gác ngoài cửa.',
    type: 'checkpoint',
    parentIds: ['f_c3_trap'],
    sceneId: 'scene4_detention'
  },
  {
    id: 'f_c5_dilemma',
    chapter: 5,
    title: 'Hồi 5: Tin Nhắn Của Nam',
    description: 'Bị ép dùng Messenger dụ Nam sang để đổi lấy tự do.',
    type: 'choice',
    parentIds: ['f_c4_cell'],
    sceneId: 'scene5_messenger_intro'
  },
  {
    id: 'f_branch_A',
    chapter: 6,
    title: 'Lựa chọn A: Dụ bạn sang',
    description: '“Sang đi mày, việc tốt lắm... lương cao bao ăn ở.”',
    type: 'choice',
    communityPercentage: 22,
    parentIds: ['f_c5_dilemma'],
    sceneId: 'scene6_branch_A_compliance'
  },
  {
    id: 'f_branch_B',
    chapter: 6,
    title: 'Lựa chọn B: Từ chối phản bội',
    description: '“ĐỪNG SANG! Tao bị lừa rồi! Báo công an cứu tao!”',
    type: 'choice',
    communityPercentage: 54,
    parentIds: ['f_c5_dilemma'],
    sceneId: 'scene6_branch_B_defiance'
  },
  {
    id: 'f_branch_C',
    chapter: 6,
    title: 'Lựa chọn C: Câu giờ & Ám hiệu',
    description: 'Cố gắng lén gửi định vị GPS và mật hiệu cứu nạn.',
    type: 'choice',
    communityPercentage: 24,
    parentIds: ['f_c5_dilemma'],
    sceneId: 'scene6_branch_C_stalling'
  },
  // 4 Endings
  {
    id: 'f_end_1',
    chapter: 7,
    title: 'KẾT 1: Người Thay Thế',
    description: 'Được thả về nhưng nhìn thấy Nam bước vào cổng sắt. Tin nhắn cuối không lời đáp.',
    type: 'ending',
    communityPercentage: 22,
    parentIds: ['f_branch_A'],
    sceneId: 'scene7_ending_replacement'
  },
  {
    id: 'f_end_2',
    chapter: 7,
    title: 'KẾT 2: Không Ai Thắng',
    description: 'Chấp nhận bị biệt giam để bảo vệ bạn thân. Phẩm giá không bị cướp mất.',
    type: 'ending',
    communityPercentage: 54,
    parentIds: ['f_branch_B'],
    sceneId: 'scene7_ending_nobody_wins'
  },
  {
    id: 'f_end_3',
    chapter: 7,
    title: 'KẾT 3: Tín Hiệu Cầu Cứu',
    description: 'Thiết bị phá sóng kích hoạt. Tin nhắn bị xóa, nỗ lực cá nhân bất thành.',
    type: 'ending',
    communityPercentage: 24,
    parentIds: ['f_branch_C'],
    sceneId: 'scene7_ending_sos_signal'
  },
  {
    id: 'f_end_4',
    chapter: 7,
    title: 'KẾT 4: Người Bạn (Vòng Lặp)',
    description: 'Thời gian tua ngược. Bạn trở thành Nam nhận được lời rủ rê.',
    type: 'ending',
    communityPercentage: 100,
    parentIds: ['f_end_1', 'f_end_2', 'f_end_3'],
    sceneId: 'scene7_ending_rewind'
  }
];
