import React from 'react'
import Image from 'next/image';
import Education from '@/components/Education';
import Skill from '@/components/Skill';
import TimeLine from '@/components/TimeLine';
import TopImage from '@/components/TopImage';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#EBECE6] text-[#1a1a1a] pt-0">
           <TopImage src="/images/about-top.png" alt="about visual" isTopViwer={false} />

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
                <TimeLine />
                <Skill />
                <Education />
            </div>
        </main>
    );
}