import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import utilsStyles from '../../styles/utils.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <Link href='/crypto'>
        <a className={utilsStyles.navlink}>اسعار الكريبتو</a>
      </Link>
      <Link href='/'>
        <a>
          <Image src='/logo.png' alt='logo' width={150} height={35}></Image>
        </a>
      </Link>
    </div>
  )
}
