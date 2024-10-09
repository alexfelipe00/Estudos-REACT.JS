import { useState } from 'react'
import './App.css'

//Importar manualmente as imagens dentro d  e assets
import City from "./assets/city.jpg"
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>Desafio 3</h1>
       <div>
        {/* Importação dinamica public */}
        <img src="/img1.jpg" alt="Paisagem"></img>
       </div>
        <div>
        {/* Importação em asset */}
        <img src={City}></img>
        </div>
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
      </div>
    </>
  )
}

export default App
