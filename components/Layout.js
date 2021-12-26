import Head from 'next/head'
import Header from './Header/Header'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Cryptofy | أسعار الكريبتو</title>
        <meta
          name='description'
          content='شاهد آخر اسعار الكريبتو مع واجهة بسيطة وسهلة الفهم'
        />
        <meta property='og:title' content='Cryptofy | أسعار الكريبتو' />
        <meta
          property='og:description'
          content='شاهد آخر اسعار الكريبتو مع واجهة بسيطة وسهلة الفهم'
        />
        <meta
          property='og:image'
          content='http://localhost:3000/thumbnail.png'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}
    </>
  )
}
