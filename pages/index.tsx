import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Banner from '../components/Banner';
import PromoCard from '../components/PromoCard'
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
      <div className = 'bg-gradient-to-b from-[#F1F0F1] to-white h-screen space-y-20 pt-40 lg:flex lg:justify-center lg:items-center lg:space-y-0 lg:p-5'>
          <PromoCard icon = './design.png' title = 'Level-Up Your Design Skills'desc = 'The Design Career Kickstarter track is here to help you master all the essential skills clients and agency are looking to hire- and then some!' btn = 'Learn Design'/>
          <PromoCard icon = './business.png' title = 'Launch Your Creative Business' btn = 'start your business' desc = 'The Entrepreneur Launchpad track has everything you need to get your creative business up and running.' />
          <PromoCard icon = 'agency.png' title ='Skyrocket Your Agency' desc = 'All the resources you need to land bigger clients and scale are waiting for you in our Agency Accelerator track.' btn = 'grow your business' />
      </div>
    </div>
  )
}

export default Home
