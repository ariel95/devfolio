import React from 'react'
import '../public/css/aboutMe.css'

const AboutMe = () => {
    return (
        <section id="about-content">
            <span id="about" className="position"></span>
            <div className="title-section">
                <h3>About Me</h3>
            </div>
            <div className="content">
                <div className="presentation">
                    <div className="profile-picture"></div>
                    <div className="content-section">
                        <span className="text">
                            Soy Desarrollador FullStack .NET desde Diciembre 2017
                            y estudiante de Ingeniería en Sistemas en la UTN (FRBA),
                            actualmente cursando materias de 3er y 4to año.
                            Me considero una persona proactiva y curiosa.
                            Me gusta el trabajo en equipo.
                    </span>
                    </div>

                </div>
                <div className="tecnologies">
                    <div className="title-section">
                        <h3>Tecnologies experience</h3>
                    </div>
                    <div className="content-section">
                        <span className="text">
                            Durante mi experiencia laboral, he estado utilizando C# como lenguaje
                            principal de programación. En la parte de Front-End he trajado con HTML,
                            Razor, CSS, Javascript, JQuery y Bootstrap. SQL Server para Base de datos.
                            Actualmente estoy desarrollando aplicaciones web (tanto proyectos
                            personales como proyectos a clientes) utilizando React JS + Redux Ducks para el Front-End
                            y las funcionalidades de Firebase para el "Back-End" y el respaldo de datos.
                            También estoy en proceso de aprendizaje tanto de Node JS como Net Core API REST
                            para el Back-End de mis nuevas aplicaciones.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
