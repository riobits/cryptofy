import Link from 'next/link'
import styles from '../styles/NotFound.module.css'
import utilsStyles from '../styles/utils.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div>
        <h1>خطأ 404</h1>
        <h2>الصفحة التي تريد العثور عليها غير موجودة</h2>
        <Link href='/'>
          <a className={utilsStyles.link}>العودة للصفحة الرئيسية</a>
        </Link>
      </div>
    </div>
  )
}
