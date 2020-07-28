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
    
    let home = 0;
    let about = 0;
    let work = 0;
    let contact = 0;

    const handleAnimation = () => {
        const scrollTop = document.documentElement.scrollTop;
        headerSolid(scrollTop);
        homeActive(scrollTop);
        aboutActive(scrollTop);
        workActive(scrollTop);
        contactActive(scrollTop);
    }
    const headerSolid = (scrollTop) => {
        if (scrollTop > 80) setIsSolid(true)
        else setIsSolid(false)
    }

    const homeActive = (scrollTop) => {
        const from = 0;
        const to = home;
        if(scrollTop >= from && scrollTop <= to) setIsHomeActive(true);
        else setIsHomeActive(false);
    }
    const aboutActive = (scrollTop) => {
        const from = home;
        const to = home + about;
        if(scrollTop > from && scrollTop <= to) setIsAboutActive(true);
        else setIsAboutActive(false);
    }
    const workActive = (scrollTop) => {
        const from = home + about;
        const to = home + about + work;
        if(scrollTop > from && scrollTop <= to) setIsWorkActive(true);
        else setIsWorkActive(false);
    }
    const contactActive = (scrollTop) => {
        const from = home + about + work;
        const to = home + about + work + contact;
        if(scrollTop > from && scrollTop <= to) setIsContactActive(true);
        else setIsContactActive(false);
    }

    React.useEffect(() => {
        home = document.getElementById('banner').offsetHeight;
        about = document.getElementById('about').offsetHeight;
        work = document.getElementById('work').offsetHeight;
        contact = document.getElementById('contact').offsetHeight;
        window.onscroll = () => handleAnimation();  
    },[])

    return (
        <nav id="header" className={isSolid ? "navbar navbar-expand-md fixed-top solid":"navbar navbar-expand-md fixed-top"} >
            <div className={isMobile ? "container-fluid":"container"}>
                <a className="navbar-brand js-scroll" href="#">Devfolio</a>
                {
                    isMobile ? (
                        <button className="btn-icon" type="button" onClick={() => setIsMenuActive(!isMenuActive)}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    ) : (
                        <div id="actions" className="navbar-collapse collapse justify-content-end">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className={isHomeActive?"home nav-link js-scroll active":"home nav-link js-scroll"} href="#"><span>Home</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className={isAboutActive?"about nav-link js-scroll active":"about nav-link js-scroll"} href="#about"><span>About</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className={isWorkActive?"work nav-link js-scroll active":"work nav-link js-scroll"} href="#work"><span>Work</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className={isContactActive?"contact nav-link js-scroll active":"contact nav-link js-scroll"} href="#contact"><span>Contact</span></a>
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
