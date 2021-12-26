import Link from 'next/link'
import CryptoItem from './crypto-item'
import styles from './crypto-list.module.css'

export default function CryptoList({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <b className={styles['currency-title']}>Currency</b>
        <b className={styles['price-title']}>Price</b>
        <b className={styles['change-title']}>24h Change</b>
      </div>
      <ul>
        {data.data.coins.map((coin) => (
          <Link href={`/crypto/${coin.id}`} key={coin.id}>
            <a>
              <CryptoItem
                imageUrl={coin.iconUrl}
                name={coin.name}
                price={coin.history[coin.history.length - 1]}
                change={coin.change}
              />
            </a>
          </Link>
        ))}
      </ul>
    </div>
  )
}
