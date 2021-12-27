import axios from 'axios'
import CryptoList from '../../components/cryptolist/crypto-list'

export default function Crypto({ data }) {
  return (
    <div>
      <CryptoList data={data} />
    </div>
  )
}

export async function getStaticProps() {
  try {
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

    if (response.data.status === 'success') {
      return {
        props: {
          data: response.data,
        },
        revalidate: 120,
      }
    }
  } catch (err) {
    console.error(err)
  }
  return {
    notFound: true,
  }
}
