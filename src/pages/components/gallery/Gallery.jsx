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
        
                    <div className={styles.mobileFoto}>
                        <Photo
                            image={'gallery-img1.png'}
                            width={277}
                            height={179}
                        />
                    </div>
                        <Photo
                            image={'gallery-img2.png'}
                            width={277}
                            height={357}
                        />
                        <Photo
                            image={'gallery-img3.png'}
                            width={277}
                            height={179}
                        />
                    <div className={styles.mobileFoto}>
                        <Photo
                            image={'gallery-img5.png'}
                            width={277}
                            height={238}
                        />
                    </div>
                    <div className={styles.mobileFoto2}>
                        <Photo
                            image={'gallery-img6.png'}
                            width={277}
                            height={162}  
                        />
                    </div>

                        <div className={styles.mobileFoto}>
                            <Photo
                                image={'gallery-img7.png'}
                                width={277}
                                height={318}
                            />
                        </div>
                    </div>
                </div>
            </section>
            </>

    )
}