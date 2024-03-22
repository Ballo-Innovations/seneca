'use client'

// Import Libraries
import { motion } from "framer-motion"

// Import Assets
import './team.css'
import fabric from '@/public/images/background/curvy-silk.jpg'
import Image from "next/image"
import mudenda from '@/public/images/team/person (1).jpeg'
import Sumehn from '@/public/images/team/person (2).jpeg'
import Ash from '@/public/images/team/person (3).jpeg'
import Reece  from '@/public/images/team/person (4).jpeg'

const Team = () => {
  return (
    <div id='team' className='nav-padding flex justify-center flex-col' style={{ backgroundImage: `url(${fabric.src})` }}>
      <div className="relative w-fit mx-10 lg:mx-32 my-10">
        <motion.div 
          initial={{ opacity: 0, x:-100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="shape shape-11" 
        />
        <motion.h1
          initial={{ opacity: 0, y:-50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="main-heading"
        >
          OUR <br/> EXECUTIVE <br/> TEAM
        </motion.h1>
      </div>
      <motion.div
        className="team-container mt-10 mb-20 py-10 relative"
        initial={{ opacity: 0, y:50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="team-content">
          <div className="shape shape-12" />
          <div className='row'>
            <div className='team-member relative col-4'>
              <Image
                src={Ash}
                alt="Ash Sewraj"
                quality={100}
              />
              <div className="team-shape" />
              <p className='name'>Ash Sewraj</p>
              <p>Group Chairman, South Africa/Zambia</p>
            </div>
            <span className='col-3' />
            <div className='team-member relative col-4'>
                <Image
                  src={mudenda}
                  alt="Maybin Mudenda"
                  quality={100}
                />
              <div className="team-shape team-shape-2" />
              <p className='name'>Maybin Mudenda</p>
              <p>CEO, Zambia</p>
            </div>
          </div>

          <div className='row'>
            <div className='team-member relative col-4'>
              <Image
                src={Sumehn}
                alt="Sumehn Sewraj"
                quality={100}
              />
              <div className="team-shape team-shape-2" />
              <p className='name'>Sumehn Sewraj</p>
              <p>CEO, South Africa</p>
            </div>
            <span className='col-3' />
            <div className='team-member relative col-4'>
              <Image
                src={Reece}
                alt="Reece Currin"
                quality={100}
              />
              <div className="team-shape team-shape-3" />
              <p className='name'>Reece Currin</p>
              <p>Executive Director, South Africa/Zambia</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Team