import React from 'react'
import Image from 'next/image';

const TIMELINE_DATA = [
    { year: "2016年", title: "淡水魚ライフワークプロジェクトに参加", desc: "中学校の「ライフワーク」プロジェクトで、淡水魚の取材とレポート作成に取り組み、江ノ島水族館や東京海洋大学などに取材。学んだことをレポートにまとめ、学内発表を行った。" },
    { year: "2023年", title: "Web制作の独学開始", desc: "大学2年後期からHTML/CSS/JavaScriptを独学で学び、Webサイト制作のスキルを習得。プログラミングやデザインの基礎を身につけ、個人制作で実践。" },
    { year: "2023年", title: "Web制作インターンシップに参加", desc: "フルリモートでのWeb制作インターンシップに参加し、クライアントのニーズに応じたWebサイトの制作を担当。デザインと機能性を兼ね備えたサイトを納品。" },
    { year: "2024年", title: "ライフイズテックにてUnityメンターとして中高生を指導開始", desc: "大学の友人の勧めでUnityコースに参加し、VRゲームの制作にも挑戦。Web制作スキルと併用し、ゲーム開発の新しい分野に挑戦。中高生のゲーム開発を指導。" },
    { year: "2024年", title: "Navi-奈良市_AI1DAY (Web)に参加", desc: "生成AIを使って、奈良市をテーマにしたWebサイトの構成ができ、また、構成に沿ったWebサイト作成を手助けする。プログラミングが嫌いな子もいた中で、班の全員が納得いくものが完成できました。" },
    { year: "2025年", title: "Re-Build in 愛知 2025 優秀賞 受賞", desc: "サイバーエージェント主催のハッカソンにて、戦略的オンラインゲームをチームで開発。技術面では、オブジェクトプールを活用した高負荷に耐えうる射撃システムの実装や、スキルの内部ロジック、サウンド制御などを担当。パフォーマンスを意識した設計が評価され、優秀賞を受賞しました。" },
];

const SKILLS_DATA = [
    { name: "Python", level: "初級", desc: "学校などで習ったことができる" },
    { name: "HTML/CSS", level: "中級", desc: "Webサイトを依頼されてつくったことがある　中高生向け指導経験あり" },
    { name: "React", level: "初級", desc: "このWebサイトを作成" },
    { name: "Unity", level: "中級", desc: "2D・3Dゲームの基礎制作が可能　中高生向け指導経験あり" },
    { name: "Git/GitHub", level: "中級", desc: "基本的なバージョン管理、チームコラボレーションが可能　チーム開発経験あり" },
];

const EDUCATION_DATA = [
    { date: "2015年4月", event: "愛知教育大学附属岡崎中学校　入学" },
    { date: "2018年3月", event: "愛知教育大学附属岡崎中学校　卒業" },
    { date: "2018年4月", event: "私立名城大学附属高校　入学" },
    { date: "2021年3月", event: "私立名城大学附属高校　卒業" },
    { date: "2022年4月", event: "名城大学情報工学部情報工学科　入学" },
    { date: "2026年3月", event: "名城大学情報工学部情報工学科　卒業予定" },
    { date: "2026年4月", event: "名城大学大学院 情報工学研究科 入学予定" }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#EBECE6] text-[#1a1a1a] pb-5 pt-0">
            <section className="relative w-full h-[50vh] md:h-[100vh] overflow-hidden mb-20">
                <Image
                    src="/images/about-top.png"
                    alt="about visual"
                    fill
                    className="object-cover object-[center_20%] md:object-center"
                    priority
                />
            </section>

            <div className="max-w-5xl mx-auto px-8 md:px-12">
                <p className='text-2xl font-bold mb-5'
                    style={{ fontFamily: 'reitam, sans-serif' }}
                >
                    平野龍真
                </p>
                <section className="flex flex-col md:flex-row justify-between items-start mb-20 gap-4">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4"
                            style={{ fontFamily: 'reitam, sans-serif' }}
                        >
                            HIRANO RYUSHIN
                        </h1>
                    </div>
                    <p className="text-sm md:text-xl text-gray-400">| STUDENT</p>
                </section>
                <section className="mb-24">
                    <h2 className="text-xl font-bold border-b border-black pb-2 mb-10 uppercase tracking-widest">これまでの主な取り組み</h2>
                    <div className="space-y-12">
                        {TIMELINE_DATA.map((item, i) => (
                            <div key={i} className="group">
                                <h3 className="text-lg font-bold mb-2 ">{item.year}　{item.title}</h3>
                                <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-24">
                    <h2 className="text-xl font-bold border-b border-black pb-2 mb-8 uppercase tracking-widest">スキル</h2>
                    <ul className="space-y-4">
                        {SKILLS_DATA.map((skill, i) => (
                            <li key={i} className="text-sm">
                                <span className="font-bold">{skill.name}（{skill.level}）：</span>
                                <span className="opacity-80">{skill.desc}</span>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="mb-24">
                    <h2 className="text-xl font-bold border-b border-black pb-2 mb-8 uppercase tracking-widest">学歴</h2>
                    <div className="space-y-3 text-sm">
                        {EDUCATION_DATA.map((edu, i) => (
                            <div key={i} className="grid grid-cols-[110px_1fr] md:grid-cols-[140px_1fr]">
                                <span className="opacity-60">{edu.date}</span>
                                <span>{edu.event}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}