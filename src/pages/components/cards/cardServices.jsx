import  styles from './cardServices.module.css'
import Image from 'next/image'

export default function Card ({ image, width, height, detail, title, text }) {
    return (
        <>
                <div className={styles.box}>
                    <Image src={`/images/${image}`} alt={`${image}`} width={width} height={height} />
                    <h4 className={styles.title}>{title}</h4>
                    <Image src={`/images/${detail}`} alt={`Separador`} width={33} height={7} />
                    <p>{text}</p>
                </div>
        </>
    )
}