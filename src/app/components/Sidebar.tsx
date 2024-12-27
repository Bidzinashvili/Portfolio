'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Compass, BriefcaseBusiness, Pen, IceCreamBowl, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DATA = [
    {
        name: 'Explore',
        icon: Compass,
        active: true,
        url: '/'
    },
    {
        name: 'Experience',
        icon: BriefcaseBusiness,
        active: false,
        url: '/experience'
    },
    {
        name: 'Projects',
        icon: Pen,
        active: false,
        url: '/projects'
    },
    {
        name: 'Services',
        icon: IceCreamBowl,
        active: false,
        url: '/services'
    },
    {
        name: 'About',
        icon: User,
        active: false,
        url: '/about'
    }
]

export default function Sidebar() {
    const pathname = usePathname();
    const [links, setLinks] = useState(DATA);

    useEffect(() => {
        const updatedLinks = DATA.map(link => ({
            ...link,
            active: pathname === link.url,
        }));

        setLinks(updatedLinks);
    }, [pathname]);
    return (
        <div className='h-screen bg-primary text-secondary'>
            <div className='flex flex-col px-[16px]'>

                {/* Logo and Name */}
                <div className='flex py-[24px] gap-[0.75rem]'>
                    <Image src='/logo.jpeg' className='rounded-[50%]' alt='logo' width={40} height={40} />
                    <div>
                        <h1 className='text-white text-[16px] font-bold'>Lasha Bidzinashvili</h1>
                        <p className='text-[12px]'>Full-Stack Developer</p>
                    </div>

                </div>

                {/* Main */}
                <div className='flex flex-col'>
                    {links.map((link) => (
                        <Link href={link.url} key={link.name} className={`flex items-center gap-[10px] rounded-[10px] py-[10px] px-[10px] hover:text-white transition-all ease-in-out duration-300 border-[1px] border-solid ${link.active ? 'bg-secondary-dark border-accent text-white' : 'border-primary'}`}>
                            <link.icon size={18} />
                            <p className='text-[14px]'>{link.name}</p>
                        </Link>
                    ))}
                </div>


            </div>
        </div>
    )
}
