/**
 * Fundamentos da POO
 */

class Bloco{
    //Atributos
    constructor(textura, resistencia){
        this.textura = textura
        this.resistencia = resistencia
    }

    //Ações
    criarBloco(){
        console.log("-------------------")
        console.log("┎─┐")
        console.log("┕─┙")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência ${this.resistencia}`)
    }

    construir(){
        console.log(`Bloco de ${this.textura} colocado.`)
    }
    minerar(){
        console.log("▩▩▩ Recursos obtidos")
    }

}

//Nova classe HERDANDO os atributos de outra class
class Enxada extends Bloco{
    //atributos
    constructor (textura, resistencia, conquista){
        //reutiliza os atributos da classe bloco
        super(textura, resistencia)
        this.conquista = conquista
    }

    criarEnxada(){
        console.log("-------------------")
        console.log("-_")
        console.log(" /")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }

    arar(){
        console.log("._._._. Terra arada!")
        if(this.conquista===true){
            console.log("◉ Conquista obtida!")
        }
    }

    //Polimosfismo
    minerar(){
        console.log("☠ Dano Atribuido")
    }

    //
}
/** MUNDO **/

console.clear()
console.log(" __   __  ___   __    _  _______  _______  ______    _______  _______  _______ ")
console.log("|  |_|  ||   | |  |  | ||       ||       ||    _ |  |   _   ||       ||       |")
console.log("|       ||   | |   |_| ||    ___||       ||   | ||  |  |_|  ||    ___||_     _|")
console.log("|       ||   | |       ||   |___ |       ||   |_||_ |       ||   |___   |   |  ")
console.log("|       ||   | |  _    ||    ___||      _||    __  ||       ||    ___|  |   |  ")
console.log("| ||_|| ||   | | | |   ||   |___ |     |_ |   |  | ||   _   ||   |      |   |  ")
console.log("|_|   |_||___| |_|  |__||_______||_______||___|  |_||__| |__||___|      |___|  ")
console.log("")

//Instanciando um objeto
const bloco1 = new Bloco("Terra", 1)
bloco1.criarBloco()

const bloco2 = new Bloco("Madeira", 2)
bloco2.textura = "Diamente"
bloco2.resistencia = 4
bloco2.criarBloco()
bloco2.construir()

const bloco3 = new Bloco("Pedra", 3)
bloco3.criarBloco()

const enxada1 = new Enxada("Madeira", 2, true)
enxada1.criarEnxada()
enxada1.arar()
enxada1.minerar()
