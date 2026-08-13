/* Create a business name generator by combining list of adjectives and shop name another word

Adjectives:
crazy
Amazing
Fire


Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited 
Hub

*/


let random = Math.random()
let first;

if(random < 0.33){
    first = "crazy"
}else if(random < 0.66 && random >= 0.33){
    first = "Amazing"
}else{
    first = "Fire"
}

let srcond;
if(random < 0.33){
    second = "Engine"
}else if(random < 0.66 && random >= 0.33){
    second = "Foods"
}else{
    second = "Garments"
}

let third;
if(random < 0.33){
    third = "Bros"
}else if(random < 0.66 && random >= 0.33){
    third = "Limited"
}else{
    third = "Hub"
}

console.log(first+" "+second+" "+third)