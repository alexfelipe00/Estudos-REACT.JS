import './MyForms.css'

const MyForms = () => {
  return (
    <div>
        {/* 1- criação de form */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome"></input>
            </div>
        </form>
    </div>
  )
}

export default MyForms