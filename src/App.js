import React, { useState, useEffect } from 'react';
import AnimatedText from './components/AnimatedText';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <AnimatedText />
        </div>
      )}
    </div>
  );
}

export default App;
