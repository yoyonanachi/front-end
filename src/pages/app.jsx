import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createHashRouter, RouterProvider } from "react-router-dom";
import RootLayout, { RootIndex } from ".";
import About from "./about";
import "./tailwind.css"

function App() {
  const [color, setColor] = useState('blue');
  const clickHandler = () => {
  setColor(prevColor => prevColor === 'blue' ? 'red' : 'blue')
  }
  return (
    <div>
      <button onClick={clickHandler}>Button</button>
      <div style={{
        backgroundColor: color,
        height: '6rem', width: '6rem'
      }}></div>
      <div>{color}</div>
    </div>
  );
}
export default App;
  
