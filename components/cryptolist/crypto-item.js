import Image from 'next/image'
import styles from './crypto-list.module.css'

export default function CryptoItem({ imageUrl, name, price, change }) {
  const upOrDown = change >= 0 ? 'up' : 'down'

  return (
    <li className={styles.item}>
      <div className={styles.currency}>
        <div className={styles.img}>
          <Image src={imageUrl} alt='cryptocurrency' width={35} height={35} />
        </div>
        <span className={styles.name}>{name}</span>
      </div>
      <p className={styles.price}>${Number(price).toLocaleString('en-US')}</p>
      <span className={`${styles[upOrDown]} ${styles.change}`}>
        {upOrDown === 'up' && '+'}
        {change}%
      </span>
    </li>
  )
}
