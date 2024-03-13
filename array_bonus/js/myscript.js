/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

let btn = document.querySelector('.btn.btn-primary')

btn.addEventListener('click', function(){
    let ar1scan = document.getElementById('array1').value;
    let ar2scan = document.getElementById('array2').value;
    let ar1 = [];
    let ar2 = [];
    let diff = 0;
    console.log(ar1scan, ar2scan);

for(i=0; i<=ar1scan; i++){
    ar1.push(getRndInteger(1,90));
    for(i=0; i<ar1.length; i++){
        if(ar1[i] === ar1[i - 1]){
            // console.log(ar1[i], ar1[i - 1]);
            ar1.pop();
        }
    }
}
for(i=0; i<=ar2scan; i++){
    ar2.push(getRndInteger(1,90));
    for(i=0; i<ar2.length; i++){
        if(ar2[i] === ar2[i - 1]){
            //console.log(ar1[i], ar1[i - 1]);
            ar2.pop();
        }
    }
}
console.log('array1',ar1);
console.log('array2',ar2);


if (ar1.length < ar2.length){
    diff = parseInt(ar2.length - ar1.length);
}else{
    diff = parseInt(ar1.length - ar2.length)
}
let add = 0;
if(ar1.length !== ar2.length){
    for(i=0; i < diff; i++){
        if(ar1.length > ar2.length){
            ar2.push(getRndInteger(91,99));
        } else{
            ar1.push(getRndInteger(91,99));
        }
    }
}else{

    console.log('Gli array hanno lo stesso numero di elementi');
}

console.log('differenza di elementi',diff);
console.log('array1',ar1);
console.log('array2',ar2);
})