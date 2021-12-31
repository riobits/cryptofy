import Link from 'next/link'
import CryptoItem from './crypto-item'
import styles from './crypto-list.module.css'

export default function CryptoList({ data }) {
  return (
    <div className={styles.container}>
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
