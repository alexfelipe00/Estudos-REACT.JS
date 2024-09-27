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
// .filter percorre o array aplicando a função
const highNumber = arr.filter((n) => {
    if (n>=3){
        return n
    }
})

console.log(highNumber)