import React from 'react'
import '../public/css/banner.css'
import Text from './Text'

const Banner = () => {
    return (
        <div id="banner" className="image">
            <div className="overlay-itro"></div>
            <div className="content display-table">
                <div className="table-cell">
                    <div className="container">
                        <h1 className="title mb-4">Ariel Bernardo Vergara</h1>
                        <p className="subtitle"><Text text="fullStackDeveloper" section="banner"/></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
