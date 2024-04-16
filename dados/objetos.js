/**
 * Estrutura de dados
 * Objetos
*/

const funcionario1 = {}
//Adiciona dados a estrutura
funcionario1.nome = "José"
funcionario1.cargo = "Professor"
funcionario1.email = "jose@gmail.com"
funcionario1.salario = 8000

//listar os dados da estrutura
console.log(funcionario1.cargo)

//modificar os dados da estrutura
funcionario1.nome="José de Assis"

//excluir dados da estrutura
delete funcionario1.cargo


const funcionario2 = {
    nome:  "Bruce Wayne",
    cargo: "CEO",
    email: "batman@gmail.com",
    salario: 400000
}

const endereco1 = {
    logradouro: "Bat caverna",
    cidade: "Gothan City",
    estado: "Nova Jersey",
    ...funcionario2 //Spread operator
}
console.log(endereco1)

const funcionario3 = {
    nome:"Tony Stark",
    cargo:"Engenheiro",
    email:"ironman@gmail.com",
    salario: 37400,
    armadura: {
        versao:"Mark II",
        ano: 2010,
        reator:"Arc 01"
    },
    suitUp: () => {
        console.log("☬")
    }
}


console.log(funcionario3)
console.log(funcionario3.armadura.reator)
console.log(funcionario3.suitUp())  