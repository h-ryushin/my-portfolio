import React from 'react'
import { SKILLS_DATA } from '@/lib/profile';

const Skill = () => {
    return (
        <div className="mb-24">
            <h2 className="text-xl font-bold border-b border-black pb-2 mb-8 uppercase tracking-widest">スキル</h2>
            <ul className="space-y-4">
                {SKILLS_DATA.map((skill, i) => (
                    <li key={i} className="text-sm">
                        <span className="font-bold">{skill.name}（{skill.level}）：</span>
                        <span className="opacity-80">{skill.desc}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Skill