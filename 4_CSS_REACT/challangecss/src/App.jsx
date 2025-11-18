import { useState } from 'react'
import './App.css'
import CarDetails from '../components/CarDetails'

const cars = [
    {id: 1, brand:"Honda", name:"NSX", year:1995, maxSpd:"270"},
    {id: 2, brand:"Toyota", name:"Supra", year:1998, maxSpd:"257"},
    {id: 3, brand:"Mitsubishi", name:"Eclipse", year:1999, maxSpd:"224"},
    {id: 4, brand:"Nissan", name:"Skyline", year:1995, maxSpd:"270"},
  ]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Carros Japoneses Maneiros</h1>
        {cars.map((car)=>
        <CarDetails key={car.id} brand={car.brand} name={car.name} year={car.year} maxSpd={car.maxSpd}/>)}
      
      </div>
    </>
  )
}

export default App
 