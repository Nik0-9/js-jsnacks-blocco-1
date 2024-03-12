/* 
Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
*/

let btn = document.querySelector('.btn.btn-primary');

btn.addEventListener('click', function(){
    let numeri = [];
    let nElementi = parseInt(document.getElementById('input').value);
    console.log(nElementi);
    let print = document.getElementById('elementToPrint').value;
    let output = document.getElementById('output');
    let error = document.getElementById('outputerror')
    let lastEl = '';

    if(nElementi >= 5){
        for(i=0; i < nElementi; i++){
        let load = getRndInteger(1,100);
        numeri.push(load);
    }
    } else{
        error.innerHTML = 'L\'array deve avere minimo 5';
    }
    
    console.log(numeri);
    if(print > 0 && print !== ''){
        for(i = nElementi - print; i < nElementi; i++){
            console.log(numeri[i]);
            lastEl += ` ${numeri[i]}`;
        }
    } else{
        error.innerHTML = 'inserire un numero valido nel campo elementi da stampare:'
    }
    output.innerHTML = lastEl;
    // output.innerHTML += numeri[i];
})
