import { useState } from "react"

function ConditionalRender() {
    const [x] = useState(false)
    const [name, setName] = useState("Marcos") 
  return (
    <div>
        <h2>Condicionais Simples</h2>
        {/* Condicional SE */}
        {x && <p>X é true</p>}
        {/* Condicional SENÃO */}
        {!x && <p>X é False</p>}

        <h2>Condicional Ternário</h2>
        {name === "Alex" ? (
            //Se verdadeiro
            <div>
                <p>O nome é Alex</p>
            </div>
        ) : (
            //Se falso
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
        <div>
            <button onClick={() => setName("Alex")}>Mudar variável</button>
        </div>
    </div>
  )
}

export default ConditionalRender