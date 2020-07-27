import React, { useLayoutEffect, useState } from 'react';
import Header from './components/Header'
import Banner from './components/Banner'
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import Work from './components/Work';

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
    <div className={isMobile ? "App mobile":"App"}>
      <Header isMobile={isMobile} isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <Sidebar isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <Banner  onClick={() => setIsMenuActive(false)}/>
      <section id="content" onClick={() => setIsMenuActive(false)}>
        <AboutMe />
        <Work />
      </section>

    </div>
  );
}

export default App;
