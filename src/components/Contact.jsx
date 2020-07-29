import React from 'react'
import '../public/css/contact.css'
import ContactForm from './ContactForm'
import SocialNetworks from './SocialNetworks'

const Contact = () => {
    return (

        <section id="contact-content">
            <span id="contact" class="position"></span>

            <footer id="footer">
                <div className="inner">
                    <div className="title-section">
                        <h3>Contact</h3>
                        <span className="text">
                            Realice las consultas que crea necesarias. ¡Estamos a su disposición!
                        </span>
                    </div>

                    <div className="container row" style={{margin:"auto"}}>
                        <div className="col-xs-12 col-md-6 col-lg-6">   
                            <ContactForm />
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-6">
                            <SocialNetworks />
                        </div>

                    </div>
                    <div className="copyright">
                        &copy;Devfolio. Web site made by <a style={{ color: "#2bbdb0" }} href="/"> Ariel Vergara</a>.
        </div>
                </div>
            </footer>
        </section>
    )
}

export default Contact
