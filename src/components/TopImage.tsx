import React from 'react'
import Image from 'next/image';

interface TopImageProps {
    src: string;
    alt: string;
}

function TopImage({ src, alt }: TopImageProps) {
    return (
        <div>
            <section className="relative w-full h-[50vh] md:h-screen overflow-hidden mb-20">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover object-[center_20%] md:object-center"
                    priority
                />
            </section>
        </div>
    )
}

export default TopImage