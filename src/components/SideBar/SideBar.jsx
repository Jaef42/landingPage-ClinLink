import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NombreContexto } from '../../Index'
import { HashLink } from 'react-router-hash-link';
import a from '../../assets/A.png'
import './sideBar.css'

export const SideBar = () => {

    const { loggedIn, setLoggedIn, dataUser, setDataUser } = useContext(NombreContexto);
    const handleRegisterClick = () => {
        window.open("https://clin-link-system.vercel.app/register", "_blank");
    };
    const handleLoginClick = () => {
        window.open("https://clin-link-system.vercel.app/", "_blank");
    }

    return (
        <>
            <div /* className='side-bar' */>
                <nav className='nav-side'>
                    <ul>
                        <li className='logo'>
                            <HashLink to='/' className='link'>
                                <img src={a} alt="" />
                                <span className='title'>ClincLink</span>
                            </HashLink>
                        </li>

                        <li className='li'>
                            <HashLink to='/#nosotros' className='link'>
                                <svg className="fas" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 26 26">
                                    <g fill="none">
                                        <defs>
                                            <mask id="pepiconsPopPersonsCircleFilled0">
                                                <path fill="#fff" d="M0 0h26v26H0z" />
                                                <g fill="#000" fill-rule="evenodd" clip-rule="evenodd">
                                                    <path d="M7.236 13.055a4.95 4.95 0 0 0-.832 2.748v.697a1 1 0 0 1-2 0v-.697c0-1.373.406-2.715 1.168-3.858zM9.207 12c-.792 0-1.532.396-1.971 1.055l-1.664-1.11A4.37 4.37 0 0 1 9.207 10h.197a1 1 0 0 1 0 2zm2.211 1.055c.543.813.832 1.77.832 2.748v.697a1 1 0 0 0 2 0v-.697a6.96 6.96 0 0 0-1.168-3.858z" />
                                                    <path d="M9.447 12c.792 0 1.532.396 1.971 1.055l1.664-1.11A4.37 4.37 0 0 0 9.447 10H9.25a1 1 0 0 0 0 2z" />
                                                    <path d="M9.25 9.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 2a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5m5.236 5.055a4.95 4.95 0 0 0-.832 2.748v.697a1 1 0 0 1-2 0v-.697c0-1.373.406-2.715 1.168-3.858zm1.971-1.055c-.792 0-1.532.396-1.971 1.055l-1.664-1.11a4.37 4.37 0 0 1 3.635-1.945h.197a1 1 0 0 1 0 2zm2.211 1.055c.543.813.832 1.77.832 2.748v.697a1 1 0 0 0 2 0v-.697a6.96 6.96 0 0 0-1.168-3.858z" />
                                                    <path d="M16.697 15.25c.792 0 1.532.396 1.971 1.055l1.664-1.11a4.37 4.37 0 0 0-3.635-1.945H16.5a1 1 0 1 0 0 2z" />
                                                    <path d="M16.5 12.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 2a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5" />
                                                </g>
                                            </mask>
                                        </defs>
                                        <circle cx="13" cy="13" r="13" fill="#5b7ce9" mask="url(#pepiconsPopPersonsCircleFilled0)" />
                                    </g>
                                </svg>
                                <span className='nav-item'>Sobre Nosotros</span>
                            </HashLink>
                        </li>

                        <li className='li'>
                            <HashLink to='/#servicios' className='link'>
                                <svg className="fas" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                                    <path fill="#5b7ce9" d="M4 22q-.825 0-1.412-.587T2 20V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v12q0 .825-.587 1.413T20 22zm6-16h4V4h-4zm1 9v3h2v-3h3v-2h-3v-3h-2v3H8v2z" />
                                </svg>
                                <span className='nav-item'>Servicios</span>
                            </HashLink>
                        </li>
                        <div class="button-container">
                            <li className='li'>
                                <button onClick={handleRegisterClick} className='button-link'/*  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} */>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                                        <path fill="#5b7ce9" d="M15 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 1.9a2.1 2.1 0 1 1 0 4.2A2.1 2.1 0 0 1 12.9 8A2.1 2.1 0 0 1 15 5.9M4 7v3H1v2h3v3h2v-3h3v-2H6V7zm11 6c-2.67 0-8 1.33-8 4v3h16v-3c0-2.67-5.33-4-8-4m0 1.9c2.97 0 6.1 1.46 6.1 2.1v1.1H8.9V17c0-.64 3.1-2.1 6.1-2.1" />
                                    </svg>
                                    <span className='nav-item'>Regístrate</span>
                                </button>
                            </li>

                            <li className='li'>
                                <button onClick={handleLoginClick} className='button-link' /* style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} */>
                                    <svg className="fas" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
                                        <path fill="#5b7ce9" fill-rule="evenodd" d="M3.5 9.568v4.864c0 2.294 0 3.44.722 4.153c.655.647 1.674.706 3.596.712l-.015-.105c-.115-.844-.115-1.916-.115-3.247v-.053c0-.403.331-.73.74-.73c.408 0 .739.327.739.73c0 1.396.001 2.37.101 3.105c.098.714.275 1.093.548 1.362s.656.445 1.379.54c.744.1 1.731.101 3.146.101h.985c1.415 0 2.401-.002 3.146-.1c.723-.096 1.106-.272 1.378-.541c.273-.27.451-.648.548-1.362c.1-.734.102-1.709.102-3.105V8.108c0-1.397-.002-2.37-.102-3.105c-.097-.714-.275-1.093-.547-1.362c-.273-.27-.656-.445-1.38-.54C17.728 3 16.742 3 15.327 3h-.985c-1.415 0-2.402.002-3.146.1c-.723.096-1.106.272-1.379.541c-.273.27-.45.648-.548 1.362c-.1.734-.101 1.708-.101 3.105c0 .403-.331.73-.74.73a.734.734 0 0 1-.739-.73v-.053c0-1.33 0-2.403.115-3.247l.015-.105c-1.922.006-2.94.065-3.596.712c-.722.713-.722 1.86-.722 4.153m9.885 5.38l2.464-2.432a.723.723 0 0 0 0-1.032l-2.464-2.432a.746.746 0 0 0-1.045 0a.723.723 0 0 0 0 1.032l1.202 1.186H6.457a.734.734 0 0 0-.74.73c0 .403.331.73.74.73h7.085l-1.202 1.186a.723.723 0 0 0 0 1.032a.746.746 0 0 0 1.045 0" clip-rule="evenodd" />
                                    </svg>
                                    <span className='nav-item'>Iniciar Sesión</span>
                                </button>
                            </li>
                        </div>

                    </ul>
                </nav>
            </div>
        </>
    )
}
