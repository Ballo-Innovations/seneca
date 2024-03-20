'use client'
// Import Libraries
import { motion } from "framer-motion"

// Import Assets
import './footer.css';
import footer_bg from '@/public/images/background/footer-bg.jpg'

const Footer = () => {
  return (
    <footer id="contact" className="pt-20 lg:pt-32 bg-black" style={{ backgroundImage: `url(${footer_bg.src})` }}>
      <div className="px-32">
        <div className="row row-contact">
            <div className="col-lg-4 col-sm-6 no-padding">
              <div className="flex gap-4 pb-4 lg:pb-0">
                <span className="flaticon-call"></span>

                <motion.div
                  initial={{ scale: 0.8 }} 
                  whileInView={{scale: 1 }} 
                  transition={{ duration: 0.5 }} 
                  viewport={{ once: true }}
                >
                  <p>+260 (211) 377 822/23</p>
                  <p>+260 (966) 193 449</p>
                  <p>+270 (837) 776 941</p>
                </motion.div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 no-padding">
              <div className="flex gap-4 pb-4 lg:pb-0">
                  <span className="flaticon-email"></span>

                  <motion.div
                    initial={{ scale: 0.8 }} 
                    whileInView={{scale: 1 }} 
                    transition={{ duration: 0.5 }} 
                    viewport={{ once: true }}
                  >
                    <p>info@senecazambia.com</p>
                    <p>madiba@senecazambia.com</p>
                  </motion.div>
              </div>

            </div>


            <div className="col-lg-4 col-sm-12 no-padding">
              <div className="flex gap-4 pb-4 lg:pb-0">
                <span className="flaticon-location"></span>
                
                <motion.div
                  initial={{ scale: 0.8 }} 
                  whileInView={{scale: 1 }} 
                  transition={{ duration: 0.5 }} 
                  viewport={{ once: true }}
                  className="adresses"
                >
                  <p>Plot 5481, Libala road, Kalundu Lusaka, Zambia</p>
                  <p>AS05, Grosvenor Square, Park Lane, Centure City, Cape Town, South Africa</p>
                  <p>14 Wrench Road, Isando, Gauteng, South Africa</p>
                  <p>262 Aberdare Drive, Phoenix Industrial Park, Kwa-Zulu Natal, South Africa</p>
                </motion.div>
              </div>
            </div>
        </div>
      </div>

      <div className="footer-bar">
        <div className="footer-copy">
          <div className="row">
            <div className="footer-items gap-1">
              <div className="px-1 text-sm">
                <span className="font-extralight">Designed & created by</span> <a className="text-white font-bold" href="https://balloinnovations.com/">Ballo Innovations</a>
              </div>
              <div className="px-1 text-sm font-extralight">
                &copy; 2024 SENECA COMMODITIES. All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer