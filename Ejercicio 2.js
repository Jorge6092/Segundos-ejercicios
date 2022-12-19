let n = 0, s1 = 0, s2 = 0, contador;

n = prompt("Limite");

do{
    s1 = s1 + contador;

    contador = contador + 1;
}while(contador <= n)
s2=(n*((n+1)/2));

console.log("S1 = ",s1);
console.log("S2 = ",s2);

if(s1==s2){
    console.log("iguales");
}else{
    console.log("no iguales");
}