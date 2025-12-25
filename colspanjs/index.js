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
 * @type {HTMLTableCellElement} fejlec elso cellaja
 */
const headSzerzoCell = document.createElement("th") //fejlec elso adatanak letrehozasa
headRow.appendChild(headSzerzoCell) //elso adat fejlec sorhoz valo csatolasa
headSzerzoCell.innerText = fejlec[0] //fejlec tombbol beallitom a megfelelo adatot

/**
 * @type {HTMLTableCellElement} fejlec masodik cellaja
 */
const headMuCell = document.createElement("th") //fejlec masodik adatanak letrehozasa
headRow.appendChild(headMuCell) //masodik adat fejlec sorhoz valo csatolasa
headMuCell.innerText = fejlec[1] //fejlec tombbol beallitom a megfelelo adatot

/**
 * @type {HTMLTableCellElement} fejlec harmadik cellaja
 */
const headFogalmakCell = document.createElement("th") //fejlec masodik adatanak letrehozasa
headRow.appendChild(headFogalmakCell) //masodik adat fejlec sorhoz valo csatolasa
headFogalmakCell.innerText = fejlec[2] //fejlec tombbol beallitom a megfelelo adatot


/**
 *Ez a fuggveny megjelenit 1 tablazatot
 * @param {Literature[]} arr az adattomb amin vegigiteralok
 * @returns {void}
 */
function renderTable(arr){ //Definialok 1 fuggvenyt aminek a bemeneti parametere egy tomb lesz, jelen esetben a dataArr tomb lesz

    tableBody.innerHTML = ""; //tableBody tartalmat kiuritem

    for(const obj of arr){ //Egy for of ciklussal vegigiteralok a (arr) -> dataArr tombon
        
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
        cell1.innerText = obj.writer //Beallitom a az aktualis elem writer erteket
        
        /**
         * @type {HTMLTableCellElement} //tablazat aktualis soranak masodik cellaja
         */
        const cell2 = document.createElement("td"); //Letrehozok egy cellat a sor masodik adatanak
        row.appendChild(cell2); //Hozzacsatolopm a cellat a sorhoz
        cell2.innerText = obj.work; //Beallitom a az aktualis elem work erteket

        /**
         * @type {HTMLTableCellElement} ////tablazat aktualis soranak harmadik cellaja
         */
        const cell3 = document.createElement("td"); //Letrehozok egy cellat a sor masodik adatanak
        row.appendChild(cell3); //Hozzacsatolopm a cellat a sorhoz
        cell3.innerText = obj.concept1; //Beallitom a az aktualis elem concept1 erteket

        if(obj.concept2){ //megvizsgalom, hogy van e ilyen
            /**
             * @type {HTMLTableCellElement} ////tablazat aktualis soranak negyedik cellaja
             */
            const cell4 = document.createElement("td"); //Letrehozok egy cellat a sor negyedik adatanak ha definialva van
            row.appendChild(cell4); //Hozzacsatolopm a cellat a sorhoz
            cell4.innerText = obj.concept2; //Beallitom a az aktualis elem concept2 erteket
        }
        

    
}
}

renderTable(dataArr) //Meghhívom a függvényem a dataArr tömbre aminek a végén kiiratásra kerül a consoloera a táblázat


/**
 * @type {HTMLButtonElement} gomb ami hozzafuz 1 sort az adattombhoz es consolera iratja a tablazatot
 */

const addItemButton = document.createElement("button") //Gomb letrehozasa
addItemButton.innerText = "Szimpla egy sor hozzáadása" //Gomb szovegenek allitasa
document.body.appendChild(addItemButton) //Hozzaadom a bodyhoz a gombot

addItemButton.addEventListener("click", function(){ //Keszitek 1 esemenykezelot click esemenyre
    console.log("Clickeles megtortent, szimpla sor hozzadva") //Uzenet a consolera hogy tenyleg megtortent e a clickeles

    /**
     * @type {Literature} //Egy adat amit a tombhoz fogok fuzni
     */
    const newRow =  { //objektumot deklaralok amit kesobb a tombhoz fuzok
        writer: "TestWriter", //wirter ertekadat
        work: "TestWork", //work ertekadat
        concept1: "TestConcept1", //concept1 ertekadas
    }
    dataArr.push(newRow) //Hozzafuzom az uj elobb elkeszitett objektumot a tombhoz
    renderTable(dataArr) //Ujrahivom a fuggvenyt mostmar a hozzafutott adat is benne lesz es kliiratom
})


/**
 * @type {HTMLButtonElement} gomb ami hozzafuz 1 duplas sort az adattombhoz es consolera iratja a tablazatot
 */

const addDoubleItemButton = document.createElement("button") //Gomb letrehozasa
addDoubleItemButton.innerText = "Duplas sor hozzáadása" //Gomb szovegenek allitasa
document.body.appendChild(addDoubleItemButton) //Hozzaadom a bodyhoz a gombot

addDoubleItemButton.addEventListener("click", function(){ //Keszitek 1 esemenykezelot click esemenyre
    console.log("Clickeles megtortent, duplas sor hozzadva") //Uzenet a consolera hogy tenyleg megtortent e a clickeles

    /**
     * @type {Literature} //Egy adat amit a tombhoz fogok fuzni
     */
    const newRow =  { //objektumot deklaralok amit kesobb a tombhoz fuzok
        writer: "TestWriter", //wirter ertekadat
        work: "TestWork", //work ertekadat
        concept1: "TestConcept1", //concept1 ertekadas
        concept2: "TestConcept2", //concept2 ertekadas
    }
    dataArr.push(newRow) //Hozzafuzom az uj elobb elkeszitett objektumot a tombhoz
    renderTable(dataArr) //Ujrahivom a fuggvenyt mostmar a hozzafutott adat is benne lesz es kliiratom
})



