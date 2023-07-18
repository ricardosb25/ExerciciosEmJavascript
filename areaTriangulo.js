function conta(base,altura){
    x = (base*altura)/2;
    return x;
};

let base = prompt("Enter the base of the triangle: ");
let altura = prompt("Enter the height of the triangle: ");
let area = conta(base,altura);
alert("The area of ​​the triangle is: "+area);