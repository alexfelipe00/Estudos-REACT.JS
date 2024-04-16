/**
 * Funções
 */

function hello(num){
    console.log("Hello Function", num)
}

hello(1)

//Forma alternativa de declarar função
const hello2 = function(num){
    console.log("Hello Function Assigned", num)
}

hello2(2)

//Arrow function
const hello3 = (num, num2) =>{
    console.log("Hello Arrow Function Assigned", num + num2)
}

hello3(3, 4)

//Arrow function simplified
const hello4 = _ => console.log("Hello Arrow Function Assined Simplified")

hello4()

