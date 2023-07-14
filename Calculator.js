alert("initialized program")
let resultado,op,num1,num2;
let continuar="s"
while (continuar=="y"||continuar=="Y"){
    op = prompt("Menu de calculo:\n1-Sum\n2-Subtraction\n3-Multiplicity\n4-division\nChoose the operation: ");
    num1 = prompt("Choose a number: ");
    num2 = prompt("Chosse more one number: ");
    if(op==1){
    resultado=num1+num2;
    alert("The result is ",resultado);
    }
    else if(op==2){
    resultado=num1-num2;
    alert("The result is ",resultado);
    }
    else if(op==3){
    resultado=num1*num2;
    alert("The result is ",resultado);
    }
    else if(op==4){
    resultado=num1/num2;
    alert("The result is ",resultado);
    }
    continua = prompt("Continue(Y/N)?")
}
alert("Finished program")
