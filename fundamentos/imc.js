/**
 * Entrada de dados via terminal
 * Aplicativo IMC
 */

const colors = require('colors')
const read = require('readline-sync')

console.clear()
console.log(" _|_|_|  _|      _|    _|_|_|  ")
console.log("   _|    _|_|  _|_|  _|        ")
console.log("   _|    _|  _|  _|  _|        ")
console.log("   _|    _|      _|  _|        ")
console.log(" _|_|_|  _|      _|    _|_|_|  ")
console.log("")

let nome = read.question("Digite o seu nome: ")
let peso = Number(read.question("Digite o seu peso(Kg): ").replace(",", "."))
let altura = Number(read.question("Digite a sua altura (m): ").replace(",", "."))
let imc = peso /(altura * altura)
console.log("")
console.log("----------------")
console.log("Ficha do aluno".italic)
console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`IMC: ${imc.toFixed(2)}`)

if(imc < 18.5){
    console.log("Abaixo do peso".blue)
} else if(imc > 18.5 && imc < 25){
    console.log("Peso ideial".green)
} else if (imc >25 && imc < 30){
    console.log("Levemente acima do peso".yellow)
} else if (imc >30 && imc <35){
    console.log("Obesidade grau I".bgRed)
} else if (imc >35 && imc < 40){
    console.log("Obesidade grau II (severa)".magenta)
} else{
    console.log("TA PORRA VEI GORDAÇAKKKKKK".bgMagenta)
}