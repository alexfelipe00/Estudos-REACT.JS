import { useState } from 'react'
import coleta_solo from './assets/coleta_solo.JPG'
import './App.css'
import ManageData from '../components/ManageData.jsx'
import ListRender from '../components/ListRender.jsx'
import ConditionalRender from '../components/ConditionalRender.jsx'
import ShowUserName from '../components/ShowUserName.jsx'
import CarDetails from '../components/CarDetails.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Imagem em publc */}
        <img src="/public/img1.webp" alt="Tubos de ensaio em meio ao solo exposto" />
      </div>
      <div>
        {/*Imagem em asset */}
        <img src={coleta_solo} alt="Comparativo entre coleta com quadriciclo e moto" />
      </div>
      <div>
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
        <ShowUserName name="Alex"/>
        <CarDetails brand="VW" km={10000} color="Azul"/>
      </div>
    </>
  )
}

export default App
