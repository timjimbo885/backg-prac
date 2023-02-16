var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var button = document.getElementById("random");

setGradient();
function setGradient() {
		body.style.background = "linear-gradient(to right, " +
		 color1.value +
		  ", " + 
		  color2.value + 
		  ")" ;

		  // so this goes directly into body on the css sheet, body (of css) . style(refering to the value
	// not the name of the sheet, just syntax) and background being what is selected
		  css.textContent = body.style.background + ";";


}

function randomize(){
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	// randomColor function taken from
	// https://css-tricks.com/snippets/javascript/random-hex-color/
	color1.value = "#" + randomColor1;
	color2.value = "#" + randomColor2;
	setGradient();
}

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);
// REMEMBER, with the addeventlistener parameters you do not need parenthesis for the finished 
// function. BECAUSE input is automatically ran through the following function

// BUT, the addeventlistener got commented out, BECAUSE we can just do
// onInput in the html where the input values for the colors are stated in the Body
// With onInput (Same with onClick and others), you can just run the function through there since
// since the JS file is linked

// button.addEventListener("click", function randomize() {
// // var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
// // var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
// // color1.value = "#" + randomColor1;
// // color2.value = "#" + randomColor2;

// });
