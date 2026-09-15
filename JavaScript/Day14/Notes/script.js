// Fetching use data

let userData = {
  id: 23924,
  post: [
    {
      id: 1,
      postName: "Moning vibes",
      comment: "cool",
    },
    {
      id: 2,
      postName: "Evening ",
      comment: "nice",
    },
  ],
};
function fetchUserData() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 4) * 1000;
    let isFetched = Math.random() > 0.32;
    setTimeout(() => {
      if (isFetched) {
        resolve(userData);
      } else {
        reject("Data Fetching failed");
      }
    }, delay);
  });
}

function fetchUserPosts(post) {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 4) * 1000;
    let isFetched = Math.random() > 0.2;
    setTimeout(() => {
      if (isFetched) {
        resolve(post);
      } else {
        reject("Posts Fetching failed");
      }
    }, delay);
  });
}

function fetchPostComments(comments) {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 4) * 1000;
    let isFetched = Math.random() > 0.32;
    setTimeout(() => {
      if (isFetched) {
        resolve(comments);
      } else {
        reject("Comment Fetching failed");
      }
    }, delay);
  });
}

// Using Promise Chains (The Old Way)
// fetchUserData()
// .then((user) => {
// console.log("User:", user);
// return fetchUserPosts(user.post);
// })
// .then((posts) => {
// console.log("Posts:", posts);
// return fetchPostComments(posts[0].comment);
// })
// .then((comments) => {
// console.log("Comments:", comments);
// })
// .catch((error) => {
// console.log("Error:", error);
// });

// Using Async await

async function fetchingUserData() {
  try {
    let user = await fetchUserData();
    console.log("User:", user);
    let posts = await fetchUserPosts(user.post);
    console.log("Posts:", posts);
    let comments = await fetchPostComments(posts[0].comment);
    console.log("Comments:", comments);
    console.log("Data fetched sucessfully");
  } catch (error) {
    console.log("Error:", error);
  }
}

// fetchingUserData()

async function greeting() {
  return "Hello , Student!";
}

// let result = greeting()
// console.log(result);

// to get the value of async

// greeting().then((msg)=>{
//     console.log(msg);
// })
// .catch((msg)=>{
//     console.log(msg);
// })

async function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  } else {
    return a / b;
  }
}

// divideNumbers(2, 0)
//   .then((resolvemsg) => {
//     console.log(resolvemsg);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// divideNumbers(2, 6)
//   .then((resolvemsg) => {
//     console.log(resolvemsg);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Example 1: Basic await Usage

// Simulating an API call that takes 2 seconds

function fetchingStudentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Ahmed", grade: "A" });
    }, 2000);
  });
}

async function displayStudentData() {
  console.log("Fetching student data...");

  let studentData = await fetchingStudentData();

  console.log(`Student name : ${studentData.name}`);
  console.log(`Student grade: ${studentData.grade}`);
}

// displayStudentData()

// Example 1: Traffic Light System

let trafficLight = document.querySelector("#light");

function changeLight(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(trafficLight.style.backgroundColor = color)
    }, delay);
  });
}

// changeLight("red", 3000)
//   .then(() => {
//     console.log("Stop");
//     return changeLight("yellow", 2000);
//   })
//   .then(() => {
//     console.log("Wait");
//     return changeLight("green", 3000);
//   })
//   .then(() => {
//     console.log("Go");
//   });

// using async await

async function changeTrafficLight() {
    await changeLight("red", 1000)
    await changeLight("yellow", 2000)
    await changeLight("green", 1000)
}

// changeTrafficLight()

// creating promise using async-----
// let trafficLight = document.querySelector("#light");

// async function changeLight() {

//     return `color changed to `
//     setTimeout(() => {
//     }, 1000);
// }
// async function changeTrafficLight() {
//     let result1 = await changeLight("red", 1000)
//     console.log(result1);
//     let result2 = await changeLight("yellow", 2000)
//     console.log(result2);
//     let result3 = await changeLight("green", 1000)
//     console.log(result3);
// }
// changeTrafficLight()
//  -----------


// Example 2: User Registration Flow

function validateEmail(email) {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 3) * 1000;
    setTimeout(() => {
      if (email.includes("@")) {
        resolve("Valid email");
      } else {
        reject("Invalid email");
      }
    }, delay);
  });
}
function checkEmailExists() {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 3) * 1000;
    let isEmailExists = Math.random() > 0.4;
    setTimeout(() => {
      if (isEmailExists) {
        reject("email already exists cannot proceed");
      } else {
        resolve("email doesn't Exists, proceed..");
      }
    }, delay);
  });
}

function createUser(email) {
  return new Promise((resolve) => {
    let delay = Math.floor(Math.random() * 3) * 1000;
    setTimeout(() => {
      resolve({ id: 123, email: email });
    }, delay);
  });
}

async function Registration() {
  try {
    let resolveMsg = await validateEmail("example@user.com");
    console.log(resolveMsg);
    let resolveMsg2 = await checkEmailExists();
    console.log(resolveMsg2);
    let resolveMsg3 = await createUser("example@user.com");
    console.log(resolveMsg3);
  } catch (error) {
    console.log(error);
  }
}

// Registration()
