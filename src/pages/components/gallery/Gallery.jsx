import styles from './gallery.module.css'
import Image from 'next/image'
import Photo from '@/pages/components/photos/Photo'



export default function Gallery () {
    return (
            <>
                <section id="gallery" className={styles.gallery}>
                <div className={styles.container}>
                    <h2>Galeria de Fotos</h2>
                    <Image src="/images/heading-ic.png" width={145} height={14} alt="Galeria de Fotos"/>

                    <div className={styles.galleryWrapper}>
    
                        <Photo
                            image={'gallery-img1.png'}
                            width={277}
                            height={179}
                        />
                        <Photo
                            image={'gallery-img2.png'}
                            width={277}
                            height={357}
                            className={styles.foto}
                        />
                        <Photo
                            image={'gallery-img3.png'}
                            width={277}
                            height={179}
                            className={styles.foto}
                        />
                        <Photo
                            image={'gallery-img5.png'}
                            width={277}
                            height={238}
                            className={styles.foto}
                        />
                        <Photo
                            image={'gallery-img6.png'}
                            width={277}
                            height={162}
                            className={styles.foto}
                        />
                        <Photo
                            image={'gallery-img7.png'}
                            width={277}
                            height={318}
                            className={styles.foto}
                        />
                    </div>
                </div>
            </section>
            </>

    )
}