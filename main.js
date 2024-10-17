const tilesConatiner = document.querySelector(".tiles");
const colors = ["red","blue","green","yellow","purple","orange","pink","brown"];
const colorsPickList = [...colors,...colors]; // duplicating the colors
const tileCount = colorsPickList.length;

//Game state
let revealedCount = 0; // total correct ones
let activeTile = null; // first title clicked , we need to compare with the next one
let awaitingEndOfMove = false; // when 2 tiles are wrong need to change back 

//build up tiles

function buildTile(color){
    const element = document.createElement("div"); // create div container for each tile

    element.classList.add("tile"); // and adding class tile
    element.setAttribute("data-color",color); // setting attribute
    element.setAttribute("data-revealed",false);

    element.addEventListener("click",()=>{
        const revealed = element.getAttribute("data-revealed");

        if(awaitingEndOfMove || revealed === "true"){ // Prevent further actions if waiting for a move to finish
            return ; 
        }

        element.style.backgroundColor = color;

        if(!activeTile){
            activeTile = element;
            return ;
        }

        const colorToMatch = activeTile.getAttribute("data-color"); // save the active tile color 

        if(colorToMatch === color){ // compare with current one 
            activeTile.setAttribute("data-revealed","true");
            element.setAttribute("data-revealed","true");

            awaitingEndOfMove = false;
            activeTile = null;
            revealedCount+=2;

            if(revealedCount === tileCount){ // check if total count is equal to tile count
                alert("you win!, refersh to play again");
            }

            return;
        }

        awaitingEndOfMove = true;

        setTimeout(() =>{ // if wrong remove
            element.style.backgroundColor = null;
            activeTile.style.backgroundColor = null;
            awaitingEndOfMove = false;
            activeTile = null;
        },1000);
    });

    return element;
}

for(let i=0;i<tileCount;i++){
    const randomIndex = Math.floor(Math.random() * colorsPickList.length); // create a random no to choose the color
    const color = colorsPickList[randomIndex];

    const tile = buildTile(color);  // calling buildTile function to create each tile

    console.log("tile created adding color");

    colorsPickList.splice(randomIndex,1); // after adding that color we are removing it 

    tilesConatiner.appendChild(tile); // appending each title to parent container tiles created in html
}
