import UserDetails from '../components/UserDetails'
import './App.css'

function App() {

  const users = [
    {id: 1, nome:"Alex", idade:17, profissao:"Motoboy"},
    {id: 2, nome:"Souza", idade:25, profissao:"Eng. Computação"},
    {id: 3, nome:"Felipe", idade:30, profissao:"Medicina"},
    {id: 4, nome:"Allan", idade:15, profissao:"Estudante"},
  ]

  return (
    <>
      <div>
        {users.map((user) =>
            <UserDetails key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao}/>
        )}
        
      </div>
    </>
  )
}

export default App
