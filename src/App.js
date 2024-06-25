import React, { useState, useEffect } from 'react';
import AnimatedText from './components/AnimatedText';
import Loader from './components/Loader';
import LetsTalk from './pages/LetsTalk';
import Home from './pages/Home';
import Team from './pages/Team';
import Navbar from './pages/Navbar';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

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
          <Team />
          <LetsTalk />
          <AnimatedText />
        </div>
      )}
    </div>
  );
}

export default App;
