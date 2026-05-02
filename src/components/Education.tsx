import React from 'react'
import { EDUCATION_DATA } from '@/lib/profile';

const Education = () => {
    return (
        <div className="">
            <h2 className="text-xl font-bold border-b border-black pb-2 mb-8 uppercase tracking-widest">学歴</h2>
            <div className="space-y-3 text-sm">
                {EDUCATION_DATA.map((edu, i) => (
                    <div key={i} className="grid grid-cols-[110px_1fr] md:grid-cols-[140px_1fr]">
                        <span className="opacity-60">{edu.date}</span>
                        <span>{edu.event}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education