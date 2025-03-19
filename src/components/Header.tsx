import Link from 'next/link'
import MobileNav from './MobileNav'
import { Nav } from './Nav'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href=''>
          <h1 className='text-2xl font-semibold'>
            Manoel Carvalho <span>.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href='/contact'>
            <Button className='border-white border-1 bg-black text-white hover:bg-white hover:text-black transition-colors duration-300'>
              Fale comigo!
            </Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header