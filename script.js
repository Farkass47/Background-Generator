var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomButton = document.getElementById("rndColors");
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background = 
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
        
    css.textContent = body.style.background + ";";
}

function rndColors() {
    var red = Math.random()*256;
    var green = Math.random()*256;
    var blue = Math.random()*256;
    var rgb = blue | (green << 8) | (red << 16);
    return '#' + (0x1000000 + rgb).toString(16).slice(1)
}

function setRandomColors(){
    color1.value = rndColors();
    color2.value = rndColors();
    setGradient();
}

setGradient();
color1.addEventListener("change", setGradient);
color2.addEventListener("change", setGradient);
randomButton.addEventListener("click", setRandomColors);

