/**
 * @typedef {{writer: string, work1: string, concept1: string, work2?: string, concept2?: string}} LiteratureData
 */


// Fejlec
/**
 * @type {string[]} Fejlec tombjenek
 */
const fejlec = ["Szerző", "Mű", "Fogalmak"] //Tomb deklaralasa a fejlecnek

/**
 * @type {LiteratureData[]} A tomb ami alapjan keszul a tablazat
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

/**
 * Fuggveny ami kiiratja a tablazatot a consolera
 * 
 * @param {LiteratureData} arr a tombb ami a tablazat adatait tartalmazza (torzset)
 * @returns {void}
 */
function renderTable(arr){ //definialom a renderTable fuggvenyt 1 parameterrel
    console.log(fejlec[0] + " | " + fejlec[1] + " | " + fejlec[2] + " |"); //Kiirom consolera a tablazat fejlecet
    for(const x of arr){ // vegigiteralok az adattomb elemein
        /**
         * @type {string} tartalmazza az aktualis sort
         */
        let currentRow = x.writer + " | " + x.work1 + " | " + x.concept1 + " |" //asor osszeallitasa
        if(x.work2 && x.concept2){ //vizsgalom work2 es concept2 definialva van-e
            currentRow += "\n|  _  | " + x.work2 + " | " + x.concept2 + " |" // Ha definialva van a \n segitsegevel uj sorba irom azokat is
        }
        console.log(currentRow) //kiirom a 2 soros stringet
    }
}

renderTable(dataArr) //meghivom a fuggvenyt es ez kiiratja a tablazatot a consolera 

/**
 * @type {HTMLButtonElement} gomb ami szimpla, egyszeru sort ad hozza
 */
const addSimpleButton = document.createElement("button") //gomb letrehozasa
addSimpleButton.innerText = "Szimpla sor" //gomb szovegenek beallitasa
document.body.appendChild(addSimpleButton) //Hozzacsatolom a bodyhoz a gombot

addSimpleButton.addEventListener("click", function(){ //a gomb click esemenyere elkeszitek 1 esemenykezelot
    console.log("Clickeles megtortent, uj szimpla tesztsor hozzáadva") //Visszajelzo uzenet, hogy tenylegesen megtortent e a click

    /**
     * @type {LiteratureData} //Az uj objektum
     */
    const newRow = { //uj objektum definialasa, ez lesz a hozzadott tesztsor
        writer: "TesztWriter", //writer tulajdonsag megadasa
        work1: "TesztWork1", //work1 tulajdonsag megadas
        concept1: "TesztConcept1" //concept1 tulajdonsag megadasa
    }
    dataArr.push(newRow) //Hozzaadom az uj objektumot a meglevohoz
    renderTable(dataArr) //Meghivom a renderTable fuggvenyt, a mar bovitett tombbel es kiiratja a bovitett tablazatot
})
