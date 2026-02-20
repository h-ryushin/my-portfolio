import Link from 'next/link'
const works = [
  {
    title: "SoundJump",
    tags: "Unity, C#",
    image: "images/soundjump.png",
    url: "https://unityroom.com/games/soundjump" // 遷移先のURLを追加
  },
  {
    title: "RealBaseBall",
    tags: "Unity, C#",
    image: "images/realbaseball.png",
    url: "/works/baseball"
  },
  {
    title: "MoreSpace!",
    tags: "Unity, C#, Photon",
    image: "images/morespace.png",
    url: "https://unityroom.com/games/morespace2"
  },
  
];
export default function Home() {
  return (
    <div>
      <section className="w-full h-screen flex flex-col items-center justify-center px-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-[0.3em] mb-6">
          HIRANO RYUSHIN
        </h1>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl tracking-widest">
          Welcome to my portfolio site, where I showcase my work, skills, and passion.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
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
