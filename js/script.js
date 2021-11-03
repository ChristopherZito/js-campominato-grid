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

//input livelli
const livEasy = document.getElementById("easy");
const livMedium = document.getElementById("medium");
const livHard = document.getElementById("hard");

//cambio della schermata in base al livello
//livello easy
livEasy.addEventListener("click",
    function(){
        easy.classList.add("levelSelected")
        easy.classList.remove("levelNull")
        medium.classList.remove("levelSelected")
        medium.classList.add("levelNull")
        hard.classList.remove("levelSelected")
        hard.classList.add("levelNull") 
    }
);
//livello medium
livMedium.addEventListener("click",
    function(){
        medium.classList.add("levelSelected")
        medium.classList.remove("levelNull")
        hard.classList.remove("levelSelected")
        hard.classList.add("levelNull")
        easy.classList.remove("levelSelected")
        easy.classList.add("levelNull") 
    }
);
//livello hard
livHard.addEventListener("click",
    function(){
        hard.classList.add("levelSelected")
        hard.classList.remove("levelNull")
        medium.classList.remove("levelSelected")
        medium.classList.add("levelNull")
        easy.classList.remove("levelSelected")
        easy.classList.add("levelNull")
    }
);

//generazione celle nel container EASY
for(let i = 1; i <= 100; i++){
    let cellOut = cellgenerator();
    easy.append(cellOut);
    cellOut.append(i)
};
        
//generazione celle nel container MEDIUM
for(let i = 1; i <= 81; i++){
    let cellOut = cellgenerator();
    medium.append(cellOut);
    cellOut.append(i); 
};

//generazione celle nel container HARD
for(let i = 1; i <= 49; i++){
    let cellOut = cellgenerator();
    hard.append(cellOut);
    cellOut.append(i); 
};



//funzioni
//generazione celle di gioco
function cellgenerator(){
    let cell = document.createElement("div")
    cell.classList.add("cell")
    //selezionamento celle
    cell.addEventListener("click",
    function(){
        cell.classList.add("clicked");
        }
    )
    return cell;
}

