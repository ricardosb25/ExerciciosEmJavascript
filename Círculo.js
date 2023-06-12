function area(raio){
  return x = 3.14*raio**2;
}
function perimetro(raio){
  return y = 2*3.14*raio;
}
let raio = prompt("Digite o raio de um círculo: ");
let CA = area(raio);
let CP = perimetro(raio);
alert("A area do circulo é:"+CA.toFixed(2)+"\nO perimetro do circulo é: "+CP.toFixed(2));
