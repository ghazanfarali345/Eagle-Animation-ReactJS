import React from 'react'
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
import './App.css'
import Rabbit from './rabbit'
import Bush from './assets/bush_small.png'

function App() {
  const { ref, playState } = useWebAnimations({
    keyframes: [
      { transform: "translate(0, 0)" },
      { transform: "translate(185%, 150%)", },
      { transform: "translate(390%, -100%)" },
      { transform: "translate(0, 0)" },
    ],
    timing: {
      // delay: 500, // Start with a 500ms delay
      duration: 6000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      // direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });



  return (
    <div className="wrapper">
      <div className="sky"></div>
      <div ref={ref} className='eagleDiv'>
        <img src='https://i.pinimg.com/originals/33/e5/d4/33e5d48e7e0e717c2ebe50c914b12f54.gif' />
      </div>
      <Rabbit />
      <div className='grass'></div>
      <img src={Bush} alt='hello' className="bush" />
    </div>
  )
}

export default App
