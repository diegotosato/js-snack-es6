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

-creo un array di supporto dove pusho l'oggetto con il peso minore
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

- log di minimo
*/