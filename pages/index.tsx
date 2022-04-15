import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Banner from '../components/Banner';
const Home: NextPage = () => {
  return (
    <div className="h-screen object-contain">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className = 'h-[70%] md:h-screen lg:h-[58%] xl:h-[80%] 2xl:h-[100%] bg-[#0C0D0D] '>
        <Header />
        <Banner />
      </div>
    </div>
  )
}

export default Home
