/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

/*
Pseudo-Code
- creo un array
- dentro creo degli oggetti
- chiave/valore:
    - nome
    - peso

-creo un array di supporto dove pusho il valore delle chiavi peso
- ciclo for
    - scorro nell'array degli oggetti
        - i = 0, i < array oggetti.lenght, i++
        - const bici_weight = array oggetti [i].peso
        - pusho nel array di supporto i pesi

- ciclo for
    - scorro nell'array di supporto
        - i = 1, i < array supporto.lenght, i++
        let minimo = array supporto [0]
            - IF/ELSE
                - array supporto [i] > minimo
                - minimo = array supporto [i]

- trovo il peso minore

- ciclo for
    - scorro nell'array delle bici
        - SE il peso minore è uguale a oggetto.peso allora stampo quell'oggetto
*/




/* ------------------------------------------------------------------------------------------------------------*/


/* - creo un array
- dentro creo degli oggetti
- chiave/valore:
    - nome
    - peso
    */
const bycicles = [
    {
        name: 'Canyon',
        peso: 48
    },
    {
        name: 'Pinarello',
        peso: 33
    },
    {
        name: 'Van Rysel',
        peso: 60
    },
    {
        name: 'Bianchi',
        peso: 55
    },
    {
        name: 'Guerciotti',
        peso: 51
    },
    {
        name: 'Cannondale',
        peso: 30
    }
]

console.log(bycicles);
// // creato un array di oggetti, ognuno con chiavi nome e peso e rispettivi valori




// // -creo un array di supporto dove pusho il valore delle chiavi peso
// const byciclesWeights = []

// /*
// - ciclo for
//     - scorro nell'array degli oggetti
//         - i = 0, i < array oggetti.lenght, i++
//         - const bici_weight = array oggetti [i].peso
//         */
// for (let i = 0; i < bycicles.length; i++) {
//     const bycicleWeight = bycicles[i].peso;
//     console.log(bycicleWeight);

//     //- pusho nel array di supporto i pesi
//     byciclesWeights.push(bycicleWeight)
// }

// console.log(byciclesWeights);
// //scorro dentro al array degli oggetti e pusho nel array dei pesi ogni chiave peso


/*
- ciclo for
    - scorro nell'array di supporto
        - i = 1, i < array supporto.lenght, i++
        let minimo = array supporto [0]
            - IF/ELSE
                - array supporto [i] > minimo
                - minimo = array supporto [i]

- log di minimo
*/
// let weight = byciclesWeights[0];

// for (let i = 1; i < byciclesWeights.length; i++) {
//     if (byciclesWeights[i] < weight) {
//         weight = byciclesWeights[i]
//     }

//     if (weight === bycicles[i].peso) {
//         console.log(weight);
//         console.log(bycicles[i]);
//     }
// }

//creo una variabile di appoggio e dico che è uguale all'indice zero dell'array dei pesi
//scorro dentro l'array dei pesi partendo dall'indice uno
//confronto se i1 è minore di i0, allora la mia variabile di appoggio diventa i1, finchè non mi rimane l'indice con il numero più piccolo
//se il peso minore è uguale al valore della chiave di un oggetto, allora stampo sia il peso che l'oggetto



let lighterWeight = bycicles[0].peso

for (let i = 0; i < bycicles.length; i++) {



    const thisBike = bycicles[i].peso;

    if (thisBike < lighterWeight) {
        lighterWeight = thisBike
    } else {
        lighterWeight = lighterWeight
    }
    
    
    
}
console.log(lighterWeight);

