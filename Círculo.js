function area(raio){
  return x = 3.14*raio**2;
}
function perimetro(raio){
  return y = 2*3.14*raio;
}
let raio = prompt("Enter the radius of a circle: ");
let CA = area(raio);
let CP = perimetro(raio);
alert("The area of ​​the circle is:"+CA.toFixed(2)+"\nThe perimeter of the circle is: "+CP.toFixed(2));
