{
   
    let a = prompt("Ingrese su nombre", "");
    let b = prompt("Ingrese nombre de la materia ", ""); 
    var c = parseInt(prompt("Ingrese la nota 1", ""));
    var d = parseInt(prompt("Ingrese la nota 2", ""));
    var e = parseInt(prompt("Ingrese la nota 3", ""));


    if (c<=10 & c>=0 & d<=10 & d>=0 & e<=10 & e>=0){
        suma= (c + d + e);
        promedio = Number((suma/3).toFixed(2));
        if (promedio >= 7){
            console.log(" Felicidades! " + a +  " Aprobaste " + b + " con " +  promedio);

        }   else{
            console.log("Gracias por tu esfuerzo, Nos vemos pronto en  clase de " +  b + " , " +  a  + " tu pormedio fue de " + promedio);
        } 

    } else {
        alert("Los notas ingresadas no son válidas")
    }

}
