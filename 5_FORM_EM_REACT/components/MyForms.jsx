import { useState } from 'react'
import './MyForms.css'

const MyForms = () => {
  // 3 - gerenciamento de dados
  const[name, setName] = useState()
  const[email, setEmail] = useState()
  const handleName = (e) => {
    console.log(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(name, email)
  }

  // console.log(email)

  return (
    <div>
        {/* 5 - envio de form */}
        {/* 1 - criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>

                <input 
                type="text" 
                name="name" 
                placeholder="Digite seu nome" 
                onChange={handleName}>
                </input>
                
            </div>

            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail:</span>
            {/* 4 - simplicação de manipulação de state */}
                <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e)=> setEmail(e.target.value)}/>
            </label>
                <input type="submit" value="Enviar"/>

        </form>
    </div>
  )
}

export default MyForms