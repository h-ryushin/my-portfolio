import React from 'react'
import { TIMELINE_DATA} from '../app/lib/profile';

const TimeLine = () => {
    return (
        <div className="mb-24">
            <h2 className="text-xl font-bold border-b border-black pb-2 mb-10 uppercase tracking-widest">これまでの主な取り組み</h2>
                    <div className="space-y-12">
                        {TIMELINE_DATA.map((item, i) => (
                            <div key={i} className="group">
                                <h3 className="text-lg font-bold mb-2 ">{item.year}　{item.title}</h3>
                                <p className="text-sm leading-relaxed opacity-80">{item.desc}</p>
                            </div>
                        ))}
                    </div>
        </div>
    )
}

export default TimeLine