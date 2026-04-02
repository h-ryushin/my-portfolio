// lib/projects.ts
export const PROJECTS_DATA = {
  morespace: {
    title: "MoreSpace!",
    isTeam: true,
    year: "2025年11月",
    role: "私は主に弾の軌道制御、スキルシステムの内部ロジック、およびサウンドシステム全般を担当しました。",
    points: [
      "サイバーエージェント主催のハッカソンにて優秀賞を受賞",
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
  kintai: {
    title: "勤怠管理アプリ (KINTAI DX)",
    isTeam: false,
    year: "2026年3月",
    role: "",
    points: [
      "24時を過ぎる深夜勤務の計算ロジックを独自実装",
      "忙しい現場でも入力できる音声認識機能の導入",
      "Firebaseを用いたリアルタイムなデータ保存"
    ],
    challenges: "手書き集計における1分単位の計算ミスをゼロにするため、JavaScript特有の浮動小数点誤差を考慮した正確な時間計算ロジックの構築に苦労しました。",
    description: "バイト先の焼肉店で、従来1分単位で行われていた手書きの勤怠集計作業を効率化するために開発。計算ミスが許されない責任のある業務を自動化し、店舗運営のDXに貢献することを目指しました。",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
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

export type ProjectKey = keyof typeof PROJECTS_DATA;