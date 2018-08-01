var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button= document.getElementById("random");

 setGradient();
 function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}
/*var button= document.createElement("button");
var value= document.createTextNode("Random");
button.appendChild(value);
css.appendChild(button);*/


function generateRandom(){

	    var colorLetters = '0123456789ABCDEF';
	    var color = '#';
			colo="#";
	    for (var i = 0; i < 6; i++) {
	        color += colorLetters[Math.floor(Math.random() * 16)];
					colo += colorLetters[Math.floor(Math.random() * 16)];
	    }
			color1.value=color;
			color2.value=colo;
			setGradient();
			}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click",generateRandom);
