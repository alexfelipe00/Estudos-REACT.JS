import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(false)


  const [name] = useState("João")

  return (
    <div>
         <h1>Isso será exibido?</h1>
         {x && <p>Se x for true, sim!</p>}
         {!x && <p>Agora x é falso</p>}
         {name}
    </div>
  )
}

export default ConditionalRender