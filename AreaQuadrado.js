function conta(lado){
    x = lado*lado;
    return x;
};

let lado = prompt("Digite o lado do quadrado: ");
let area = conta(lado);
alert("A area do quadrado é: "+area);