prompt("programa inicializado")
let resultado,op,num1,num2;
let continuar="s"
while (continuar=="s"||continuar=="S"){
    op = prompt("Menu de calculo:\n1-soma\n2-subtração\n3-multiplicação\n4-divisão\nEscolha a operação: ");
    num1 = prompt("Digite um numero: ");
    num2 = prompt("Digite mais um numero: ");
    if(op==1){
    resultado=num1+num2;
    prompt("O seu resultado é",resultado);
    }
    else if(op==2){
    resultado=num1-num2;
    prompt("O seu resultado é",resultado);
    }
    else if(op==3){
    resultado=num1*num2;
    prompt("O seu resultado é",resultado);
    }
    else if(op==4){
    resultado=num1/num2;
    prompt("O seu resultado é",resultado);
    }
    continua = prompt("Deseja continuar(S/N)?")
}
prompt("Programa finalizado")
