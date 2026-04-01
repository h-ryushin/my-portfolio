import Link from 'next/link'
import { PROJECTS_DATA, ProjectKey } from './lib/project';
const works = [
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
    url:  { pathname: '/kintai' } // 遷移先のURLを追加
  }
];
export default function Home() {
  return (
    <div>
      <section className="w-full h-screen flex flex-col items-center justify-center px-12 text-center">
  {/* フォントサイズを小さくし、font-serifで明朝体に、trackingで字間を広く */}
  <h1 className="text-2xl md:text-4xl font-bold tracking-[0.4em] mb-8 font-serif uppercase">
    HIRANO RYUSHIN
  </h1>
  
  {/* 説明文も小さく、より軽い印象に */}
  <p className="hidden sm:block text-[10px] md:text-[12px] opacity-70 tracking-[0.3em] font-serif leading-loose whitespace-nowrap">
  Welcome to my portfolio site, where I showcase my work, skills, and passion.
</p>
  <p className="block sm:hidden text-[10px] md:text-[12px] opacity-70 tracking-[0.3em] font-serif leading-loose whitespace-nowrap">
  Welcome to my portfolio site,<br /> where I showcase my work, skills, and passion.
</p>
</section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto px-10">
        {works.map((work, index) => (
          <Link href={work.url} key={index} className="group cursor-pointer">
            <div className="flex flex-col gap-4">

              {/* 画像コンテナ */}
              <div className="aspect-video bg-white rounded-sm overflow-hidden flex items-center justify-center border-4 border-gray-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] transition-transform duration-200 group-hover:-translate-y-2">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* テキスト部分 */}
              <div className="mt-2">
                <h3 className="text-2xl font-bold tracking-tight ">
                  {work.title}
                </h3>
                <p className="text-sm mt-1 opacity-80">{work.tags}</p>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
