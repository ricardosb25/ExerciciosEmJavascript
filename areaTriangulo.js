function conta(base,altura){
    x = (base*altura)/2;
    return x;
};

let base = prompt("Digite a base do triangulo: ");
let altura = prompt("Digite a altura do triangulo: ");
let area = conta(base,altura);
alert("A area do triangulo é: "+area);