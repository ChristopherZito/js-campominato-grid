// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 


//input container
const easy = document.getElementById("cont-easy");
const medium = document.getElementById("cont-medium");
const hard = document.getElementById("cont-hard");
//scelta livello
const livEasy = document.getElementById("easy");
const livMedium = document.getElementById("medium");
const livHard = document.getElementById("hard");
let liv = 1;
console.log("livello attuale " + liv);

livEasy.addEventListener("click",
    function(){
        liv = 1
        console.log("livello attuale " + liv);
        easy.classList.add("levelSelected")
        easy.classList.remove("levelNull")
    }
);

livMedium.addEventListener("click",
    function(){
        liv = 2
        console.log("livello attuale " + liv);
        medium.classList.add("levelSelected")
        medium.classList.remove("levelNull")
    }
);

livHard.addEventListener("click",
    function(){
        liv = 3
        console.log("livello attuale " + liv);
        hard.classList.add("levelSelected")
        hard.classList.remove("levelNull")
    }
);


if(liv = 1){//generazione celle nel container EASY
    for(let i = 1; i <= 100; i ++){
        let cellOut = cellgenerator();
        cellOut.append(i);
        easy.append(cellOut);
    }
}else if(liv = 2){//generazione celle nel container MEDIUM
    for(let a = 0; a < 81; a ++){
        let cellOut = cellgenerator();
        cellOut.append(a);
        easy.append(cellOut);
    }
}else if(liv = 3){//generazione celle nel container HARD
    for(let b = 0; b < 49; b ++){
        let cellOut = cellgenerator();
        cellOut.append(b);
        easy.append(cellOut);
    }
}






//funzioni
//generazione celle di gioco
function cellgenerator(){
    let cell = document.createElement("div")
    cell.classList.add("cell")
    return cell;
}
