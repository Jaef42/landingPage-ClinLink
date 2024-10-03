import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SideBar } from '../../components/SideBar/SideBar';
import HORAS from '../../assets/HORAS.png';
import LOGO from '../../assets/LOGO.png';
import SEGURIDAD from '../../assets/SEGURIDAD.png';
import CITAS from '../../assets/CITAS.png';

export const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <div className="flex">
                <div>
                    <SideBar />
                </div>

                <div className="flex-1" style={{ marginLeft: '5.3rem', overflow: 'auto' }}>
                    <div className="text-center bg-white w-[102.5%] -ml-5 -mt-2">
                        <main>
                            <section className="relative mb-10">
                                <div className="relative flex w-full h-[75vh] bg-cover bg-center bg-no-repeat bg-gradient-to-t from-black/70 to-black/70" 
                                    style={{ 
                                    backgroundImage: "url(https://www.provincial.com/content/dam/public-web/venezuela/photos/marquees/card-prestamo-personal.im1604338031977im.jpg?imwidth=1600)", 
                                    filter: "brightness(0.2)" 
                                    }}>
                                </div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                                    <h2 className="text-4xl font-bold">Bienvenido a CLINCLINK</h2>
                                    <p>Ofrecemos servicios clínicos seguros y confiables para satisfacer tus necesidades de salud.</p>
                                </div>
                            </section>

                            {/* Servicios */}
                            <h2 className="text-5xl mb-12 text-[#5b7ce9] font-bold" id="servicios">SERVICIOS</h2>
                            <section className="flex justify-center mb-10">
                                <div className="flex-1 text-center p-5">
                                    <img className="mx-auto mb-5 rounded-xl max-w-xs" src={'https://magnetosur.com/wp-content/uploads/2021/11/Que-diferencias-existen-entre-la-medicina-general-y-la-medicina-interna.jpg'} alt="Servicios Financieros" />
                                    <h3 className="text-xl font-semibold">CONSULTAS MÉDICAS GENERALES</h3>
                                    <p>Evaluación y tratamiento de afecciones comunes por médicos de atención primaria.</p>
                                </div>
                                <div className="flex-1 text-center p-5">
                                    <img className="mx-auto mb-5 rounded-xl max-w-xs" src={'https://www.polizamedica.es/images/noticias/ramas-de-la-medicina-preventiva.jpg'} alt="Seguridad" />
                                    <h3 className="text-xl font-semibold">MEDICINA PREVENTIVA</h3>
                                    <p>Servicios enfocados en la prevención de enfermedades a través de chequeos regulares y educación en salud.</p>
                                </div>
                                <div className="flex-1 text-center p-5">
                                    <img className="mx-auto mb-5 rounded-xl max-w-xs" src={'https://medlineplus.gov/images/LaboratoryTests_share.jpg'} alt="Atención al Cliente" />
                                    <h3 className="text-xl font-semibold">EXÁMENES DE LABORATORIO</h3>
                                    <p>Pruebas diagnósticas para evaluar la salud, incluyendo análisis de sangre y muestras biológicas.</p>
                                </div>
                            </section>

                            {/* Otra sección de Servicios */}
                            <section className="flex justify-center mb-10">
                                <div className="flex-1 text-center p-5">
                                    <img className="mx-auto mb-5 rounded-xl max-w-xs" src={'https://principal.url.edu.gt/wp-content/uploads/2023/08/radio1_thumbns.jpg'} alt="Servicios Financieros" />
                                    <h3 className="text-xl font-semibold">RADIOLOGÍA Y ESTUDIOS DE IMAGEN</h3>
                                    <p>Uso de tecnologías como rayos X, tomografías y ultrasonidos para diagnóstico de condiciones internas.</p>
                                </div>
                                <div className="flex-1 text-center p-5">
                                    <img className="mx-auto mb-5 rounded-xl max-w-xs" src={'https://www.paho.org/sites/default/files/styles/max_1300x1300/public/card/2021-04/vaccination-efficacy-650-400.jpg?itok=DBUAd_L5'} alt="Seguridad" />
                                    <h3 className="text-xl font-semibold">VACUNACIÓN</h3>
                                    <p>Aplicación de vacunas para prevenir enfermedades infecciosas, siguiendo los calendarios de inmunización.</p>
                                </div>
                                <div className="flex-1 text-center p-5">
                                    <img className="mx-auto mb-5 rounded-xl max-w-xs" src={'https://www.altamed.org/sites/default/files/2023-09/hospital.jpg'} alt="Atención al Cliente" />
                                    <h3 className="text-xl font-semibold">ATENCIÓN DE URGENCIAS</h3>
                                    <p>Servicios médicos inmediatos para tratar lesiones y enfermedades agudas que requieren atención rápida.</p>
                                </div>
                            </section>

                            {/* Sobre Nosotros */}
                            <div className="py-20 bg-[#FCFBF9]">
                                <div className="max-w-5xl mx-auto flex">
                                    <div className="w-1/2 text-left pr-10">
                                        <h2 className="text-4xl font-bold mb-5 text-[#5b7ce9]" id='nosotros'>SOBRE NOSOTROS</h2>
                                        <p className="text-xl">En nuestra clínica, nos dedicamos a proporcionar atención médica de alta calidad, enfocándonos en la salud integral de nuestros pacientes. Contamos con un equipo de profesionales altamente capacitados en diversas especialidades médicas.</p>
                                    </div>
                                    <div className="w-1/2">
                                        <img className="max-w-sm mx-auto" src={LOGO} alt="Logo" />
                                    </div>
                                </div>
                            </div>

                            {/* Seguridad */}
                            <div className="py-20 bg-[#FCFBF9]">
                                <div className="max-w-5xl mx-auto flex">
                                    <div className="w-1/2 text-left pr-10">
                                        <h2 className="text-4xl font-bold mb-5 text-[#5b7ce9]" id='seguridad'>SEGURIDAD</h2>
                                        <p className="text-xl">En nuestra clínica, la seguridad y el bienestar de nuestros pacientes son nuestra máxima prioridad. Contamos con rigurosos protocolos de higiene y control de infecciones.</p>
                                    </div>
                                    <div className="w-1/2">
                                        <img className="max-w-sm mx-auto" src={SEGURIDAD} alt="Seguridad" />
                                    </div>
                                </div>
                            </div>

                            {/* Citas Online */}
                            <div className="py-20 bg-[#5b7ce9] text-white">
                                <div className="max-w-5xl mx-auto flex">
                                    <div className="w-1/2">
                                        <h2 className="text-4xl font-bold mb-5">AGENDA TUS CITAS EN LÍNEA</h2>
                                        <p className="text-xl">En nuestra clínica, facilitamos tu acceso a la atención médica mediante nuestro sistema de citas en línea.</p>
                                    </div>
                                    <div className="w-1/2">
                                        <img className="max-w-sm mx-auto" src={CITAS} alt="Citas" />
                                    </div>
                                </div>
                            </div>

                            {/* Disponibilidad */}
                            <div className="py-20 bg-white">
                                <div className="max-w-5xl mx-auto flex">
                                    <div className="w-1/2">
                                        <h2 className="text-4xl font-bold mb-5 text-[#5b7ce9]">DISPONIBILIDAD 24/7</h2>
                                        <p className="text-xl">Puedes acceder a nuestro sistema de citas en línea las 24 horas del día, los 7 días de la semana.</p>
                                    </div>
                                    <div className="w-1/2">
                                        <img className="max-w-sm mx-auto" src={HORAS} alt="Horas" />
                                    </div>
                                </div>
                            </div>

                        </main>
                        <footer className="py-5 bg-[#5b7ce9] text-center text-white">
                            <p>&copy; {new Date().getFullYear()} ClincLink. Todos los derechos reservados.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
};
