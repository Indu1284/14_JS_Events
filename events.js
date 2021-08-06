
/********  Variablen **********/
//const btn = document.getElementById("trigBtn");
const btn = document.body;
let status = true;

btn.addEventListener("click",actOnBtnEvent);

function actOnBtnEvent() {
    ausgabe("Hi");
}

/***** Business-Logic | Toggle ***** */
function toggleStatus() {
    status = !status;
    ausgabe(status);
}

/*******  Änderung in View-Schicht *******/

// Modul : Umschaltung Klassenamen | Test:
switchClassName("night");
//switchClassName("day");
function switchClassName(modeStr) {
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;
}


switchBtnTxt("night");
switchBtnTxt("night");
function switchBtnTxt(modeStr) {
    const btn = document.getElementById("trigBtn");
    btn.innerHTML = modeStr;
    }
/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}