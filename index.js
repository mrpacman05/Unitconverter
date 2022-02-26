let num1 = window.prompt('Enter No.');;

document.getElementById("num").textContent = num1;

let Calc = document.getElementById("calc");

let m = num1 * 3.281;
let f = num1 / 3.281;
m=m.toFixed(3)
f=f.toFixed(3)
Calc.textContent = num1 + " meters = " + m + " feet | " + num1 + " feet = " + f + " meters";

let CalcL =document.getElementById('calc-l');
let l= num1/3.785
let g= num1*3.785
l=l.toFixed(3)
g=g.toFixed(3)
CalcL.textContent = num1 + " liters = " + l + " gallons | " + num1 + " gallons = " + g + " Liters";

let CalcK =document.getElementById('calc-k');
let k= num1*2.205
let p= num1/2.205
k=k.toFixed(3)
p=p.toFixed(3)
CalcK.textContent = num1 + " killos = " + k + " pounds | " + num1 + " pounds = " + p + " killos";
