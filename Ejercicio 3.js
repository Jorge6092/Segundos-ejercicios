let n = 0, num = 0, contador = 1;

n = prompt("Cantidad a almacenar:");

do{
    let may = -999;
    num = prompt("Ingrese numero");
    console.log(numeros);

    if(numeros > may){
        may = num;
    }
    
    contador++;
}while(contador <= n);

console.log("el mayor es: ",may);    