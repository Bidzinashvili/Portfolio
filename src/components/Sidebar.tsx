'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Compass, BriefcaseBusiness, Pen, User, Layers2, Github, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MAIN_DATA = [
    {
        name: 'Explore',
        icon: Compass,
        active: false,
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
        name: 'About',
        icon: User,
        active: false,
        url: '/about'
    },
    {
        name: 'Stack',
        icon: Layers2,
        active: false,
        url: '/stack'
    }
]

const CONTACT_DATA = [
    {
        name: 'Github',
        icon: Github,
        url: 'https://github.com/Bidzinashvili',
        active: false,
        target: '_blank'
    },
    {
        name: 'Linkedin',
        icon: Linkedin,
        url: 'https://www.linkedin.com/in/lashabidzinashvili/',
        active: false,
        target: '_blank'
    },
    {
        name: 'Instagram',
        icon: Instagram,
        url: 'https://www.instagram.com/lashabidzinashvilli/',
        active: false,
        target: '_blank'
    }
]

export default function Sidebar() {
    const pathname = usePathname();
    const [links, setLinks] = useState(MAIN_DATA);
    const [contactLinks, setContactLinks] = useState(CONTACT_DATA);

    useEffect(() => {
        const updatedLinks = MAIN_DATA.map(link => ({
            ...link,
            active: pathname === link.url,
        }));

        const updatedContactLinks = CONTACT_DATA.map(link => ({
            ...link,
            active: pathname === link.url,
        }));

        setLinks(updatedLinks);
        setContactLinks(updatedContactLinks);
    }, [pathname]);

    return (
        <div className='min-h-screen bg-primary text-secondary lg:block hidden'>
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

                {/* Contact */}
                <div className='flex flex-col mt-[20px]'>
                    <h2 className='text-secondary px-[10px] py-[12px] text-[14px] font-[600]'>Contact</h2>
                    {contactLinks.map((link) => (
                        <Link href={link.url} key={link.name} target={link.target} className={`flex items-center gap-[10px] rounded-[10px] py-[10px] px-[10px] hover:text-white transition-all ease-in-out duration-300 border-[1px] border-solid ${link.active ? 'bg-secondary-dark border-accent text-white' : 'border-primary'}`}>
                            <link.icon size={18} />
                            <p className='text-[14px]'>{link.name}</p>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}
