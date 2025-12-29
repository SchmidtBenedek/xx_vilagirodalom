// Fejlec

/**
 * @type {string} A Szerző oszlop fejlece
 */
const headSzerzo = "Szerző" //Valtozo deklaralas a fejlec elso cellajanak

/** 
 * @type {string} A Mű oszlop fejlece
 */
const headMu = "Mű" //Valtozo deklaralas a fejlec masodik cellajanak

/** 
 * @type {string} A Fogalmak oszlop fejlece
 */
const headFogalmak = "Fogalmak" //Valtozo deklaralas a fejlec harmadik cellajanak



/**
 * @type {{writer: string, work1: string, concept1: string, work2?: string, concept2?: string}}  Apollinaire tulajdonsagok
 */
const iroApollinaire = { //Apollinairenek objektum definialas
    writer: "Apollinaire", //Iro tulajdonsag beallitasa
    work1: "A megsebzett galamb és a szökőkút", //mu1 beallitasa
    concept1: "képvers", //fogalom1 beallitasa
    work2: "Búcsú", //mu2 beallitasa
    concept2: "avantgárd", //fogalom2 beallitasa
}


/**
 * @type {{writer: string, work1: string, concept1: string, work2?: string, concept2?: string}}  ThomasMann tulajdonsagok
 */
const iroThomasMann = { //ThomasMann objektum definialas
    writer: "Thomas Mann", //Iro tulajdonsag beallitasa
    work1: "Mario és a varázsló", //mu1 beallitasa
    concept1: "kisregény", //fogalom2 beallitasa
}


/**
 * @type {{writer: string, work1: string, concept1: string, work2?: string, concept2?: string}}  FranzKafka tulajdonsagok
 */

const iroFranzKafka = { //FranzKafka objektum definialas
    writer: "Franz Kafka", //Iro tulajdonsag beallitasa
    work1: "A per", //mu1 beallitasa
    concept1: "regény",//fogalom1 beallitasa
    work2: "Az átváltozás", //mu2 beallitasa
    concept2: "kisregény", //fogalom2 beallitasa
}


console.log(headSzerzo + " | " + headMu + " | " + headFogalmak + " |") //A consolera kiírom a táblázat fejlécét
console.log(iroApollinaire.writer + " | " + iroApollinaire.work1 + " | " + iroApollinaire.concept1 + " |") //kiírom a consolera a táblázat 1. sorát
console.log(iroApollinaire.writer + " | " + iroApollinaire.work2 + " | " + iroApollinaire.concept2 + " |") //kiírom a consolera a táblázat 2. sorát
console.log(iroThomasMann.writer + " | " + iroThomasMann.work1 + " | " + iroThomasMann.concept1 + " |") //kiírom a consolera a táblázat 3. sorát
console.log(iroFranzKafka.writer + " | " + iroFranzKafka.work1 + " | " + iroFranzKafka.concept1 + " |") //kiírom a consolera a táblázat 4. sorát
console.log(iroFranzKafka.writer + " | " + iroFranzKafka.work2 + " | " + iroFranzKafka.concept2 + " |") //kiírom a consolera a táblázat 5. sorát