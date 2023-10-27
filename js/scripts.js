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
  finalArray.forEach(element => {
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.append(element);
    ul.append(li);
  });
  document.querySelectorAll("li").classList.add("list-group-item")
}


window.addEventListener("load", function () {
  this.document.querySelector("form").addEventListener("submit", initiate)
});