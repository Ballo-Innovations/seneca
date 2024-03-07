'use client'

// Import Libraries
import { motion } from "framer-motion"
import Image from 'next/image'

// Import Assets
import services_img from '@/public/images/services/services-img.png'
import fabric from '@/public/images/background/curvy-silk.jpg'
import './ourServices.css'

const OurServices = () => {
  return (
    <div id='our-services' className='nav-padding pb-20 border-b relative' style={{ backgroundImage: `url(${fabric.src})` }}>
      <div className="flex flex-col-reverse flex-lg-row pt-10">
        <motion.div
          initial={{ opacity: 0, x:-100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="col-12 col-md-6 md:pr-10 flex justify-center pt-16">
          <Image
            src={services_img}
            alt="Tractor "
            quality={100}
            className="cover-img services-img"
          />
        </motion.div>

        <div className="container col-12 col-md-6">
          <div className="relative w-fit mb-10">
            <motion.div
              initial={{ opacity: 0, y:-50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="shape shape-9"
            />
            <motion.h1
              initial={{ opacity: 0, x:100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="main-heading"
            >
              OUR SERVICES
            </motion.h1>
          </div>
          <div className='font-light px-3 px-md-0'>
            <motion.p
              initial={{ opacity: 0, x:100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="green-text font-semibold"><span className="font-semibold">SENECA ZAMBIA LIMITED</span></span> also serves the medium to heavy mining industrial construction and process industries.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x:100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              We specialize in:
            </motion.p>
            <div>
              <motion.p
                initial={{ opacity: 0, x:100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                • Supply of mining equipment
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                • Underground Loaders
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                • Mining Drill Bits
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                • 25kg - 2.5ton copper poly bags, valves and electicals
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                • Trackless equipment
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                • Trackless parts
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                • Trackless components (drifters, diffs, transmissions)
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                • Hydraulic Power Packs
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                • Conveyor Belts
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                • Conveyor Belt Liners
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                • Impact Liners
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                • Knife Gate Valves
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                • Butterfly Valves
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                • LHD Slick Tyres
              </motion.p>

              </div>
              
              <motion.div
                initial={{ opacity: 0, scale:0 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="green-text"><span className="font-semibold">And also</span></div>
                <p>• Rebuilds on all trackless equipment.</p>
                <p>• Implementing and managing Full maintenance packages - Planning and Management</p>
              </motion.div>
          </div>
        </div>
      </div>
      <div className="shape shape-10" />
    </div>
  )
}

export default OurServices