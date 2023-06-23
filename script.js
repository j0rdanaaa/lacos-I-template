// prática guiada
// exercícío 1

/*
Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.


Quando a pessoa digitar o número '0', devemos parar de solicitar novos inputs (entradas) e imprimir no console a soma de todos os números inseridos.

Exemplo: A pessoa usuária colocou os números:  10, 3, 50, 7, 0 
O resultado deve ser: 70
*/
/*
function somaNumerosInseridos (){
    let numero = Number(prompt(`Digite um número:`))

    let soma = 0

    while(numero !== 0){
        soma = soma + numero
        numero = Number(prompt(`Digite outro número:`))

    }
    console.log(soma)
   
}

// somaNumerosInseridos()
*/
// exercício 2
/*
Vamos escrever um programa que recebe um número do usuário.
Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado.
*/
/*
function ImprimeNumerosAteNumeroEscolhido (){
    const numeroEscolhido = Number(prompt(`Digite um número:`))
    // i ++ é igual a 'i = i + 1' ou 'i += 1'
for(let i = 0;  i <= numeroEscolhido; i++ ){
    console.log(i)

}

}
ImprimeNumerosAteNumeroEscolhido()
*/
// exercício 3
/*Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha:
“O elemento de índice ${indice} é ${numero[indice]}”*/
/*
const numeros = [78, -854, 0, 1007, 145, 777, 19]

function imprimeMsgArray(array){
    console.log(array)
    for (let i = 0; i < array.length; i++){
console.log(`O elemento de índice ${i} é ${array[i]}`)
    }

}
imprimeMsgArray(numeros)
*/

// exercício de fixação
//1
/*
function permiteAdmin (){
    let tipoUsuario = prompt(`Digite o seu tipo de usuário de acordo com a legenda abaixo:
    "A" para administrador
    "B" para usuário comum
    "C" para usuário assinante`).toUpperCase()


    while(tipoUsuario !== 'A'){
        console.log(`Acesso negado!`)

        tipoUsuario = prompt(`Digite o seu tipo de usuário de acordo com a legenda abaixo:
        "A" para administrador
        "B" para usuário comum
        "C" para usuário assinante`).toUpperCase()
    }
console.log(`Boas vindas, admin!`)
}

permiteAdmin()
*/
// exercício 2
/*
function calculaTabuadaDois (){

for( let i = 1; i <= 10; i++ ){
    const resultado = 2 * i
    console.log(`2 * ${i} = ${resultado}`)

}

}
calculaTabuadaDois()
*/

// exercício 3



function imprimeStringsCaixaAlta (array){
    console.log(array)

    for(let i = 0; i < array.length; i++ ){
        const palavraMaiuscula = array[i].toUpperCase()
        console.log(i, palavraMaiuscula)

    }
console.log(`saiu do laço!`)
}
const palavras = ["oi", "holla", "hi"]
imprimeStringsCaixaAlta(palavras)