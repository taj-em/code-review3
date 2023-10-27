function processNum(num) {
  const targetArray = ["0", "1", "2", "3"];
  const responseArray = [0, "hello one", "hello two", "hello three"]
  let finalArray = [];
  //logs every number from 0 to the input
  for (let index = 0; index <= num; index += 1) {
    let indexArray = index.toString().split("");
    if (indexArray[0] == 3) {
      finalArray.push(responseArray[3]);
    } else if (indexArray[1] == 3) {
      finalArray.push(responseArray[3]);
    } else if (indexArray[0] == 2) {
      finalArray.push(responseArray[2]);
    } else if (indexArray[1] == 2) {
      finalArray.push(responseArray[2]);
    } else if (indexArray[0] == 1) {
      finalArray.push(responseArray[1]);
    } else if (indexArray[1] == 1) {
      finalArray.push(responseArray[1]);
    } else {
      finalArray.push(index);
    }
  }
  console.log(finalArray)
}
  function display(event) {
    event.preventDefault();
    const number = document.getElementById("num-input").value;
    const output = processNum(number);
    document.getElementById("display").innerText = output;
  }


  window.addEventListener("load", function () {
    this.document.querySelector("form").addEventListener("submit", display)
  });




// for (let index = 0; index <= num; index += 1) {
//   console.log(index);
//   if (targetArray.includes(index)) {
//     console.log("hello");

