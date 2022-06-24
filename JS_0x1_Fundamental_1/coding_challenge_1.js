/* BMI(Body Mass index) calculator */
let MarkMass = prompt("Enter Marks Mass");
let MarkHight = prompt("Enter Marks Hight");
let JhonMass = prompt("Enter Jhon Mass");
let JhonHight = prompt("Enter Jhon Hight");

let MarkBMI = MarkMass/MarkHight ** 2;
let JhonBMI = JhonMass/JhonHight ** 2;

MarkBMI>JhonBMI?console.log("MarksBMI is greater then Johns"):console.log("MarksBMI Is Less then Jhon")