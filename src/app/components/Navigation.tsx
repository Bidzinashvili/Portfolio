'use client'
import { Compass, BriefcaseBusiness, Pen, IceCreamBowl, User, Layers2, Triangle, Github, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
        name: 'Contact',
        icon: Triangle,
        url: '/contact',
        active: false,
        target: ''
    },
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

export default function Navigation() {
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
        <div className='fixed bottom-0 left-0 right-0 z-50 bg-primary shadow-md lg:hidden'>

            <div className='flex items-center py-[16px] justify-start md:justify-center overflow-x-scroll'>

                <div className='flex items-center justify-center'>
                    {links.map((link) => (
                        <Link href={link.url} key={link.name} className={`flex flex-col items-center gap-[5px] rounded-[10px] py-[8px] px-[16px] hover:text-white transition-all ease-in-out duration-300 ${link.active ? 'bg-secondary-dark text-white' : ''}`}>
                            <link.icon color='#858585' size={18} />
                            <p className={`text-[14px] text-secondary ${link.active && 'text-white'}`}>{link.name}</p>
                        </Link>
                    ))}
                </div>

                <div className='items-center justify-center flex'>
                    {contactLinks.map((link) => (
                        <Link href={link.url} key={link.name} target={link.target} className={`flex flex-col items-center gap-[5px] rounded-[10px] py-[8px] px-[16px] hover:text-white transition-all ease-in-out duration-300 ${link.active ? 'bg-secondary-dark text-white' : ''}`}>
                            <link.icon color='#858585' size={18} />
                            <p className={`text-[14px] text-secondary ${link.active && 'text-white'}`}>{link.name}</p>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}
