//initializing array of objects with interest values for computation
let data = [
{ principal: 2500, time: 1.8 },
{ principal: 1000, time: 5 },
{principal: 3000, time: 1 },
{principal: 2000, time: 3 },
];
//setting up function to calculate interest
function interestCalculator()
 {
     //declaring variables used in calculation
        let rate;
        let interest;
        //array to store calculated interests
        let interestData = [];
        //looping through each object containing principal and time values
         for (i = 0; i < data.length; i++) 
         {
             //conditionals to assign rate values
             if (data[i].principal >= 2500 && data[i].time > 1 && data[i].time <3)
            {
                rate = 3;
                let principal = data[i].principal;
                var time = data[i].time;
                interest = (principal*rate*time)/100;
                interestData.push({Principal: principal,Time: time,Rate: rate,Interest: interest});
            } 
            else if (data[i].principal >= 2500 && data[i].time >=3)
            {
            rate = 4;
            let principal = data[i].principal;
                var time = data[i].time;
                interest = (principal*rate*time)/100;
                interestData.push({Principal: principal,Time: time,Rate: rate,Interest: interest});       
             }
            else if(data[i].Principal <2500 && data[i].time <= 1)
            {
                rate = 2;
                let principal = data[i].principal;
                var time = data[i].time;
                interest = (principal*rate*time)/100;
                interestData.push({Principal: principal,Time: time,Rate: rate,Interest: interest});
            }
            else
            { rate = 1; 
                let principal = data[i].principal;
                var time = data[i].time;
                interest = (principal*rate*time)/100;
                interestData.push({Principal: principal,Time: time,Rate: rate,Interest: interest});
            }
            //display array of resultant interest to console
            console.log(interestData);
            return
       }
 }
 //calling the function to execute
interestCalculator(data); 
