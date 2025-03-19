'use client'

// Import Libraries
import { motion } from "framer-motion"
import Image from 'next/image';

// Import Assets
import about_img from '@/public/images/about/about-img-2.jpeg'
import fabric from '@/public/images/background/curvy-fabric-light.png'
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div id='about-us' className="nav-padding border-b relative text-black text-[1.1rem]" style={{ backgroundImage: `url(${fabric.src})` }}>
      <div className="flex flex-col-reverse flex-lg-row pb-32">
        <motion.div 
          initial={{ opacity: 0, x:-100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-5 mt-lg-0 col-12 col-md-6 md:pr-24"
        >
          <Image
            src={about_img}
            alt="Tractor "
            quality={100}
            className="cover-img about-img rounded-r-md"
          />
        </motion.div>
        <div className="container about-text-container col-12 col-md-6 py-20">
          <div className="relative w-fit mb-10">
            <motion.div 
              initial={{ opacity: 0, x:100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="shape shape-7" 
            />
            <motion.h1
              initial={{ opacity: 0, y:-50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="main-heading"
            >
              ABOUT US
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, x:100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.75, duration: 0.5 }}
            viewport={{ once: true }}
            className='font-normal'
          >
            <span className="green-text font-semibold"><span className="font-semibold">SENECA ZAMBIA LIMITED</span></span> a Joint-Venture with <a href="www.lvc-global.com" target="_blank" className="green-text font-semibold"><span className="font-semibold">LVC Global Holdings</span></a>, is a mining solutions and commodities supply company, specializing in the sourcing and supply of metals, mining, and industrial commodities. With a focus on Nickel, Cobalt, Copper, and other essential minerals, we support mining operations with high-quality equipment, materials, and project solutions.
          </motion.p>

          <br />

          <motion.p
            initial={{ opacity: 0, x:100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ delay: 1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Backed by years of experience in commodities trading, we have built strong alliances within the industry to ensure seamless supply chains for mining and construction projects. Our expertise allows us to provide reliable, efficient, and tailored solutions that drive operational success.
          </motion.p>

          <br />

          <motion.p
            initial={{ opacity: 0, x:100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            As a trusted partner, we take pride in fostering long-term relationships and empowering our clients to thrive in the evolving mining sector.
            For more information on the joint venture, view article <span className="green-text font-semibold"><span className="font-semibold">here</span></span>
          </motion.p>

          <br />

          <motion.p
            initial={{ opacity: 0, x:100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >            
            For more information on the joint venture, view article <a href="https://panafricanvisions.com/2025/03/seneca-commodities-zambia-and-lvc-global-forge-jv-to-optimize-critical-mineral-trading-in-emerging-frontier-markets/" target="_blank" className="green-text font-semibold"><span className="font-semibold">here</span></a>
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y:50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.25 }}
        viewport={{ once: true }}
        className="shape shape-8"
      />
    </div>
  )
}

export default AboutUs;
