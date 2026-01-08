import { useState, useEffect, Profiler } from 'react'
import './App.css'

const url = "http://localhost:3001/products"

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")


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

// 2 - adição produtos

  const handleSubmit = async (e) =>{

  }

  return (
      <div className="App">
        <h1>Lista de Produtos</h1>
        <ul>
          {products.map((product) => 
          <li key={product.id}>{product.name} - {product.price}R$</li>
          )}
        </ul>
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" value={name}  name="name" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
              Preço:
              <input type="number" value={price}  name="price" onChange={(e) => setPrice(e.target.value)}/>
            <input type="submit" value="Criar"/>
            </label>
          </form>
        </div>
      </div>
  )
}

export default App
