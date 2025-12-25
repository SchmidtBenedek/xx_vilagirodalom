/**
 * @typedef {{writer: string, work: string, concept1: string, concept2?: string}} Literature // Definialok 1 tipust
 */


/**
 * @type {string[]} //A fejlechez szukseges adatok tombje 
 */
const fejlec = ["Szerző", "Mű", "Fogalmak"] //fejlec tomb deklaralasa


/**
 * @type {Literature[]} // A tablazat torzset tartalamazo adattomb
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

/**
 *Ez a fuggveny ki fog irni 1 tablazatot a consolera 
 * @param {Literature[]} arr az adattomb amin vegigiteralok
 * @returns {void}
 */
function renderTable(arr){ //Definialok 1 fuggvenyt aminek a bemeneti parametere egy tomb lesz, jelen esetben a dataArr tomb lesz

    console.log(fejlec[0] + " | " + fejlec[1] + " | " + fejlec[2] + " | |"); //Fejlec consolera iratasa

    for(const obj of arr){ //Egy for of ciklussal vegigiteralok a (arr) -> dataArr tombon
    /**
     * @type {string} //Egy sor teljes tartalma
     */

        let row = obj.writer + " | " + obj.work + " | " //Alap ertekeket megadom

        if (obj.concept2 != undefined){ //Megvizsgalom hogy a concept2 erteke definalva van e
            row += obj.concept1 + " | " + obj.concept2 + " | " //Es ha definialva van akkor a hianyzo 2 cellat hosszafuzom az alap sorhoz
        } else{ //Maskulonben ez fog lefutni
            row += obj.concept1 + " | |"//Es hozzafuzi a maradek hianyzo adatot a sorhoz
        }

    console.log(row) //Kiiratom a consolera az osszerakott sort
}
}

renderTable(dataArr) //Meghhívom a függvényem a dataArr tömbre aminek a végén kiiratásra kerül a consoloera a táblázat




