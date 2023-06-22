let num;
let numeros = [];
let pares = [];
let cont = 1;
alert("Começo do programa");
while(cont <=10){
    let num = prompt("Digite o seu "+cont+" numero: ");
    numeros.push(num);
    if(num%2==0){
        pares.push(num);
    };
    cont = cont + 1;
};
alert("Os numeros escolhidos foram: "+numeros);
alert("Os numeros pares escolhidos são: "+pares);
alert("Fim do programa");