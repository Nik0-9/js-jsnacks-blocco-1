/*
Abbiamo un frigorifero pieno di frutta:
'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
*/

let btnSearch = document.querySelector('.btn.btn-primary');


btnSearch.addEventListener('click', function(){
    let frigorifero = [
        'banana' ,
        'mela' ,
        'pera' ,
        'ciliegia' ,
        'arancia' ,
        'mandarino' ,
        'cocomero' ,
        'limone' ,
        'fragola'
    ];
    let printFridge = document.getElementById('fridge');
    printFridge.innerHTML = `${frigorifero}`;
    let partyFruit = document.getElementById('partyFruit').value;
    exist = false;
    let stampa = document.getElementById('output');
    for(i = 0; i <= frigorifero.length - 1; i++){
        if(partyFruit.toLowerCase() === frigorifero[i]){
            exist = true;
        }
    } if(exist){
        stampa.innerHTML = `Trovato! Devo solo preparare il cocktail a base di ${partyFruit}.`
    } else{
        stampa.innerHTML = `Oh no, devo uscire a comprare il ${partyFruit}!`
    }
})

