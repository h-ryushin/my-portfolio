import Link from 'next/link'
import { PROJECTS_DATA, ProjectKey ,works} from '../src/lib/project';
import TopImage from '@/components/TopImage';
export default function Home() {
  return (
    <div>
      <TopImage src="" alt="" isTopViwer={true} />
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
