import MyComponent from '../components/MyComponent'
import './App.css'

function App() {
  const n=15
  return (
    <>
      <div>
        {/* CSS Global */}
        <h1>React com CSS</h1>
        {/* CSS de Componente */}
        <MyComponent/>
        <p>Este parágrafo é do App.jsx (acaba sendo afetado pela estilização do paragrafo dentro do componente)</p>
        <p className="my-comp-paragraph">Paragrafo com classe do componente</p>
        {/* Inline CSS */}
        <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>

        {/* CSS Inline dinamico */}
        <h2 style={n > 10 ? {color: "purple"}:{color: "red"}}>
        CSS dinâmico
        </h2>
      </div>
    </>
  )
}

export default App
