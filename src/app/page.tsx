import { BsReverseListColumnsReverse } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { FaShoppingBasket } from 'react-icons/fa'
import { GiFireRay } from 'react-icons/gi'
import { ImNewTab } from 'react-icons/im'
import Link from 'next/link'

export default function Home() {
  return (
    <div id="app">
      <header>
        <GiFireRay className="logo" />
        <ul>
          <li><Link href='/docs'>Docs <ImNewTab /></Link></li>
        </ul>
      </header>
      <main>
        <section>
          <header>
            <h1>That site was made for a test.</h1>
            <span className='sub'>I love Rayssa, with <b>all my hearth</b>.</span>
          </header>
          <div className='content'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet, labore adipisci deserunt accusamus voluptas dolorum. Eveniet explicabo dolores dicta optio natus? Explicabo fugiat quo itaque illo velit mollitia obcaecati!</p>
            <div className='panel'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet, labore adipisci deserunt accusamus voluptas dolorum. Eveniet explicabo dolores dicta optio natus? Explicabo fugiat quo itaque illo velit mollitia obcaecati!</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet, labore adipisci deserunt accusamus voluptas dolorum. Eveniet explicabo dolores dicta optio natus? Explicabo fugiat quo itaque illo velit mollitia obcaecati!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet, labore adipisci deserunt accusamus voluptas dolorum. Eveniet explicabo dolores dicta optio natus? Explicabo fugiat quo itaque illo velit mollitia obcaecati!</p>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <Link href='/home' className='button'><AiFillHome className="icon" /></Link>
          <Link href='/' className='button-selected'><BsReverseListColumnsReverse className="icon" /></Link>
        </div>
      </footer>
    </div>
  )
}
