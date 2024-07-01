import React, { useState, useEffect } from 'react';
import AnimatedText from './components/AnimatedText';
import Loader from './components/Loader';
import LetsTalk from './pages/LetsTalk';
import Home from './pages/Home';
import Team from './pages/Team';
import Navbar from './pages/Navbar';
import WhyUs from './pages/WhyUs';
import Tools from './pages/Tools';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import FooterText from './components/FooterText';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Home />
          <WhyUs />
          <Tools />
          <Services />
          <Team />
          <Gallery/>
          <LetsTalk />
        <FooterText />
        </div>
      )}
    </div>
  );
}

export default App;
