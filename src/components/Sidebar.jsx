import React from 'react'
import '../public/css/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Text from './Text'
import Languages from './Languages'

const Sidebar = (props) => {

    const { setIsMenuActive, isMenuActive } = props

    return (
        <div id="sidebar-wrapper" className={isMenuActive ? "bg-dark border-right active" : "bg-dark border-right"} onClick={() => setIsMenuActive(false)}>
            <div className="sidebar-heading">
                <span><Text text="menu" section="common"/></span>
                <button className="btn-icon" type="button" onClick={() => setIsMenuActive(!isMenuActive)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action bg-light"><Text text="home" section="common"/></a>
                <a href="#about" className="list-group-item list-group-item-action bg-light"><Text text="about" section="common"/></a>
                <a href="#work" className="list-group-item list-group-item-action bg-light"><Text text="work" section="common"/></a>
                <a href="#contact" className="list-group-item list-group-item-action bg-light"><Text text="contact" section="common"/></a>
                
            </div>
        </div>
    )
}

export default Sidebar
