import styles from './services.module.css'
import Image from 'next/image'
import Card from '../cards/cardServices'



export default function Services () {
    return (
        <>
            <section id="services" className={styles.services}>
                <div className={styles.container}>
                    <h2>Nossos Serviços</h2>
                    <Image src="/images/heading-ic.png" width={145} height={14} alt="Serviços"/>

                        <div className={styles.boxes}>
                            <Card 
                                image={'classic-cut.png'}
                                width={75}
                                height={90}
                                title={'Tesoura'}
                                detail={'head-line-ic.png'}
                                text={'Nosso serviço de corte com tesoura é projetado para aqueles que desejam um corte preciso e personalizado. Nossos estilistas usam técnicas avançadas de corte com tesoura para criar estilos que se adequem ao formato do rosto e à textura do cabelo de cada cliente. Este serviço é perfeito para quem busca elegância e precisão.'}
                            />
                        
                            <Card 
                                image={'clipper-cut.png'}
                                width={75}
                                height={90}
                                title={'Navalha'}
                                detail={'head-line-ic.png'}
                                text={'O corte com navalha é uma opção para quem procura um estilo mais suave e definido. Nossos estilistas habilidosos utilizam navalhas afiadas para criar contornos precisos e texturas sutis. Este serviço é especialmente popular entre aqueles que desejam uma aparência sofisticada e bem-acabada.'}
                            />

                                <Card 
                                image={'razoe-shaver.png'}
                                width={45}
                                height={90}
                                title={'Máquina'}
                                detail={'head-line-ic.png'}
                                text={'Para um estilo prático e moderno, oferecemos cortes com máquina. Este serviço é ótimo para quem deseja um corte rápido e de baixa manutenção. Nossos estilistas são experientes em usar diferentes comprimentos de lâmina para alcançar estilos variados, desde cortes raspados até fades elegantes.'}
                            />
                        </div>
            </div>
        </section>
    </>
    )
}