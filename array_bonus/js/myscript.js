/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

let ar1 = [10, 20, 30, 40, 50];
let ar2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let diff = 0;
console.log(ar1, ar2);
if (ar1.length < ar2.length){
    diff = parseInt(ar2.length - ar1.length);
}else{
    diff = parseInt(ar1.length - ar2.length)
}
let add = 0;
if(ar1.length !== ar2.length){
    for(i=0; i < diff; i++){
        if(ar1.length > ar2.length){
            ar2.push(getRndInteger(1,99));
        } else{
            ar1.push(getRndInteger(1,99));
        }
    }
}else{
    console.log('Gli array hanno lo stesso numero di elementi');
}
console.log(diff);
console.log(ar1, ar2);