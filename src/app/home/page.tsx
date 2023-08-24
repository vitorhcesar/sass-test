import { GiFireRay } from 'react-icons/gi'
import { ImNewTab } from 'react-icons/im'
import { BsReverseListColumnsReverse } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'

import Link from 'next/link'

export default function HomePage () {
  return (
    <div>
      <header>
        <GiFireRay className="logo" />
        <ul>
          <li><Link href='/docs'>Docs <ImNewTab /></Link></li>
        </ul>
      </header>
      <main>
        <section>
          Essa é a homepage.
        </section>
      </main>
      <footer>
        <div>
          <Link href='/home' className='button-selected'><AiFillHome className="icon" /></Link>
          <Link href='/' className='button'><BsReverseListColumnsReverse className="icon" /></Link>
        </div>
      </footer>
    </div>
  )
}
