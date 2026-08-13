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

let rand = Math.random()
let first,srcond,third;

// 0 0.33 0.66 1

// loop for first part
if(rand < 0.33){
    first = "crazy"
}else if(rand < 0.66 && rand >= 0.33){
    first = "Amazing"
}else{
    first = "Fire"
}


// loop for second part
rand = Math.random()

if(rand < 0.33){
    second = "Engine"
}else if(rand < 0.66 && rand >= 0.33){
    second = "Foods"
}else{
    second = "Garments"
}


// loop for third part
rand = Math.random()

if(rand < 0.33){
    third = "Bros"
}else if(rand < 0.66 && rand >= 0.33){
    third = "Limited"
}else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)