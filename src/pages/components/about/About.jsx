import styles from './about.module.css'
import Image from 'next/image'




export default function About () {

    return (
        <>
            <section id="about" className={styles.about}>
                <div className={styles.container}>
                    <div className={styles.timing}>
                        <div className={styles.overlay}>
                            <Image src="/images/classic-cut.png" width={82} height={90} alt="Horários" className={styles.iconcut}/>
                            <h3>Horários</h3>
                                <div className={styles.text}>
                                    <h4> Segunda à Sexta </h4>
                                    <span>09:00 AM - 17:00 PM</span>
                                </div>
                                <div className={styles.text}>
                                    <h4> Sábado </h4>
                                    <span>09:00 AM - 14:00 PM</span>
                                </div>
                                <div className={styles.text}>
                                    <h4> Domingo </h4>
                                    <span>Fechado</span>
                                </div>
                                <br/>
                            <Image className={styles.imgR} src="/images/loc-ic.png" width={20} height={30} alt="Localização" />
                            <span className={styles.imgRspan}>Rua Matrix, 152</span>
                            <br/>
                            <Image className={styles.imgR} src="/images/phone-ic.png" width={30} height={23} alt="Telefone" />
                            <span className={styles.imgRspan}>(65) 99999-9999</span>
                        </div>
                    </div>
                    <div className={styles.experience}>
                        <span>Uma história única</span>
                        <h2>52 anos de experiência</h2>
                    
                            <div className={styles.text}>
                                    <div>
                                        <p>
                                            Nossa <strong>BarberShop</strong> tem o orgulho de celebrar 52 anos de excelência na arte da barbearia. Fundada em 1972, nossa barbearia tem sido uma parte essencial da comunidade local, atendendo gerações de clientes leais.
                                        </p>

                                        <p>
                                            Desde o momento em que abrimos nossas portas, nosso compromisso com a qualidade e o atendimento excepcional nos tornou um ícone da barbearia clássica.<br /><br />
                                        </p>

                                        <p>
                                            <b>Tradição</b>: Mantemos viva a tradição da barbearia clássica, respeitando métodos e técnicas tradicionais que foram passados de geração em geração.<br /><br />
                                            <b>Excelência</b>: Nossos barbeiros são mestres em sua arte, dedicando-se a fornecer cortes de cabelo e barbas impecáveis em cada visita.<br /><br />
                                            <b>Atendimento ao Cliente</b>: Valorizamos cada cliente e buscamos sempre superar suas expectativas. <br />Nosso ambiente é acolhedor e amigável, tornando cada visita uma experiência agradável.
                                        </p>
                                    </div>

                            </div>
                    </div>
            </div>
        </section>
        </>
    )
}
