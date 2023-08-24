import { GiFireRay } from 'react-icons/gi'
import { ImNewTab } from 'react-icons/im'
import Link from 'next/link'

export default function HomePage () {
  return (
    <div>
      <header>
        <GiFireRay className="logo" />
        <ul>
          <li><Link href='/home'><span className='marked'>Home</span></Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href='/docs'>Docs <ImNewTab /></Link></li>
        </ul>
      </header>
      <main>
        <section>
          
        </section>
      </main>
      <footer>
      </footer>
    </div>
  )
}
