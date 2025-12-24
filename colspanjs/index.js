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

console.log(dataArr[0].writer + " | " + dataArr[0].work + " | " + dataArr[0].concept1 + " | " + dataArr[0].concept2 + " |"); //1. sor consolera kiiratasa
console.log(dataArr[1].writer + " | " + dataArr[1].work + " | " + dataArr[1].concept1 + " | |"); //2. sor consolera kiiratasa
console.log(dataArr[2].writer + " | " + dataArr[2].work + " | " + dataArr[2].concept1 + " | |"); //3. sor consolera kiiratasa
console.log(dataArr[3].writer + " | " + dataArr[3].work + " | " + dataArr[3].concept1 + " | |"); //4. sor consolera kiiratasa
console.log(dataArr[4].writer + " | " + dataArr[4].work + " | " + dataArr[4].concept1 + " | " + dataArr[4].concept2 + " |"); //5. sor consolera kiiratasa







