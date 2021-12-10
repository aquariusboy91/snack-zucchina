// Crea un array di 10
//  oggetti che rappresentano 
//  una zucchina, indicando per ognuna varietà, 
//  peso e lunghezza.
// Calcola quanto pesano
//  tutte le zucchine


// let zucchine = [{
//     varieta: "normale",
//     peso: 30,
//     lunghezza: 50
// },
// {
//     varieta: "normale",
//     peso: 30,
//     lunghezza: 40
// }
// ,
// {
//     varieta: "normale",
//     peso: 30,
//     lunghezza: 3
// }
// ,
// {
//     varieta: "normale",
//     peso: 30,
//     lunghezza: 15
// }
// ,
// {
//     varieta: "normale",
//     peso: 30,
//     lunghezza: 30
// }
// ,
// {
//     varieta: "normale",
//     peso: 30,
//     lunghezza: 14
// }
// ,
// {
//     varieta: "normale",
//     peso: 5,
//     lunghezza: 5
// },
// {
//     varieta: "normale",
//     peso: 8,
//     lunghezza: 20
// },
// {
//     varieta: "normale",
//     peso: 20,
//     lunghezza: 13
// },
// {
//     varieta: "normale",
//     peso: 40,
//     lunghezza: 18
// }];


// array_meno15 = [];

// array_piu15 = [];

//FOR IN SU OGGETTI
// let peso_tot = 0;
// for (let key in zucchine){
//     peso_tot += zucchine[key].peso;
   
// }

// console.log(peso_tot);


// //FOR SU ARRAY
// let peso_tot = 0;
// for (i = 0; i < zucchine.length; i++) {
//     let element = zucchine[i];
//     peso_tot += element.peso;
// }

// console.log(peso_tot);

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine
//  che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano
//  i due gruppi di zucchine.


// for (i = 0; i < zucchine.length; i++) {
//     if (zucchine[i].lunghezza < 15) {
//         array_meno15.push(zucchine[i]);
//     } else if (zucchine[i].lunghezza > 15) {
//         array_piu15.push(zucchine[i]);
//     }
// }

// console.log(array_meno15);
// console.log(array_piu15);

// //FOR SU ARRAY
// let peso_tot_piu15 = 0;
// for (i = 0; i < array_piu15.length; i++) {
//     let element = array_piu15[i];
//     peso_tot_piu15 += element.peso;
// }

// console.log(peso_tot_piu15);

// //FOR SU ARRAY
// let peso_tot_meno15 = 0;
// for (i = 0; i < array_meno15.length; i++) {
//     let element = array_meno15[i];
//     peso_tot_meno15 += element.peso;
// }

// console.log(peso_tot_meno15);

// Scrivi una funzione che fonda due array 
// (aventi lo stesso numero di elementi) 
// prendendo alternativamente gli elementi 
// da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

let array1 = ["pippo", "paolo" , "pluto "];
let array2 = [" peppe ", "pippa", "pappa"];



let array3 = [];
function Merge(array1, array2) {
    for (i = 0; i < array1.length; i++) {
        array3.push(array1[i]);
        array3.push(array2[i]);
        
    }
    return array3;
    
}

let console_array = Merge(array1,array2);

console.log(console_array);











