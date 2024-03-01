import Image from 'next/image'
import services_img from '@/public/images/services/Services-img.png'
import fabric from '@/public/images/background/curvy-silk.jpg'
import './ourServices.css'

const OurServices = () => {
  return (
    <div id='our-services' className='nav-padding pb-20 border-b relative' style={{ backgroundImage: `url(${fabric.src})` }}>
      <div className="flex flex-col-reverse flex-lg-row pt-10">
        <div className="col-12 col-md-6 md:pr-10 flex justify-center pt-16">
          <Image
            src={services_img}
            alt="Tractor "
            quality={100}
            className="cover-img services-img"
          />
        </div>
        <div className="container col-12 col-md-6">
          <div className="relative w-fit mb-10">
            <div className="shape shape-9" />
            <h1 className="main-heading">OUR SERVICES</h1>
          </div>
          <div className='font-light'>
            <p><span className="green-text font-semibold"><span className="font-semibold">SENECA ZAMBIA LIMITED</span></span> also serves the medium to heavy mining industrial construction and process industries.</p>
            <p>We specialize in:</p>
            <div>
                <p>• Supply of mining equipment</p>
                <p>• Underground Loaders</p>
                <p>• Mining Drill Bits</p>
                <p>• 25kg - 2.5ton copper poly bags, valves and electicals</p>
                <p>• Trackless equipment</p>
                <p>• Trackless parts</p>
                <p>• Trackless components (drifters, diffs, transmissions)</p>
                <p>• Hydraulic Power Packs</p>
                <p>• Conveyor Belts</p>
                <p>• Conveyor Belt Liners</p>
                <p>• Impact Liners</p>
                <p>• Knife Gate Valves</p>
                <p>• Butterfly Valves</p>
                <p>• LHD Slick Tyres</p>
              </div>
              
              <div>
                <div className="green-text"><span className="font-semibold">And also</span></div>
                <p>• Rebuilds on all trackless equipment.</p>
                <p>• Implementing and managing Full maintenance packages - Planning and Management</p>
            </div>
          </div>
        </div>
      </div>
      <div className="shape shape-10" />
    </div>
  )
}

export default OurServices