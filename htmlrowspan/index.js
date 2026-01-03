/**
 * @typedef {{writer: string, work1: string, concept1: string, work2?: string, concept2?: string}} Literaturer
 */

/**
 * @type {HTMLButtonElement} a gomb ami a simpla sort intezi majd
 */
const simpleButton = document.getElementById("simplebutton") //lekerem a szimpla gombot

simpleButton.addEventListener("click", function(){ //esemenykezelot keszitek a szimplagomb click esemenyere
    console.log("Szimpla sor gombajanak kattintasa megtortent, mukodik") //console loggal ellenorzom hogy mukodik e

    /**
     * @type {Literaturer} a sor objektuma
     */
    const newRow = { //objektum deklaralas
        writer: "TestWriter", //writer ertekadas
        work1: "TestWork1", //work1 ertekadas
        concept1: "TestConcept1" //concept1 ertekadas
    }

    /**
     * @type {HTMLTableSectionElement} a tablazat torzse
     */
    const tableBody = document.getElementById("tablebody") //elkerem a tablazat torzset

    addRow(newRow, tableBody) //meghivom a fuggvenyt es hozzadja a ssort
})


/**
 * @type {HTMLButtonElement} a gomb ami a dupla sort intezi majd
 */
const doubleButton = document.getElementById("doublebutton") //lekerem a dupla gombot

doubleButton.addEventListener("click", function(){ //esemenykezelo a dupla gombra
    console.log("Dupla sor gombjanak kattintasa megtortent, mukodik") //console loggal ellenorzom hogy mukodik

    /**
     * @type {Literaturer} a sor objektuma
     */
    const newRow = { //objektum deklaralas
        writer: "TestWriter", //writer ertekadas
        work1: "TestWork1", //work1 ertekadas
        concept1: "TestConcept1", //concept1 ertekadas
        work2: "TestWork2", //work2 ertekadas
        concept2: "TestConcept2" //concept2 ertekadas
    }

    /**
     * @type {HTMLTableSectionElement} a tablazat torzse
     */
    const tableBody = document.getElementById("tablebody") //elkerem a tablazat torzset

    addRow(newRow, tableBody) //meghivom a fuggvenyt es hozzadja a tablazatot
})


/**
 * Egy uj sort ad hozza a tablazathoz
 * 
 * @param {Literaturer} newRow amit hozzafuzunk a tablazathoz
 * @param {HTMLTableSectionElement} tableBody a tablazat torzse ahova hozzafuzom az uj sort 
 * @returns {void}
 */
function addRow(newRow, tableBody){ //fugvenyt definialok 2 parameterrel
    /**
     * @type {HTMLTableRowElement} a tablazat uj sora
     */
    const row = document.createElement("tr") //sor letrehozasa
    tableBody.appendChild(row) //hozzafuzonm a tableBodyhoz

    /**
     * @type {HTMLTableCellElement} a tablazat elso soranak elso cellaja
     */
    const cell1 = createCell(newRow.writer, row) //cellat hozok letre writer tulajdonsaggal, uj sorhoz csatolom, majd valtzozoba teszem hogy kesobb tudjam hasznalni mert kell a rowspanhez
    createCell(newRow.work1, row) //cellat hozok letre work1 tulajdonsaggal majd uj sorhoz csatolom
    createCell(newRow.concept1, row) //cellat hozok letre concept1 tulajdonsaggal majd uj sorhoz csatolom

    if(newRow.work2 !== undefined && newRow.concept2 !== undefined){ //vizsgalom hogy work2 es concept2 definialva van e
        cell1.rowSpan = 2 //cell1 rowSpanjat 2 re allitom

        /**
         * @type {HTMLTableRowElement} a tablazat uj sora
         */
        const row2 = document.createElement("tr") //uj sort hozok letre
        tableBody.appendChild(row2)  //hozzafuzom tbodyhoz

        createCell(newRow.work2, row2) //cellat hozok letre work2 tulajdonsaggal majd uj sorhoz csatolom
        createCell(newRow.concept2, row2) //cellat hozok letre concept2 tulajdonsaggal majd uj sorhoz csatolom
    }
} 

/**
 * Uj cellat hozzafuz efy adott sorhoz es returnol 1 cellat
 * 
 * @param {string} cellContent a cella tartalma
 * @param {HTMLTableRowElement} parent sor amihez hozzafuzesre kerul
 * @returns {HTMLTableCellElement}
 */
function createCell(cellContent, parent){ //fugvenyt keszitek uj cella letrehozashoz
    /**
     * @type {HTMLTableCellElement} a cella
     */
    const cell = document.createElement("td") //letrehozok 1 cellat
    parent.appendChild(cell) //sorzozc hozzafuzom
    cell.innerText = cellContent //tartalom allitasa

    return cell //visszaterek a kesz cellaval
}