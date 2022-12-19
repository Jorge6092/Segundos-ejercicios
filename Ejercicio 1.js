let n = 0, numeros = 1;

n = prompt("Dame un limite");

do{

    if(numeros%3 == 0 || numeros%7 == 0){
    }else{
        console.log(numeros);
    }

    numeros++;

}while(numeros < n);