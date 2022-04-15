import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Banner from '../components/Banner';
import PromoCard from '../components/PromoCard'
import Enrollment from '../components/Enrollment'
import Courses from '../components/Courses'
import Footer from '../components/Footer';
import PremiumCoaching from '../components/PremiumCoaching';
const Home: NextPage = () => {
  return (
    <div className="h-screen object-contain overflow-x-hidden">
      <Head>
        <title>TheFuturClone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className = 'h-[70%] md:h-screen lg:h-[58%] xl:h-[80%] 2xl:h-[100%] bg-[#0C0D0D] '>
        <Header />
        <Banner />
      </div>
      {/* PromoCard */}
      <div className = 'bg-gradient-to-b from-[#F1F0F1] to-white h-fit lg:h-[90rem] space-y-20 pt-40 lg:grid lg:grid-cols-3 lg:items-center lg:space-y-0 lg:pt-20'>
          <PromoCard icon = './design.png' title = 'Level-Up Your Design Skills'desc = 'The Design Career Kickstarter track is here to help you master all the essential skills clients and agency are looking to hire- and then some!' btn = 'Learn Design'/>
          <PromoCard icon = './business.png' title = 'Launch Your Creative Business' btn = 'start your business' desc = 'The Entrepreneur Launchpad track has everything you need to get your creative business up and running.' />
          <PromoCard icon = 'agency.png' title ='Skyrocket Your Agency' desc = 'All the resources you need to land bigger clients and scale are waiting for you in our Agency Accelerator track.' btn = 'grow your business' />
      </div>

      {/* Enrollment */}
      <div className = 'h-fit bg-[#F3F2F2]'>
          <Enrollment />
      </div>
      {/* MORE COURSES */}
      <div className = 'h-fit pt-40 bg-[#F3F2F2] px-5 lg:flex lg:justify-between lg:space pb-40'>
      <p className = 'uppercase pb-6 lg:flex-[.4] text-3xl font-light'>More Courses</p>
        <div className = 'md:grid md:grid-cols-2 lg:grid-cols-3 space-y-10 md:gap-5 md:space-y-0  lg:flex-[.6]'>
        <Courses img='./course.jpg' title ='Positioning & Lead Generation' cretor ='https://assets-global.website-files.com/5d816b07d269382588dbcab1/60cd0f017a96e400add8fdf2_image-profile-chris2-140-min.jpg' name ='Chris Do' price='$699' desc='Build awareness for your services, market to a global audience, and command a price premium through strategic positioning an'  />
        <Courses img='https://assets-global.website-files.com/5d816b07d269382588dbcab1/624dd73317e5f1adadee82dd_Instagram%20Carousel%20Design%20Thumbnail%201x1.png' title ='Instagram Carousel Design' cretor ='https://assets-global.website-files.com/5d816b07d269382588dbcab1/60cd0f017a96e400add8fdf2_image-profile-chris2-140-min.jpg' name ='Chris Do' price='$149' desc="From writing and design, to maximizing engagement with carousels and Reels, Learn Chris Do's exact process for make attention-grabbing Instagram content meant to grow your industry authority." />
        <Courses img='https://assets-global.website-files.com/5d816b07d269382588dbcab1/60d4a938d3cf567498660fd4_TheFutur_Style-Guide-Kit-Cover-Square-800x800.jpg' title ='Brand Style Guide Kit' cretor ='https://assets-global.website-files.com/5d816b07d269382588dbcab1/60cd0f215aaef40b412da04e_image-profile-ben2-140-min.jpg' name ='Ben Burns' price='$79' desc="Brand Style Guide Kit is an easy-to-use, done-for-you brand book template that has everything you need to deliver branding projects successfully, grounded in decades of experience."/>
        <Courses img='https://assets-global.website-files.com/5d816b07d269382588dbcab1/6148d160ed77fc607f4a14cb_Business-Bootcamp-Mockup-800.jpg' title ='Business Bootcamp' cretor ='https://assets-global.website-files.com/5d816b07d269382588dbcab1/60cd0f017a96e400add8fdf2_image-profile-chris2-140-min.jpg' name ='Chris Do' price='' desc="An eight-week, bootcamp-style coaching program designed to help you attract the right clients and grow your business."/>
        <Courses img='https://assets-global.website-files.com/5d816b07d269382588dbcab1/5ee437a89f82304874da8488_the-futur-color-for-creatives-greg-gunn-thumbnail.jpg' title ='Color for Creatives' cretor ='https://assets-global.website-files.com/5d816b07d269382588dbcab1/60cd0f167a96e40c43d8fdf6_the-futur-greg-gunn-color-for-creatives-instructor-140-min.jpg' name ='Greg Gunn' price='$149' desc="Go beyond theory and learn color like a pro in this course from Greg Gunn. You'll master how to see, understand, and use color to create fresh, original work."/>
        <Courses img='https://assets-global.website-files.com/5d816b07d269382588dbcab1/60d4ab2d67547cdeedf9c212_TheFutur_Perfect%20Proposal-800x800.jpg' title ='The Perfect Proposal' cretor ='https://assets-global.website-files.com/5d816b07d269382588dbcab1/60cd0f215aaef40b412da04e_image-profile-ben2-140-min.jpg' name ='Ben Burns' price='$59' desc="Everything you need to craft winning proposals: backed by decades of experience and millions of dollars in closed business."/>
        </div>
      </div>
      <div className ='h-fit bg-[#F7E15E]'>
          <PremiumCoaching />
      </div>
      <div className = 'h-fit bg-black'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
