import React from 'react'
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../img/Chasm.ink_logo_wh.png"
import "../css/navbar.css"



function Navbar() {
    const navRef = useRef();
    
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }


    return(
    <header className='mx-5 header_sun'>
        <div className="nav-logo-container animate__animated animate__fadeInLeft animate__delay-0.5s animate__slow">
            <img className="nav-logo" src={Logo} alt="" />
        </div>
        <div className="d-flex d-flex_al-it-center">
            <nav ref={navRef} className="navbar-links-container d-flex d-flex_al-it-center">
                <a href="#AboutmeBlock" onClick={showNavbar}>Обо мне</a>            
                <a href="#WorkBlock" onClick={showNavbar}>Работы</a>
                <a href="#PriceBlock" onClick={showNavbar}>Услуги</a>
                <a href="#ContactsBlock" onClick={showNavbar}>Контакты</a>

                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes></FaTimes>
                </button>  
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars></FaBars>
            </button>
        </div>
    </header>
      )
}

export default Navbar;
    





