export const cards=[
    "../img/1.jpg",
    "../img/2.jpg",
    "../img/3.jpg",
    "../img/4.jpg",
    "../img/5.jpg",
    "../img/6.jpg",
    "../img/8.jpg",
    "../img/8.png",
    "../img/rubashka.png"

];

export const back=[
    "../img/Fon.jpg",
    "../img/Fon2.jpg",


]
export class card{
    img;
    back = cards[8];
    status=false
    constructor(img){
        this.img=img;
    }

}
export const creatcards = (lvl) =>{
const array =[];
for(let i = 0; i<lvl/2; i++){
    array.push(new card(cards[i]));
    array.push(new card(cards[i]));
    }
    for(let i =0; i < lvl; i++){
        let a = array[i];
        let r = Math.floor(Math.random() * (lvl -1));
        array[i] = array[r];
        array[r] = a;


    }
    return array;

}
