let n, menos = 0, mas = 0;
let Texto = "";
do{
    n = prompt("Dame un numero");
    console.log(n);

    if(n < 0){
        menos++;
    }else{
        mas++;
    }
}while(n != 0);

for (let i = 1; i <= mas; i++){
    Texto += "*";
}
console.log("Positivos: ",Texto);

Texto = "";

for (let y = 1; y <= menos; y++){
    Texto += "*";
}
console.log("Negativos: ",Texto);