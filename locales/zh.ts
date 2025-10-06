import { TranslationData } from '../types';

export const translations: TranslationData = {
  portfolio: {
    name: '陳思群 (Siqun Chen)',
    tagline: '北科大資工系學士 & 臺大工海所碩一',
    bio: [
      '我的興趣有很多，但也只是興趣。所以我的目標是成為一個不被AI取代的工程師，且有穩定收入、穩定伴侶、彈性工作，還要有狗勾，並且身邊一堆朋友陪我陪我瘋、陪我玩，一路到退休的平凡人生。'
    ],
    skills: [
      { name: '機器學習 #Scikit-learn、Transformers、RL、LSTM、XGBoost', level: 90 },
      { name: '數據分析 #Pandas、NumPy、Matplotlib/Seaborn', level: 85 },
      { name: '網頁開發 #PHP、MySQL、PostgreSQL', level: 80 },
    ],
    languages: [
      { name: '中文 (母語)', level: 100 },
      { name: '台語', level: 70 },
      { name: '英文', level: 60 },
      { name: '日文', level: 10 },
    ],
    projects: [
      {
        title: 'NTU Eats | 台大吃什麼',
        description: '一個幫助您解決「今天在台大附近要吃什麼？」煩惱的 Web 應用程式。支援多維度篩選、即時距離計算與懶人隨機功能。',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Geolocation'],
        imageUrl: '/images/ntu-eats-preview.png',
        githubUrl: 'https://github.com/SiQunChen/ntu-eats',
        liveUrl: 'https://ntu-eats.pages.dev/',
      },
    ],
    experience: [
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
      '美食', '健身', '動漫', '電玩', '唱歌', '旅遊'
    ],
    honors: [
      "書卷獎 (兩次)",
      '技職盃黑客松競賽北區分區賽 - 最佳設計獎'
    ],
    certifications: [
      {
        name: '初級資訊安全工程師',
        issuer: 'iPAS 經濟部產業人才能力鑑定',
        date: '2024年3月',
        imageUrl: 'https://picsum.photos/seed/cert-is/400/225',
        verifyUrl: '#',
      },
      {
        name: '乙級硬體裝修技術士',
        issuer: '勞動部勞動力發展署',
        date: '2023年11月',
        imageUrl: 'https://picsum.photos/seed/cert-hw-b/400/225',
        verifyUrl: '#',
      },
      {
        name: '丙級硬體裝修技術士',
        issuer: '勞動部勞動力發展署',
        date: '2023年7月',
        imageUrl: 'https://picsum.photos/seed/cert-hw-c/400/225',
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
    skills: { title: '技能與語言', subtitle: '', techSkills: '技術技能', languages: '語言能力' },
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
