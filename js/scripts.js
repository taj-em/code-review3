function calc(num) {
  let finalArray = [];
  const responseArray = ["beep", "boop", "would you be my neighbor"]
  for (let index = 0; index <= num; index += 1) {
    let indexArray = index.toString().split("")
    if (indexArray.includes("3")) {
      finalArray.push(responseArray[2])
    } else if (indexArray.includes("2")) {
      finalArray.push(responseArray[1]);
    } else if (indexArray.includes("1")) {
      finalArray.push(responseArray[0]);
    } else { finalArray.push(index) }
  }
  createList(finalArray);
}




function initiate(event) {
  event.preventDefault();
  const number = document.getElementById("num-input").value;
  calc(number);
}

function createList(finalArray) {
  const ul = document.querySelector("ul");
  ul.innerText = "";
  let runningCount = 0;
  finalArray.forEach(element => {
    runningCount += 1;
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.append(element);
    ul.prepend(li);
    if (runningCount === 7) {
    let liOld = document.querySelectorAll("li");
    liOld[liOld.length-1].remove();
      runningCount = 6;
    }
  });
  }

function reset(event) {
  location.reload();
}


function darkMode(event) {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.color = "white";
  document.querySelector("h1").style.textDecorationColor = "#8948E9";
  document.getElementById("submit-btn").style.borderColor = "white";
  document.getElementById("reset-btn").style.backgroundColor = "#8948E9";
  document.getElementById("reset-btn").style.borderColor = "white";
  document.getElementById("darkMode-btn").style.display = "none";
  document.getElementById("lightMode-btn").style.display = "initial";
}



function lightMode(event) {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
  document.querySelector("h1").style.textDecorationColor = "#852C15";
  document.getElementById("submit-btn").style.borderColor = "black";
  document.getElementById("reset-btn").style.backgroundColor = "#852C15";
  document.getElementById("reset-btn").style.borderColor = "black";
  document.getElementById("reset-btn").style.backgroundColor = "#852C15";
  document.getElementById("lightMode-btn").style.display = "none";
  document.getElementById("darkMode-btn").style.display = "initial"
}

window.addEventListener("load", function () {
  document.getElementById("reset-btn").addEventListener("click", reset)
  document.getElementById("darkMode-btn").addEventListener("click", darkMode)
  document.getElementById("lightMode-btn").addEventListener("click", lightMode)
  document.querySelector("form").addEventListener("submit", initiate)
});