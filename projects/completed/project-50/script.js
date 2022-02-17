
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val + '%';

  // Sorta magic numbers based on size of the thumb
  bubble.style.left = `calc(${newVal}% + (${35 - newVal * .75}px))`;
}

//calculate tip dollar amount

function getTotals(){
  let subtotal = document.getElementById("subtotal").value;
  let tipPercent = document.getElementById("tip-percent").value;
  
  let tipAmount = (subtotal * tipPercent) / 100;
  tipAmount = tipAmount.toFixed(2);
  document.getElementById("tip-amount").innerHTML = tipAmount;
  
  let totalAmount = +subtotal + +tipAmount;
  totalAmount = totalAmount.toFixed(2);
  document.getElementById("total-amount").innerHTML = totalAmount;
}