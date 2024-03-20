'use client'

// Import Libraries
import { motion } from "framer-motion"
import Image from 'next/image'

// Import Assets
import services_img from '@/public/images/services/seneca picture.png'
import fabric from '@/public/images/background/curvy-silk.jpg'
import './warehousing.css'

const OurServices = () => {
  return (
    <div id='our-services' className='nav-padding border-b relative' style={{ backgroundImage: `url(${fabric.src})` }}>
      <div className="flex pt-10" id="warehousing-container">
        <div className="px-10 col-12 col-md-6 pb-20 pt-10 relative">
          <div className="shape moile-shape-10" />
          <div className="relative w-fit mb-10">
            <motion.div
              initial={{ opacity: 0, x:-50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="shape shape-9"
            />
            <motion.h1
              initial={{ opacity: 0, y:100 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="main-heading text-right"
            >
              OUR BONDED WAREHOUSING
            </motion.h1>
          </div>
          <div className='font-light px-3 px-md-5'>
            <motion.p
              initial={{ opacity: 0, x:100 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="font-semibold"
            >
              At our Bonded Warehouses in South Africa and Zambia, you are assured to get:
            </motion.p>
            <div>
              <motion.p
                initial={{ opacity: 0, x:-100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                • Diverse storage solutions
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:-100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              >
                • Custom compliance
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:-100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
              >
                • Great location & external accessibility
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:-100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                • Modern infrastructure
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x:-100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 1.2 }}
                viewport={{ once: true }}
              >
                • Value - added service
              </motion.p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y:-100 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="col-12 col-md-6 md:pl-10 flex justify-center">
          <Image
            src={services_img}
            alt="Tractor "
            quality={100}
            className="cover-img services-img"
          />
        </motion.div>
      </div>
      <div className="shape shape-10" />
    </div>
  )
}

export default OurServices