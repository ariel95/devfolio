import React from 'react'
import '../public/css/work.css'
import Text from './Text'

const Work = () => {
    return (
        <section id="work-content">
            <span id="work" className="position"></span>
            <div className="title-section">
                <h3><Text text="work" section="work"/></h3>
            </div>
        </section>
    )
}

export default Work
