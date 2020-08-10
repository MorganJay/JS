//initializing array of objects with interest values for computation
let data = [
  { principal: 2500, time: 1.8 },
  { principal: 1000, time: 5 },
  { principal: 3000, time: 1 },
  { principal: 2000, time: 3 },
];
//setting up function to calculate interest
function interestCalculator(arr) {
  //declaring variables used in calculation
  let rate;
  let interest;
  //array to store calculated interests
  let interestData = [];
  //looping through each object containing principal and time values
  for (let obj of arr) {
    //conditionals to assign rate values
    if (obj.principal >= 2500 && obj.time > 1 && obj.time < 3) {
      rate = 3;
    } else if (obj.principal >= 2500 && obj.time >= 3) {
      rate = 4;
    } else if (obj.Principal < 2500 && obj.time <= 1) {
      rate = 2;
    } else {
      rate = 1;
    }
    //Calculate simple interest with given formula
    interest = (obj.principal * rate * obj.time) / 100;
    interestData.push({
      Principal: obj.principal,
      Time: obj.time,
      Rate: rate,
      Interest: interest,
    });

    //display array of resultant interest to console
    console.log(interestData);
    //console.log(data);
    return;
  }
}
//calling the function to execute
interestCalculator(data);
