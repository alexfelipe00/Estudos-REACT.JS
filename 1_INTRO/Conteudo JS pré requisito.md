# Conteúdos em JS como pré-requisito para aprender REACT

## Intro

1. **Vite** - Ferramenta usada para criar os projetos, ela contém os compiladores (traduzem as funções mais recenbtes do JS para os navegadores) e os bundlers (arquivo que contém todos os arquivos necessários para a execução do código)
2. Iniciando um projeto:

```
npm create vite@latest
cd .\nomeprojeto\
npm install
npm run dev
```

## Métodos e sintaxe

**Nullish Coalescing Operator**

```
// ?? Operador OU que olha para apenas valores que são realmente invalidos (null, undefined)
const idade = 0;
document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não informado'))
```

**Objetos**

```javascript
const user = {
	name: 'Diego',
	idade: 27,
	address: {
		street: 'Rua teste',
		number: 964,
	},
};
```


```javascript
//JSON.stringify - Transforma para JSON

//Object.keys - Vetor com todas as chaves do objeto
document.body.innerText = JSON.stringify(Object.keys(user))

//Object.values - Retorna todos os valores do objeto
document.body.innerText = JSON.stringify(Object.values(user))

//Object.entries - Retorna vetores com subvetores, sendo os subvetores 2 valores: a chave do objeto e o valor do objeto
document.body.innerText = JSON.stringify(Object.entries(user))
```

**Objetos - Desestruração - Usado para obter um valor de um objeto para uma variavel**

```javascript
//Desestruração - Usado para obter um valor de um objeto para uma variavel em qualquer lugar que lide com objetos
const { address, idade:age, nickname = 'Fernandes'} = user //Obtem os valores de address e idade do objeto em duas variaveis chamadas address e age, além de criar outra variavel com valor padrão
document.body.innerText = JSON.stringify({ address, age})


function mostraIdade({ idade = 'Vazia'}){
	return idade
}
document.body.innerText = mostraIdade(user)

```

**Objetos - Desestruração - Rest Operator** 

```javascript
//Pega o restante dos elementos
const array = [1, 2, 3, 4, 5, 6]

//Pega o valor 1 e salva na constante first, pula o segundo elemento, pega o terceiro elemento na constante third e pega o restante com  na variavel rest com ...rest
const [first, , third, ...rest] = array; 
//Saída
{
	"first": 1,
	"third": 3,
	"rest": [
		4,
		5,
		6
	]
}
```
