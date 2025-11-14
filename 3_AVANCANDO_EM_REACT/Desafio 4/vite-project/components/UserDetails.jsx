const UserDetails = ({id, nome, idade, profissao}) => {
  return (
    <div>
        <ul>
            <h3>Nome: {nome}</h3>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
            {idade > 17 ?(
                <li>Carteira de habilitação: ELEGIVEL</li>
            ):(
                <li>Carteira de habilitação: INELEGIVEL</li>
            )}
        </ul>
    </div>
  )
}

export default UserDetails