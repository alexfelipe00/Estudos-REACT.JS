const Events = () =>{
    const handleMyEvent = (e) =>{
        console.log(e)
        console.log("Clicou no botão")
    }

    const renderSomething = (x) =>{
        if(x){
            return <h2>Renderizando algo</h2>
        }else{
            return <h2>Também posso renderizar isso</h2>

        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            {renderSomething(false)}
            
        </div>
    )
}

export default Events