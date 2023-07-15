function conta(lado){
    x = lado*lado;
    return x;
};

let lado = prompt("Enter with the side of the square: ");
let area = conta(lado);
alert("The square area is: "+area);
