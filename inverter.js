let cont=1;
let arr = [];
while(cont<=10){
    let num = prompt("Digite o seu "+cont+" numero: ");
    arr.push(num);
    cont=cont+1;
}
arr.reverse();
alert("A ordem inversa é: "+arr);