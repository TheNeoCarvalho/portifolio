"use client"

import Links from '@/data/menu.json'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Nav = () => {

    const pathName = usePathname()
    console.log(pathName)
    return (
        <nav className='flex gap-8'>
            {
                Links.map((link, index) => {
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
