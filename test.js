
// var qOne = "who you?";
// var qTwo = "who me?";
// var qThree = "who they?";
// var qFour = "who them?";
// var qFive = 455;

// var q1 = qOne;
// var q2 = qTwo;
// var q3 = qThree;
// var q4 = qFour;
// var q5 = qFive;

// function randomNumber() {
//     var nums = [1,2,3,4,5];
//     i = nums.length,
//     j = 0;

//     while (i--) {
//         j = Math.floor(Math.random() * (i+1));
//         ranNums.push(nums[j]);
//         nums.splice(j,1);
//     }
//     console.log(ranNums);
// }


// var randomArray = [];

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// function run() {
//     let randomGen = getRandomInt(6);
//     console.log(randomGen);
//       if(randomArray.includes(randomGen)) {
//       run();
//     } else {
//      randomArray.push(randomGen);
//     }

//  document.getElementById("check").innerHTML = randomGen;
//  document.getElementById("result").innerHTML = randomArray;
// };


// console.log(result);
// console.log(typeof result);



// var hop = document.getElementsByName("q1");
// hop.addEventListener('click', function() {
//   pow();
// }, false
// );



// function pow() {
//   alert("i worked");
// }
async function delay(delayInms) {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  })
}

var q1 = document.getElementById("check");
var q2 = document.getElementById("a1A");
var q3 = document.getElementById("btn");

const test = [q1, q2, q3];

async function fire() {
  console.log(test.length);
  console.log(test.slice(-1));
  console.log(typeof cut);
  await delay(5000);
  console.log(test.length);
}


