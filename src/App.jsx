import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>hola mundo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          click {count} 
        </button>
        <p>aprendiendo react!!!
        </p>
      </div>
      <p style={ {color:"red"}}className="read-the-docs">
        coderhouse!!
      </p>
    </>
  )
}

export default App
