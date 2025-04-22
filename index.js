// // const display = document.getElementById("display");
// // const buttons = document.getElementsByTagName("button");

// // let currentInput = "0";
// // let previousInput = "";
// // let operator = "";
// // let justEvaluated = false;

// // const acceptedKeys = [
// //   "0",
// //   "1",
// //   "2",
// //   "3",
// //   "4",
// //   "5",
// //   "6",
// //   "7",
// //   "8",
// //   "9",
// //   ".",
// //   "*",
// //   "/",
// //   "+",
// //   "-",
// //   "%",
// //   "Enter",
// //   "Backspace",
// // ];

// // document.addEventListener("keydown", function (event) {
// //   let curentPressedKey = event.key;
// //   if (acceptedKeys.includes(curentPressedKey)) {
// //     if (curentPressedKey === "Enter") {
// //       curentPressedKey = "=";
// //     }
// //     if (curentPressedKey === "*") {
// //       curentPressedKey = "x";
// //     }

// //     if (curentPressedKey === "/") {
// //       curentPressedKey = "÷";
// //     }

// //     if (curentPressedKey === "Backspace") {
// //       curentPressedKey = "AC";
// //     }

// //     handleValueEvent(curentPressedKey);
// //   }
// // });

// // for (let i = 0; i < buttons.length; i++) {
// //   const button = buttons[i];

// //   button.addEventListener("click", function () {
// //     const value = button.textContent;
// //     handleValueEvent(value);
// //   });
// // }

// // function handleValueEvent(value) {
// //   switch (value) {
// //     case "0":
// //     case "1":
// //     case "2":
// //     case "3":
// //     case "4":
// //     case "5":
// //     case "6":
// //     case "7":
// //     case "8":
// //     case "9":
// //       // Handle all number buttons
// //       if (currentInput === "0" || justEvaluated) {
// //         currentInput = value;
// //         justEvaluated = false;
// //       } else {
// //         currentInput = `${currentInput}${value}`;
// //       }
// //       updateDisplay();
// //       break;

// //     case ".":
// //       if (!currentInput.includes(".")) {
// //         currentInput += value;
// //         updateDisplay();
// //       }
// //       break;

// //     case "+":
// //     case "-":
// //     case "x":
// //     case "÷":
// //       calculateOrReAssign(value);
// //       break;

// //     case "%":
// //       currentInput = String(parseFloat(currentInput) / 100);
// //       updateDisplay();
// //       break;

// //     case "+/-":
// //       currentInput = (-parseFloat(currentInput)).toString();
// //       updateDisplay();
// //       break;

// //     case "AC":
// //       // Reset to default
// //       operator = "";
// //       previousInput = "";
// //       currentInput = "0";
// //       updateDisplay();
// //       break;

// //     case "=":
// //       // Compute
// //       if (!currentInput || !previousInput || !operator) {
// //         return;
// //       }
// //       calculate();
// //       updateDisplay();
// //       previousInput = "";
// //       operator = "";
// //       justEvaluated = true;
// //       break;
// //   }
// // }

// // function calculateOrReAssign(value) {
// //   // Handle all expressions
// //   if (operator && previousInput) {
// //     calculate();
// //   }
// //   operator = value === "x" ? "*" : value === "÷" ? "/" : value;
// //   previousInput = currentInput;
// //   currentInput = "0";
// // }

// // function calculate() {
// //   try {
// //     const result = eval(
// //       `${parseFloat(previousInput)}${operator}${parseFloat(currentInput)}`
// //     );
// //     currentInput = String(Math.round(result * 1e10) / 1e10);
// //   } catch (e) {
// //     currentInput = "Error";
// //   }
// // }

// // function updateDisplay() {
// //   display.value = currentInput;
// // }

// function pema() {
//   console.log("I am pema");
// }

// function jigme() {
//   let cash = 50;
//   return function chimi() {
//     let chimiCash = 20;

//     return `The total money Chimi has is ${chimiCash + cash}`;
//   };
// }

// // const output = jigme();
// // console.log(jigme);
// // console.log(output);
// // console.log(output());

// // for (let i = 0; i < 3; i++) {
// //   console.log(i)
// //   setTimeout(() => console.log("After 1 sec: ",i), 1000);
// // }

// function math(fn) {
//   let a = 10;
//   let b = 20;

//   return `The sum of the function is ${fn(a, b)}`;
// }

// function add(a, b) {
//   return a + b;
// }

// function minus(a, b) {
//   return a - b;
// }

// console.log(math(add));
// console.log(math(minus));

// console.log(
//   math(() => {
//     return () => {
//       return () => {
//         return () => {};
//       };
//     };
//   })
// );

// function getAllPosts(success, error) {
//   fetch("https://jsonaceholder.typicode.com/posts")
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       success(res);
//     })
//     .catch((err) => {
//       error(err);
//     });
// }

// getAllPosts(
//   (data) => {
//     console.log(data);
//   },
//   (reason) => {
//     console.log(reason);
//   }
// );

async function getAllPosts(success, error) {
  try {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await fetchData.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAllPosts();
