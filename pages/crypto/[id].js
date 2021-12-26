import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import styles from '../../styles/CryptoInfo.module.css'
import urilsStyles from '../../styles/utils.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default function CurrencyInfo({ currency }) {
  const date = new Date(currency.allTimeHigh.timestamp)

  return (
    <>
      <Head>
        <title>{currency.name}</title>
      </Head>
      <div className={styles.container}>
        <Link href='/crypto'>
          <a>
            <button className={urilsStyles.button}>&#11164; Back</button>
          </a>
        </Link>
        <br />
        <h1>{currency.name}</h1>
        <span>{currency.symbol}</span>
        {currency.websiteUrl && (
          <a
            className={urilsStyles.link}
            href={currency.websiteUrl}
            target='_blank'
            rel='noreferrer'
          >
            <br />
            <span>{currency.websiteUrl}</span>
            <div className={styles['link-icon']}>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </div>
          </a>
        )}
        <section className={styles.section}>
          <h2>
            All time high: $
            {Number(currency.allTimeHigh.price).toLocaleString('en-US')} -{' '}
            {date.getDate() +
              '/' +
              (date.getMonth() + 1) +
              '/' +
              date.getFullYear()}
          </h2>
        </section>
        <section className={styles.section}>
          <h2>Description</h2>
          <div dangerouslySetInnerHTML={{ __html: currency.description }} />
        </section>
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  try {
    console.log(process.env.NAME)
    const options = {
      headers: {
        'x-rapidapi-host': process.env.RAPID_HOST,
        'x-rapidapi-key': process.env.RAPID_KEY,
      },
    }

    const response = await axios.get(
      `https://coinranking1.p.rapidapi.com/coin/${context.params.id}`,
      options
    )

    return {
      props: {
        currency: response.data.data.coin,
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  const options = {
    headers: {
      'x-rapidapi-host': process.env.RAPID_HOST,
      'x-rapidapi-key': process.env.RAPID_KEY,
    },
  }

  const response = await axios.get(
    'https://coinranking1.p.rapidapi.com/coins',
    options
  )

  const allPaths = response.data.data.coins.map((coin) => ({
    params: { id: String(coin.id) },
  }))

  return {
    paths: allPaths,
    fallback: false,
  }
}
