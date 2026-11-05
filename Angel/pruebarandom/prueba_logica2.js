
console.log("calculadora de pasar impares"); 

let numeror= Number(prompt("ingrese numero a revisar"));  

while (isNaN(numeror) || numeror<0){

    console.log("numero invalido"); 
    numeror= Number(prompt("ingrese numero a revisar")); 
}

const op = numeror % 2;  

if (numeror >0){ 

    console.log('numero '+numeror+' es impar')

}

else{ 

    console.log('numero '+numeror+' es par')
}; 

