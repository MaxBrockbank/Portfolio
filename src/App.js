import React, {useRef, useEffect} from 'react';
import useWindowSize from './hooks/useWindowSize';
import './App.css';
import Home from './views/Home';

function App() {
    // const size = useWindowSize();
    // const app = useRef();
    // const scrollContainer = useRef();
    
    // const skewConfigs = {
    //   ease: .1,
    //   current: 0,
    //   previous: 0, 
    //   rounded: 0
    // };

    // useEffect(() => {
    //   window.scrollTo(0, 0)
    // }, [])

    // useEffect(() => {
    //   document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
    // }, [size.height]);

    // useEffect(() => {
    //   requestAnimationFrame(() => smoothScrolling());
    // });

    // const smoothScrolling = () => {
    //   skewConfigs.current = window.scrollY;
    //   skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    //   skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    //   const difference = skewConfigs.current - skewConfigs.rounded;
    //   const acceleration = difference / size.width;
    //   const velocity = +acceleration;
    //   const skew = velocity * 15;

    //   scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;

    //   requestAnimationFrame(() => smoothScrolling());
    // };

  return (
    <div className = 'app'>
      <div className='scroll'>
        <Home />
      </div>
    </div>

  );
}

export default App;
