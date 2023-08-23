import { BsReverseListColumnsReverse } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { FaShoppingBasket } from 'react-icons/fa'
import { GiFireRay } from 'react-icons/gi'

export default function Home() {
  return (
    <div id="app">
      <header>
        <GiFireRay className="logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Apps</a></li>
          <li><a href="#">Docs</a></li>
        </ul>
      </header>
      <main>
        <section>
          <h1>That is a site made for a test.</h1>
          <p className='sub'>I love Rayssa, with <b>all my hearth</b>.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet, labore adipisci deserunt accusamus voluptas dolorum. Eveniet explicabo dolores dicta optio natus? Explicabo fugiat quo itaque illo velit mollitia obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet, labore adipisci deserunt accusamus voluptas dolorum. Eveniet explicabo dolores dicta optio natus? Explicabo fugiat quo itaque illo velit mollitia obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet, labore adipisci deserunt accusamus voluptas dolorum. Eveniet explicabo dolores dicta optio natus? Explicabo fugiat quo itaque illo velit mollitia obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet, labore adipisci deserunt accusamus voluptas dolorum. Eveniet explicabo dolores dicta optio natus? Explicabo fugiat quo itaque illo velit mollitia obcaecati!</p>
        </section>
      </main>
      <footer>
        <div>
          <button><BsReverseListColumnsReverse className="icon" /></button>
          <button><AiFillHome className="icon" /></button>
          <button><FaShoppingBasket className="icon" /></button>
        </div>
      </footer>
    </div>
  )
}
