const TemplateExpressions = () =>{
    const name = "Alex";
    const data = {
        age:28,
        job:"Programmer"
    };

    return(
        //Executa os códigos em Javascript normalmente
        <div>
            <h2>Olá {name}, tudo bem?</h2>
            <p>Você atua como: {data.job}</p>
            <p>Sua idade: {data.age}</p>
            <p>{console.log("JSX React")}</p>
        </div>


    );
}

export default TemplateExpressions