import { Scene, SceneId } from '@/types/game';

export const STORY_SCENES: Record<SceneId, Scene> = {
  // ==========================================
  // SCENE 1: LỜI MỜI VIỆC LÀM
  // ==========================================
  scene1_recruitment: {
    id: 'scene1_recruitment',
    title: 'Hồi 1: Lời Mời Kỳ Lạ',
    chapterNumber: 1,
    backgroundTheme: 'warm_city',
    ambientTone: 'warm',
    dialogues: [
      {
        id: 'd1_1',
        speaker: 'narrator',
        text: 'Một buổi tối muộn cuối tháng. Trong căn phòng trọ oi bức, thông báo tiền trọ và tiền lãi vay sinh viên vừa được gửi tới.',
        sfx: 'typing',
      },
      {
        id: 'd1_2',
        speaker: 'player',
        text: 'Lại nợ... Nếu tháng này không xoay được mười triệu, chủ nhà sẽ lấy lại phòng.',
        emotion: 'anxious',
      },
      {
        id: 'd1_3',
        speaker: 'narrator',
        text: 'Bỗng nhiên, màn hình điện thoại sáng lên. Một tin nhắn từ tài khoản lạ có tên "Hoàng Tuyển Dụng Quốc Tế".',
        sfx: 'notification',
        screenEffect: 'flicker',
      },
      {
        id: 'd1_4',
        speaker: 'recruiter',
        speakerName: 'Hoàng (Tuyển Dụng)',
        text: '“Chào em, bên anh đang tuyển gấp nhân viên hỗ trợ chăm sóc khách hàng / nhập liệu văn phòng. Lương khởi điểm 18–25 triệu/tháng.”',
        emotion: 'whisper',
      },
      {
        id: 'd1_5',
        speaker: 'recruiter',
        speakerName: 'Hoàng (Tuyển Dụng)',
        text: '“Không yêu cầu kinh nghiệm, được đào tạo từ đầu. Bao ăn ở 100% tại ký túc xá cao cấp. Có xe riêng đưa đón tận nơi.”',
      },
      {
        id: 'd1_6',
        speaker: 'player',
        text: 'Mức lương gấp ba lần công việc phục vụ hiện tại của mình... Liệu có chuyện dễ dàng như vậy thật không?',
        emotion: 'anxious',
        pressureDelta: 10,
      }
    ],
    choices: [
      {
        id: 'c1_ask_info',
        label: '1. Hỏi thêm thông tin chi tiết về công việc & hợp đồng',
        nextSceneId: 'scene1_sub_ask_info',
        pressureDelta: 5,
        hopeDelta: 5,
      },
      {
        id: 'c1_ask_friend',
        label: '2. Nhắn tin hỏi ý kiến Nam (người bạn thân nhất)',
        nextSceneId: 'scene1_sub_ask_friend',
        pressureDelta: 0,
        friendTrustDelta: 10,
        hopeDelta: 5,
      },
      {
        id: 'c1_call_recruiter',
        label: '3. Bấm gọi điện thoại trực tiếp cho người tuyển dụng',
        nextSceneId: 'scene1_sub_call_recruiter',
        pressureDelta: 10,
        hopeDelta: 10,
      },
      {
        id: 'c1_accept_fast',
        label: '4. Đang quá bế tắc tiền bạc, nhận lời đồng ý ngay',
        nextSceneId: 'scene1_sub_accept_fast',
        pressureDelta: 15,
        hopeDelta: 15,
      }
    ]
  },

  // Sub-branch 1.1: Hỏi thêm thông tin
  scene1_sub_ask_info: {
    id: 'scene1_sub_ask_info',
    title: 'Hồi 1: Thắc Mắc & Thuyết Phục',
    chapterNumber: 1,
    backgroundTheme: 'warm_city',
    ambientTone: 'warm',
    dialogues: [
      {
        id: 'd_info_1',
        speaker: 'player',
        text: '“Anh ơi, công ty mình tên gì ạ? Địa chỉ cụ thể ở đâu và có ký hợp đồng lao động chính thức không anh?”',
      },
      {
        id: 'd_info_2',
        speaker: 'recruiter',
        speakerName: 'Hoàng (Tuyển Dụng)',
        text: '“Công ty liên doanh công nghệ giải trí Đông Nam Á em nhé. Trụ sở tổ hợp làm việc hiện đại giáp biên. Hợp đồng ký ngay khi em tới nhận việc.”',
      },
      {
        id: 'd_info_3',
        speaker: 'recruiter',
        speakerName: 'Hoàng (Tuyển Dụng)',
        text: '“Em yên tâm, công ty anh có giấy phép đàng hoàng. Chỉ cần biết gõ phím cơ bản là làm được. Anh còn đúng 2 chỉ tiêu trong tuần này thôi!”',
      },
      {
        id: 'd_info_4',
        speaker: 'player',
        text: 'Nghe rất trôi chảy và chuyên nghiệp... Sự hoài nghi trong lòng mình dường như bị lấn át bởi gánh nặng tiền bạc.',
        emotion: 'anxious',
      }
    ],
    choices: [
      {
        id: 'c_info_proceed',
        label: 'Thu xếp hành lý và hẹn ngày lên đường',
        nextSceneId: 'scene2_departure',
        pressureDelta: 10,
        hopeDelta: 10,
      }
    ]
  },

  // Sub-branch 1.2: Hỏi bạn thân
  scene1_sub_ask_friend: {
    id: 'scene1_sub_ask_friend',
    title: 'Hồi 1: Lời Can Ngăn Của Bạn Thân',
    chapterNumber: 1,
    backgroundTheme: 'warm_city',
    ambientTone: 'warm',
    dialogues: [
      {
        id: 'd_fr_1',
        speaker: 'player',
        text: '“Nam ơi, tao vừa nhận được lời mời làm trực tổng đài, lương hơn 20 triệu bao ăn ở. Mày thấy có ổn không?”',
      },
      {
        id: 'd_fr_2',
        speaker: 'friend',
        speakerName: 'Nam',
        text: '“Gì mà cao thế mày? Bây giờ người có bằng đại học còn khó kiếm việc 10 triệu. Mày cẩn thận bị lừa bán sang biên giới đấy!”',
        emotion: 'anxious',
        sfx: 'notification',
      },
      {
        id: 'd_fr_3',
        speaker: 'player',
        text: '“Nhưng người ta có xe đưa đón tận nơi, bảo là công ty liên doanh lớn. Tao đang nợ nần ngập đầu, ở lại cũng không biết làm sao trả...”',
      },
      {
        id: 'd_fr_4',
        speaker: 'friend',
        speakerName: 'Nam',
        text: '“Tao cũng đang kẹt tiền mẹ mổ... Nhưng mày hứa với tao nếu thấy có gì mờ ám là phải quay đầu ngay nhé.”',
        emotion: 'hopeful',
      }
    ],
    choices: [
      {
        id: 'c_fr_proceed',
        label: '“Tao sẽ cẩn thận. Sang đó ổn định tao sẽ nhắn mày.”',
        nextSceneId: 'scene2_departure',
        pressureDelta: 10,
        friendTrustDelta: 10,
      }
    ]
  },

  // Sub-branch 1.3: Gọi trực tiếp
  scene1_sub_call_recruiter: {
    id: 'scene1_sub_call_recruiter',
    title: 'Hồi 1: Cuộc Gọi Lúc Nửa Đêm',
    chapterNumber: 1,
    backgroundTheme: 'warm_city',
    ambientTone: 'uneasy',
    dialogues: [
      {
        id: 'd_call_1',
        speaker: 'recruiter',
        speakerName: 'Hoàng (Giọng qua điện thoại)',
        text: '“Alo em! Anh nghe đây. Em quyết định nhanh giúp anh nhé, xe đưa đón của công ty xuất phát từ bến xe sáng mai rồi.”',
      },
      {
        id: 'd_call_2',
        speaker: 'player',
        text: '“Em chưa có kinh nghiệm nhập liệu hay máy tính nhiều thì có theo kịp không anh?”',
      },
      {
        id: 'd_call_3',
        speaker: 'recruiter',
        speakerName: 'Hoàng (Giọng qua điện thoại)',
        text: '“Có người cầm tay chỉ việc hết. Sang tuần đầu tiên là được ứng trước 5 triệu gửi về cho bố mẹ rồi. Không đi chuyến này là tiếc cả đời đấy!”',
        emotion: 'whisper',
      },
      {
        id: 'd_call_4',
        speaker: 'player',
        text: 'Ứng trước tiền gửi về nhà... Câu nói đó đánh gục hoàn toàn bức tường phòng bị cuối cùng trong đầu mình.',
        emotion: 'anxious',
      }
    ],
    choices: [
      {
        id: 'c_call_proceed',
        label: 'Gật đầu đồng ý: “Vâng, sáng mai em sẽ có mặt ở điểm hẹn.”',
        nextSceneId: 'scene2_departure',
        pressureDelta: 15,
        hopeDelta: 15,
      }
    ]
  },

  // Sub-branch 1.4: Đồng ý ngay
  scene1_sub_accept_fast: {
    id: 'scene1_sub_accept_fast',
    title: 'Hồi 1: Quyết Định Trong Tuyệt Vọng',
    chapterNumber: 1,
    backgroundTheme: 'warm_city',
    ambientTone: 'warm',
    dialogues: [
      {
        id: 'd_acc_1',
        speaker: 'player',
        text: '“Em nhận việc! Em cần tiền gấp lắm, khi nào có thể đi được hả anh?”',
      },
      {
        id: 'd_acc_2',
        speaker: 'recruiter',
        speakerName: 'Hoàng (Tuyển Dụng)',
        text: '“Tốt lắm em trai, dám nghĩ dám làm mới đổi đời được! Sáng mai đúng 5 giờ có xe 7 chỗ đón em tại ngã tư nhé.”',
      },
      {
        id: 'd_acc_3',
        speaker: 'narrator',
        text: 'Không có bản mô tả công việc, không có hợp đồng lao động mẫu. Bạn chỉ kịp nhét vài bộ quần áo cũ vào chiếc balo sờn rách.',
        sfx: 'typing',
      }
    ],
    choices: [
      {
        id: 'c_acc_proceed',
        label: 'Bước chân ra cửa khi trời còn chưa hửng sáng',
        nextSceneId: 'scene2_departure',
        pressureDelta: 15,
        hopeDelta: 20,
      }
    ]
  },

  // ==========================================
  // SCENE 2: LÊN ĐƯỜNG (CHUYỂN GIAO)
  // ==========================================
  scene2_departure: {
    id: 'scene2_departure',
    title: 'Hồi 2: Chuyến Xe Không Điểm Dừng',
    chapterNumber: 2,
    backgroundTheme: 'night_road',
    ambientTone: 'uneasy',
    dialogues: [
      {
        id: 'd2_1',
        speaker: 'narrator',
        text: 'Chiếc xe 7 chỗ kính dán đen sì lao đi vun vút trong màn đêm. Cảnh vật thành phố quen thuộc dần bị thay thế bởi những ngọn đồi hoang vu.',
        sfx: 'ambience_shift',
      },
      {
        id: 'd2_2',
        speaker: 'driver',
        speakerName: 'Tài xế',
        text: '“Anh cứ yên tâm chợp mắt đi. Sang bên đó có người đón tận sảnh.”',
        emotion: 'cold',
      },
      {
        id: 'd2_3',
        speaker: 'player',
        text: '“Anh ơi, sao đường xá gập ghềnh thế này? Mình đi tỉnh nào vậy anh?”',
        emotion: 'anxious',
      },
      {
        id: 'd2_4',
        speaker: 'driver',
        speakerName: 'Tài xế',
        text: '“Đi đường tránh trạm cho nhanh. Công việc đơn giản thôi mà, làm vài tháng có cục tiền trong tay rồi về cưới vợ.”',
      },
      {
        id: 'd2_5',
        speaker: 'narrator',
        text: 'Bóng tối bên ngoài cửa kính ngày càng dày đặc. Tông màu ấm áp ban đầu của hy vọng đã hoàn toàn tan biến, nhường chỗ cho cái lạnh buốt của đêm khuya.',
        screenEffect: 'flicker',
        pressureDelta: 15,
        hopeDelta: -10,
      },
      {
        id: 'd2_6',
        speaker: 'narrator',
        text: 'Đồng hồ điểm 2:40 sáng. Chiếc xe dừng lại giữa một con đường mòn đất đỏ sát bìa rừng. Phía trước là một nhóm người mặc đồ đen đang đứng chờ.',
        sfx: 'door_thud',
        screenEffect: 'shake',
      }
    ],
    choices: [
      {
        id: 'c2_cross',
        label: 'Xuống xe theo sự thúc ép của tài xế',
        nextSceneId: 'scene3_realization',
        pressureDelta: 20,
        hopeDelta: -15,
      }
    ]
  },

  // ==========================================
  // SCENE 3: BỨC MÀN RƠI XUỐNG (NHẬN RA MÌNH BỊ LỪA)
  // ==========================================
  scene3_realization: {
    id: 'scene3_realization',
    title: 'Hồi 3: Bức Màn Rơi Xuống',
    chapterNumber: 3,
    backgroundTheme: 'harsh_neon',
    ambientTone: 'dread',
    dialogues: [
      {
        id: 'd3_1',
        speaker: 'narrator',
        text: 'Bạn bị dẫn qua một hàng rào dây thép gai cao ngút tầm mắt, bước vào một khu nhà phức hợp xám xịt được chiếu sáng bởi ánh đèn huỳnh quang chói lòa.',
        sfx: 'glitch',
        screenEffect: 'flicker',
      },
      {
        id: 'd3_2',
        speaker: 'manager',
        speakerName: 'Quản lý (Áo đen)',
        text: '“Đưa hết điện thoại, CCCD và ví tiền đây. Quy định công ty: quản lý nội bộ để cài đặt phần mềm bảo mật nghiệp vụ.”',
        emotion: 'cold',
      },
      {
        id: 'd3_3',
        speaker: 'player',
        text: '“Sao lại giữ giấy tờ tùy thân của tôi? Lúc ở nhà các anh đâu có nói như thế này?”',
        emotion: 'fear',
        pressureDelta: 15,
      },
      {
        id: 'd3_4',
        speaker: 'manager',
        speakerName: 'Quản lý (Áo đen)',
        text: '“Ở đây lời tao là luật. Muốn sống yên ổn thì ngậm miệng lại và làm theo.”',
        emotion: 'cold',
        sfx: 'door_thud',
        screenEffect: 'shake',
      },
      {
        id: 'd3_5',
        speaker: 'narrator',
        text: 'Bạn nhìn quanh: Cửa sổ lắp chấn song sắt kiên cố. Hành lang có lính gác bồng súng đứng canh. Hàng trăm người đang cắm mặt vào màn hình máy tính với đôi mắt thâm quầng và vẻ mặt vô hồn.',
      },
      {
        id: 'd3_6',
        speaker: 'player',
        text: '“Không... Đây không phải là công ty chăm sóc khách hàng. Các anh đang lừa người khác... Em không làm được. Em muốn về!”',
        emotion: 'fear',
        pressureDelta: 20,
        hopeDelta: -20,
      },
      {
        id: 'd3_7',
        speaker: 'manager',
        speakerName: 'Quản lý (Áo đen)',
        text: '“Về đâu?”',
        emotion: 'cold',
        sfx: 'heartbeat',
      },
      {
        id: 'd3_8',
        speaker: 'manager',
        speakerName: 'Quản lý (Áo đen)',
        text: '“Ở đây không có chuyện thích thì về. Tiền xe đón mày, tiền ăn, tiền môi giới bên kia tao đã trả 4.000 đô. Không làm ra tiền hoặc không có ai chuộc thì đừng hòng bước qua cái cổng kia.”',
        emotion: 'cold',
        screenEffect: 'red_flash',
      }
    ],
    choices: [
      {
        id: 'c3_continue',
        label: 'Cảm giác nghẹt thở bao trùm khi nhận ra mình đã mắc bẫy',
        nextSceneId: 'scene4_detention',
        pressureDelta: 20,
        hopeDelta: -20,
      }
    ]
  },

  // ==========================================
  // SCENE 4: BỊ GIAM GIỮ (ÁP LỰC TÂM LÝ)
  // ==========================================
  scene4_detention: {
    id: 'scene4_detention',
    title: 'Hồi 4: Những Bức Tường Câm Lặng',
    chapterNumber: 4,
    backgroundTheme: 'cell_dark',
    ambientTone: 'dread',
    dialogues: [
      {
        id: 'd4_1',
        speaker: 'narrator',
        text: 'Cánh cửa sắt nặng nề đóng sầm lại. Một tiếng chốt khóa lạnh lùng vang lên trong không gian ẩm mốc.',
        sfx: 'door_thud',
        screenEffect: 'shake',
      },
      {
        id: 'd4_2',
        speaker: 'narrator',
        text: 'Không có ánh sáng mặt trời. Chỉ có tiếng quạt thông gió rít lên từng hồi và tiếng bước chân nện gót đều đặn ngoài hành lang.',
        sfx: 'heartbeat',
      },
      {
        id: 'd4_3',
        speaker: 'player',
        text: 'Mẹ ơi... Nam ơi... Mình đã làm gì thế này? Tại sao mình lại ngây thơ tin vào những lời hứa hão huyền đó?',
        emotion: 'fear',
        pressureDelta: 20,
        hopeDelta: -10,
      },
      {
        id: 'd4_4',
        speaker: 'narrator',
        text: 'Đói, khát và nỗi kinh hoàng gặm nhấm từng giây trôi qua. Sự tự do vốn là thứ bình thường nhất mỗi ngày, giờ đây trở thành một giấc mơ xa xỉ không với tới.',
        screenEffect: 'flicker',
      }
    ],
    choices: [
      {
        id: 'c4_face_reality',
        label: 'Nghe tiếng bước chân dừng lại ngay trước cửa phòng...',
        nextSceneId: 'scene5_harsh_choice',
        pressureDelta: 10,
      }
    ]
  },

  // ==========================================
  // SCENE 5: LỰA CHỌN KHẮC NGHIỆT (MESSENGER SIMULATOR)
  // ==========================================
  scene5_harsh_choice: {
    id: 'scene5_harsh_choice',
    title: 'Hồi 5: Lựa Chọn Nghiệt Ngã',
    chapterNumber: 5,
    backgroundTheme: 'cell_dark',
    ambientTone: 'dread',
    dialogues: [
      {
        id: 'd5_1',
        speaker: 'narrator',
        text: 'Cửa mở toang. Tên quản lý bước vào, ném chiếc điện thoại của bạn xuống mặt bàn kêu đánh cạch.',
        sfx: 'door_thud',
      },
      {
        id: 'd5_2',
        speaker: 'manager',
        speakerName: 'Quản lý',
        text: '“Bây giờ tao cho mày một cơ hội để tự cứu lấy bản thân.”',
        emotion: 'cold',
      },
      {
        id: 'd5_3',
        speaker: 'manager',
        speakerName: 'Quản lý',
        text: '“Dùng nick Messenger của mày, nhắn tin rủ đứa bạn thân nhất sang đây làm cùng. Kịch bản có sẵn trên máy rồi.”',
      },
      {
        id: 'd5_4',
        speaker: 'manager',
        speakerName: 'Quản lý',
        text: '“Nó sang tới nơi nhận việc, tao xóa hết nợ cho mày và thả mày lên xe về Việt Nam ngay trong ngày.”',
      },
      {
        id: 'd5_5',
        speaker: 'manager',
        speakerName: 'Quản lý',
        text: '“Còn nếu không... mày biết cái phòng tối dưới hầm sâu kia dùng để làm gì rồi đấy. Đừng để tao mất kiên nhẫn.”',
        emotion: 'cold',
        screenEffect: 'red_flash',
        sfx: 'heartbeat',
        pressureDelta: 25,
      },
      {
        id: 'd5_6',
        speaker: 'narrator',
        text: 'Tên quản lý đứng ngay sau lưng bạn, ánh mắt lạnh như băng chằm chằm nhìn vào màn hình điện thoại đang sáng đèn.',
      }
    ],
    choices: [
      {
        id: 'c5_open_messenger',
        label: 'Cầm lấy điện thoại và mở ứng dụng Messenger...',
        nextSceneId: 'scene5_messenger_intro',
        pressureDelta: 10,
      }
    ]
  },

  // Scene 5.1: Bắt đầu giao diện Messenger
  scene5_messenger_intro: {
    id: 'scene5_messenger_intro',
    title: 'Hồi 5: Tin Nhắn Của Nam',
    chapterNumber: 5,
    isMessengerScene: true,
    backgroundTheme: 'messenger_ui',
    ambientTone: 'dread',
    dialogues: [
      {
        id: 'd_msg_1',
        speaker: 'friend',
        speakerName: 'Nam (Bạn thân)',
        text: '“Ê mày! Mấy hôm nay mày đi đâu mà tao gọi điện, nhắn tin không thấy hồi âm thế?”',
        sfx: 'notification',
      },
      {
        id: 'd_msg_2',
        speaker: 'friend',
        speakerName: 'Nam (Bạn thân)',
        text: '“Công việc bên đó thật sự tốt như mày nói không? Lương lậu thế nào rồi?”',
      },
      {
        id: 'd_msg_3',
        speaker: 'friend',
        speakerName: 'Nam (Bạn thân)',
        text: '“Mẹ tao vừa nhập viện, bác sĩ bảo cần mổ gấp mà nhà tao kiệt quệ quá... Tao cũng đang tính tìm việc làm thêm để kiếm tiền.”',
      },
      {
        id: 'd_msg_4',
        speaker: 'friend',
        speakerName: 'Nam (Bạn thân)',
        text: '“Nếu chỗ mày làm ổn định và uy tín, mày bảo quản lý xin cho tao một chân sang làm với mày được không?”',
      },
      {
        id: 'd_msg_5',
        speaker: 'narrator',
        text: 'Ngón tay bạn run bần bật trên bàn phím. Tên quản lý gõ cộc cộc vào lưng ghế nhắc nhở. Bạn đang cầm trên tay chìa khóa tự do của mình... nhưng cái giá phải trả là số phận của người bạn thân nhất.',
        sfx: 'heartbeat',
        screenEffect: 'shake',
      }
    ],
    choices: [
      {
        id: 'c_opt_A',
        label: 'A. “Sang đi mày, việc tốt lắm. Lương cao lại bao ăn ở, để tao gửi định vị cho.”',
        nextSceneId: 'scene6_branch_A_compliance',
        pressureDelta: -20,
        friendTrustDelta: 30,
        hopeDelta: -30,
      },
      {
        id: 'c_opt_B',
        label: 'B. “ĐỪNG SANG! Tao bị lừa rồi! Đang bị nhốt ở biên giới, báo công an cứu tao!”',
        nextSceneId: 'scene6_branch_B_defiance',
        pressureDelta: 40,
        friendTrustDelta: -20,
        hopeDelta: 10,
        sfx: 'glitch',
      },
      {
        id: 'c_opt_C',
        label: 'C. “Để tao nói sau... (Cố tình gài ám hiệu và câu giờ tìm lối thoát)”',
        nextSceneId: 'scene6_branch_C_stalling',
        pressureDelta: 15,
        friendTrustDelta: 5,
        hopeDelta: 5,
      }
    ]
  },

  // ==========================================
  // SCENE 6: HỆ THỐNG HẬU QUẢ & PHÂN NHÁNH
  // ==========================================
  // Nhánh A: Đồng ý dụ bạn sang
  scene6_branch_A_compliance: {
    id: 'scene6_branch_A_compliance',
    title: 'Hồi 6: Đổi Chác Linh Hồn',
    chapterNumber: 6,
    backgroundTheme: 'messenger_ui',
    ambientTone: 'uneasy',
    dialogues: [
      {
        id: 'd6_a1',
        speaker: 'player',
        text: '“Sang đi mày. Chỗ này công ty lo hết từ xe cộ đến ăn uống. Lương tháng đầu anh quản lý hứa cho ứng tiền gửi về cho mẹ mổ luôn.”',
      },
      {
        id: 'd6_a2',
        speaker: 'friend',
        speakerName: 'Nam',
        text: '“Thật hả mày?! May quá... Tao tưởng bế tắc rồi. Có mày ở đó tao cũng yên tâm hơn nhiều. Mai tao đón xe lên ngay nhé!”',
        sfx: 'notification',
      },
      {
        id: 'd6_a3',
        speaker: 'manager',
        speakerName: 'Quản lý',
        text: '“Tốt lắm. Mày biết điều đấy. Ra góc kia ngồi chờ, khi nào bạn mày đặt chân tới cửa, mày sẽ được lên xe về.”',
        emotion: 'cold',
      },
      {
        id: 'd6_a4',
        speaker: 'narrator',
        text: 'Tên quản lý giật lại điện thoại. Bạn ngồi co ro trong góc phòng, lồng ngực quặn thắt lại vì một cảm giác tội lỗi khủng khiếp chưa từng có.',
        sfx: 'heartbeat',
        pressureDelta: 15,
      }
    ],
    choices: [
      {
        id: 'c6_a_end',
        label: 'Chờ đợi giờ phút trao đổi tự do...',
        nextSceneId: 'scene7_ending_replacement',
      }
    ]
  },

  // Nhánh B: Cảnh báo bạn thân, chấp nhận đối đầu
  scene6_branch_B_defiance: {
    id: 'scene6_branch_B_defiance',
    title: 'Hồi 6: Cú Đập Vỡ Toan',
    chapterNumber: 6,
    backgroundTheme: 'cell_dark',
    ambientTone: 'dread',
    dialogues: [
      {
        id: 'd6_b1',
        speaker: 'player',
        text: '“ĐỪNG SANG! TAO BỊ BẮT RỒI! BÁO CÔNG AN CỨU—”',
        sfx: 'glitch',
        screenEffect: 'red_flash',
      },
      {
        id: 'd6_b2',
        speaker: 'narrator',
        text: 'CHÁT! Một bàn tay thô bạo giáng xuống, hất văng chiếc điện thoại rơi xuống sàn xi măng vỡ vụn màn hình.',
        sfx: 'door_thud',
        screenEffect: 'shake',
        pressureDelta: 30,
      },
      {
        id: 'd6_b3',
        speaker: 'manager',
        speakerName: 'Quản lý',
        text: '“Mày muốn chết à thằng ranh?! Dám chống đối tao?!”',
        emotion: 'cold',
        screenEffect: 'red_flash',
      },
      {
        id: 'd6_b4',
        speaker: 'narrator',
        text: 'Hai tên bảo vệ xông vào lôi bạn đi. Nhưng trên mảnh vỡ của màn hình điện thoại vừa tắt, bạn kịp nhìn thấy dòng thông báo cuối cùng từ Nam: [Đã xem].',
      },
      {
        id: 'd6_b5',
        speaker: 'player',
        text: 'Ít nhất... Nam sẽ không bao giờ đặt chân vào địa ngục này...',
        emotion: 'whisper',
        hopeDelta: 20,
      }
    ],
    choices: [
      {
        id: 'c6_b_end',
        label: 'Đối diện với hậu quả của sự lựa chọn...',
        nextSceneId: 'scene7_ending_nobody_wins',
      }
    ]
  },

  // Nhánh C: Câu giờ / Cố gài mật mã cầu cứu
  scene6_branch_C_stalling: {
    id: 'scene6_branch_C_stalling',
    title: 'Hồi 6: Ranh Giới Mong Manh',
    chapterNumber: 6,
    backgroundTheme: 'messenger_ui',
    ambientTone: 'dread',
    dialogues: [
      {
        id: 'd6_c1',
        speaker: 'player',
        text: '“Để tao hỏi lại kỹ quy trình đã mày nhé. Chỗ này sóng điện thoại yếu lắm... Nhớ ngày xưa hai đứa mình đi câu cá ở đồn công an huyện không?”',
      },
      {
        id: 'd6_c2',
        speaker: 'narrator',
        text: 'Bạn lén nhấn vào nút chia sẻ vị trí hiện tại trên Messenger, hy vọng gửi được tọa độ GPS trước khi tên quản lý kịp nhận ra.',
        sfx: 'typing',
      },
      {
        id: 'd6_c3',
        speaker: 'manager',
        speakerName: 'Quản lý',
        text: '“Mày đang làm cái trò gì đấy?! Nhắn tin bình thường sao tay mày cứ bấm loạn xạ thế kia?!”',
        emotion: 'cold',
        sfx: 'heartbeat',
        screenEffect: 'flicker',
      }
    ],
    choices: [
      {
        id: 'c6_c_sos',
        label: 'Ấn gửi tín hiệu vị trí khẩn cấp!',
        nextSceneId: 'scene7_ending_sos_signal',
        pressureDelta: 25,
      },
      {
        id: 'c6_c_backdown',
        label: 'Sợ hãi rút tay lại vì bị phát hiện',
        nextSceneId: 'scene7_ending_nobody_wins',
      }
    ]
  },

  // ==========================================
  // SCENE 7: CÁC KẾT THÚC (4 ENDINGS)
  // ==========================================
  // Ending 1: "NGƯỜI THAY THẾ"
  scene7_ending_replacement: {
    id: 'scene7_ending_replacement',
    title: 'KẾT THÚC 1 — NGƯỜI THAY THẾ',
    chapterNumber: 7,
    backgroundTheme: 'ending_void',
    ambientTone: 'silence',
    dialogues: [
      {
        id: 'd_e1_1',
        speaker: 'narrator',
        text: 'Hai ngày sau. Cửa phòng mở ra. Tên quản lý hất hàm bảo bạn thu dọn đồ đạc và bước lên chiếc xe đang nổ máy sẵn.',
      },
      {
        id: 'd_e1_2',
        speaker: 'narrator',
        text: 'Tại cánh cổng sắt rỉ sét, trong khoảnh khắc xe lăn bánh, bạn nhìn thấy qua khe cửa kính một bóng người quen thuộc đang mang balo bước vào: Nam.',
        screenEffect: 'shake',
        sfx: 'heartbeat',
      },
      {
        id: 'd_e1_3',
        speaker: 'narrator',
        text: 'Gương mặt Nam rạng rỡ hy vọng, ngơ ngác nhìn quanh tìm kiếm bạn.',
      },
      {
        id: 'd_e1_4',
        speaker: 'narrator',
        text: 'Mười phút sau, điện thoại trong túi bạn rung lên. Một tin nhắn mới từ Nam:',
        sfx: 'notification',
      },
      {
        id: 'd_e1_5',
        speaker: 'friend',
        speakerName: 'Nam',
        text: '“Mày tới đâu rồi? Tao đến nơi rồi mà không thấy mày... Chỗ này nhìn kỳ lạ quá... Mày ơi?...”',
      },
      {
        id: 'd_e1_6',
        speaker: 'narrator',
        text: 'Bạn nhìn chằm chằm vào dòng tin nhắn. Không có lời hồi đáp nào có thể gột rửa được sự thật.',
        screenEffect: 'flicker',
      },
      {
        id: 'd_e1_7',
        speaker: 'narrator',
        text: 'Bạn đã đổi lấy tự do của chính mình... bằng cách dâng tặng người bạn thân nhất vào chiếc lồng sắt.',
      }
    ],
    choices: [
      {
        id: 'c_e1_proceed',
        label: 'Xem thông điệp & Suy ngẫm',
        nextSceneId: 'scene8_epilogue',
      },
      {
        id: 'c_e1_rewind',
        label: 'Khám phá nhánh thời gian khác (Ending 4: Người Bạn)',
        nextSceneId: 'scene7_ending_rewind',
      }
    ]
  },

  // Ending 2: "KHÔNG AI THẮNG"
  scene7_ending_nobody_wins: {
    id: 'scene7_ending_nobody_wins',
    title: 'KẾT THÚC 2 — KHÔNG AI THẮNG',
    chapterNumber: 7,
    backgroundTheme: 'cell_dark',
    ambientTone: 'uneasy',
    dialogues: [
      {
        id: 'd_e2_1',
        speaker: 'narrator',
        text: 'Bạn bị biệt giam trong căn phòng tối tăm dưới tầng hầm. Những ngày tháng sau đó là sự đày ải cả về thể xác lẫn tinh thần.',
        sfx: 'door_thud',
      },
      {
        id: 'd_e2_2',
        speaker: 'narrator',
        text: 'Bạn không có tiền chuộc, không có ai đến cứu ngay lập tức. Bạn vẫn là một nạn nhân mắc kẹt giữa bốn bức tường vô cảm.',
      },
      {
        id: 'd_e2_3',
        speaker: 'player',
        text: 'Nhưng ít nhất... Nam vẫn an toàn ở quê nhà. Gia đình bạn đã nhận được tín hiệu cảnh báo và đang làm việc với các cơ quan chức năng.',
        emotion: 'hopeful',
      },
      {
        id: 'd_e2_4',
        speaker: 'narrator',
        text: '“Bạn không thể cứu lấy bản thân bằng cách đẩy một người khác vào chiếc bẫy.”',
      },
      {
        id: 'd_e2_5',
        speaker: 'narrator',
        text: 'Trong hoàn cảnh ngặt nghèo nhất của kiếp người, giữ lại nhân tính chính là chiến thắng duy nhất mà bọn tội phạm không thể cướp đoạt từ bạn.',
      }
    ],
    choices: [
      {
        id: 'c_e2_proceed',
        label: 'Xem thông điệp & Nhận diện nguy cơ',
        nextSceneId: 'scene8_epilogue',
      },
      {
        id: 'c_e2_rewind',
        label: 'Trải nghiệm góc nhìn ngược lại (Ending 4: Người Bạn)',
        nextSceneId: 'scene7_ending_rewind',
      }
    ]
  },

  // Ending 3: "CẦU CỨU"
  scene7_ending_sos_signal: {
    id: 'scene7_ending_sos_signal',
    title: 'KẾT THÚC 3 — TÍN HIỆU CẦU CỨU',
    chapterNumber: 7,
    backgroundTheme: 'harsh_neon',
    ambientTone: 'dread',
    dialogues: [
      {
        id: 'd_e3_1',
        speaker: 'system',
        speakerName: 'Hệ thống thiết bị',
        text: '“Đang gửi tọa độ định vị tới liên hệ khẩn cấp... 45%... 78%...”',
        sfx: 'typing',
      },
      {
        id: 'd_e3_2',
        speaker: 'narrator',
        text: 'Đột nhiên, biểu tượng sóng trên điện thoại tụt xuống 0 vạch. Bộ phát nhiễu tín hiệu của khu phức hợp tự động kích hoạt.',
        screenEffect: 'glitch',
        sfx: 'glitch',
      },
      {
        id: 'd_e3_3',
        speaker: 'system',
        speakerName: 'Hệ thống thiết bị',
        text: '“Không thể gửi tin nhắn. Kết nối mạng đã bị ngắt bởi tường lửa nội bộ.”',
      },
      {
        id: 'd_e3_4',
        speaker: 'manager',
        speakerName: 'Quản lý',
        text: '“Mày nghĩ bọn tao để mày cầm điện thoại mà không kiểm soát đường truyền à? Bắt nó lại!”',
        emotion: 'cold',
        screenEffect: 'red_flash',
      },
      {
        id: 'd_e3_5',
        speaker: 'narrator',
        text: 'Mọi nỗ lực công nghệ cá nhân đều bất lực trước một hệ thống tội phạm có tổ chức và trang bị tinh vi.',
      }
    ],
    choices: [
      {
        id: 'c_e3_proceed',
        label: 'Tiếp tục tới trang tổng kết',
        nextSceneId: 'scene8_epilogue',
      },
      {
        id: 'c_e3_rewind',
        label: 'Trải nghiệm góc nhìn người nhận tin (Ending 4)',
        nextSceneId: 'scene7_ending_rewind',
      }
    ]
  },

  // Ending 4: "NGƯỜI BẠN" (TWIST REWIND - BỨT PHÁ GÓC NHÌN)
  scene7_ending_rewind: {
    id: 'scene7_ending_rewind',
    title: 'KẾT THÚC ĐẶC BIỆT — NGƯỜI BẠN (VÒNG LẶP)',
    chapterNumber: 7,
    backgroundTheme: 'warm_city',
    ambientTone: 'uneasy',
    dialogues: [
      {
        id: 'd_e4_1',
        speaker: 'narrator',
        text: 'Bạn nghĩ câu chuyện kết thúc ở đây sao?',
        screenEffect: 'glitch',
        sfx: 'glitch',
      },
      {
        id: 'd_e4_2',
        speaker: 'narrator',
        text: 'Không gian bắt đầu đảo ngược. Thời gian tua lùi nhanh chóng như một cuốn phim bị xé rách...',
        screenEffect: 'flicker',
        sfx: 'ambience_shift',
      },
      {
        id: 'd_e4_3',
        speaker: 'narrator',
        text: 'Giờ đây, bạn không còn là người đang bị giam cầm nữa. Bạn đang ngồi trong một căn phòng trọ nhỏ ở quê nhà, trên bàn là viện phí của mẹ chưa có tiền thanh toán.',
      },
      {
        id: 'd_e4_4',
        speaker: 'narrator',
        text: 'Điện thoại của bạn rung lên. Một tin nhắn Messenger từ người bạn thân nhất vừa gửi đến:',
        sfx: 'notification',
      },
      {
        id: 'd_e4_5',
        speaker: 'friend',
        speakerName: 'Người bạn (Nạn nhân bị ép)',
        text: '“Ê mày, tao có việc này ngon lắm. Lương 20 triệu, không yêu cầu bằng cấp, bao ăn ở 100%. Đi với tao không?”',
      },
      {
        id: 'd_e4_6',
        speaker: 'narrator',
        text: 'Bạn đứng hình. Chiếc bẫy không chỉ sinh ra từ những kẻ lừa đảo vô danh... Nó thường đến từ chính những người thân quen nhất, những người đã bị dồn vào đường cùng.',
      },
      {
        id: 'd_e4_7',
        speaker: 'narrator',
        text: 'Vòng lặp tội ác sẽ chỉ dừng lại khi có người nhận diện được cạm bẫy và kiên quyết nói “KHÔNG”.',
      }
    ],
    choices: [
      {
        id: 'c_e4_proceed',
        label: 'Bước vào trang Nhận Thức & Thông Điệp Cảnh Báo',
        nextSceneId: 'scene8_epilogue',
      }
    ]
  },

  // ==========================================
  // SCENE 8: EPILOGUE & KẾT (THÔNG ĐIỆP XÃ HỘI)
  // ==========================================
  scene8_epilogue: {
    id: 'scene8_epilogue',
    title: 'HỒI KẾT: THỰC TẠI & BẢN LĨNH',
    chapterNumber: 8,
    backgroundTheme: 'ending_void',
    ambientTone: 'warm',
    dialogues: [
      {
        id: 'd8_1',
        speaker: 'narrator',
        text: '“Bạn vừa trải qua một trò chơi.”',
      },
      {
        id: 'd8_2',
        speaker: 'narrator',
        text: '“Nhưng ngoài đời thực, không có nút Restart.”',
        screenEffect: 'flicker',
      },
      {
        id: 'd8_3',
        speaker: 'narrator',
        text: 'Hàng ngàn người trẻ mỗi năm rơi vào những cái bẫy việc làm xuyên biên giới, bị tước đoạt tự do, cưỡng bức lao động và trở thành công cụ đi lừa đảo chính đồng bào mình.',
      },
      {
        id: 'd8_4',
        speaker: 'narrator',
        text: 'Họ không phải là những kẻ tội phạm bẩm sinh. Họ là nạn nhân của sự tuyệt vọng kinh tế và những thủ đoạn thao túng tâm lý tàn nhẫn.',
      }
    ],
    choices: []
  }
};
