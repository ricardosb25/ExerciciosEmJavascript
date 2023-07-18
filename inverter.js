let cont=1;
let arr = [];
while(cont<=10){
    let num = prompt("Enter your "+cont+" number: ");
    arr.push(num);
    cont=cont+1;
}
arr.reverse();
alert("The reverse order is: "+arr);