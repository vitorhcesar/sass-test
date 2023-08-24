import { BsReverseListColumnsReverse } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
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
            <h1>Este site foi feito para um teste de <b className='text-red'>SASS</b>.</h1>
            <span className='sub'>Eu amo a Rayssa, com <b>todo o meu coração</b>.</span>
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
