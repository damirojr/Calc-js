
function insert(value){
    var n = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = n + value;
}
function clear1(){
    document.getElementById('resultado').innerHTML = "";
}
function delet(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "Null";
    }
}