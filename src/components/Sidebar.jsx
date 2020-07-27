import React from 'react'
import '../public/css/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Sidebar = (props) => {

    const { setIsMenuActive, isMenuActive } = props

    return (
        <div id="sidebar-wrapper" className={isMenuActive ? "bg-light border-right active" : "bg-light border-right"} onClick={() => setIsMenuActive(false)}>
            <div className="sidebar-heading">
                <span>Menu</span>
                <button className="btn-icon" type="button" onClick={() => setIsMenuActive(!isMenuActive)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action bg-light">Inicio</a>
                <a href="#about" className="list-group-item list-group-item-action bg-light">About</a>
                <a href="#work" className="list-group-item list-group-item-action bg-light">Work</a>
                <a href="#contact" className="list-group-item list-group-item-action bg-light">Contact</a>
            </div>
        </div>
    )
}

export default Sidebar
