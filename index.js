// Given is 5 integers and we have the print the minimum and maximum number we can get after adding exactly 4 of the integers.
const nums = [34, 25, 78, 12, 32];
let max = [...nums];
let mins = [...nums];

max = max.sort((a, b) => {
  return b - a;
});
mins = mins.sort((a, b) => {
  return a - b;
});

const getSum = (n1, n2, n3, n4) => {
  let sum = n1 + n2 + n3 + n4;
  return sum;
};

max = max.filter((value,index)=>{
  return index<4;
});
mins = mins.filter((value,index)=>{
  return index<4;
});

console.log(getSum(...max),getSum(...mins));
