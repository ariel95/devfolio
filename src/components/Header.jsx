import React from 'react'
import '../public/css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {

    const [isSolid, setIsSolid] = React.useState(false);

    const { isMenuActive, isMobile, setIsMenuActive } = props;

    const [isHomeActive, setIsHomeActive] = React.useState(true);
    const [isAboutActive, setIsAboutActive] = React.useState(false);
    const [isWorkActive, setIsWorkActive] = React.useState(false);
    const [isContactActive, setIsContactActive] = React.useState(false);
    
    const handleAnimation = () => {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 80) {
            setIsSolid(true)
        }
        else{
            setIsSolid(false)
        }
        homeActive(scrollTop);
        aboutActive(scrollTop);
        workActive(scrollTop);
        contactActive(scrollTop);
    }

    const homeActive = (scrollTop) => {
        if(scrollTop >= 0 && scrollTop <= 600) setIsHomeActive(true);
        else setIsHomeActive(false);
    }
    const aboutActive = (scrollTop) => {
        if(scrollTop > 600 && scrollTop <= 1200) setIsAboutActive(true);
        else setIsAboutActive(false);
    }
    const workActive = (scrollTop) => {
        if(scrollTop > 1200 && scrollTop <= 1800) setIsWorkActive(true);
        else setIsWorkActive(false);
    }
    const contactActive = (scrollTop) => {
        if(scrollTop > 1800 && scrollTop <= 2400) setIsContactActive(true);
        else setIsContactActive(false);
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
                                        <a className={isHomeActive?"home nav-link js-scroll active":"home nav-link js-scroll"} href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={isAboutActive?"about nav-link js-scroll active":"about nav-link js-scroll"} href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={isWorkActive?"work nav-link js-scroll active":"work nav-link js-scroll"} href="#work">Work</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={isContactActive?"contact nav-link js-scroll active":"contact nav-link js-scroll"} href="#contact">Contact</a>
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
