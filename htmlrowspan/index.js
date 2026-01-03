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

    /**
     * @type {HTMLTableRowElement} a tablazat uj sora
     */
    const row = document.createElement("tr") //sor letrehozasa
    tableBody.appendChild(row) //hozzafuzom a tableBodyhoz

    /**
     * @type {HTMLTableCellElement} a tablazat tesztsoranak elso cellaja
     */
    const cell1 = document.createElement("td") //cella letrehozasa
    row.appendChild(cell1) //hozzaadom az uj sorhoz
    cell1.innerText = newRow.writer //beallitom a writer tulajdonsagat a newRow objektumbol

    /**
     * @type {HTMLTableCellElement} a tablazat tesztsoranak masodik cellaja
     */
    const cell2 = document.createElement("td") //cella letrehozasa
    row.appendChild(cell2) //hozzaadom az uj sorhoz
    cell2.innerText = newRow.work1 //beallitom a work1 tulajdonsagat a newRow objektumbol

    /**
     * @type {HTMLTableCellElement} a tablazat tesztsoranak harmadik cellaja
     */
    const cell3 = document.createElement("td") //cella letrehozasa
    row.appendChild(cell3) //hozzaadom az uj sorhoz
    cell3.innerText = newRow.concept1 //beallitom a concept1 tulajdonsagat a newRow objektumbol
})