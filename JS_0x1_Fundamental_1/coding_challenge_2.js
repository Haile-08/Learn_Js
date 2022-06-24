/* BMI(Body Mass index) calculator */
let MarkMass = prompt("Enter Marks Mass");
let MarkHight = prompt("Enter Marks Hight");
let JhonMass = prompt("Enter Jhon Mass");
let JhonHight = prompt("Enter Jhon Hight");

let MarkBMI = MarkMass/MarkHight ** 2;
let JhonBMI = JhonMass/JhonHight ** 2;

if(MarkBMI>JhonBMI)
{
    console.log(`Mark's(${MarkBMI}) BMI is higher than John's(${JhonBMI})!`);
}
else
{
    console.log(`John's(${JhonBMI}) BMI is higher than Mark's(${MarkBMI})!`);
}

