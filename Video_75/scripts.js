console.log("This is running from the script.js file"); 

console.log("This is a test of the JavaScript file"); 

setTimeout(() => {
    console.log("This is write in side the setTimeout function");
}, 2000);

console.log("The End.")


//callBack function.
const callback =  (arg) =>{
    console.log(arg)
}
const loadScript = (src, callback) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = callback("Ashutosh");
    document.head.append(script);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", callback);