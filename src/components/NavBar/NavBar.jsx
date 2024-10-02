import React from 'react'
import { Link } from 'react-router-dom'
 
export const NavBar = () => {
    return (
        <>

            <header id="header" className="header d-flex align-items-center">

                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="./index.html" className="logo d-flex align-items-center">
                        {/*  <!-- Uncomment the line below if you also wish to use an image logo -->
                        <!-- <img src="assets/img/logo.png" alt=""> --> */}
                        <h1>ClincLink<span>.</span></h1>
                    </a>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="#">Home</a></li>
                            {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="#">IniciarSecion</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li> */}
                            <li>
                                <Link to='/loginPage'>Inicar Sesion</Link>
                            </li>
                            <li>
                                <Link to='/userPage'>Users</Link>
                            </li>
                        </ul>
                    </nav>{/* <!-- .navbar --> */}

                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
            </header>{/* <!--End Header-- > */}
            {/*  < !--End Header-- > */}

        </>
    )
}
