// lib/projects.ts
export const PROJECTS_DATA = {
  kintai: {
    title: "勤怠管理アプリ (KINTAI DX)",
    role: "個人開発",
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
    role: "個人開発 / Unity Engineer",
    points: [
      "音楽のビートと同期した動的なステージ生成ロジック",
      "",
      "ポストプロセッシングを用いたサイバーパンクな視覚演出"
    ],
    challenges: "リズムと生成タイミングがズレないよう、Update文での監視ではなく、AudioSettings.dspTimeに基づいた厳密な同期制御の実装にこだわりました。",
    description: "音楽に合わせてステージが動的に生成されるリズムアクションゲーム。Unityでの動的オブジェクト生成の基礎から応用までをこの作品で習得しました。",
    tech: ["Unity", "C#", "Git"],
    image: "/images/soundjump.png",
    link: "https://unityroom.com/games/soundjump"
  },
  realbaseball: {
    title: "RealBaseBall",
    role: "個人開発（初制作作品）",
    points: [
      "Unityの物理演算（Rigidbody）を用いた打球の放物線描画",
      "バットのコライダー調整による「芯で打った感」の演出",
      "ライフイズテックの研修を通じて、Unity開発の基礎を3ヶ月で習得"
    ],
    challenges: "初めてのゲーム制作で、ボールとバットの当たり判定（Collision）が高速移動時に突き抜けてしまう問題に直面。検知モードの調整などで解決策を学びました。",
    description: "プログラミング学習を始めて最初に完成させた野球ゲーム。Unityのインストールから学び、3ヶ月でリリースまで漕ぎ着けた、私のエンジニアとしての原点です。",
    tech: ["Unity", "C#", "Git"],
    image: "/images/realbaseball.png",
    link: "https://unityroom.com/games/realbaseball_sappu"
  },
  morespace: {
    title: "MoreSpace!",
    role: "チーム開発 (Lead Engineer / Sound)",
    points: [
      "サイバーエージェント主催のハッカソンにて優秀賞を受賞",
      "R3 (Reactive Extensions for C#) を用いたイベント駆動型のスキルシステム",
      "シングルトンパターンを用いた、シーンを跨ぐサウンド管理システムの構築",
      "オブジェクトプールを活用し、モバイルでも動く軽量なメモリ管理の実装"
    ],
    challenges: "ハッカソンという限られた時間の中で、Photonによる同期ズレ（ラグ）を考慮した射撃判定の実装と、チーム間でのGitコンフリクト解消に奔走しました。",
    description: "ライフイズテックの仲間と共同開発したマルチプレイヤーシューティング。私は主に弾の軌道制御、スキルシステムの内部ロジック、およびサウンドシステム全般を担当しました。",
    tech: ["Unity", "C#", "Photon", "R3", "Git"],
    image: "/images/morespace.png",
    link: "https://unityroom.com/games/morespace2"
  },
};

export type ProjectKey = keyof typeof PROJECTS_DATA;