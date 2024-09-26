// 1 - var, let e const
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

console.log(a)

//Const não é possivel reatribuir valores
const a = 10

console.log(a)