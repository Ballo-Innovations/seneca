'use client'

// Import Libraries
import Image from "next/image"
import { motion } from "framer-motion"

// Import assets
import header_img from '@/public/images/header/header-1.png'
import commitment_img from '@/public/images/header/header-3.jpeg'
import why_choose_us_img from '@/public/images/header/header-4.png'
import expertise_1 from '@/public/images/services/seneca picture.png'
import expertise_2 from '@/public/images/header/header-7.jpeg'
import logo_2 from '@/public/images/logo/logo-white-2.png'
import logo from '@/public/images/logo/logo.png'
import DSC_logo from '@/public/images/logo/DSC-logo.png'
import fabric from '@/public/images/background/curvy-silk.jpg'
import fabric2 from '@/public/images/background/curvy-silk-2.jpg'
import fabric3 from '@/public/images/background/curvy-fabric-green.png'
import fabric4 from '@/public/images/background/curvy-fabric-light.png'
import './home.css'

const Home = () => {
  return (
    <div id="home">

      {/* Intro section */}

      <div className="nav-padding background-cover pb-20 text-black" style={{ backgroundImage: `url(${fabric4.src})` }}>
        <div className="flex flex-column-reverse flex-lg-row">
          {/* Header Image Container */}
          <motion.div
            className="responsive-row md:mr-16 header-img relative rounded-r-md"               
            initial={{ opacity: 0, x: -50  }}
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
          >
            <video
              className="absolute left-0 top-0 w-full h-full object-cover rounded-lg z-0"
              muted
              loop
              autoPlay
              playsInline
              src="/videos/hero-vid.mp4"
            />
          </motion.div>
          
          <div className="container">
            <motion.div
              className="logo-img-container flex gap-6"
              initial={{ opacity: 0, y:-20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 1.5, duration: 1 }} 
              viewport={{ once: true }} 
            >
              <div className="flex flex-col items-end mt-20">
                <Image
                  src={logo}
                  alt="Seneca logo "
                  quality={100}
                  className="home-logo-image"
                  // blurDataURL={logo.blurDataURL}
                />              

                {/* <h1 className="dsc-logo-letters text-8xl">DSC</h1> */}
              </div>

              {/* <motion.div 
                className="dsc-logo-image"
                initial={{ opacity: 0, scale: 0, rotateY: 180  }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }} 
                transition={{ delay: 1.25, duration: 1.5, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                <Image
                  src={DSC_logo}
                  alt="DSC logo "
                  quality={100}
                  
                  // blurDataURL={logo.blurDataURL}
                />
              </motion.div> */}
            </motion.div>

            <div className="text-4xl font-extrabold intro-text">
              <motion.p 
                initial={{ opacity: 0, y: 10  }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: 2.6, duration: 1, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                YOUR
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 10  }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: 2.8, duration: 1, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                AFRICAN
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 10  }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: 3, duration: 1, ease: "easeIn" }}
                viewport={{ once: true }}
              >
                TRADE
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 10  }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: 3.2, duration: 1, ease: "easeIn" }}
                viewport={{ once: true }}
                className="relative"
              >
                PARTNER
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, x: 50  }}
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ delay: 2.25, duration: 1, ease: "easeIn" }}
                viewport={{ once: true }}
                className="d-sm-none shape mobile-shape-1"
                style={{ background: 'black' }}
              />
            </div>
          </div>
        </div>
        <div className="shape shape-1" />
      </div>

      {/* Commitment section */}

      <div id="commitment" style={{ backgroundImage: `url(${fabric4.src})` }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col flex-lg-row relative"
          viewport={{ once: true }}
        >
          <div className="container col-12 col-md-6 text-black">
            <div className="px-2 px-md-10">
              <div className="relative">
                <motion.div
                 initial={{ opacity: 0, y:-50 }} 
                 whileInView={{ opacity: 1, y: 0 }} 
                 transition={{ delay: 0.5, duration: 1 }} 
                 viewport={{ once: true }} 
                 className="shape shape-2"
                />
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 1 }} 
                  viewport={{ once: true }} 
                  className="main-heading text-start text-md-end mt-36 mb-10"
                >
                  OUR <br />COMMITMENT
                </motion.h1>
              </div>
              <div className="commitment-text-container pb-20 text-justify">
                <p><span className="font-semibold">SENECA COMMODITIES LIMITED</span>  is committed to working toward a safe and sustainable future, helping to feed and connect a growing global population sustainably. Our commitment is to ensure:</p>         
                <div className="pl-0 md:pl-5 commitment-paragraphs">
                  <motion.div
                    initial={{ opacity: 0, x:-100 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.75, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p>• <span className="font-semibold">Equitability</span>: We seek to create value that is fairly realised by all in our value chain.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x:-100 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.75, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p>• <span className="font-semibold">Sustainability</span>: We seek to run our business responsibly with the highest level of prudence we can employ.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x:-100 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.75, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p>• Determination and <span className="green-text">staying on top</span> of the evolving <span className="green-text">needs of out customers</span>. In short, not just <span className="green-text">providing ahead</span>, but also <span className="green-text">thinking ahead</span>, so nobody is left behind!</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x:-100 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.75, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p>• <span className="font-semibold">Maintain Integrity</span>: May we never loose sight of where we came from or how we got to where we are. It is not just what we do that counts, but also how we do it.</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 commitment-img responsive-row rounded-tl-md" style={{ backgroundImage: `url(${commitment_img.src})` }} />
          <div className="shape shape-3" />
        </motion.div>
      </div>

      {/* Why us section */}

      <div id="why-us" className="background-cover-center py-36" style={{ backgroundImage: `url(${fabric3.src})` }}>
        <div className="flex flex-col-reverse flex-lg-row justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, y:-100 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }} 
            className="col-12 col-md-5"
          >
            <Image
              src={why_choose_us_img}
              alt="Tractor "
              quality={100}
              className="cover-img why-us-img rounded-r-md"
            />
          </motion.div>
          <div className="container col-12 col-md-7 flex items-end">
            <div className="relative mt-44  md:mt-20 why-us-heading">
              <motion.h1 
                initial={{ opacity: 0, y:100 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }} 
                viewport={{ once: true }}
                className="ml-20 main-heading why-us"
              >    
                WHY <br/> CHOOSE <br/> US?
              </motion.h1>
              <motion.div 
                initial={{ scale: 0 }} 
                whileInView={{scale: 1 }} 
                transition={{ duration: 0.5 }} 
                viewport={{ once: true }}
                className="shape shape-4"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-lg-row pt-16 text-[1.15rem]">
          <p className="col-12 col-md-3 relative">
              <div className="shape shape-5" />
          </p>
          <motion.p 
            initial={{ scale: 0.9 }} 
            whileInView={{scale: 1 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }}
            className="col-12 col-md-4 font-light px-3 lg:px-5" 
            style={{ zIndex: '2' }}
          >
            We are independent consultants providing world-class agricultural, geological and mining services in mineral resource management
          </motion.p>
          <motion.p 
            initial={{ scale: 0.9 }} 
            whileInView={{scale: 1 }} 
            transition={{ duration: 0.5 }} 
            className="col-12 col-md-4 font-light px-3 pl-5 pt-3 pt-md-0" 
            viewport={{ once: true }}
            style={{ zIndex: '2' }}
          >
            We contribute to the strategic success of our clients by providing ethical, innovative, functional and technologically advanced solutions by collaborating with well-positioned expert networks and by providing ownership value and growth opportunities to our staff.
          </motion.p>
        </div>
      </div>

      {/* Expertise */}

      <div id="expertise" className="flex flex-col flex-lg-row text-black text-right pt-36 pb-20" style={{ backgroundImage: `url(${fabric4.src})` }}>
        <div className="col-12 col-md-6 text-[1.1rem]">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x:100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }} 
              className="shape shape-6" 
              viewport={{ once: true }}
            />
            <motion.h1 
              initial={{ opacity: 0, x:-100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }} 
              viewport={{ once: true }}
              className="main-heading"
            >
              OUR EXPERTISE
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }} 
            viewport={{ once: true }}
            className="px-3 px-md-2"
          >
            <div>
              <h2 className="sub-heading">YOUR AFRICAN SOURCING PARTNER</h2>
              <p>Through our vast network of collaborators, we source the best quality commodity products that are of the highest standards and at commercially viable costs.</p>
            </div>

            <div>
              <h2 className="sub-heading">YOUR AFRICAN MINING PARTNER</h2>
              <p>To strengthen mining operations across the region, SENECA collaborates with esteemed partner RTT Legacy Africa. Together, we provide specialized mining solutions, including the supply of essential equipment, metals, and industrial commodities. Leveraging our combined expertise and strategic networks, we ensure efficient sourcing, reliable supply chains, and seamless project execution. Trust us to power your mining ventures with quality, efficiency, and industryleading support.</p>
            </div>

            <div>
              <h2 className="sub-heading">YOUR AFRICAN WAREHOUSING PARTNER</h2>
              <p>Begin your seamless journey with us. Together, we provide top-tier warehousing facilities tailored for in-transit goods and commodities. With strategic locations and advanced logistics capabilities, we ensure smooth handling and secure storage throughout the transit process. Experience reliability and efficiency redefined in cross-border logistics.</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }} 
          viewport={{ once: true }}
          className="col-12 col-sm-6 lg:pl-10 gap-3 flex items-end expertise-imge-container"
        >
          <div className="col-5 px-1 lg:px-0">
            {/* <h3 className="font-bold text-center">Trading as DSC Logistics</h3> */}
            <Image
              src={expertise_2}
              alt="Tractor"
              quality={100}
              className="cover-img expertise-img-1 object-center rounded-md"
              // blurDataURL={expertise_1.blurDataURL}
              style={{ objectPosition: 'left' }}
            />
          </div>
          <Image
            src={expertise_1}
            alt="Tractor"
            quality={100}
            className="cover-img expertise-img-2 col-7 rounded-l-md"
            // blurDataURL={expertise_2.blurDataURL}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Home