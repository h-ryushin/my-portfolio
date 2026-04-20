import React from 'react'
import Image from 'next/image';

interface TopImageProps {
    src?: string;
    alt?: string;
    isTopViwer: boolean;
}

function TopImage({ src, alt, isTopViwer }: TopImageProps) {
    return (
        <div>
            {isTopViwer ?
                <section className="w-full h-screen flex flex-col items-center justify-center px-12 text-center">
                    <h1 className="text-2xl md:text-4xl font-bold tracking-[0.4em] mb-8 font-serif uppercase">
                        HIRANO RYUSHIN
                    </h1>
                    <p className="hidden sm:block text-[10px] md:text-[12px] opacity-70 tracking-[0.3em] font-serif leading-loose whitespace-nowrap">
                        Welcome to my portfolio site, where I showcase my work, skills, and passion.
                    </p>
                    <p className="block sm:hidden text-[10px] md:text-[12px] opacity-70 tracking-[0.3em] font-serif leading-loose whitespace-nowrap">
                        Welcome to my portfolio site,<br /> where I showcase my work, skills, and passion.
                    </p>
                </section>
                : src && (<section className="relative w-full h-[50vh] md:h-screen overflow-hidden mb-20">
                    <Image
                        src={src}
                        alt={alt ||""}
                        fill
                        className="object-cover object-[center_20%] md:object-center"
                        priority
                    />
                </section>)}

        </div>
    )
}

export default TopImage