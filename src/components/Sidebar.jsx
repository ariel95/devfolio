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
                <a href="#services" className="list-group-item list-group-item-action bg-light">Servicios</a>
                <a href="#about-us" className="list-group-item list-group-item-action bg-light">Sobre nosotros</a>
                <a href="#contact" className="list-group-item list-group-item-action bg-light">Contactenos</a>
            </div>
        </div>
    )
}

export default Sidebar
