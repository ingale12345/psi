let ans = "";
count = 0;
function releaseButton() {
  document.getElementById("btn").disabled = false;
  document.getElementById("ans").value = "Welcome";
}
function calc() {
  function isCharacterALetter(char) {
    return /[^0-9]/.test(char);
  }
  let inputValue = document.getElementById("num").value;
  if (
    isCharacterALetter(inputValue.charAt(0)) ||
    isCharacterALetter(inputValue.charAt(1)) ||
    isCharacterALetter(inputValue.charAt(2)) ||
    isCharacterALetter(inputValue.charAt(3))
  ) {
    alert("Only Numbers are allowed");
    return;
  }

  if (inputValue.length == 4) {
    let n = inputValue.charAt(0);
    if (
      inputValue.charAt(1) == n &&
      inputValue.charAt(2) == n &&
      inputValue.charAt(3) == n
    ) {
      alert("do not Enter same values 4 times");
      document.getElementById("num").value = "";
      return;
    }

    document.getElementById("btn").disabled = true;
    calculateNumbers(inputValue);
    document.getElementById("ans").innerHTML = ans;
    document.getElementById("num").value = "";
    ans = "";
    count = 0;
  } else {
    alert("please Enter 4 Digit Value");
    document.getElementById("num").value = "";
  }
}

function calculateNumbers(number) {
  if (number.length == 3) {
    console.log(`Number =${number} \n length=${number.length}`);
    number = "0" + number;
    console.log(`Number =${number} \n length=${number.length}`);
  }
  if (number == "6174") {
    // console.log("6174 is Found");
    ans += "6174 is Found";
  } else {
    count++;
    let ascArray = Array.from(number);
    let descArray = Array.from(number);
    ascArray.sort((a, b) => {
      return a - b;
    });
    descArray.sort((a, b) => {
      return b - a;
    });
    // console.log("Asc Array=\n" + ascArray);
    // console.log("Desc Array=\n" + descArray);
    let ascString = ascArray.join("");
    let descString = descArray.join("");
    let ascNum = parseInt(ascString);
    let descNum = parseInt(descString);
    let diff = descNum - ascNum;
    ans += `step ${count}:${descString}-${ascString}=${diff}<br>`;
    // console.log(ans);
    calculateNumbers(diff + "");
  }
}
