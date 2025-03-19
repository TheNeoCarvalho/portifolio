"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'serviços',
        path: '/services'
    },
    {
        name: 'skills',
        path: '/resume'
    },
    {
        name: 'trabalhos',
        path: '/work'
    },
    {
        name: 'contato',
        path: '/contact'
    }
]
export const Nav = () => {

    const pathName = usePathname()
    console.log(pathName)
    return (
        <nav className='flex gap-8'>
            {
                links.map((link, index) => {
                    return <Link
                        className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize hover: text-accent transition-all`}
                        key={index}
                        href={link.path}>
                        {link.name}
                    </Link>
                })
            }
        </nav>
    )
}
