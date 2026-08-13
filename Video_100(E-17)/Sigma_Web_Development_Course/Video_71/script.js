let a = document.querySelector(".container")
//  <div class=​"container">​…​</div>​   
a.style.color = "red"
a.style.fontSize = "30px"
// console.log(a.innerText)

document.querySelector(".container").innerHTML
// '\n        <div class="box">Hey! I am a box.</div>\n    '

document.querySelector(".box")
// <div class=​"box">​Hey! I am a box.​</div>​

document.querySelector(".box").innerHTML
// 'Hey! I am a box.'

document.querySelector(".box").innerText
// 'Hey! I am a box.'

document.querySelector(".box").textContent
// 'Hey! I am a box.'

document.querySelector(".container").innerText
// 'Hey! I am a box.'

document.querySelector(".box").outerHTML
// '<div class="box">Hey! I am a box.</div>'

document.querySelector(".container").tagName
// 'DIV'

document.querySelector(".container").nodeName
// 'DIV'


document.querySelector(".box").hasAttribute("style")
// true

document.querySelector(".box").getAttribute("style")
// 'display: flex;'

document.querySelector(".box").setAttribute("style","display: inline")
// undefined

document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}

document.querySelector(".box").removeAttribute("style")
// undefined



let div = document.createElement("div")
div.innerHTML = "I am a new div <b>with bold text</b>"
div.setAttribute("class", "new-div");
document.querySelector(".container").appendChild(div)

let d = document.querySelector(".new-div")
d.style.color = "blue"

let e = document.querySelector("b")
e.style.color = "green"



let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin", "<p>Hey! I am a new paragraph.</p>")