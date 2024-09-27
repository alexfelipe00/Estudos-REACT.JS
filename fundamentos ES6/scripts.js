// 1 - VAR E LET
//Variavel sendo atribuida de forma global
var x = 10
var y = 15

if (y > 10){
    //Variavel sendo manipulada dentro de um bloco
    var x = 5
    console.log(x)
}

//Variavel com valor que foi atribuida dentro de um bloco
console.log(x)


let a = 10
let b = 15

//Escopo dentro das {} com let não é alterado de forma global
if (b > 10){
    let a = 5
    console.log(a)
}




// 2 - CONST
//Const também é uma variavel de bloco e é uma variavel que não pode ser reatribuida com novos valores
function logName(){
    const name = 'Matheus'
    console.log(name)
}

const name = 'Pedro'

logName()

console.log(name)



// 3 - ARROW FUNCTION
//Função comum
const sum = function sum(a, b){
    return a + b
}
console.log(sum(5,5))


//Arrow function com corpo
const arrowSum = (a, b) => {
    return a + b
}

const greeting = (name) => {
    if(name){
        return 'Olá ' + name
    }else{
        return 'Olá'
    }
}
console.log(greeting('Alex'))



//Arrow function sem corpo resumida nome função 
const sumArrowFunctionSummary = (a, b) => a + b


console.log(arrowSum(5,5))

//Arrow function sem argumentos
const testeArrow = () => console.log("Testou!")

testeArrow()


//This ArrowFunction
const user = {
    name: "Theo "
}

//4 - FILTER
const arr = [1, 2, 3, 4, 5]
// .filter percorre o array aplicando a função, utilizado para fazer filtros
const highNumber = arr.filter((n) => {
    if (n>=3){
        return n
    }
})

console.log(highNumber)



const users = [
    {name: 'Jô', available: false}, 
    {name: 'Antonio', available: false}, 
    {name: 'Marcio', available: true},
    {name: 'João', available: false},
    {name: 'Matheus', available: true}
]

//Retorna valores com true na coluna available
const availableUsers = users.filter((user) => user.available)
console.log(availableUsers)

//Retorna valores com valor false na coluna available
const notAvailableUsers = users.filter((user) => !user.available)
console.log(notAvailableUsers)



//5 - MAP
//Método que percorre todos os elementos para modificar os valores aplicando uma função em cada elemento

const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira Eletrica', price: 49.99, category: 'Eletro'},
    {name: 'Fogão', price: 999, category: 'Eletro'},
    {name: 'Calça', price: 80.99, category: 'Roupas'},
    {name: 'Meia', price: 15.09, category: 'Roupas'}
]

products.map((product) => {
    if (product.category === 'Roupas'){
        product.onSale = true
    }
})

console.log(products)



//6 - TEMPLATE LITERALS
const username = 'Matheus'
const age = 28

//Utilizando literals
console.log(`O usuário ${username} possuí ${age} anos.`)

//Utilizando concatenação (método antigo)
console.log("O usuário "+ username +" possuí "+ age + " anos.")


//7 - Desctructuring
//Utilizado para transformar valores da lista são atribuidos à variaveis
//Utilizando valor
const fruits = ['Maçã', 'Laranja', 'Mamão']

const [f1, f2, f3] = fruits

console.log(f1)

//Utilizando em objetos
const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Eletronico",
    color: "Cinza"
}

//Possui renomear variavel que ira receber os valores
const {name: productName, price, category: productCategory, color} = productDetails

console.log(`O nome do produto é ${productName} \nR$${price}\nCategoria: ${productCategory}\nCOR: ${color}`)