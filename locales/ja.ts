import { TranslationData } from '../types';

export const translations: TranslationData = {
  portfolio: {
    name: 'チェン・シークン (Siqun Chen)',
    tagline: '北科大情報工学学士 & 台大工学海洋学修士課程1年',
    bio: [
      '趣味はたくさんありますが、あくまで趣味です。私の目標は、AIに取って代わられないエンジニアになり、安定した収入とパートナー、柔軟な働き方を手に入れ、そして犬を飼うこと。引退までずっと、一緒にクレイジーなことをして遊んでくれるたくさんの友人に囲まれて、平凡な人生を歩むことです。'
    ],
    skills: [
      { name: '機械学習 #Scikit-learn、Transformers、RL、LSTM、XGBoost', level: 90 },
      { name: 'データ分析 #Pandas、NumPy、Matplotlib/Seaborn', level: 85 },
      { name: 'ウェブ開発 #PHP、MySQL、PostgreSQL', level: 80 },
    ],
    languages: [
      { name: '中国語 (ネイティブ)', level: 100 },
      { name: '台湾語', level: 70 },
      { name: '英語', level: 60 },
      { name: '日本語', level: 10 },
    ],
    projects: [
      {
        title: 'NTU Eats | 台大で何食べる？',
        description: '国立台湾大学の近くで食事を決めるのに役立つウェブアプリケーション。多次元フィルタリング、リアルタイム距離計算、優柔不断な人のためのおまかせ選択機能を提供します。',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Geolocation'],
        imageUrl: '/images/ntu-eats-preview.png',
        githubUrl: 'https://github.com/SiQunChen/ntu-eats', 
        liveUrl: 'https://ntu-eats.pages.dev/',
      },
    ],
    experience: [
      {
        role: 'プログラミングインターン',
        company: '博仲法律事務所',
        period: '2024年7月 - 現在',
        description: [
          '内部ウェブページとツールの開発・保守を担当。',
        ],
      },
      {
        role: '学生アルバイト',
        company: '国立台北科技大学 計算機・ネットワークセンター',
        period: '2022年7月 - 2024年7月',
        description: [
          '学内ネットワークの保守とトラブルシューティングを支援。',
          '教職員と学生にハードウェアとソフトウェアの技術サポートを提供。'
        ],
      },
      {
        role: '学生アルバイト',
        company: '雲守護安控株式会社 (Beseye)',
        period: '2021年9月 - 2022年12月',
        description: [
          'モデル訓練用の画像アノテーションを支援。',
        ],
      },
    ],
    education: [
      {
        degree: '工学科学海洋工学研究科 修士課程',
        institution: '国立台湾大学',
        period: '2025 - 現在',
        description: '張瑞益教授の研究室でAI関連技術を学び、プロジェクトやコンテストに積極的に参加。'
      },
      {
        degree: '情報工学科 学士課程',
        institution: '国立台北科技大学',
        period: '2021 - 2025',
        description: '様々な情報工学の専門知識を学びました。卒業研究は「言語モデルと特徴メカニズムを組み合わせた統合型ネットワーク侵入検知警告システム」です。'
      }
    ],
    cadreExperience: [
      {
        role: '情報工学科 学生会 芸能部長',
        organization: '国立台北科技大学',
        period: '大学2年次 (2022 - 2023)',
        description: [
          '学科のオリエンテーションやキャンプなどの主要イベントでパフォーマンス部分を企画・実行。',
          'パフォーマンスチームのリハーサルと公演を調整。'
        ]
      },
      {
        role: '情報工学科 バレーボール・バスケットボール部 キャプテン',
        organization: '国立台北科技大学',
        period: '大学2・3年次 (2022 - 2024)',
        description: [
          'チームを率いて毎週の練習を行い、学内大会に参加。',
          'チームワークとリーダーシップ能力を育成。'
        ]
      },
      {
        role: '情報工学科 副クラス代表、広報部長、学生カウンセラー',
        organization: '国立台北科技大学',
        period: '大学1年次 - 4年次 (2021 - 2025)',
        description: [
          'クラスと学科事務室との間の連絡役を担当。',
          'クラス活動の広報と連絡を担当。',
          'クラスメートに学業上および個人的なサポートを提供。'
        ]
      },
      {
        role: '新入生歓迎キャンプ チームリーダー',
        organization: '国立台北科技大学',
        period: '大学2年次 (2023)',
        description: [
          '新入生歓迎キャンプでチームリーダーを務め、チームメンバーの指導や活動計画を担当し、イベントの円滑な運営を確保。'
        ]
      }
    ],
    interests: [
      'グルメ', 'フィットネス', 'アニメ', 'ゲーム', '歌うこと', '旅行'
    ],
    honors: [
      "書巻奨 (2回)",
      '技職杯ハッカソン北部地区大会 - 最優秀デザイン賞'
    ],
    certifications: [
      {
        name: '初級情報セキュリティエンジニア',
        issuer: 'iPAS',
        date: '2024年7月',
        imageUrl: '/images/IPAS.jpg',
        verifyUrl: '#',
      },
      {
        name: '乙級ハードウェア修理技術士',
        issuer: '労働部労働力発展署',
        date: '2021年2月',
        imageUrl: '/images/硬體裝修乙級.png',
        verifyUrl: '#',
      },
      {
        name: '丙級ハードウェア修理技術士',
        issuer: '労働部労働力発展署',
        date: '2020年9月',
        imageUrl: '/images/硬體裝修丙級.png',
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
    about: '私について',
    resume: '経歴',
    projects: 'プロジェクト',
    contact: 'お問い合わせ',
  },
  buttons: {
    downloadCV: '履歴書DL',
    viewWork: '制作物を見る',
    getInTouch: '連絡する',
    sendMessage: 'メッセージを送る',
    goHome: 'ホームに戻る',
    downloadFullResume: '全履歴書をDL (PDF)',
  },
  sections: {
    about: { title: '私について' },
    interests: { title: '興味' },
    honors: { title: '受賞歴' },
    certifications: { title: 'ライセンスと認定' },
    skills: { title: 'スキルと言語', subtitle: '', techSkills: '技術スキル', languages: '言語能力' },
    resume: { title: '経歴', subtitle: '私の職務経歴、学歴、資格の概要です。', workExperience: '職務経歴', education: '学歴', cadreExperience: '幹部経歴' },
    projects: { title: '私のプロジェクト', subtitle: '私の制作物の一部です。コードやライブデモをぜひご覧ください。' },
    contact: { 
        title: 'お問い合わせ', 
        subtitle: '新しいプロジェクト、クリエイティブなアイデア、または機会についてのディスカッションを歓迎します。お気軽にご連絡ください！',
        form: { 
            name: '氏名', 
            email: 'メールアドレス', 
            message: 'メッセージ',
            status: {
                sending: '送信中...',
                success: (name: string) => `${name}様、ありがとうございます。メッセージは正常に送信されました。`,
                error: 'すべてのフィールドを入力してください。'
            }
        },
        contactInfo: '連絡先情報',
        contactInfoText: 'メールまたはソーシャルメディアでお気軽にご連絡ください。できるだけ早く返信するよう努めます。',
        instagramProfile: 'Instagram プロフィール',
        lineProfile: 'Line プロフィール',
        githubProfile: 'GitHub プロフィール',
    },
  },
  notFound: {
      title: 'ページが見つかりません',
      subtitle: '申し訳ありませんが、お探しのページは見つかりませんでした。',
  },
  footer: {
      rights: '無断複写・転載を禁じます。',
  },
  projectCard: {
      code: 'コード',
      liveDemo: 'ライブデモ',
  }
};
