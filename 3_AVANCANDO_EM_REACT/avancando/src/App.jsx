import { useState } from 'react'
import coleta_solo from './assets/coleta_solo.JPG'
import './App.css'
import ManageData from '../components/ManageData.jsx'
import ListRender from '../components/ListRender.jsx'
import ConditionalRender from '../components/ConditionalRender.jsx'
import ShowUserName from '../components/ShowUserName.jsx'
import CarDetails from '../components/CarDetails.jsx'
import Fragment from '../components/Fragment.jsx'
import Container from '../components/Container.jsx'
import ExecuteFuncion from '../components/ExecuteFuncion.jsx'
import Messege from '../components/Messege.jsx'
import ChangeMessegeState from '../components/ChangeMessegeState.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  const [userName] = useState("Felipe")
  
  const [message, setMessage] = useState("")

  const handleMessege = (msg) => {
    setMessage(msg)
  }

  const cars = [
    {id: 1, brand:"VW", km:10233, color:"Branco", newCar:false},
    {id: 2, brand:"Honda", km:0, color:"Vermelho", newCar:true},
    {id: 3, brand:"Mercedez", km:0, color:"Amarelo", newCar:true},
  ]

  function showMessage(){
    console.log("Evento do componente pai!")
  }

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

        {/* prop */}
        <ShowUserName name={userName}/>

        {/* destructuring */}
        <CarDetails brand="VW" km={10000} color="Azul" newCar={false} />

        {/* reaproveitando */}
        <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true}/>
        <CarDetails brand="Fiat" km={4500} color="Preto" newCar={false}/>

        {/* loop em array de objetos */}
        {cars.map((car) =>
          <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>
        )}

        {/* fragment */}
        <Fragment />

        {/* children */}
        <Container myValue="Teste">
          <p>Este é o conteúdo</p>
        </Container>

        {/* executar função  */}
        <ExecuteFuncion myFunction={showMessage}/>

        {/* state lift */}
        <Messege msg={message}/>
        <ChangeMessegeState handleMessege={handleMessege}/>
      </div>
    </>
  )
}

export default App
