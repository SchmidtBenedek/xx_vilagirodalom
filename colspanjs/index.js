/**
 * @type {string[]} //A fejlechez szukseges adatok tombje
 */
const fejlec = ["Szerző", "Mű", "Fogalmak"] //fejlec tomb deklaralasa


/**
 * @type {{writer: string, work: string, concept1: string, concept2?: string}[]} // A tablazat torzset tartalamazo adattomb
 */
const dataArr = [ //tombot deklaralok
    { //elso sor objektumanak deklaralasa
        writer: "Apollinaire", //az elso sor elso oszlop adata
        work: "A megsebzett galamb és a szökőkút", //az elso sor masodik oszlop adata
        concept1: "képvers", //az elso sor harmadik oszlop adata
        concept2: "emlékezés", //az elso sor negyedik oszlop adata
    },

    { // masodik sor objektumanak deklaralasa
        writer: "Apollinaire", //a masodik sor elso oszlop adata
        work: "Búcsú", //a masodik sor masodik oszlop adata
        concept1: "avantgárd", //a masodik sor harmadik oszlop adata
    },

    { //harmadik sor objektumanak deklaralasa
        writer: "Thomas Mann", //a harmadik sor elso oszlop adata
        work: "Mario és a varázsló", //a harmadik sor masodik oszlop adata
        concept1: "kisregény", //a harmadik sor harmadik oszlop adata
    },

    { //negyedik sor  objektumanak deklaralasa
        writer: "Franz Kafka", //a negyedik sor elso oszlop adata
        work: "A per", //a negyedik sor masodik oszlop adata
        concept1: "regény", //a negyedik sor harmadik oszlop adata
    },

    { //otodik sor objektumanak deklaralasa
        writer: "Franz Kafka", //az otodik sor elso oszlop adata
        work: "Az átváltozás", //az otodik sor masodik oszlop adata
        concept1: "kisregény", //az otodik sor harmadik oszlop adata
        concept2: "groteszk", //az otodik sor negyedik oszlop adata
    }
]

console.log(fejlec[0] + " | " + fejlec[1] + " | " + fejlec[2] + " | |"); //Fejlec consolera iratasa

/**
 * @type {string} Elso sor teljes tartalmanka tarolasa
 */
let firstRow = dataArr[0].writer + " | " + dataArr[0].work + " | "; //Alap ertekeket megadom
if (dataArr[0].concept2 != undefined) {  //Megvizsgalom hogy a concept2 erteke definalva van e
    firstRow += dataArr[0].concept1 + " | " + dataArr[0].concept2 + " |"; //Es ha definialva van akkor a hianyzo 2 cellat hosszafuzom az alap sorhoz
} else { //Maskulonben ez fog lefutni
    firstRow += dataArr[0].concept1 + " | |"; //Es hozzafuzi a maradek hianyzo adatot a sorhoz
}
console.log(firstRow); //Kiiratom az 1. sort a consolera


/**
 * @type {string} Masodik sor teljes tartalmanak tarolasa
 */
let secondRow = dataArr[1].writer + " | " + dataArr[1].work + " | "; //Alap ertekeket megadom
if (dataArr[1].concept2 != undefined) { //Megvizsgalom hogy a concept2 erteke definalva van e
    secondRow += dataArr[1].concept1 + " | " + dataArr[1].concept2 + " |"; //Es ha definialva van akkor a hianyzo 2 cellat hosszafuzom az alap sorhoz
} else { //Maskulonben ez fog lefutni
    secondRow += dataArr[1].concept1 + " | |"; //Es hozzafuzi a maradek hianyzo adatot a sorhoz
}
console.log(secondRow); //Kiiratom a 2. sort a consolera


/**
 * @type {string} Harmadik sor teljes tartalmanak tarolasa
 */
let thirdRow = dataArr[2].writer + " | " + dataArr[2].work + " | "; //Alap ertekeket megadom
if (dataArr[2].concept2 != undefined) { //Megvizsgalom hogy a concept2 erteke definalva van e
    thirdRow += dataArr[2].concept1 + " | " + dataArr[2].concept2 + " |"; //Es ha definialva van akkor a hianyzo 2 cellat hosszafuzom az alap sorhoz
} else { //Maskulonben ez fog lefutni
    thirdRow += dataArr[2].concept1 + " | |"; //Es hozzafuzi a maradek hianyzo adatot a sorhoz
}
console.log(thirdRow); //Kiiratom a 3. sort a consolera


/**
 * @type {string} Negyedik sor teljes tartalmanak tarolasa
 */
let fourthRow = dataArr[3].writer + " | " + dataArr[3].work + " | "; //Alap ertekeket megadom
if (dataArr[3].concept2 != undefined) { //Megvizsgalom hogy a concept2 erteke definalva van e
    fourthRow += dataArr[3].concept1 + " | " + dataArr[3].concept2 + " |"; //Es ha definialva van akkor a hianyzo 2 cellat hosszafuzom az alap sorhoz
} else { //Maskulonben ez fog lefutni
    fourthRow += dataArr[3].concept1 + " | |"; //Es hozzafuzi a maradek hianyzo adatot a sorhoz
}
console.log(fourthRow); //Kiiratom a 4. sort a consolera


/**
 * @type {string} Otodik sor teljes tartalmanak tarolasa
 */
let fifthRow = dataArr[4].writer + " | " + dataArr[4].work + " | "; //Alap ertekeket megadom
if (dataArr[4].concept2 != undefined) { //Megvizsgalom hogy a concept2 erteke definalva van e
    fifthRow += dataArr[4].concept1 + " | " + dataArr[4].concept2 + " |"; //Es ha definialva van akkor a hianyzo 2 cellat hosszafuzom az alap sorhoz
} else { //Maskulonben ez fog lefutni
    fifthRow += dataArr[4].concept1 + " | |"; //Es hozzafuzi a maradek hianyzo adatot a sorhoz
}
console.log(fifthRow); //Kiiratom az 5. sort a consolera
