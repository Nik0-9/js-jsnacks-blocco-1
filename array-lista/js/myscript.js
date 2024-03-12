/*
Abbiamo un frigorifero pieno di frutta:
'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
*/

let btn = document.querySelector('.btn.btn-primary');

btn.addEventListener('click', function(){
    let frigorifero = [
        'banana',
        'mela',
        'pera',
        'ciliegia',
        'arancia',
        'mandarino',
        'cocomero',
        'limone',
        'fragola'
    ];
    let addFruit = 'pesca';
    frigorifero.push(addFruit);
    console.log(frigorifero);
    exist = false;
    let stampa = document.getElementById('output');
    let input = document.getElementById('frutta').value;
    for(i = 0; i <= frigorifero.length - 1; i++){
        if(input === frigorifero[i]){
            exist = true;
        }
    } if(exist){
        stampa.innerHTML = 'Trovato! Devo solo preparare il cocktail.'
    } else{
        stampa.innerHTML = 'Oh no, devo uscire a comprare il cocomero!'
    }
})

