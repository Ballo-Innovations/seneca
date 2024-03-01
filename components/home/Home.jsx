import Image from "next/image"
import header_img from '@/public/images/header/header-1.png'
import commitment_img from '@/public/images/header/header-3.png'
import why_choose_us_img from '@/public/images/header/header-4.png'
import expertise_1 from '@/public/images/header/header-6.jpg'
import expertise_2 from '@/public/images/about/about-img.png'
import logo from '@/public/images/logo/logo-white.png'
import fabric from '@/public/images/background/curvy-silk.jpg'
import fabric2 from '@/public/images/background/curvy-silk-2.jpg'
import fabric3 from '@/public/images/background/curvy-fabric-green.png'
import fabric4 from '@/public/images/background/curvy-fabric-light.png'
import './home.css'

const Home = () => {
  return (
    <div id="home">

      {/* Intro section */}

      <div className="nav-padding background-cover pb-28" style={{ backgroundImage: `url(${fabric.src})` }}>
        <div className="flex flex-column-reverse flex-lg-row">
          {/* Header Image Container */}
          <div className="responsive-row md:mr-16 header-img relative" style={{ backgroundImage: `url(${header_img.src})` }} />
          
          <div className="container">
            <div className="">
              <Image
                src={logo}
                alt="Tractor "
                quality={100}
                className="home-logo-image"
                // blurDataURL={logo.blurDataURL}
              />
            </div>

            <div className="text-4xl font-thin intro-text">
              <p>YOUR</p>
              <p>AFRICAN</p>
              <p>TRADE</p>
              <p className="relative">PARTNER</p>
              <div className="d-sm-none shape mobile-shape-1" />
            </div>
          </div>
        </div>
        <div className="shape shape-1" />
      </div>

      {/* Commitment section */}

      <div id="commitment" className="flex flex-col flex-lg-row relative" style={{ backgroundImage: `url(${fabric2.src})` }}>
        <div className="container col-12 col-md-6 inner-top-shadow">
          <div className="px-10">
            <div className="relative">
              <div className="shape shape-2" />
              <h1 className="main-heading text-right mt-36 mb-10">OUR <br />COMMITMENT</h1>
            </div>
            <div className="commitment-text-container pb-20">
              <p><span className="font-semibold">SENECA COMMODITIES LIMITED</span> is committed to working toward a safe and sustainable future, helping to feed and connect a growing global population sustainably. Our commitment is to ensure:</p>
              <div className="pl-5">
                <p>• <span className="font-semibold">Equitability</span>: We seek to create value that is fairly realized by all in our value chain.</p>

                <p>• <span className="font-semibold">Sustainability</span>: We seek to run our business responsibly with the highest level ofprudence.</p>

                <p>• Determination and <span className="green-text">staying on top</span> of the evolving <span className="green-text">needs of out customers</span>.In short,not just <span className="green-text">providing ahead</span>, but also <span className="green-text">thinking ahead</span>, so nobody is left behind!</p>

                <p>• <span className="font-semibold">Maintain Integrity</span>: May we never lose sight of where we came from or how we got to where we are. As the eyes is the worlds view to your soul, such is your view to the sole of the world. It is not what we do that counts, but rather how we do it. Our guidance - each one of us has equal importance in life.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 pl-10 commitment-img responsive-row" style={{ backgroundImage: `url(${commitment_img.src})` }} />
        <div className="shape shape-3" />
      </div>

      {/* Why us section */}

      <div className="background-cover-center py-36" style={{ backgroundImage: `url(${fabric3.src})` }}>
        <div className="flex flex-col-reverse flex-lg-row justify-center items-center">
          <div className="col-12 col-md-5">
            <Image
              src={why_choose_us_img}
              alt="Tractor "
              quality={100}
              className="cover-img why-us-img"
              blurDataURL={why_choose_us_img.blurDataURL}
            />
          </div>
          <div className="container col-12 col-md-7 flex items-end">
            <div className="relative mt-44 why-us-heading">
              <h1 className="ml-20 main-heading">WHY <br/> CHOOSE <br/> US?</h1>
              <div className="shape shape-4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-lg-row pt-16">
          <p className="col-12 col-md-3 relative">
              <div className="shape shape-5" />
          </p>
          <p className="col-12 col-md-4 font-light px-3 lg:px-5" style={{ zIndex: '2' }}>We are independent consultants providing world-class agriculture, geological and mining services in mineral resource management</p>
          <p className="col-12 col-md-4 font-light px-3 pl-5" style={{ zIndex: '2' }}>We contribute to the strategic success of our clients by providing ethical, innovative, functional and technologically advanced solutions by collaborating with well-positioned expert networks and by providing ownership value and growth opportunities to our staff.</p>
        </div>
      </div>

      {/* Expertise */}

      <div id="expertise" className="flex flex-col flex-lg-row text-black text-right py-36" style={{ backgroundImage: `url(${fabric4.src})` }}>
        <div className="container col-12 col-md-6">
          <div className="relative">
            <div className="shape shape-6" />
            <h1 className="main-heading">OUR EXPERTISE</h1>
          </div>
          <div className="lg:px-5">
            <div>
              <h2 className="sub-heading">YOUR AFRICAN SOURCING PARTNER</h2>
              <p font>Through our vast network of collaborators, we source the best quality commodity products that are of the highest standards and at commercially viably cost.</p>
            </div>

            <div>
              <h2 className="sub-heading">YOUR AFRICAN LOGISTICS PARTNER</h2>
              <p>To streamline cross-border logstics, <strong>SENECA</strong> collaborates with esteemed partner <strong>DSC Logistics</strong> from South Africa. Together, we offer comprehensive solutions for the seamless transit of goods and commodities. Leveraging expertise and strategic infrastructure, our partnership ensures efficient handling and timely delivery accross the region. Trust us to optimise your supply chain for success</p>
            </div>

            <div>
              <h2 className="sub-heading">YOUR AFRICAN WAREHOUSING PARTNER</h2>
              <p>Begin your seamless journey with us in tandem with <strong>DSC Logistics</strong>, our trusted partner. Together, we provide top-tier warehousing facilities tailored for in-transit goods and commodities. With  strategic locations and advanced logistics capabilities. With strategic locations and advanced logistics capabilities, we ensure smooth handling and secure storage throughout the transit process. Experience reliability and efficiency redifined in cross-border logistics.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 lg:pl-10 gap-4 flex items-end">
          <div className="col-5 px-1 lg:px-0">
            <h3 className="font-bold">Trading as DSC Logistics</h3>
            <Image
              src={expertise_2}
              alt="Tractor "
              quality={100}
              className="cover-img expertise-img-1"
              // blurDataURL={expertise_1.blurDataURL}
              style={{ objectPosition: 'left' }}
            />
          </div>
          <Image
            src={expertise_1}
            alt="Tractor "
            quality={100}
            className="cover-img expertise-img-2 col-7"
            // blurDataURL={expertise_2.blurDataURL}
          />
        </div>
      </div>
    </div>
  )
}

export default Home