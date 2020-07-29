import React, { useLayoutEffect, useState } from 'react';
import Header from './components/Header'
import Banner from './components/Banner'
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import Contact from './components/Contact';
import LanguageProvider from './languages/LanguageContext';

function useWindowSize() {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size < 900;
}

function App() {

  const isMobile = useWindowSize();
  const [isMenuActive, setIsMenuActive] = React.useState(false);


  return (
    <LanguageProvider>
      <div className={isMobile ? "App mobile" : "App"}>
        <Header isMobile={isMobile} isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
        <Sidebar isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
        <Banner onClick={() => setIsMenuActive(false)} />
        <section id="content" onClick={() => setIsMenuActive(false)}>
          <AboutMe />
          <Work />
          <Contact />
        </section>
        {/* <LanguageContext.Consumer>
            {(data) => {
              return (
                <button
                  onClick={changeLanguage('spanish', data)}
                >Change to Spanish</button>
              );
            }}
          </LanguageContext.Consumer> */}
      </div>
    </LanguageProvider>
  );
}

export default App;
