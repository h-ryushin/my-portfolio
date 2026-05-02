import React from 'react';
import { PROJECTS_DATA, ProjectKey } from '../../src/lib/project';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;

  const projectKey = id as ProjectKey;
  const project = PROJECTS_DATA[projectKey];

  // データがなければ 404
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen p-4 md:p-20 bg-[#F0EBE3] text-slate-900 mt-30">
      <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-12 shadow-xl">
        <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h1 className="text-4xl font-black">{project.title}</h1>
          <p className="text-xl font-black">制作日: {project.year}</p>
        </div>
        {/* <Link href={project.link} className="text-blue-500 hover:underline ">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={300}
            className="rounded-lg mb-6"
          />
        </Link> */}
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative w-fit mb-10"
        >
          <div className="aspect-video bg-white rounded-sm overflow-hidden flex items-center justify-center border-4 border-gray-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] transition-transform duration-200 group-hover:-translate-y-2">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        <div className="space-y-8">
          <section>
            <h2 className="text-black-500 font-black uppercase text-xl tracking-widest mb-2">My Role</h2>
            {
              project.isTeam ? (
                <p className="text-black-500 font-black uppercase text-xm tracking-widest mb-2">[チーム開発]</p>
              ) : (
                <p className="text-black-500 font-black uppercase text-xl tracking-widest mb-2">[個人開発]</p>
              )
            }
            <p className="text-slate-600 leading-relaxed font-medium">{project.role}</p>
          </section>

          <section>
            <h2 className="text-black-500 font-black uppercase text-xl tracking-widest mb-2">Description</h2>
            <p className="text-slate-600 leading-relaxed font-medium">{project.description}</p>
          </section>
          <section>
            <h2 className="text-black-500 font-black uppercase text-xl tracking-widest mb-2">Points</h2>
            {/* <p className="text-slate-600 leading-relaxed font-medium">{project.points}</p> */}
            {project.points.map((point, index) => (
              <p key={index} className="text-slate-600 leading-relaxed font-medium">
                ・{point}
              </p>
            ))}
          </section>


          <section>
            <h2 className="text-black-500 font-black uppercase text-xl tracking-widest mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-4 py-2 bg-slate-100 rounded-full text-sm font-bold text-slate-600">
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}