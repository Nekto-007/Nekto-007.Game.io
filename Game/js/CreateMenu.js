import { createfild } from "./CreateField.js";
import { back } from "./cards.js";


export const CreateMenu=()=>{

    const body = document.querySelector("body");
    body.style.backgroundImage = `url(${back[0]})`;

    const model = document.querySelector(".model");
    if (model) model.remove();

    const main =document.querySelector("main");
    main.classList.remove("null");

    const game = document.querySelector(".game");
    game.style.display = "none";
    const menu = document.querySelector(".menu");
    menu.style.display ="block";

    const btn = menu.querySelectorAll(".btn");
    btn.forEach(el => {
        el.addEventListener('click', () => {
            console.log(el.textContent);
            switch(el.textContent){
                case "Лёгкий":
                menu.style.display="none";
                    createfild(8);
                    break;
                case "Средний":
                    menu.style.display="none";
                    createfild(12);
                    break;
                case "Сложный":
                    menu.style.display="none";
                    createfild(16);
                    break;
            }
        })

    })
}
        

