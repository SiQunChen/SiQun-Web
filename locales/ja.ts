import { TranslationData } from '../types';

export const translations: TranslationData = {
  portfolio: {
    name: 'チェン・シークン (Siqun Chen)',
    tagline: '北科大情報工学学士 & 台大工学海洋学修士課程1年',
    bio: [
      '趣味はたくさんありますが、あくまで趣味です。私の目標は、AIに取って代わられないエンジニアになり、安定した収入とパートナー、良い生活の質を手に入れ、そして犬を飼うこと。引退までずっと、一緒にクレイジーなことをして遊んでくれるたくさんの友人に囲まれて、幸せな人生を歩むことです。'
    ],
    skills: [
      { name: '機械学習 #Scikit-learn、Transformers、RL、LSTM、XGBoost、GAN' },
      { name: 'データ分析 #Pandas、NumPy、Matplotlib/Seaborn' },
      { name: 'ウェブ開発 #PHP、MySQL、PostgreSQL' },
    ],
    languages: [
      { name: '中国語 (ネイティブ)', proficiency: 'native' },
      { name: '台湾語', proficiency: 'intermediate' },
      { name: '英語', proficiency: 'intermediate' },
      { name: '日本語', proficiency: 'beginner' },
    ],
    projects: [
      {
        title: 'ICAN チラー AI 省エネ戦略推薦プラットフォーム',
        description: 'チラーの動作をシミュレートし、GANで模擬データを拡張、強化学習とXGBoostを用いて電力料金に基づく最適な省エネ戦略を予測。有界誤差圧縮技術を統合し、データ精度を確保しながら伝送効率と安定性を大幅に向上。',
        tags: ['RL', 'GAN', 'XGBoost'],
        imageUrl: '/images/chiller-energy-saving.png',
        liveUrl: 'https://ntuchiller.site/auth/login',
      },
      {
        title: '甘有影（映画検索アプリ）',
        description: '大・中・小規模の映画館のリアルタイム情報を統合し、上映時間・距離・価格を一括比較して、見たい映画をすばやく見つけられるアプリケーション。',
        tags: ['Python', 'React', 'TypeScript', 'Vite', 'Tailwind CSS'],
        imageUrl: '/images/gan-woo-ya.jpg',
        githubUrl: 'https://github.com/SiQunChen/Gan-Woo-Ya',
        liveUrl: 'https://gan-woo-ya.pages.dev/',
      },
      {
        title: 'NTU Eats | 台大で何食べる？',
        description: '国立台湾大学の近くで食事を決めるのに役立つウェブアプリケーション。多次元フィルタリング、リアルタイム距離計算、優柔不断な人のためのおまかせ選択機能を提供します。',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Geolocation'],
        imageUrl: '/images/ntu-eats-preview.png',
        githubUrl: 'https://github.com/SiQunChen/ntu-eats',
        liveUrl: 'https://ntu-eats.pages.dev/',
      },
      {
        title: 'Time-Coordinator',
        description: 'チームが全員に最適な時間を素早く見つけるための、シンプルで直感的なオンラインスケジュール調整ツール。イベントを作成し、リンクを共有するだけで、全参加者の空き時間を簡単に確認できます。',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
        imageUrl: '/images/time-coordinator.png',
        githubUrl: 'https://github.com/SiQunChen/Time-Coordinator',
        liveUrl: 'https://time-coordinator.pages.dev/',
      },
      {
        title: '言語モデルと特徴メカニズムを組み合わせた統合型ネットワーク侵入検知警告システム',
        description: '大学卒業研究。言語モデルでネットワークパケットを分析し、悪意ある攻撃をリアルタイム検出。',
        tags: ['SimpleTransformer', 'Docker', 'TShark', 'CICFlowMeter', 'ALBERT'],
        imageUrl: '/images/capstone-project.png',
      },
      {
        title: 'EMOMO ショッピングサイト',
        description: 'データベースシステムの期末プロジェクト。ECサイトをシミュレートし、商品管理、注文管理、会員管理などの機能を実装し、データベースの仕組みを深く理解。',
        tags: ['PHP', 'MySQL'],
        imageUrl: '/images/emomo.png',
        githubUrl: 'https://github.com/SiQunChen/EMOMO',
      },
      {
        title: '電眼美女（教室フリーティング）',
        description: 'オブジェクト指向プログラミングの期末プロジェクト。幼少期のウェブゲームを再現し、OOPの概念でキャラクター、アイテム、ステージを異なるクラスとして設計。',
        tags: ['C++'],
        imageUrl: '/images/classroom-flirting.png',
        githubUrl: 'https://github.com/SiQunChen/classroom-flirting',
      },
      {
        title: '記事要約',
        description: '自然言語処理とテキストマイニングの期末プロジェクト。機械学習による記事要約の初めての試み。',
        tags: ['Python', 'TensorFlow', 'RNN', 'Seq2Seq', 'Scikit-learn'],
        imageUrl: '/images/article-abstract.png',
      },
      {
        title: '多機能画像認識システム',
        description: 'マルチメディア技術の期末プロジェクト。車両が道路の白線を検出・追跡して直進を維持し、リアルタイム画像分析で道路標識を認識して減速・旋回・停止などの操作を実行。',
        tags: ['YOLOv4', 'Python'],
        imageUrl: '/images/carcar.png',
      },
      {
        title: 'ソーシャルメディアプラットフォーム',
        description: 'ウェブプログラミングの期末プロジェクト。ユーザーが投稿、コメント、いいねを行い、他のユーザーと交流できるシンプルなSNSプラットフォーム。',
        tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
        imageUrl: '/images/social-media.png',
        githubUrl: 'https://github.com/SiQunChen/Web_hw/tree/main/FinalProject',
      },
      {
        title: 'AR インタラクティブ持続可能エネルギー教材',
        description: '全国ハッカソンでAR環境教育ツールの開発を主導。ARカメラで物理カードやモデルをキャプチャし、仮想情報やミニゲームをトリガーして環境教育を実践。',
        tags: ['AR Vuforia', 'Unity', 'ESP8266 開発ボード'],
        imageUrl: '/images/tech-hackathon.png',
      },
      {
        title: 'Zuvio 自動出席システム',
        description: 'ネットワークプログラミングの期末プロジェクト。Pythonウェブスクレイピングを使用してZuvioに自動ログインし出席を取るシステム。',
        tags: ['Python', 'BeautifulSoup4', 'Webdriver Manager', 'Selenium'],
        imageUrl: '/images/zuvio-attendance.png',
      },
      {
        title: 'ドローンシンクロダンス',
        description: 'スマートスペースインタラクションプログラミングの期末プロジェクト。Scratchで4台のHummingbirdドローンをプログラミングし、音楽に合わせた同期ダンスパフォーマンスを完成。',
        tags: ['Humming Bird EDU', 'Scratch'],
        imageUrl: '/images/drone-dancing.png',
      },
      {
        title: '教育レベルと就業率の関連性分析',
        description: '教育データマイニングの期末プロジェクト。Pythonを使用して教育レベルと就業率の関連性を分析。',
        tags: ['Python', 'SciPy', 'Matplotlib'],
        imageUrl: '/images/education-employment.png',
      },
      {
        title: 'フォントデザイン',
        description: 'フォントデザインとテキストエンコーディングの期末プロジェクト。5,000以上の漢字を手書きしてベースデータとし、TensorFlowで生成モデルを訓練して個人スタイルの高汎化フォントを合成。',
        tags: ['Python', 'TensorFlow', 'PyTorch', 'LPIPS', 'Pillow'],
        imageUrl: '/images/font-design.png',
      },
    ],
    experience: [
      {
        role: '産学連携インターン',
        company: '雷門データサービス株式会社',
        period: '2025年7月 - 現在',
        description: [
          'データ分析およびウェブ開発を支援。',
        ],
      },
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
      'グルメ', 'フィットネス', 'アニメ', '野球', '歌うこと', '旅行'
    ],
    honors: [
      "書巻奨 (2回)",
      '技職杯ハッカソン北部地区大会 - 最優秀デザイン賞',
      '全国技能競技大会中部地区大会 ロボット部門─佳作',
      '台中市 109学年度 模範生'
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
    skills: { title: 'スキルと言語', subtitle: '', techSkills: '技術スキル', languages: '言語能力', proficiencyLabels: { native: 'ネイティブ', fluent: '流暢', intermediate: '中級', beginner: '初級' } },
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
