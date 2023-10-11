import styles from './navbar.module.css'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'


export default function Navbar () {
    return (
        <>  
            <section className={styles.navbar}>
                <header className={styles.header}>
                    <nav className={styles.nav}>
                        <ul>
                            <li>
                            <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500}
                            offset={-50} // Ajuste este valor conforme necessário
                                >home</ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="about" smooth={true} duration={500}>
                                    sobre
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="services" smooth={true} duration={500}>
                                    serviços
                                </ScrollLink>
                            </li>
                            <li>
                                <Image src="/images/logo.png" width={200} height={200} alt="Barber Shop" className={styles.logo}/>
                            </li>
                            <li>
                                <ScrollLink to="appointment" smooth={true} duration={500}>
                                    agendamento
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="gallery" smooth={true} duration={500}>
                                    galeria
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="location" smooth={true} duration={500}>
                                    localização
                                </ScrollLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                    <nav>
                        <ul className={styles.menuM}>
                                <ul className={styles.menuH}><a href="#">☰</a>   
                                        <ul className={styles.submenuM}>
                                        <li>
                                                <ScrollLink to="home" smooth={true} duration={500}>
                                                    home
                                                </ScrollLink>
                                             </li>
                                            <li>
                                                <ScrollLink to="about" smooth={true} duration={500}>
                                                    sobre
                                                </ScrollLink>
                                             </li>
                                             <li>
                                                <ScrollLink to="services" smooth={true} duration={500}>
                                                    serviços
                                                </ScrollLink>
                                            </li>
        
                                            <li>
                                                <ScrollLink to="appointment" smooth={true} duration={500}>
                                                    agendamento
                                                </ScrollLink>
                                            </li>
                                            <li>
                                                <ScrollLink to="gallery" smooth={true} duration={500}>
                                                    galeria
                                                </ScrollLink>
                                            </li>
                                            <li>
                                                <ScrollLink to="location" smooth={true} duration={500}>
                                                    localização
                                                </ScrollLink>
                                            </li>
                                        </ul>
                                </ul> 
                            </ul>        
                    </nav>
                
            </section>
        </> 
    )
}