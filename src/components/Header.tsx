import Link from 'next/link'
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
            <Button>
              Contrate-me
            </Button>
          </Link>
        </div>

        <div className="xl:hidden">Mobile Nav</div>
      </div>
    </header>
  )
}

export default Header