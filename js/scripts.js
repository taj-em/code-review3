function processNum(num) {
  const targetArray = [0, 1, 2, 3];
  const responseArray = [0, "hello one", "hello two", "hello three"]
  const numArray = num.toString().split("");
  let finalArray = [];
  console.log("Num Array : " + numArray);
  //logs every number from 0 to the input
  for (let index = 0; index <= num; index += 1) {
    let indexArray = index.toString().split("");
    console.log("Index Array: " + indexArray)
    //
    for (let digit = 0; digit < indexArray.length; digit +=1) {
      if(targetArray.includes(indexArray[digit])) {
        finalArray.push(responseArray[indexArray[digit]])
        console.log("Final Array: " + finalArray)
      }
    };
}
}

function display(event) {
  event.preventDefault();
  const number = document.getElementById("num-input").value;
  const output = processNum(number);
  document.getElementById("display").innerText = output;
}


window.addEventListener("load", function() {
this.document.querySelector("form").addEventListener("submit", display)
});




// for (let index = 0; index <= num; index += 1) {
//   console.log(index);
//   if (targetArray.includes(index)) {
//     console.log("hello");
//   }
// };