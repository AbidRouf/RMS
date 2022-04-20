import Head from 'next/head'
import HomePage from './Homepage.jsx'

export default function Home() {
  return (
    <div>

      <Head>
        <title>RateMySubject</title>
      </Head>

      {/* Importing the components/pages */}
      <HomePage />

    </div>
  )
}
