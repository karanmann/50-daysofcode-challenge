// This variable stores the "Pick a Color" button
let button = document.getElementById("color-button");

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById("next-button");

let selectedColor = document.getElementById("color-button")
let selectedRandomColor = document.getElementById("next-button")

let randomColor;
// This random number function will create color codes for the randomColor variable
const colorValue = () => {
  return Math.floor(Math.random() * 256);
}

const colorChange = (event) => {
  randomColor = "rgb(" + colorValue() + "," + colorValue() + "," + colorValue() + ")"; // Generate RGB Color
  event.target.style.backgroundColor = randomColor; 
}

button.addEventListener("click", colorChange); // on click event that changes color
mysteryButton.addEventListener("wheel", colorChange); 

let displaySelectedColor = () => { 
  selectedColor.innerText = randomColor;  //Display Color Code
}

let displayRandomColor = () => {
  selectedRandomColor.innerText = randomColor; //Display Color Code
}

button.addEventListener("click", displaySelectedColor); // on click event that changes color
mysteryButton.addEventListener("wheel", displayRandomColor);  //On scroll event to change color
