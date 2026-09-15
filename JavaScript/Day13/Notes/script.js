// Asynchrounus
// console.log("Program starts");

// setTimeout(() => {
//   console.log("This will run after 2 seconds");
// }, 2000);

// console.log("program continues immediately");

// console.log("Open cgc portal");

// setTimeout(() => {
//   console.log("Header loaded");
// }, 1000);

// setTimeout(() => {
//   console.log("Student data loaded");
// }, 2000);

// setTimeout(() => {
//   console.log("Footer loaded");
// }, 500);

// console.log("Portal structure ready");

// function submitForm() {
//   console.log("Submitting form");

//   setTimeout(() => {
//     console.log("Form submitted successfully!");
//     console.log("Redirecting to dashboard...");
//   }, 1500);
//   console.log("Please wait...");
// }

// submitForm()

// -------Example 1: greet function (async fn) and goodBye function (sync fn)-------

// function greet(name, callback){
//     console.log("Hello "+ name);
//     callback()
// }

// function sayGoodBye(){
//     console.log("Good Bye");
// }

// greet("Alice", sayGoodBye)

//   --------Using promises--------

// function greet(name){
//     return new Promise((resolve,reject)=>{
// let delay = Math.floor(Math.random() * 4)
//         setTimeout(() => {
//             if (name){
//             resolve(`Hello ${name}`)
//         }else{
//             reject("No name provided")
//         }
//         }, delay * 1000);

//     })
// }
// function sayGoodBye(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//         resolve("Good Bye")
//         }, 1000);

//     })
// }

