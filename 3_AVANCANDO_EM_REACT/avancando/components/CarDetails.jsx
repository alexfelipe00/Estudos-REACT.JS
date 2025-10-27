function CarDetails({brand, km, color}) {
  return (
    <div>
        <h2>Destructuring</h2> 
        <h3>Detalhes do Carro</h3>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails