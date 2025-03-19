'use client'

import {
    Sheet,
    SheetContent,
    SheetTrigger
} from '@/components/ui/sheet'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiMenuFries } from 'react-icons/ci'

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

const MobileNav = () => {

    const pathName = usePathname()

    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {
                        links.map((link, index) => {
                            return <Link
                                className='text-black border-accent capitalize hover:transition-all'
                                key={index}
                                href={link.path}>
                                {link.name}
                            </Link>
                        })
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav