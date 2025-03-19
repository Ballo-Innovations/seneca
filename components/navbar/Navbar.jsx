'use client'

import Image from 'next/image'
import Link from 'next/link'
import './nav.css'
import logo from '@/public/images/logo/logo-white-2.png'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Scrolled page logic
  useEffect(() => {
    const onScroll = () => {
      const positionY = window.scrollY;
        if (positionY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
  }, []);

  // Function to toggle menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='flex justify-center items-center w-screen fixed top-1 md:top-3 pl-2 pr-2 md:pl-5 md:pr-10 left-0 z-50'>    
      <nav id='navbar' className={`flex w-full justify-between items-center flex-col flex-lg-row rounded-lg md:rounded-full ${(scrolled || showMenu) ? 'bg-black' : 'bg-black'}`}>
        <div className='logo-container flex justify-between items-center'>
          <Link href="/" className='flex w-fit no-underline'>
            {/* <Image
              src={logo}
              alt="Logo"
              quality={100}
              className="logo"
            /> */}

            <div className="text-white p-2 text-[0.3rem] no-underline flex items-center justify-center">
              <span className='text'>S</span>
              <span className='text'>E</span>
              <span className='text'>N</span>
              <span className='text'>E</span>
              <div className="loader-container">
                <div className="loader hero-loader"></div>
                <span className='loader-text'>C</span>
              </div>
              <span className='text'>A</span>
            </div>
          </Link>

          <button className="d-flex d-lg-none" onClick={toggleMenu}>
            {!showMenu && (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="white" d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"></path></g></svg>)}
            { showMenu && (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="white" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"></path></g></svg>)}
          </button>  
        </div>

        <div className={`nav-links mx-10 ${showMenu ? 'openMenu' : 'closedMenu'}`}>
          <ul id="main-menu" className="nav-menu flex m-0 items-center gap-9">
            <li className={`nav-item ${pathname === '/' ?  'active': ''}`}>
              <Link href="/" className="nav-link" onClick={() => setShowMenu(false)}>Home</Link>
            </li>

            <li className={`nav-item ${pathname === '/about-us' ?  'active': ''}`}>
              <Link href="/about-us" className="nav-link" onClick={() => setShowMenu(false)}>About Us</Link>
            </li>

            <li className={`nav-item ${pathname === '/warehousing' ?  'active': ''}`}>
              <Link href="/warehousing" className="nav-link" onClick={() => setShowMenu(false)}>Warehousing</Link>
            </li>

            {/* <li className={`nav-item ${pathname === '/team' ?  'active': ''}`}>
              <Link href="/team" className="nav-link" onClick={() => setShowMenu(false)}>Our Team</Link>
            </li> */}

            <li className={`nav-item ${pathname === '/get-in-touch' ?  'active': ''}`}>
              <Link href="/get-in-touch" className="nav-link" onClick={() => setShowMenu(false)}>Get in Touch</Link>
            </li>
          </ul>
          </div> 
      </nav>
    </header>
  )
}

export default Navbar;