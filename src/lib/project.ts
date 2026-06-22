// lib/projects.ts
export const PROJECTS_DATA = {
  morespace: {
    title: "MoreSpace!",
    isTeam: true,
    year: "2025年11月",
    role: "私は主に弾の軌道制御、スキルシステムの内部ロジック、およびサウンドシステム全般を担当しました。",
    points: [
      "サイバーエージェント主催の「Re-Build in 愛知 2025」というハッカソンにて優秀賞を受賞",
      "R3 (Reactive Extensions for C#) を用いたイベント駆動型のスキルシステム",
      "シングルトンパターンを用いた、シーンを跨ぐサウンド管理システムの構築",
      "オブジェクトプールを活用し、軽量なメモリ管理の実装"
    ],
    challenges: "ハッカソンという限られた時間の中で、Photonによる同期ズレ（ラグ）を考慮した射撃判定の実装と、チーム間でのGitコンフリクト解消に奔走しました。",
    description: "2人対戦型戦略的3Dプレイヤーシューティング。",
    tech: ["Unity", "C#", "Photon", "R3", "Git"],
    image: "/images/morespace.png",
    link: "https://unityroom.com/games/morespace2"
  },
  // kintai: {
  //   title: "勤怠管理アプリ (KINTAI DX)",
  //   isTeam: false,
  //   year: "2026年3月",
  //   role: "企画・実装・店舗導入",
  //   points: [
  //     "24時を過ぎる深夜勤務の計算ロジックを独自実装",
  //     "忙しい現場でも入力できる音声認識機能の導入",
  //     "Firebaseを用いたリアルタイムなデータ保存"
  //   ],
  //   challenges: "毎月の手書き集計における時間ロスと計算ミスをゼロにするため、24時間を跨ぐ複雑なシフトの集計ロジックを型安全なTypeScriptで1から構築することに苦労しました。導入後は集計作業の完全自動化を達成しました。",
  //   description: "アルバイト先の焼肉店において、従来すべて手計算で行われていた毎月の勤怠集計作業を効率化するために自発的に開発。現場のリアルな課題をITの仕組みで解決し、大幅な業務効率化に貢献したプロダクトです。",
  //   tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
  //   image: "/images/kintaKintaiApp.png",
  //   link: "https://kinta-kintai-logic-app.vercel.app/nishieki"
  // },
  kintai: {
    title: "勤怠・人時売上管理システム (KINTAI DX)",
    isTeam: false,
    year: "2026年3月",
    role: "企画・UI/UXデザイン・フルスタック実装・店舗導入",
    points: [
      "24時間を跨ぐ深夜勤務や休憩時間に対応した、高精度な給与計算ロジックを自作",
      "端末操作が苦手な現場でも1秒で入力できる、Web Speech APIを活用した音声認識機能",
      "Firebase (Firestore) を活用した、リアルタイムな店舗売上と人時売上の完全連動"
    ],
    challenges: "従来の手書き集計における時間ロスや計算ミスを無くすため、日を跨ぐ深夜勤務の複雑な時間計算ロジックを、エッジケースまで網羅してTypeScriptで堅牢に実装することに注力しました。また、ITに馴染みのない店舗スタッフや店長が迷わず直感的に使えるよう、アクセシビリティに徹底的にこだわったUI/UXの設計に最も苦労しました。",
    description: "アルバイト先の焼肉店において、毎月すべて手計算で行われていた勤怠集計と、人時売上の算出を自動化・デジタル化するために自発的に開発した個人プロジェクト。現場のリアルな課題をITに落とし込み、集計作業の完全自動化と、店舗経営におけるリアルタイムな生産性の可視化を達成。実際に店舗へ導入され運用されています。",
    tech: ["Next.js", "TypeScript", "Firebase (Firestore)", "Tailwind CSS", "Web Speech API"],
    image: "/images/kintaKintaiApp.png",
    link: "https://kinta-kintai-logic-app.vercel.app/nishieki"
  },
  soundjump: {
    title: "SOUNDJUMP",
    isTeam: false,
    year: "2024年9月",
    role: "個人開発",
    points: [
      "FFT（高速フーリエ変換）を用いたリアルタイム音声解析の実装",
      "音量の振幅をキャラクターのジャンプ力へ動的にフィードバック",
      "Unityでのアニメーション制作への初挑戦"
    ],
    challenges: "UnityのAudioSourceから取得した生データを解析し、意図した感度でキャラクターを動かす調整に苦労しました。ピッチ判定の導入も試行錯誤しましたが、最終的には『声の大きさ』に特化させることで、シンプルで快感のある操作性を追求しました。",
    description: "『声』がコントローラーになる新感覚2Dアクションゲーム。Unityのさらなる習熟を目指し、音声入力というデバイス特性を活かしたゲーム体験と、アニメーションによる表現力の向上に挑戦した作品",
    tech: ["Unity", "C#", "Git"],
    image: "/images/soundjump.png",
    link: "https://unityroom.com/games/soundjump"
  },
  realbaseball: {
    title: "RealBaseBall",
    year: "2024年7月",
    isTeam: false,
    role: "",
    points: [
      "Rigidbodyを用いた打球描画",
      "Collision Detectionの最適化による突き抜け防止",
      "ライフイズテックの研修を通じ、3ヶ月で企画からリリースまで完走"
    ],
    challenges: "初めての制作で、高速移動するボールがバットを突き抜けてしまう問題に直面。物理演算のステップ調整や検知モードの切り替えなど、基礎的なデバッグと最適化の手法をこの作品から学びました。",
    description: "プログラミング学習を開始して最初に完成させた野球ゲーム。Unityの基本操作からC#の基礎まで、エンジニアとしての歩みをスタートさせた思い出深い作品",
    tech: ["Unity", "C#", "Git"],
    image: "/images/realbaseball.png",
    link: "https://unityroom.com/games/realbaseball_sappu"
  },
};
export const works = [
  {
    title: "SoundJump",
    tags: "Unity, C#",
    image: "images/soundjump.png",
    url: { pathname: '/soundjump' } // 遷移先のURLを追加
  },
  {
    title: "RealBaseBall",
    tags: "Unity, C#",
    image: "images/realbaseball.png",
    url: { pathname: '/realbaseball' } // 遷移先のURLを追加
  },
  {
    title: "MoreSpace!",
    tags: "Unity, C#, Photon",
    image: "images/morespace.png",
    url: { pathname: '/morespace' } // 遷移先のURLを追加
  },
  {
    title: "KintaKintaiApp",
    tags: "Next.js,TypeScript,Firebase",
    image: "images/kintaKintaiApp.png",
    url: { pathname: '/kintai' } // 遷移先のURLを追加
  }
];

export type ProjectKey = keyof typeof PROJECTS_DATA;