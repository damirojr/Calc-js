function sum(n1, n2){
    return n1 + n2
}

function sub(n1, n2){
    return n1 - n2
}

function div(n1, n2){
    return n1 / n2
}

function mul(n1, n2){
    return n1 * n2
}

const readline = require('readline')({
  input: process.stdin,
  output: process.stdout
});


//Fim boolean
var fim = true

var n1=0 , n2=0
var operacao

do{
    //console.log('calculadora do mal mlk')
    readline.question('Escolha um numero: ', n1)
    readline.question('Escolha o segundo numero: ', n2)
    
    readline.question('Selecione a operacao: 1 SOMA\n 2 SUBTRACAO\n 3 DIVISAO\n 4 MULTIPLICACAO', operacao)
    


    switch(operacao){
        case operacao == 1:
            return sum(n1, n2)
            break
        
        case operacao == 2:
            return sub(n1, n2)
            break
        
            case operacao == 3:
            return div(n1, n2)
            break
        
            case operacao == 4:
            return mul(n1, n2)
            break
    }

    readline.question('quer sair?: True or False', fim)


}while(fim==false)