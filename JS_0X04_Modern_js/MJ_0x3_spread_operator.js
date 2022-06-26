//used to expand an array into its element

let arry = [0, 1, 2];

// old way of let newarray = [4, 5, arry[0], arry[1], arry[2]];
let newarray = [4, 5, ...arry];
//output  4,5,0,1,2
let newar = [4, 5, arry];
//output 4,5,[0,1,2]
