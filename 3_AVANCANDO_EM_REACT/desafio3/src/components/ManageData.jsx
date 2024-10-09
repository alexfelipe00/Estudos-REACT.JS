//Use State é usado para renderizar e atualizar valores na tela
import {useState} from 'react'

const ManageData = () => {
    let someData = 10;

    console.log(someData)

    const [number, setNumber] = useState(15)

    return (
    <div>
        <div>
            <p>{someData}</p>
            <button onClick={() => setNumber(25)}>Mudar variável</button>
        </div>

        <div>
            <p>Valor: {number}</p>
        </div>
    </div>
    )
}

export default ManageData