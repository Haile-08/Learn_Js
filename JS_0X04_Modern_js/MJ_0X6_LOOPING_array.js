// array looping new way
let arr = [1, 2, 3, 4, 6];

for (const item of arr) {
  console.log(item);
}
for (const elm of arr.entries()) {
  console.log(elm);
}
console.log(arr.entries());
for (const [i, e] of arr.entries()) {
  console.log(`${i} : ${e}`);
}
