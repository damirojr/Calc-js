function soma(n1,n2){
    return n1 + n2
};
function sub(n1,n2){
    return n1 - n2
};
function div(n1,n2){
    return n1 / n2
};
function multi(n1,n2){
    return n1 * n2
};


console.log('Bem vindo a calculadora do mal');

var n1 = Number(window.prompt('insira um numero: '));
var n2 = Number(window.prompt('insira segundo numero: '));
var operacao = window.prompt('qual sera a operacao?\n "soma"\n "subtracao"\n "divisao"\n "multiplicacao"')

if (operacao == soma){
    window.alert(soma(n1,n2))
}
if (operacao == subtracao){
    window.alert(sub(n1,n2))
}
if (operacao == divisao){
    window.alert(div(n1,n2))
}
if (operacao == multiplicacao){
    window.alert(multi(n1,n2))
}


