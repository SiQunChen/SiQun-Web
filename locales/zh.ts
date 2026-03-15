import { TranslationData } from '../types';

export const translations: TranslationData = {
  portfolio: {
    name: '陳思群 (Siqun Chen)',
    tagline: '北科大資工系學士 & 臺大工海所碩一',
    bio: [
      '我的興趣有很多，但也只是興趣。所以我的目標是成為一個不被AI取代的工程師，且有穩定收入、穩定伴侶、良好的生活品質，還要有狗勾，並且身邊一堆朋友陪我陪我瘋、陪我玩，一路到退休的快樂人生。'
    ],
    skills: [
      { name: '機器學習 #Scikit-learn、Transformers、RL、LSTM、XGBoost、GAN' },
      { name: '數據分析 #Pandas、NumPy、Matplotlib/Seaborn' },
      { name: '網頁開發 #PHP、MySQL、PostgreSQL' },
    ],
    languages: [
      { name: '中文 (母語)', proficiency: 'native' },
      { name: '台語', proficiency: 'intermediate' },
      { name: '英文', proficiency: 'intermediate' },
      { name: '日文', proficiency: 'beginner' },
    ],
    projects: [
      {
        title: 'ICAN 冰水主機 AI 節電策略推薦平台',
        description: '模擬冰水主機運作，結合 GAN 生成對抗網路擴充模擬數據，並運用 強化學習 與 XGBoost 根據電價預測最佳節能策略。系統整合 有限誤差壓縮技術，在確保數據精度的同時，大幅提升傳輸效率與穩定性。',
        tags: ['RL', 'GAN', 'XGBoost'],
        imageUrl: '/images/chiller-energy-saving.png',
        liveUrl: 'https://ntuchiller.site/auth/login',
      },
      {
        title: '甘有影',
        description: '一個整合大、中、小型電影院的即時資訊，讓你能夠一次比較各家影院的場次、距離與價格，並快速找到想看的電影。',
        tags: ['Python', 'React', 'TypeScript', 'Vite', 'Tailwind CSS'],
        imageUrl: '/images/gan-woo-ya.jpg',
        githubUrl: 'https://github.com/SiQunChen/Gan-Woo-Ya',
        liveUrl: 'https://gan-woo-ya.pages.dev/',
      },
      {
        title: 'NTU Eats | 台大吃什麼',
        description: '一個幫助您解決「今天在台大附近要吃什麼？」煩惱的 Web 應用程式。支援多維度篩選、即時距離計算與懶人隨機功能。',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Geolocation'],
        imageUrl: '/images/ntu-eats-preview.png',
        githubUrl: 'https://github.com/SiQunChen/ntu-eats',
        liveUrl: 'https://ntu-eats.pages.dev/',
      },
      {
        title: 'Time-Coordinator',
        description: '一個簡單、直觀的線上時間協調工具，旨在幫助團隊快速找到最適合所有人的活動時間。建立活動、分享連結，即可輕鬆查看所有參與者的空閒時段。',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
        imageUrl: '/images/time-coordinator.png',
        githubUrl: 'https://github.com/SiQunChen/Time-Coordinator',
        liveUrl: 'https://time-coordinator.pages.dev/',
      },
      {
        title: '結合語言模型與特徵機制之整合式網路入侵偵測告警系統',
        description: '大學專題，透過語言模型分析網路封包，即時偵測惡意攻擊。',
        tags: ['SimpleTransformer', 'Docker', 'TShark', 'CICFlowMeter', 'ALBERT'],
        imageUrl: '/images/capstone-project.png',
      },
      {
        title: 'EMOMO 購物網',
        description: '資料庫系統期末專案，模擬電商網站，包含商品管理、訂單管理、會員管理等功能，讓我們更了解資料庫的運作。',
        tags: ['PHP', 'MySQL'],
        imageUrl: '/images/emomo.png',
        githubUrl: 'https://github.com/SiQunChen/EMOMO',
      },
      {
        title: '電眼美女',
        description: '物件導向程式設計期末專案，復刻童年時期的網頁遊戲，利用物件導向的觀念，將遊戲中的角色、道具、關卡等設計成不同的類別，並透過繼承與組合的方式，讓遊戲更加靈活。',
        tags: ['C++'],
        imageUrl: '/images/classroom-flirting.png',
        githubUrl: 'https://github.com/SiQunChen/classroom-flirting',
      },
      {
        title: '文章摘要',
        description: '自然語言處理與文件探勘期末專案，首次嘗試機器學習進行文章摘要。',
        tags: ['Python', 'TensorFlow', 'RNN', 'Seq2Seq', 'Scikit-learn'],
        imageUrl: '/images/article-abstract.png',
      },
      {
        title: '多功能影像辨識系統',
        description: '多媒體技術與應用期末專案，該車輛能夠偵測並追踪道路兩旁的白線，保持在白線範圍內直行。同時，車輛還能通過即時影像分析識別路牌，根據不同的路牌指示做出相應的操作，如減速、轉向或停車。',
        tags: ['YOLOv4', 'Python'],
        imageUrl: '/images/carcar.png',
      },
      {
        title: '社群平台',
        description: '網頁程式設計期末專案，一個簡單的社群平台，讓使用者可以發布貼文、留言、按讚，並與其他使用者互動。',
        tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
        imageUrl: '/images/social-media.png',
        githubUrl: 'https://github.com/SiQunChen/Web_hw/tree/main/FinalProject',
      },
      {
        title: 'AR 互動永續能源教材',
        description: '在黑客松全國賽中主導開發一款幼兒環保教具，透過 AR 鏡頭捕捉實體卡片與模型，觸發虛擬資訊與小遊戲，以「科技感」與「趣味互動」落實環保教育。',
        tags: ['AR Vuforia', 'Unity', 'ESP8266 開發版'],
        imageUrl: '/images/tech-hackathon.png',
      },
      {
        title: 'Zuvio 自動點名系統',
        description: '網路程式設計期末專案，利用 Python 爬蟲技術，自動登入 Zuvio 進行點名。',
        tags: ['Python', 'BeautifulSoup4', 'Webdriver Manager', 'Selenium'],
        imageUrl: '/images/zuvio-attendance.png',
      },
      {
        title: '無人機智慧伴舞',
        description: '智慧空間互動程式設計期末專案，我們選擇了一首音樂，並使用 Scratch 撰寫程式碼，讓四台 Hummingbird 無人機能夠配合音樂進行同步伴舞，完成了一個無人機群飛表演。',
        tags: ['Humming Bird EDU', 'Scratch'],
        imageUrl: '/images/drone-dancing.png',
      },
      {
        title: '分析教育程度與就業率的關聯性',
        description: '教育數據探勘與應用期末專案，利用 Python 進行資料分析，探討教育程度與就業率的關聯性。',
        tags: ['Python', 'SciPy', 'Matplotlib'],
        imageUrl: '/images/education-employment.png',
      },
      {
        title: '字體設計',
        description: '字體設計與文字編碼期末專案，手寫逾五千個漢字作為基礎數據，並利用 TensorFlow 訓練生成模型，成功合成出具備個人風格且高泛化性的字體。',
        tags: ['Python', 'TensorFlow', 'PyTorch', 'LPIPS', 'Pillow'],
        imageUrl: '/images/font-design.png',
      },
    ],
    experience: [
      {
        role: '產學合作實習生',
        company: '雷門數據服務股份有限公司',
        period: '2025年7月 - 迄今',
        description: [
          '協助進行數據分析及開發網頁',
        ],
      },
      {
        role: '程式設計實習生',
        company: '博仲法律事務所',
        period: '2024年7月 - 迄今',
        description: [
          '負責開發與維護內部網頁與工具。',
        ],
      },
      {
        role: '工讀生',
        company: '國立臺北科技大學 計算機與網路中心',
        period: '2022年7月 - 2024年7月',
        description: [
          '協助校園網路維護與故障排除。',
          '提供教職員生電腦軟硬體問題的技術支援。'
        ],
      },
      {
        role: '工讀生',
        company: '雲守護安控股份有限公司',
        period: '2021年9月 - 2022年12月',
        description: [
          '協助標註影像以供模型進行訓練。'
        ],
      },
    ],
    education: [
      {
        degree: '工程科學及海洋工程學系 碩士',
        institution: '國立臺灣大學',
        period: '2025 - 迄今',
        description: '於張瑞益教授實驗室學習AI相關技術，並積極參與計畫與競賽。'
      },
      {
        degree: '資訊工程學系 學士',
        institution: '國立臺北科技大學',
        period: '2021 - 2025',
        description: '學習多項資工專業知識，畢業專題為「結合語言模型與特徵機制之整合式網路入侵偵測告警系統」。'
      }
    ],
    cadreExperience: [
      {
        role: '資訊工程學系 系學會表藝長',
        organization: '國立臺北科技大學',
        period: '大二期間 (2022 - 2023)',
        description: [
          '策劃並執行系上迎新、宿營等大型活動的表演節目。',
          '協調表演團隊的排練與演出事宜。'
        ]
      },
      {
        role: '資訊工程學系 系排、系籃隊長',
        organization: '國立臺北科技大學',
        period: '大二、大三期間 (2022 - 2024)',
        description: [
          '領導球隊進行每周訓練，並參與校內競賽。',
          '培養團隊合作精神與領導能力。'
        ]
      },
      {
        role: '資訊工程學系 副班代、公關長、學輔',
        organization: '國立臺北科技大學',
        period: '大一至大四 (2021 - 2025)',
        description: [
          '擔任班級與系辦之間的溝通橋樑。',
          '負責班級活動的宣傳與聯繫。',
          '提供同學課業與生活上的協助。'
        ]
      },
      {
        role: '迎新宿營隊輔長',
        organization: '國立臺北科技大學',
        period: '大二期間 (2023)',
        description: [
          '在迎新宿營中擔任隊輔長，負責帶領小隊員並規劃活動流程，確保活動順利進行。'
        ]
      }
    ],
    interests: [
      '美食', '健身', '動漫', '棒球', '唱歌', '旅遊'
    ],
    honors: [
      "書卷獎 (兩次)",
      '技職盃黑客松競賽北區分區賽 - 最佳設計獎',
      '全國技能競賽中區分區賽 機器人職類─佳作',
      '臺中市 109 學年度模範生'
    ],
    certifications: [
      {
        name: '初級資訊安全工程師',
        issuer: 'iPAS 經濟部產業人才能力鑑定',
        date: '2024年7月',
        imageUrl: '/images/IPAS.jpg',
        verifyUrl: '#',
      },
      {
        name: '乙級硬體裝修技術士',
        issuer: '勞動部勞動力發展署',
        date: '2021年2月',
        imageUrl: '/images/硬體裝修乙級.png',
        verifyUrl: '#',
      },
      {
        name: '丙級硬體裝修技術士',
        issuer: '勞動部勞動力發展署',
        date: '2020年9月',
        imageUrl: '/images/硬體裝修丙級.jpg',
        verifyUrl: '#',
      },
    ],
    contact: {
      email: 'jerry92033119@gmail.com',
      line: 'https://line.me/ti/p/zO_8EBN4A1',
      instagram: 'https://www.instagram.com/qunnn_0331/',
      github: 'https://github.com/SiQunChen',
    },
  },
  nav: {
    about: '關於我',
    resume: '經歷',
    projects: '專案',
    contact: '聯絡我',
  },
  buttons: {
    downloadCV: '下載履歷',
    viewWork: '查看我的專案',
    getInTouch: '保持聯繫',
    sendMessage: '發送訊息',
    goHome: '回到首頁',
    downloadFullResume: '下載完整履歷 (PDF)',
  },
  sections: {
    about: { title: '關於我' },
    interests: { title: '興趣' },
    honors: { title: '榮譽獎項' },
    certifications: { title: '證照與認證' },
    skills: { title: '技能與語言', subtitle: '', techSkills: '技術技能', languages: '語言能力', proficiencyLabels: { native: '母語', fluent: '精通', intermediate: '普通', beginner: '初學' } },
    resume: { title: '經歷', subtitle: '我的專業經驗、學歷與資質總覽。', workExperience: '工作經歷', education: '學歷', cadreExperience: '幹部經歷' },
    projects: { title: '我的專案', subtitle: '我的一部分作品集。歡迎探索原始碼與線上展示。' },
    contact: {
      title: '聯絡我',
      subtitle: '我對討論新專案、創意發想或任何機會都抱持開放態度。歡迎隨時與我聯繫！',
      form: {
        name: '全名',
        email: '電子郵件地址',
        message: '訊息',
        status: {
          sending: '傳送中...',
          success: (name: string) => `謝謝您，${name}！您的訊息已成功寄出。`,
          error: '請填寫所有欄位。'
        }
      },
      contactInfo: '聯絡資訊',
      contactInfoText: '您可以透過電子郵件與我聯繫，或在社群媒體上與我聯絡。我會盡快回覆您。',
      instagramProfile: 'Instagram 個人檔案',
      lineProfile: 'Line 個人檔案',
      githubProfile: 'GitHub 個人檔案',
    },
  },
  notFound: {
    title: '頁面不存在',
    subtitle: '抱歉，我們找不到您正在尋找的頁面。',
  },
  footer: {
    rights: '版權所有。',
  },
  projectCard: {
    code: '原始碼',
    liveDemo: '線上展示',
  }
};
