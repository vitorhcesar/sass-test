import { GiFireRay } from 'react-icons/gi'

import styles from './docs.module.scss'
import Link from 'next/link'

export default function DocsPage () {
  return (
    <div className={styles.docs}>
      <header className={styles.header}>
        <div>
          <GiFireRay className={styles.logo} />
          <h3 className={styles.logoText}>Docs</h3>
        </div>
        <Link href='/' className={styles.homeButton}>
          Back to home
        </Link>
      </header>
      <main>
      </main>
      <footer>
      </footer>
    </div>
  )
}
