var nums = [1, 2, 3, 4, 5],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}

console.log(ranNums);

var result = ranNums.splice(2);
console.log(result);

var qOne = "who you?";
var qTwo = "who me?";
var qThree = "who they?";
var qFour = "who them?";
var qFive = "who where?";


const question = [qOne, qTwo, qThree, qFour, qFive];

// document.getElementById("check").innerHTML = question;