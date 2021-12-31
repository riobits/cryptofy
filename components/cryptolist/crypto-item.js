import Image from 'next/image'
import styles from './crypto-list.module.css'
import utilsStyles from '../../styles/utils.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCaretUp,
  faCaretDown,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'

export default function CryptoItem({ imageUrl, name, price, change }) {
  const upOrDown = change >= 0 ? 'up' : 'down'

  return (
    <li className={styles.item}>
      <div className={styles.currency}>
        <div className={styles.img}>
          <Image src={imageUrl} alt='cryptocurrency' width={35} height={35} />
        </div>
        <div className={styles.title}>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>
            <span>
              ${price > 1 ? Number(price).toLocaleString('en-US') : price}
            </span>{' '}
            <span className={styles[upOrDown]}>
              <div className={utilsStyles.icon}>
                {upOrDown === 'up' ? (
                  <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              </div>{' '}
              {Math.abs(change)}%
            </span>
          </p>
        </div>
      </div>
      <div className={`${utilsStyles.icon} ${styles.arrow}`}>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </li>
  )
}
