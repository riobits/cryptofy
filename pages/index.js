import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import utilsStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src='/blockchain.png'
            alt='blockchain'
            width={600}
            height={600}
          />
        </div>
        <div className={styles.info} dir='rtl'>
          <h1>شاهد آخر اسعار الكريبتو</h1>
          <p>
            مع كريبتوفاي يمكنك مراقبة اسعار الكريبتو مع واجهة بسيطة وسهلة الفهم
          </p>
          <Link href='/crypto'>
            <a>
              <button className={utilsStyles.button}>عرض</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
