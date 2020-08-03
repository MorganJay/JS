//Write a function that takes one parameter(integer)
function ReplaceDivNumbers(integer) {
  //variables storing words to be replaced
  let div_two = "yu";
  let div_three = "gi";
  let div_five = "oh";
  let div_two_three = "yu-gi";
  let div_two_five = "yu-oh";
  let div_two_three_five = "yu-gi-oh";

  //array to contain all numbers
  let rangeArray = [];

  //loop to check from 1 to given parameter
  for (let n = 1; n <= integer; n++) {
    //number divisibility checks
    if (n % 2 === 0 && n % 3 === 0 && n % 5 === 0) {
      rangeArray.push(div_two_three_five);
    } else if (n % 2 === 0 && n % 3 === 0) {
      rangeArray.push(div_two_three);
    } else if (n % 2 === 0 && n % 5 === 0) {
      rangeArray.push(div_two_five);
    } else if (n % 3 === 0 && n % 5 === 0) {
      rangeArray.push(div_three.concat("-", div_five));
    } else if (n % 2 === 0) {
      rangeArray.push(div_two);
    } else if (n % 3 === 0) {
      rangeArray.push(div_three);
    } else if (n % 5 === 0) {
      rangeArray.push(div_five);
    } else {
      rangeArray.push(n);
    }
  }
  console.log(rangeArray);
  return rangeArray;
}
ReplaceDivNumbers(10);
ReplaceDivNumbers(16);
