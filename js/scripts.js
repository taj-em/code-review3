function processNum(num) {
  const targetArray = [0, 1, 2, 3];
  const responseArray = [0, "hello one", "hello two", "hello three"]
  const numArray = num.toString().split("");
  console.log("Num Array : " + numArray);
  numArray.forEach(element => {
    if (targetArray.includes(element)) {
      console.log(responseArray[element]);
    }
  });
}


function display(event) {
  event.preventDefault();
  
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