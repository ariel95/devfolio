import React from 'react'
import whatsapp from '../public/img/whatsapp-circle.png'
import mail from '../public/img/gmail-circle.png'
import instagram from '../public/img/instagram-circle.png'
import linkedin from '../public/img/linkedin-circle.png'
const SocialNetworks = () => {
    return (
        <section id="social-networks">
            <h5>Nuestras redes sociales</h5>
            <ul className="items">
                <li><a id="mail" href="mailto: arielbvergara@gmail.com"><img src={mail} alt="" /><span>Email: arielbvergara@gmail.com</span></a></li>
                <li><a href="https://www.instagram.com/arielvergara_/?hl=es-la"><img src={instagram} alt="" /><span>Instagram: arielvergara_</span></a></li>
                <li><a href="https://www.linkedin.com/in/abvergara/"><img src={linkedin} alt="" /><span>Linkedin: Ariel Vergara</span></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=5491162064526&text=Hola!"><img src={whatsapp} alt="" /><span>Whatsapp: +5491162064526</span></a></li>
            </ul>
        </section>
    )
}

export default SocialNetworks