import React from 'react'
import '../public/css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {

    const [isSolid, setIsSolid] = React.useState(false);
    const { isMenuActive, isMobile, setIsMenuActive } = props;

    const handleAnimation = () => {
        if (document.documentElement.scrollTop > 80) {
            setIsSolid(true)
        }
        else{
            setIsSolid(false)
        }
    }

    React.useEffect(() => {
        window.onscroll = () => handleAnimation();  
    },[])

    return (
        <nav id="header" className={isSolid ? "navbar navbar-expand-md fixed-top solid":"navbar navbar-expand-md fixed-top"} >
            <div className={isMobile ? "container-fluid":"container"}>
                <a className="navbar-brand js-scroll" href="#">Ariel Vergara</a>
                {
                    isMobile ? (
                        <button className="btn-icon" type="button" onClick={() => setIsMenuActive(!isMenuActive)}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    ) : (
                            <div id="actions" className="navbar-collapse collapse justify-content-end">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="home nav-link js-scroll active" href="#">Home</a>
                                    </li>
                                    <li className="about nav-item">
                                        <a className="nav-link js-scroll" href="#about">About</a>
                                    </li>
                                    <li className="work nav-item">
                                        <a className="nav-link js-scroll" href="#work">Work</a>
                                    </li>
                                    <li className="contact nav-item">
                                        <a className="nav-link js-scroll" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        )
                }


            </div>
        </nav>
    )
}

export default Header
