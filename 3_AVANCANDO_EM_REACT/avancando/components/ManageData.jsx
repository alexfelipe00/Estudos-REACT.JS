import {useState} from "react"

const ManageData = () => {
  /* Utilizando Hooks */
  const [number, setNumber] = useState(10)
  console.log(number)

  return (
    <div>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(number+15)}>Mudar o State</button>
    </div>
  )
}

export default ManageData