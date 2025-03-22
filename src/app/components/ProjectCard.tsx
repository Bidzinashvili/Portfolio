import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    title: string;
    description: string;
    image: string;
    url: string;
}

export default function ProjectCard({ title, description, image, url }: Props) {
    return (
        <Link href={url} className='w-full  lg:max-w-[416px]'>
            <Image className='rounded-t-[20px] w-full lg:w-auto' src={`/${image}`} alt='project picture' width={416} height={234} />
            <div className='bg-primary rounded-b-[20px] px-[20px] pt-[10px] pb-[25px]'>
                <h2 className='text-white text-[16px] font-medium'>{title}</h2>
                <p className='text-[12px] text-secondary font-medium mt-[10px]'>{description}</p>
            </div>
        </Link>
    )
}
