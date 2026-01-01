/**
 * @typedef {{writer: string, work: string, concept1: string, concept2?: string}} LiteratureDatas
 */

/**
 * @type {HTMLButtonElement} a gomb ami a simpla sort intezi majd
 */
const simpleButton = document.getElementById("simplebutton") //lekerem a szimpla gombot

simpleButton.addEventListener("click", function(){ //esenykezeleto keszitek a szimplagomb click esemenyere
    console.log("Szimpla sor gombjanak kattintasa megtortent, mukodik") //console loggal ellenorzom hogy mukodik e

    /**
     * @type {LiteratureDatas} tesztobjektum amit majd hozzadunk a tablazathoz 
     */
    const newRow = { //objektum deklaralas
        writer: "TestWriter", //writer ertekadas
        work: "TestWork", //work ertekadas
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
    cell2.innerText = newRow.work //beallitom a work tulajdonsagat a newRow objektumbol

    /**
     * @type {HTMLTableCellElement} a tablazat tesztsoranak harmadik cellaja
     */
    const cell3 = document.createElement("td") //cella letrehozasa
    row.appendChild(cell3) //hozzaadom az uj sorhoz
    cell3.innerText = newRow.concept1 //beallitom a concept1 tulajdonsagat a newRow objektumbol
    cell3.colSpan = 2 //cell3 colSnap erteket 2 re allitom

})


/**
 * @type {HTMLButtonElement} a gomb ami a dupla sort intezi majd
 */
const doubleButton = document.getElementById("doublebutton") //lekerem a dupla gombot

doubleButton.addEventListener("click", function(){ //esenykezeleto keszitek a duplagomb click esemenyere
    console.log("Dupla sor gombjanak kattintasa megtortent, mukodik") //console loggal ellenorzom hogy mukodik

    /**
     * @type {LiteratureDatas} tesztobjektum amit majd hozzadunk a tablazathoz 
     */
    const newRow = { //objektum deklaralas
        writer: "TestWriter", //writer ertekadas
        work: "TestWork", //work ertekadas
        concept1: "TestConcept1", //concept1 ertekadas
        concept2: "TestConcept2", //concept2 ertekadas
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
    cell2.innerText = newRow.work //beallitom a work tulajdonsagat a newRow objektumbol

    /**
     * @type {HTMLTableCellElement} a tablazat tesztsoranak harmadik cellaja
     */
    const cell3 = document.createElement("td") //cella letrehozasa
    row.appendChild(cell3) //hozzaadom az uj sorhoz
    cell3.innerText = newRow.concept1 //beallitom a concept1 tulajdonsagat a newRow objektumbol

    /**
     * @type {HTMLTableCellElement} //a tablazat tesztsoranak negyedik cellaja
     */
    const cell4 = document.createElement("td") //cella letrehozasa
    row.appendChild(cell4) //hozzaadom az uj sorhoz 
    cell4.innerText = newRow.concept2 //beallitom a concept2 tulajdonsagat a newRow objektumbol


})

