import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navbar = () => {
    return (
        <div className='pb-5'>
            <nav className="navbar navbar-expand-lg bg-light fixed-top mb-5 shadow">
                <div class="container">
                    <Link class="navbar-brand d-flex align-item-center" activeClass="active" to="banner" spy={true} smooth={true} offset={50} duration={500}>
                        <img src="logo.png" className='pt-2 pb-2' alt="Bootstrap" width="250" />
                        {/* <h1 style={{color:'#0c58a5', fontFamily:'Montserrat, sans-serif',fontSize:'24px',fontWeight:'800' ,margin:'0',padding:'0'}}>CLOUD <span className='text-warning' style={{color:'#ffb700'}}>360</span><br/><span style={{fontWeight:'600',fontSize:'22px'}}>Services Ltd.</span></h1> */}
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link className='nav-link me-3' activeClass="active" to="service" spy={true} smooth={true} offset={50} duration={500}>
                                    Service
                                </Link>

                            </li>
                            <li class="nav-item">
                            <Link className='nav-link me-3' activeClass="active" to="company" spy={true} smooth={true} offset={50} duration={500}>
                                    Company
                                </Link>
                            </li>
                            <li class="nav-item">
                            <Link  className='nav-link me-3' activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                                    Contact Us
                                </Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;