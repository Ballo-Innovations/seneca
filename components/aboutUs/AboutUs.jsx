import about_img from '@/public/images/about/about-img.png'
import fabric from '@/public/images/background/curvy-silk.jpg'
import Image from 'next/image';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div id='about-us' className="nav-padding border-b relative" style={{ backgroundImage: `url(${fabric.src})` }}>
      <div className="flex flex-col-reverse flex-lg-row pb-32">
        <div className="mt-5 mt-lg-0 col-12 col-md-6 md:pr-24">
          <Image
            src={about_img}
            alt="Tractor "
            quality={100}
            className="cover-img about-img"
          />
        </div>
        <div className="container about-text-container col-12 col-md-6 py-20 font-light">
          <div className="relative w-fit mb-10">
            <div className="shape shape-7" />
            <h1 className="main-heading">ABOUT US</h1>
          </div>
          <p className='font-normal'><span className="green-text font-semibold"><span className="font-semibold">SENECA ZAMBIA LIMITED</span></span> is a logistics and warehousing company that provides sourcing, logistics & trading services. With a speciality in agricultural commodities, mining, and industrial usage(s), we strive to provide the highest quality products for consumers in partnership with some of the world&apos;s most successful and sophisticated retailers, wholesalers, importers, packagers, canners, brokers, growers & logisticscompanies.</p>
          <br />
          <p>Our vast experience in commodities trading has helped us forge alliances within the value chain with key stakeholders like <strong>DSC Logistics</strong> that are highly respected for their outstanding performance and operation processes - from due diligence through to management of business plan execution and investment realization.</p>
          <br />
          <p>As a trusted partner, we take pride in building lasting relationships with our valued customers and driving their growth and success in this ever-evolving industry.</p>
        </div>
      </div>
      <div className="shape shape-8" />
    </div>
  )
}

export default AboutUs;
