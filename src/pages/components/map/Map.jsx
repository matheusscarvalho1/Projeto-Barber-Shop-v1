import Map from '../iframe/iframe'
import styles from './map.module.css'
import Image from 'next/image'





export default function Mapa() {
    return (
            <>
            <section id="location" className={styles.location}>
                <div className={styles.container}>
                    <div className={styles.head}>
                        <div className={styles.info}>
                        <div className={styles.icon}>
                                <Image src="/images/map-img1.png" width={14} height={18} className={styles.iconImg} alt="Localização"/>
                            </div>
                            <div className={styles.text}>
                                <span>Localização</span>
                                <span>Rua Matrix, 152</span>
                            </div>
                            </div>

                            <div className={styles.info}>
                            <div className={styles.icon}>
                                    <Image src="/images/map-img2.png" width={12} height={18} className={styles.iconImg} alt="Telefone"/>
                                </div>
                                <div className={styles.text}>
                                    <span>Telefone</span>
                                    <span>(65) 99999-9999</span>
                                </div>
                                </div>

                                <div className={styles.info}>
                                <div className={styles.icon}>
                                        <Image src="/images/map-img3.png" width={16} height={14} className={styles.iconImg} alt="Email"/>
                                    </div>
                                    <div className={styles.text}>
                                        <span>E-mail</span>
                                        <span>cantato@barbershop.com</span>
                                    </div>
                                    </div>


                                    <div className={styles.info}>
                                    <div className={styles.icon}>
                                            <Image src="/images/map-img4.png" width={16} height={16} className={styles.iconImg} alt="Horário"/>
                                        </div>
                                        <div className={styles.text}>
                                            <span>Horário</span>
                                            <span>Seg. à Sex: 9AM às 17PM</span>
                                        </div>
                                        </div>
                        </div>
                        <div>

                        <Map />

                        </div>
                    </div>
        
            </section>

            <footer className={styles.footer}>
                © 2023 Barber Shop - Todos os direitos reservados
                    <p>Developed by Matheus Carvalho</p>
            </footer>
        
        </>

    )
}