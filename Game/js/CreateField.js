import { CreateMenu } from "./CreateMenu.js";
import { creatcards, back } from "./cards.js";


const  gameWin=()=>{
    const card = document.querySelectorAll(".card");
    let flag = true;
    card.forEach(el => {
        if(!el.classList.contains("rotate")){
            flag = false;

        }
    })
    return flag;
}

export const createfild = (lvl)=>{
    const body = document.querySelector("body");
    body.style.backgroundImage = `url(${back[1]})`;

    let statusGame=true;

    const main =document.querySelector("main");
    main.classList.add("null");
    

    console.log(lvl);
    let lvltext;

    switch(lvl){
    case 8:  
    lvltext="Лёгкий уровень"
    break;
    case 12:
    lvltext="Средний уровень"
    break;
    case 16:
    lvltext="Сложный уровень"
    break;
    }
    const game = document.querySelector(".game");
    game.style.display = "block";

    const level = game.querySelector(".lvl");
    level.textContent=lvltext;

    const menu = game.querySelector(".btn");
    menu.addEventListener('click',()=>{
        CreateMenu();

    })

const cards = creatcards (lvl);
console.log(cards);

const gamecards = game.querySelector(".game-cards");
gamecards.innerHTML=" ";
let prev=null;
cards.forEach(el => {
    
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage= `url(${el.back})`;
    gamecards.appendChild(card);

    
    
    card.addEventListener('click',()=>{
        if (statusGame==true && !card.classList.contains("rotate")){

            console.log(prev);
            console.log(card);
            card.classList.add("rotate");
            card.style.backgroundImage = `url(${el.img})`;
            if(prev == null) {
                prev = card
            }
            else{
                if(prev.style.backgroundImage == card.style.backgroundImage){
                   prev=null;
                   gameWin();
                   if (gameWin()){
                    let model = document.createElement(`div`);
                    model.classList.add(`model`);
                    let context = document.createElement(`div`);
                    context.classList.add("context");
                    context.textContent = "ВЫ ПОБЕДИЛИ!"
                    let button = document.createElement(`div`);
                    button.classList.add(`btn`);
                    button.textContent = "Выйти в меню"
                    model.appendChild(context);
                    model.appendChild(button);
                    main.appendChild(model)
                    button.addEventListener(`click`,()=>{
                        CreateMenu();
                    })

                    CreateMenu();
                   }

                }
    
                else{
                    statusGame = false;
                    const time = setTimeout(() => {
                        
                        card.classList.remove("rotate");
                        card.style.backgroundImage =`url(${el.back})`;
                        prev.classList.remove("rotate");
                        prev.style.backgroundImage =`url(${el.back})`;
                        prev = null;
                        statusGame=true;
                    }, 1000);
                    time;
    
                    
                }
    
            }

        }


    })

})

}


