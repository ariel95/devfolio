import React from 'react'
import '../public/css/banner.css'

const Banner = () => {
    return (
        <div id="banner" className="image">
            <div className="overlay-itro"></div>
            <div className="content display-table">
                <div className="table-cell">
                    <div className="container">
                        <h1 className="title mb-4">Ariel Bernardo Vergara</h1>
                        <p className="subtitle">Full Stack Developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
