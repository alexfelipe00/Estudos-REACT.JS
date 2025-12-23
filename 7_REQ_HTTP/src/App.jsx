import { useState, useEffect, Profiler } from 'react'
import './App.css'

const url = "http://localhost:3001/products"

function App() {
  const [products, setProducts] = useState([])


// 1 - resgatando dados
  useEffect(() => {
    async function fetchData() {
      
  
    // trás a resposta em texto puro
    const res = await fetch(url)

    // converte o resultado em json
    const data = await res.json()

    setProducts(data)
    }

    fetchData()

  }, [])

  console.log(products)

  return (
      <div className="App">
        <h1>Lista de Produtos</h1>
        <ul>
          {products.map((product) => 
          <li key={product.id}>{product.name} - {product.price}R$</li>
          )}
        </ul>
      </div>
  )
}

export default App
