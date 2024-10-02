import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SideBar } from '../../components/SideBar/SideBar';
import './HomePage.css';
import HORAS from '../../assets/HORAS.png';
import LOGO from '../../assets/LOGO.png';
import SEGURIDAD from '../../assets/SEGURIDAD.png';
import CITAS from '../../assets/CITAS.png';

export const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        // Verifica si la URL contiene el hash y desplaza hacia el elemento correspondiente
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1)); // Eliminar '#' del hash
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <div className="contenido-general">
                <div>
                    <SideBar />
                </div>

                <div className="contenido">
                    <div className="home-page">
                        <main className="main-content">
                            <section className="hero-section">
                                <div className="hero-image-container">
                                </div>
                                <div className="hero-content">
                                    <h2><strong></strong>Bienvenido a CLINCLINK</h2>
                                    <p>Ofrecemos servicios clínicos seguros y confiables para satisfacer tus necesidades de salud.</p>
                                </div>
                            </section>

                            {/* Encabezado "Servicios" agregado aquí */}
                            <h2 className="section-heading1" id='servicios'><strong>SERVICIOS</strong></h2>
                            <section className="features-section">
                                <div className="feature">
                                    <img src={'https://magnetosur.com/wp-content/uploads/2021/11/Que-diferencias-existen-entre-la-medicina-general-y-la-medicina-interna.jpg'} alt="Servicios Financieros" />
                                    <h3>CONSULTAS MÉDICAS GENERALES</h3>
                                    <p>Evaluación y tratamiento de afecciones comunes por médicos de atención primaria.</p>
                                </div>
                                <div className="feature">
                                    <img src={'https://www.polizamedica.es/images/noticias/ramas-de-la-medicina-preventiva.jpg'} alt="Seguridad" />
                                    <h3>MEDICINA PREVENTIVA</h3>
                                    <p>Servicios enfocados en la prevención de enfermedades a través de chequeos regulares y educación en salud.</p>
                                </div>
                                <div className="feature">
                                    <img src={'https://medlineplus.gov/images/LaboratoryTests_share.jpg'} alt="Atención al Cliente" />
                                    <h3>EXÁMENES DE LABORATORIO</h3>
                                    <p>Pruebas diagnósticas para evaluar la salud, incluyendo análisis de sangre y muestras biológicas.</p>
                                </div>
                            </section>

                            <section className="features-section">
                                <div className="feature">
                                    <img src={'https://principal.url.edu.gt/wp-content/uploads/2023/08/radio1_thumbns.jpg'} alt="Servicios Financieros" />
                                    <h3>RADIOLOGÍA Y ESTUDIOS DE IMAGEN</h3>
                                    <p>Uso de tecnologías como rayos X, tomografías y ultrasonidos para diagnóstico de condiciones internas.</p>
                                </div>
                                <div className="feature">
                                    <img src={'https://www.paho.org/sites/default/files/styles/max_1300x1300/public/card/2021-04/vaccination-efficacy-650-400.jpg?itok=DBUAd_L5'} alt="Seguridad" />
                                    <h3>VACUNACIÓN</h3>
                                    <p>Aplicación de vacunas para prevenir enfermedades infecciosas, siguiendo los calendarios de inmunización.</p>
                                </div>
                                <div className="feature">
                                    <img src={'https://www.altamed.org/sites/default/files/2023-09/hospital.jpg'} alt="Atención al Cliente" />
                                    <h3>ATENCIÓN DE URGENCIAS</h3>
                                    <p>Servicios médicos inmediatos para tratar lesiones y enfermedades agudas que requieren atención rápida.</p>
                                </div>
                            </section>

                            <div className="content-section-a">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
                                            <div className="clearfix"></div>
                                            <h2 className="section-heading" id='nosotros'><strong>SOBRE NOSOTROS</strong></h2>
                                            <hr className="section-heading-spacer"></hr>
                                            <div className="clearfix"></div>
                                            <p className="lead">
                                                En nuestra clínica, nos dedicamos a proporcionar atención médica de alta calidad, enfocándonos en la salud integral de nuestros pacientes. Contamos con un equipo de profesionales altamente capacitados en diversas especialidades médicas, comprometidos con ofrecer un trato humano y personalizado.
                                            </p>
                                        </div>
                                        <div className="col-lg-5 col-sm-pull-6 col-sm-6">
                                            <img className="img-responsive" src={LOGO} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="content-section-a">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6">
                                            <div className="clearfix"></div>
                                            <h2 className="section-heading"><strong>SEGURIDAD</strong></h2>
                                            <hr className="section-heading-spacer"></hr>
                                            <div className="clearfix"></div>
                                            <p className="lead">En nuestra clínica, la seguridad y el bienestar de nuestros pacientes son nuestra máxima prioridad. Contamos con rigurosos protocolos de higiene y control de infecciones, asegurando un entorno limpio y seguro para todos.</p>
                                        </div>
                                        <div className="col-lg-5 col-sm-pull-6 col-sm-6">
                                            <img className="img-responsive" src={SEGURIDAD} alt="" />
                                            <img className="img-responsive" src="https://www.simple.com/assets/images/simple-kit.png" id="responsive" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="content-section-d">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-5 col-sm-6">
                                            <h2 className="section-heading-white"><strong>AGENDA TUS CITAS EN LÍNEA</strong></h2>
                                            <hr className="section-heading-spacer-white" />
                                            <div className="clearfix"></div>
                                            <p className="lead-white">En nuestra clínica, facilitamos tu acceso a la atención médica mediante nuestro sistema de citas en línea. Ahora puedes programar tu consulta de manera rápida y sencilla desde la comodidad de tu hogar, a cualquier hora del día.</p>
                                        </div>
                                        <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                                            <img className="img-responsive2" src={CITAS} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-section-b">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-5 col-sm-6">
                                            <h2 className="section-heading"><strong>DISPONIBILIDAD 24/7</strong></h2>
                                            <hr className="section-heading-spacer"></hr>
                                            <div className="clearfix"></div>
                                            <p>Puedes acceder a nuestro sistema de citas en línea las 24 horas del día, los 7 días de la semana, para agendar tu consulta en el momento que más te convenga.</p>
                                        </div>
                                        <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                                            <img className="img-responsive3" src={HORAS} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </main>
                        <footer className="footer">
                            <p>&copy; {new Date().getFullYear()} ClincLink. Todos los derechos reservados.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
};
