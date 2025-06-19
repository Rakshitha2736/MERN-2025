import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Skills from './Skills'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Welcome name='Rakshitha'/> */}
    <Skills skill={['React', 'Node.js', 'Express', 'MongoDB']}/>
     <h1>Hiii</h1>
    </>
  )
}

export default App

