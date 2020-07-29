import React from 'react'
import '../public/css/aboutMe.css'
import Text from './Text'

const AboutMe = () => {
    return (
        <section id="about-content">
            <span id="about" className="position"></span>
            <div className="title-section">
                <h3><Text text="about" section="about"/></h3>
            </div>
            <div className="content">
                <div className="presentation">
                    <div className="profile-picture"></div>
                    <div className="content-section">
                        <span className="text">
                            <Text text="aboutDescription" section="about"/>
                        </span>
                    </div>

                </div>
                <div className="tecnologies">
                    <div className="title-section">
                        <h3><Text text="tecnologiesExperience" section="about"/></h3>
                    </div>
                    <div className="content-section">
                        <span className="text">
                            <Text text="tecnologiesExperienceDescription" section="about"/>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
