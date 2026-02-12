let button = document.getElementById("btn");

button.addEventListener("click", function() {
  let boxes = document.querySelector(".box");
  boxes.innerHTML = "<b>Hey I am come after</b> clicking the button";
  boxes.style.backgroundColor = "lightblue";
  boxes.style.fontSize = "20px";

})

button.addEventListener("contextmenu", ()=>{
  alert("dont right click here.")
})