// greet("Alice")
// .then((resolveMsg)=>{
//     console.log(resolveMsg);
//     return sayGoodBye()
// })
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((rejectMsg)=>{
//     console.log(rejectMsg);
// })

// ---------Example 2: calculate sum function and print the sum function-------

// let result; // 22

// // async function sum
// function calculateSum(callback) {
//   setTimeout(() => {
//     console.log("calculate sum function ran...");
//     result = 22;

//     callback(); // printSum();
//   }, 2000);
// }

// function printSum() {
//   console.log("Print sum function ran...");
//   console.log(result);
// }

// // async
// calculateSum(() => {
//     // sync
//   printSum();
// });

// ----Using Promises----

// function calculateSum() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 4);
//     let isResultAvailable = Math.random() > 0.3;
//     if (isResultAvailable) {
//       setTimeout(() => {
//         let result = 24;
//         resolve(result);
//       }, delay * 1000);
//     } else {
//       reject("Result not available");
//     }
//   });
// }
// function printSum(result) {
//   console.log("Result is ", result);
// }

// calculateSum()
//   .then((result) => {
//     return printSum(result)
//   })
//   .catch((rejectMsg) => {
//     console.log(rejectMsg);
//   });

// -----Example 3: Food delivery simulator functions----

// ---Using promises---
// function orderBooked() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 3);
//     let isOrderBooked = Math.random() > 0.4;
//     if (isOrderBooked) {
//       setTimeout(() => {
//         resolve("Order Booked");
//       }, delay * 1000);
//     } else {
//       reject("Order not Booked");
//     }
//   });
// }
// function orderPrepared() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 5);

//     setTimeout(() => {
//       resolve("Order Prepared");
//     }, delay * 1000);
//   });
// }
// function orderDelivered() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 5);
//       setTimeout(() => {
//         resolve("Order Delivered");
//       }, delay * 1000);

//   });
// }

// orderBooked()
//   .then((resolveMsg) => {
//     console.log(resolveMsg);
//     return orderPrepared();
//   })
//   .then((resolveMsg) => {
//     console.log(resolveMsg);
//     return orderDelivered();
//   })
//   .then((resolveMsg) => {
//     console.log(resolveMsg);
//   })
//   .catch((rejectMsg) => {
//     console.log(rejectMsg);
//   });

// --------Example 4: Color change functions-----------
// let h1 = document.querySelector("h1")

// function changeColor(color, callback){
//     setTimeout(() => {
//         h1.style.color = color
//         callback()
//     }, 1000);
// }

// changeColor("blue", ()=>{
//     changeColor("green",()=>{
//         changeColor("yellow",()=>{
//             changeColor("pink", ()=>{
//                 changeColor("purple",()=>{
//                     console.log("All colors done");
//                 })
//             })
//         })
//     })
// })

//   ----------Using Promises-----------

// let h1 = document.querySelector("h1");

// function changeColor(color) {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 4) ;
//     if (color) {
//       setTimeout(() => {
//         h1.style.color = color;
//         resolve(`${color} color applied`);
//       }, delay * 1000);
//     } else {
//       reject("not a color");
//     }
//   });
// }
// changeColor("blue")
//   .then((resolveMsg) => {
//     console.log(resolveMsg);
//     return changeColor("red");
//   })
//   .then((resolveMsg) => {
//     console.log(resolveMsg);
//     return changeColor("green");
//   })
//   .then((resolveMsg) => {
//     console.log(resolveMsg);
//     return changeColor("yellow");
//   })
//   .then((resolveMsg) => {
//     console.log(resolveMsg);
//     return changeColor("purple");
//   })
//   .then((resolveMsg) => {
//     console.log("All colors done");
//   })
//   .catch((rejectMsg) => {
//     console.log(rejectMsg);
//   });

// ----Example 5: fetchStudentData function and printStudentData function (lab work)-------

// function fetchStudentData (studentId, callback){
//     console.log("Fetching data for student id ", studentId);
//     setTimeout(() => {
//         let studentData = {
//             id: studentId,
//             name: "Rahul sharma",
//             course: "Computer Science"
//         }
//         console.log("Data fetched successfully");
//         callback(studentData)
//     }, 2200);

// }
// function displayStudentData(student){
//     console.log("Student name: ",student.name);
//     console.log("Student course:",student.course);
//     console.log("Student id: ",student.id);

// }

// fetchStudentData(23,displayStudentData)

// --- Using promises-----

// function fetchStudentData(studentId) {
//     return new Promise((resolve, reject)=>{
//         let delay = Math.floor(Math.random() * 4);
//         if (studentId > 0) {
//             console.log("Fetching the data....");
//           setTimeout(() => {
//             let studentData = {
//               id: studentId,
//               name: "Rahul sharma",
//               course: "Computer Science",
//             };
//             resolve(studentData)
//           }, delay * 1000);
//         }else{
//             reject("No student with id", studentId)
//         }

//     })
// }

//  function displayStudentData(student){
//     console.log("Student name: ",student.name);
//     console.log("Student course:",student.course);
//     console.log("Student id: ",student.id);
// }

// fetchStudentData(23).then((studentData)=>{
//     return displayStudentData(studentData)
// }).catch((rejectMsg)=>{
//     console.log(rejectMsg);
// })

// ------Example 6: Register → Send Email → Update Database → Send Welcome SMS (lab work)-------

// function registerUser(username,callback){
//     setTimeout(() => {
//         console.log(`User registered ${username}`);
//         callback()
//     }, 1000);
// }
// function sendVerificationEmail(callback){
//     setTimeout(() => {
//         console.log("Verfication Email sent");
//         callback()
//     }, 2000);
// }
// function updateDatabase(callback){
//     setTimeout(() => {
//         console.log("updated Database");
//         callback()
//     }, 2800);
// }
// function sentSMS(callback){
// setTimeout(() => {
//     console.log("Welcome SMS sent");
//     callback()
// }, 1500);
// }
// registerUser("Bob", ()=>{
//     sendVerificationEmail(()=>{
//         updateDatabase(()=>{
//             sentSMS(()=>{
//                 console.log("Registration complete");
//             })
//         })
//     })
// })

// -----------Using Promises -----------

// function registerUser(user) {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 3);
//     setTimeout(() => {
//       if (user) {
//         setTimeout(() => {
//           resolve(`user registered: ${user}`);
//         }, delay * 1000);
//       } else {
//         reject("user can't register");
//       }
//     }, delay * 1000);
//   });
// }
// function sendVerificationEmail(user) {
//   return new Promise((resolve, reject) => {
//     let isEmailSend = Math.random() > 0.3;
//     let delay = Math.floor(Math.random() * 3);
//     setTimeout(() => {
//       if (isEmailSend) {
//         setTimeout(() => {
//           resolve("Verification email sent..");
//         }, delay * 1000);
//       } else {
//         reject("Email not sent");
//       }
//     }, delay * 1000);
//   });
// }
// function updateDatabase(user) {
//   return new Promise((resolve, reject) => {
//     let isDbUpdated = Math.random() > 0.3;
//     let delay = Math.floor(Math.random() * 3);
//     setTimeout(() => {
//       if (isDbUpdated) {
//         setTimeout(() => {
//           resolve(" Database updated ..");
//         }, delay * 1000);
//       } else {
//         reject("Database not updated");
//       }
//     }, delay * 1000);
//   });
// }
// function sentSMS(user) {
//   return new Promise((resolve, reject) => {
//     let isSmsSend = Math.random() > 0.3;
//     let delay = Math.floor(Math.random() * 3);
//     setTimeout(() => {
//       if (isSmsSend) {
//         setTimeout(() => {
//           resolve("Welcome SMS sent..");
//         }, delay * 1000);
//       } else {
//         reject("Welcome sms not sent ");
//       }
//     }, delay * 1000);
//   });
// }

// registerUser("Alice")
// .then((resolveMsg)=>{
//     console.log(resolveMsg);
//     return sendVerificationEmail()
// })
// .then((resolveMsg)=>{
//     console.log(resolveMsg);
//     return updateDatabase()
// })
// .then((resolveMsg)=>{
//     console.log(resolveMsg);
//     return sentSMS()
// })
// .then((resolveMsg)=>{
//     console.log(resolveMsg);
//     console.log("User Registered Sucessfully");

// })
// .catch((rejectMsg)=>{
//     console.log(rejectMsg);
// })

// Example 7: Simple save messages to db functions

// function saveMsg1(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   let isDBAvailable = Math.random() > 0.4;

//   setTimeout(() => {
//     if (isDBAvailable) {
//       console.log("Msg 1 saved...");
//       callback();
//     } else {
//       console.log("Msg 1 not saved, but db was not available");
//     }
//   }, delay * 1000);
// }

// function saveMsg2(callback) {
//   let delay = Math.floor(Math.random() * 5);
//   let isDBAvailable = Math.random() > 0.4;

//   setTimeout(() => {
//     if (isDBAvailable) {
//       console.log("Msg 2 saved...");
//       callback(); // saveMsg3();
//     } else {
//       console.log("Msg 2 not saved, but db was not available");
//     }
//   }, delay * 1000);
// }

// function saveMsg3(callback) {
//   let delay = Math.floor(Math.random() * 5);
//   let isDBAvailable = Math.random() > 0.4;

//   setTimeout(() => {
//     if (isDBAvailable) {
//       console.log("Msg 3 saved...");
//       callback(); //  console.log("All messages saved successfully...")
//     } else {
//       console.log("Msg 3 not saved, but db was not available");
//     }
//   }, delay * 1000);
// }

// saveMsg1(() => {
//   saveMsg2(() => {
//     saveMsg3(() => {
//       console.log("All messages saved successfully...");
//     });
//   });
// });

// -------Using Promises-----------

function saveMsg1() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 4);
    let isDBAvailable = Math.random() > 0.4;
    setTimeout(() => {
      if (isDBAvailable) {
        resolve("Msg 1 saved...");
      } else {
        reject("Msg 1 not saved");
      }
    }, delay * 1000);
  });
}
function saveMsg2() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 4);
    let isDBAvailable = Math.random() > 0.4;
    setTimeout(() => {
      if (isDBAvailable) {
        resolve("Msg 2 saved...");
      } else {
        reject("Msg 2 not saved");
      }
    }, delay * 1000);
  });
}
function saveMsg3() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 4);
    let isDBAvailable = Math.random() > 0.4;
    setTimeout(() => {
      if (isDBAvailable) {
        resolve("Msg 3 saved...");
      } else {
        reject("Msg 3 not saved");
      }
    }, delay * 1000);
  });
}

saveMsg1()
  .then((resolveMsg) => {
    console.log(resolveMsg);
    return saveMsg2();
  })
  .then((resolveMsg) => {
    console.log(resolveMsg);
    return saveMsg3();
  })
  .then((resolveMsg) => {
    console.log(resolveMsg);
  })
  .catch((rejectMsg) => {
    console.log(rejectMsg);
  });

// Real-World Analogy: Car Service

// function serviceVehicle(carModel, phoneNumber) {
//   console.log(`Received carModel ${carModel} for service`);
//   console.log("customer can leave now");

//   setTimeout(() => {
//     console.log("Service complete");
//     phoneNumber();
//   }, 3500);
// }
// function customerCallback() {
//   console.log("📞 Ring ring! Your car is ready!");
//   console.log("Customer returns to pick up car");
// }

// serviceVehicle("Honda", customerCallback)
