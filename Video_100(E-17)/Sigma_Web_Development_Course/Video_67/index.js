document.title = "JavaScript DOM - Children, Parent & Sibling Nodes";

document.body.firstElementChild.style.backgroundColor = "lightblue";

let box = document.querySelector(".box");
console.log(box.parentElement);


document.body.firstElementChild;
document.body.firstElementChild.childNodes;
document.body.firstElementChild.children;



document.body.firstElementChild.children[2].nextElementSibling;

document.body.firstElementChild.children[2].previousElementSibling;

document.body.firstElementChild.children[2].previousSibling;
