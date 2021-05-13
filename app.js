function calculateTip() {
  let billAmt = document.getElementById("billAmount").value;
  let serviceQual = document.getElementById("options").value;
  let numOfPeople = document.getElementById("billPeople").value;

  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }

  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  var total = (billAmt * serviceQual) / numOfPeople;

  total = Math.round(total * 100) / 100;

  total = total.toFixed(2);

  document.getElementById("result").style.display = "block";
  document.getElementById("resultTip").innerHTML = total;
}

document.getElementById("result").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function () {
  calculateTip();
};
