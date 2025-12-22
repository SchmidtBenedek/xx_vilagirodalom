//Fejlec

/**
 * @type {string} //A Szerzo oszlop fejlece 
 */
const headSzerzo = "Szerző" //Valtozo deklaralas a fejlec elso cellajanak

/**
 * @type {string} // A Mu oszlop fejlece
 */
const headMu = "Mű" //Valtzozo deklaralasa a fejlec masodik cellajanak

/**
 * @type {string} //A Fogalmak oszlop fejlece
 */
const headFogalmak = "Fogalmak" //Valtzozo deklaralasa a fejlec harmadik cellajanak




/**
 * @type {{writer: string, work: string, concept1: string, concept2?: string}} // Az elso sor adatainak
 */
const firstApollinaireRow = { //elso sor objektumanak deklaralasa
    writer: "Apollinaire", //az elso sor elso oszlop adata
    work: "A megsebzett galamb és a szökőkút", //az elso sor masodik oszlop adata
    concept1: "képvers", //az elso sor harmadik oszlop adata
    concept2: "emlékezés", //az elso sor negyedik oszlop adata
}

/**
 * @type {{writer: string, work: string, concept1: string, concept2?: string}} // A masodik sor adataibak
 */
const secondApollinaireRow = { // masodik sor objektumanak deklaralasa
    writer: "Apollinaire", //a masodik sor elso oszlop adata
    work: "Búcsú", //a masodik sor masodik oszlop adata
    concept1: "avantgárd", //a masodik sor harmadik oszlop adata
}

/**
 * @type {{writer: string, work: string, concept1: string, concept2?: string}} // A harmadik sor adatainak
 */
const firstThomasMannRow = { //harmadik sor objektumanak deklaralasa
    writer: "Thomas Mann", //a harmadik sor elso oszlop adata
    work: "Mario és a varázsló", //a harmadik sor masodik oszlop adata
    concept1: "kisregény", //a harmadik sor harmadik oszlop adata
}

/**
 * @type {{writer: string, work: string, concept1: string, concept2?: string}} // A negyedik sor adatainak
 */
const firstFranzKafkaRow = { //negy edik sor  objektumanak deklaralasa
    writer: "Franz Kafka", //a negyedik sor elso oszlop adata
    work: "A per", //a negyedik sor masodik oszlop adata
    concept1: "regény", //a negyedik sor harmadik oszlop adata
}

/**
 * @type {{writer: string, work: string, concept1: string, concept2?: string}} // Az otodik sor adatainak
 */
const secondFranzKafkaRow = { //otodik sor objektumanak deklaralasa
    writer: "Franz Kafka", //az otodik sor elso oszlop adata
    work: "Az átváltozás", //az otodik sor masodik oszlop adata
    concept1: "kisregény", //az otodik sor harmadik oszlop adata
    concept2: "groteszk", //az otodik sor negyedik oszlop adata
}


console.log(headSzerzo + " | " + headMu + " | " + headFogalmak + " | |") //Tablazat fejlecenek kiiratasa
console.log(firstApollinaireRow.writer + " | " + firstApollinaireRow.work + " | " + firstApollinaireRow.concept1 + " | " + firstApollinaireRow.concept2) //Tablazat elso soranak kiiratasa
console.log(secondApollinaireRow.writer + " | " + secondApollinaireRow.work + " | " + secondApollinaireRow.concept1 + " | |") //Tablazat masodik soranak kiiratasa
console.log(firstThomasMannRow.writer + " | " + firstThomasMannRow.work + " | " + firstThomasMannRow.concept1 + " | |") //Tablazat harmadik soranak kiiratasa
console.log(firstFranzKafkaRow.writer + " | " + firstFranzKafkaRow.work + " | " + firstFranzKafkaRow.concept1 + " | |") //Tablazat negyedik soranak kiiratasa
console.log(secondFranzKafkaRow.writer + " | " + secondFranzKafkaRow.work + " | " + secondFranzKafkaRow.concept1 + " | " + secondFranzKafkaRow.concept2) //Tablazat otodik soranak kiiratasa
