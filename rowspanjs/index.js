// Fejlec
/**
 * @type {string[]} Fejlec tombjenek
 */
const fejlec = ["Szerző", "Mű", "Fogalmak"] //Tomb deklaralasa a fejlecnek

/**
 * @type {{writer: string, work1: string, concept1: string, work2?: string, concept2?: string}}  Apollinaire tulajdonsagok
 */
const dataArr = [ //Tomb deklaralasa
    { //Apollinairenek objektum definialas
        writer: "Apollinaire", //Iro tulajdonsag beallitasa
        work1: "A megsebzett galamb és a szökőkút", //mu1 beallitasa
        concept1: "képvers", //fogalom1 beallitasa
        work2: "Búcsú", //mu2 beallitasa
        concept2: "avantgárd", //fogalom2 beallitasa
    },

    { //ThomasMann objektum definialas
        writer: "Thomas Mann", //Iro tulajdonsag beallitasa
        work1: "Mario és a varázsló", //mu1 beallitasa
        concept1: "kisregény", //fogalom2 beallitasa
    },

    { //FranzKafka objektum definialas
        writer: "Franz Kafka", //Iro tulajdonsag beallitasa
        work1: "A per", //mu1 beallitasa
        concept1: "regény",//fogalom1 beallitasa
        work2: "Az átváltozás", //mu2 beallitasa
        concept2: "kisregény", //fogalom2 beallitasa
    }
]

// Fejlec kiiratasa
console.log(fejlec[0] + " | " + fejlec[1] + " | " + fejlec[2] + " |") //A consolera kiírom a tablazat fejlécet

/**
 * @type {string} Apollinaire sorait tartalmazza
 */
let apollinaireRowContent = dataArr[0].writer + " | " + dataArr[0].work1 + " | " + dataArr[0].concept1 + " |" //alap sor osszeallitasa
if(dataArr[0].work2 && dataArr[0].concept2){ //vizsgalom hogy a work2 es concept2 definialva van-e
    apollinaireRowContent += "\n|  _  | " + dataArr[0].work2 + " | " + dataArr[0].concept2 + " |" //ha definialva van a \n segitsegevel uj sorba irom azokat is
}
console.log(apollinaireRowContent) // kiirom a 2 soros stringet

/**
 * @type {string} ThomasMann sorat tartalmazza
 */
let thomasRowContent = dataArr[1].writer + " | " + dataArr[1].work1 + " | " + dataArr[1].concept1 + " |" //alap sor osszeallitasa
if(dataArr[1].work2 && dataArr[1].concept2){ //vizsgalom hogy a work2 es concept2 definialva van-e
    thomasRowContent += "\n|  _  | " + dataArr[1].work2 + " | " + dataArr[1].concept2 + " |" //ha definialva van a \n segitsegevel uj sorba irom azokat is
}
console.log(thomasRowContent) //kiirom a 2 soros stringet

/**
 * @type {string} FranzKafka sorait tartalmazza
 */
let kafkaRowContent = dataArr[2].writer + " | " + dataArr[2].work1 + " | " + dataArr[2].concept1 + " |" //alap sor osszeallitasa
if(dataArr[2].work2 && dataArr[2].concept2){ //vizsgalom hogy a work2 es concept2 definialva van-e
    kafkaRowContent += "\n|  _  | " + dataArr[2].work2 + " | " + dataArr[2].concept2 + " |" //ha definialva van a \n segitsegevel uj sorba irom azokat is
}
console.log(kafkaRowContent) //kiirom a 2 soros stringet

