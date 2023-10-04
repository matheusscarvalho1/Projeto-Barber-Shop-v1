import styles from "./iframe.module.css"


export default function Map () {

    const iframeStyle = {
        width: '100%',
        height: '60vh',
        border: '0',
  
    };

    return (
        <div className={styles.map}>
            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5433.046072660859!2d-56.139674225805166!3d-15.658629783230996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dadca3611cd1d%3A0x6cd26627d67cd1ba!2sAv.%20Alzira%20Santana%20-%20Nova%20V%C3%A1rzea%20Grande%2C%20V%C3%A1rzea%20Grande%20-%20MT!5e0!3m2!1spt-BR!2sbr!4v1662590854162!5m2!1spt-BR!2sbr"
        style={iframeStyle}
        title="Mapa"
        allowFullScreen // Propriedade correta para permitir o fullscreen
        loading="lazy" // Atributo 'loading' do <iframe>
        referrerPolicy="no-referrer-when-downgrade" // Atributo 'referrerpolicy' do <iframe>
      ></iframe>
        </div>
    )
}