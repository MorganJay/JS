let myArray = [51, 22, 1, "c", "d"];
for (let i = 0; i < myArray.length; i++)
{
    console.log(myArray[i]);
}

myArray.push(1000);
myArray.unshift(542355);
console.log(myArray.length);

for (let i of myArray) 
{
  console.log(i + "\n");
}
