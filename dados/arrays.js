/**
 * Estrutura de dados
 * Array
 */

let alunos = ["Vitor", "Tania", "Pedro", "Maria", "Viviane"]
console.log(typeof alunos)

//Exibindo dados de um array
console.log(alunos.length)
console.log(alunos)
console.log(alunos[2])
console.table(alunos)

//Adiciona na ultima posição
alunos.push("Jorge")

//Adiciona na primeira posição
alunos.unshift("Luiza")

//Insere Matheus na posição 4
alunos.splice(4, 0, "Matheus")

//Modificando dados do array
alunos[1] = "Victor"


//Exclui o ultimo elemento da lista
alunos.pop()

//Exclui o primeiro elemento da lista
alunos.shift()

//Excluir o 5º elemento da lista
alunos.splice(5, 1)

//Excluir elemento da lista sem reindexar o restante dos elementos
delete alunos[2]
console.table(alunos)


//Percorrendo um array
console.clear()

let notas = [3, 8, 2, 5, 1]
console.log(notas)
console.table(notas)

//laço for
for (let i = 0; i<notas.length; i++){
    console.log(notas[i])
}
//forEach

notas.forEach((notas) =>{
    console.log(notas)
})

//Converter sistema de pontos para letras
/**
 * NA - Não Atendeu (nota < 5)
 * PA - Parcialmente Atendido (nota entre 5 e 7)
 * A - Atendeu (nota > 7)
 */

let notasConvertidas = notas.map((nc) =>{
    if(nc < 5){
        return "NA"
    }else if (nc > 7){
        return "A"
    }else{
        return "PA"
    }
})

console.log(notas)
console.log(notasConvertidas)
