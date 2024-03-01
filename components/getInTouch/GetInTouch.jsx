import Image from "next/image"
import logo from '@/public/images/logo/logo-white.png'
import map from '@/public/images/icons/map_img.png'
import './getInTouch.css'
import Link from "next/link"


const GetInTouch = () => {
  return (
    <div id="get-in-touch" className="relative background-cover-center" style={{ backgroundImage: `url(${map.src})` }}>
      <div className="get-in-touch-overlay" />
      <div className="container nav-padding relative pb-36" style={{ zIndex: '2' }}>
        <div className="row">
          <div className="col-lg-8 mb-30">
            <div className="footer-widget">
              <div className="footer-logo">
                <Image
                  src={logo}
                  alt="Tractor "
                  quality={100}
                  className="get-in-touch-logo"
                />
              </div>
              <p className="mb-30 font-light"><strong>SENECA ZAMBIA LIMITED</strong> is a logistics and warehousing company that provides sourcing, logistics & trading services. With a speciality in agricultural commodities, mining and industrial usage(s), we strive to bring the highest quality products for consumers in partnership with some of the world's most successful and sophisticated retailers, wholesellers, importers, packagers, canners, brokers, growers & logistics companies.</p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 mb-30">
            <div className="footer-widget mb-0">
              <h4>Quick Links</h4>
              <div className="line-footer"></div>
              <div className="row">
                <div className="col-12">
                  <ul className="footer-link mb-0">
                    <li>
                      <Link href="/" className="flex items-center">
                        <span className="pr-1"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 1024 1024"><path fill="white" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"></path></svg></span>
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>
                    <Link href="/about-us" className="flex items-center">
                        <span className="pr-1"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 1024 1024"><path fill="white" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"></path></svg></span>
                        <span>About Us</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-services" className="flex items-center">
                        <span className="pr-1"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 1024 1024"><path fill="white" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"></path></svg></span>
                        <span>Our Services</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch