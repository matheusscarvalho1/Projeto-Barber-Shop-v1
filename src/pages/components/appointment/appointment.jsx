import styles from './appointment.module.css'
import Image from 'next/image'



export default function Appointment () {
    return (
    
 <>
            <section id="appointment" className={styles.appointment}>
            <div className={styles.container}>
                <h2>Faça um Agendamento</h2>
                <Image src="/images/heading-ic-white.png" width={145} height={14} alt="Faça um agendamento"/>

                <form className={styles.form} action="https://formsubmit.co/matheus.carvalh0.job@gmail.com" method="POST">
                    <div className={styles.personalData}>
                        <div className={styles.inputWrapper}>
                            <label>Nome</label>
                            <input type="text" name="nome" placeholder="Digite o seu nome" required  autoComplete="off"/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label>E-mail</label>
                            <input type="email" name="email" placeholder="Digite o seu e-mail" required  autoComplete="off"/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label>Telefone</label>
                            <input type="text" name="telefone" placeholder="Digite o seu telefone" required  autoComplete="off"/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <label>Tipo de Serviço</label>
                            <select name="servico" required>
                                <option value="cortar cabelo padrao">Corte padrão</option>
                                <option value="corte estilizado">Corte estilizado</option>
                                <option value="fazer a barba">Fazer a barba</option>
                                <option value="cabelo padrao e barba">Corte padrão e fazer a barba</option>
                                <option value="corte estilizado e barba ">Corte estilizado e barba</option>
                                <option value="relaxamento no cabelo">Fazer relaxamento no cabelo</option>
                            </select>
                        </div>
                    </div>
                    <div  className={styles.inputWrapper}>
                        <label>Mensagem</label>
                        <textarea placeholder="Digite detalhes do corte ou horário que deseja cortar" name="mensagem"required autoComplete="off"></textarea>
                    </div>


                    <button type="submit">Enviar</button>


                </form>
            </div>
        </section>
 </>
    
    )
}