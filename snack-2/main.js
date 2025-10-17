/*
Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

/*
PSEUDO-CODE

- creo un array di oggetti
- oggetto
    - nome
    - punti fatti = 0
    - falli subiti = 0

- ciclo nel array
    - ad ogni interazione
        - array[i].punti fatti = math random
        - array[i].falli subiti = math random

- loggo primo array e vedo se cambiano i numeri

- nello stesso ciclo di prima, dichiaro una variabile per i dati del team aggiornati
    - questa variabile è un oggetto
        - il cui name = name originale
        - il cui valore di falli subiti = nuovo valore random
*/





const teams = [
    {
        name: 'Milan',
        points: 0,
        fouls_suffered: 0
    },
    {
        name: 'Inter',
        points: 0,
        fouls_suffered: 0
    },
    {
        name: 'Roma',
        points: 0,
        fouls_suffered: 0
    },
    {
        name: 'Napoli',
        points: 0,
        fouls_suffered: 0
    },
    {
        name: 'Juventus',
        points: 0,
        fouls_suffered: 0
    },
]

console.log(teams);



for (let i = 0; i < teams.length; i++) {
    teams[i].points = Math.floor(Math.random() * 100)
    teams[i].fouls_suffered = Math.floor(Math.random() * 100)

    const teamDataUpdate = {
        name: teams[i].name,
        fouls_suffered: teams[i].fouls_suffered
    }
}