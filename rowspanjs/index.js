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
 * @type {HTMLTableElement} a tablazat
 */
const table = document.createElement("table"); //Letrehozok 1 tablazatot
document.body.appendChild(table); //Hozzacsatolom a bodyhoz

/**
 * @type {HTMLTableSectionElement} a tablazat fejlece
 */
const tableHead = document.createElement("thead"); //thead letrehozasa -> fejlec
table.appendChild(tableHead); //thead tablazathoz csatolasa

/**
 * @type {HTMLTableSectionElement} a tablazat törzse
 */

const tableBody = document.createElement("tbody"); //tbody letrehozas -> torzs
table.appendChild(tableBody); //tbody tablazathoz valo satolasa


/**
 * @type {HTMLTableRowElement} fejléc sora
 */

const headRow = document.createElement("tr"); // sor letrehozas a fejlecnek
tableHead.appendChild(headRow); //fejlechez hozzaadas

/**
 * Fuggveny ami kirendereli a tablazat fejlecet
 * @param {string[]} fejlecLista a fejlec elemeit tartalmazo tomb 
 * @param {HTMLTableRowElement} parent amihez hozzafuzom majd az elemeket
 * @returns {void}
 */
function renderHeader(fejlecLista, parent){ //definialom a renderHeader fuggvenyt
    for(const x of fejlecLista){ //vegigiteralok a fejlecLista parameterein
        /**
         * @type {HTMLTableCellElement} a fejlec aktualis cellaja
         */
        const headCell = document.createElement('th') //fejlec aktualis cellajanak letrehozasa
        parent.appendChild(headCell) //hozzacsatolom a fejlechez a cellat
        headCell.innerText = x //tartalma meg a tombb aktualis eleme lesz
    }
}
renderHeader(fejlec, headRow) //Meghifom a fuggvenyt es elkesziti a fejlecet


/**
 * Fuggveny ami kirendereli a tablazat torzset
 * 
 * @param {LiteratureData[]} arr a tombb ami a tablazat adatait tartalmazza (torzset)
 * @returns {void}
 */
function renderTable(arr){ //definialom a renderTable fuggvenyt 1 parameterrel
    tableBody.innerHTML = "" //tableBody tartalmat kiuritem
    for(const x of arr){ // vegigiteralok az adattomb elemein
        /**
         * @type {HTMLTableRowElement} //A megjelenitendo tablazat sora
         */

        const row = document.createElement("tr") //letrehozok 1 sort a tablazatnak
        tableBody.appendChild(row) //hozzacsatolom a sort a tablazat torzsehez

        /**
         * @type {HTMLTableCellElement} //tablazat aktualis soranak elso cellaja
         */
        const cell1 = document.createElement("td") //Letrehozok egy cellat a sor elso adatanak
        row.appendChild(cell1) //Hozzacsatolopm a cellat a sorhoz
        cell1.innerText = x.writer //Beallitom a az aktualis elem writer erteket


        /**
         * @type {HTMLTableCellElement} //tablazat aktualis soranak masodik cellaja
         */
        const cell2 = document.createElement("td"); //Letrehozok egy cellat a sor masodik adatanak
        row.appendChild(cell2) //Hozzacsatolopm a cellat a sorhoz
        cell2.innerText = x.work1 //Beallitom a az aktualis elem work erteket

        /**
         * @type {HTMLTableCellElement} //tablazat aktualis soranak harmadik cellaja
         */
        const cell3 = document.createElement("td"); //Letrehozok egy cellat a sor masodik adatanak
        row.appendChild(cell3) //Hozzacsatolom a cellat a sorhoz
        cell3.innerText = x.concept1 //Beallitom a az aktualis elem concept1 erteket

       if(x.work2 && x.concept2){ //Vizsgalom hogy definialva van e az aktualis elem work2 és concept2 erteke es ha igen
            cell1.rowSpan = 2 //a cell1 rowSpan erteket 2 re allitom

            /**
             * @type {HTMLTableRowElement} //A megjelenitendo tablazat sora
            */
            const row2 = document.createElement("tr") //uj sort hozok letre az tobbi adatnak
            tableBody.appendChild(row2) //hozzacsatolom a tableBodyhoz az uj sort
            /**
             * @type {HTMLTableCellElement} //tablazat aktualis soranak elso cellaja
             */
            const cell4 = document.createElement("td"); //uj cellat hozok letre az uj sor elso adatanak
            row2.appendChild(cell4) //Hozzacsatolom a cellat a sorhoz
            cell4.innerText = x.work2 //Beallitom az aktualis elem work2 erteket
            /**
             * @type {HTMLTableCellElement} //tablazat aktualis soranak masodik cellaja
             */
            const cell5 = document.createElement("td"); //uj cellat hozok letre az uj sor masodik adatanak
            row2.appendChild(cell5) //Hozzacsatolom a cellat a sorhoz
            cell5.innerText = x.concept2 //Beallitom az aktualis elem concept2 erteket
        }
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

/**
 * @type {HTMLButtonElement} gomb ami dupla sort ad hozza
 */
const addDoubleButton = document.createElement("button") //gomb letrehozasa
addDoubleButton.innerText = "Dupla sor" //gomb szovegenek beallitasa
document.body.appendChild(addDoubleButton) //Hozzacsatolom a bodyhoz a gombot

addDoubleButton.addEventListener("click", function(){ //a gomb click esemenyere elkeszitek 1 esemenykezelot
    console.log("Clickeles megtortent, uj dupla tesztsor hozzáadva") //Visszajelzo uzenet, hogy tenylegesen megtortent e a click

    /**
     * @type {LiteratureData} //Az uj objektum
     */
    const newRow = { //uj objektum definialasa, ez lesz a hozzadott tesztsor
        writer: "TesztWriter", //writer tulajdonsag megadasa
        work1: "TesztWork1", //work1 tulajdonsag megadas
        concept1: "TesztConcept1", //concept1 tulajdonsag megadasa
        work2: "TesztWork2", //work2 tulajdonsag megadasa
        concept2: "TesztConcept2" //concept2 tulajdonsag megadasa
    }
    dataArr.push(newRow) //Hozzaadom az uj objektumot a meglevohoz
    renderTable(dataArr) //Meghivom a renderTable fuggvenyt, a mar bovitett tombbel es kiiratja a bovitett tablazatot
})







