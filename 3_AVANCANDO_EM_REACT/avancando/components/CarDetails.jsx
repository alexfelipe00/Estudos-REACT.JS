function CarDetails({brand, km, color, newCar}) {
  return (
    <div>
        
        <h3>Detalhes do Carro</h3>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
            {newCar && <li>Condição: Novo de fábrica</li>}
            {!newCar && <li>Condição: Usado</li>}
        </ul>
    </div>
  )
}

export default CarDetails