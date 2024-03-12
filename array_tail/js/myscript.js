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
    let print = parseInt(document.getElementById('print').value);
    let output = document.getElementById('output');
    let lastFive = '';

    for(i=0; i<nElementi; i++){
        if(nElementi >= 5){
        let load = getRndInteger(1,100);
        numeri.push(load);
    } else{
        output.innerHTML = 'Devi inserire minimo 5';
    }
    }
    console.log(numeri);
    if(print > 0 && print !== ''){
        for(i = nElementi - print; i < nElementi; i++){
            console.log(numeri[i]);
            lastFive += ` ${numeri[i]}`;
        }
    } else{
        output.innerHTML = 'inserire un numero valido nel campo elementi da stampare:'
    }
    
    output.innerHTML = lastFive ;
    // output.innerHTML += numeri[i];
})
