const salida = document.getElementById("salida");

function mostrar(mensaje) {
    salida.textContent += mensaje + "\n";
    console.log(mensaje);
}

mostrar("Calculadora de notas");


let inicio = (prompt("Desea iniciar operacion SI - NO") || "").trim().toUpperCase();

while(inicio !== "SI" && inicio !== "NO" ){ 

    mostrar("opcion invalida") 

    inicio = (prompt("Desea iniciar operacion SI - NO") || "").trim().toUpperCase();

}; 

while(inicio == "SI"){  

    let sumaNotes=0;
    let Compiler=[]; 

    let CantNots= parseInt(prompt("Cantidad de notas")); 

    while (isNaN(CantNots) || CantNots<1) { 

        mostrar("numero invalido") 

        CantNots= parseInt(prompt("Cantidad de notas"));  

    }; 


    for(let BucladoLander= 0; BucladoLander < CantNots; BucladoLander++ ){ 

        let notas= Number(prompt("ingrese nota"+ BucladoLander)); 

        Compiler.push(notas);

    }; 

    for(let calculador of Compiler){ 

        sumaNotes += calculador 
    }; 

    let resultado= sumaNotes/Compiler.length; 


    for(let imprimirdor in Compiler){ 

        mostrar("Nota " + (Number(imprimirdor) + 1) + ": " + Compiler[imprimirdor]);

    };  

    if (resultado < 5){ 

        mostrar("El promedio es de " + resultado + " desaprobado"); 

    } 
    else{

        mostrar("El promedio es de " + resultado + " aprobado"); 
    }; 


    inicio = (prompt("Desea repetir operacion SI - NO") || "").trim().toUpperCase();
    
    while(inicio !== "SI" && inicio !== "NO" ){ 

    mostrar("opcion invalida") 

    inicio = (prompt("Desea repetir operacion SI - NO") || "").trim().toUpperCase();
    }; 

};  

mostrar("salio del programa")

