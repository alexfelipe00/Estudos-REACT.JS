import { useState } from 'react'

const ListRender = () => {
    const [users, setUsers] = useState([
        {id: 1, name: "Alex", age: 28},
        {id: 2, name: "João", age: 22},
        {id: 3, name: "Marcos", age: 44},
    ])


const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => {

        return prevUsers.filter((user) => randomNumber !== user.id)

    })
}


  return (
    <div>
        <ul>
            {/* Uma lista precisa conter id unicos */}
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Excluir aleatório</button>
    </div>
  )
}

export default ListRender