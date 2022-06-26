//used to expand an array into its element

let arry = [0, 1, 2];

// old way of let newarray = [4, 5, arry[0], arry[1], arry[2]];
let newarray = [4, 5, ...arry];
//output  4,5,0,1,2
let newar = [4, 5, arry];
//output 4,5,[0,1,2]
console.log(...newar);

const str = "haile";
console.log(...str);
console.log(`  ${...str} `); //doesnot work in string litral

//Rest 
const [a,b,...others] = [1,2,3,4,5,6];
console.log(a,b,others);
//output 1 2 [3 4 5 6]
