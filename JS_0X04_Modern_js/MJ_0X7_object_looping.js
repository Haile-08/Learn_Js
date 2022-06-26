//looping through objects
const obj = {
  name: "haile",
  id: "ugr/17181/11",
};
//name or key

//looping through keys
for (const k of Object.keys(obj)) {
  console.log(k);
}

//array of the object keys

const property = Object.keys(obj);
console.log(property);

//VALUE

for (const i of Object.values(obj)) {
  console.log(i);
}

//enteries
const ent = Object.entries(obj);
console.log(ent);

for ([p, va] of ent) {
  console.log(p, va);
}
