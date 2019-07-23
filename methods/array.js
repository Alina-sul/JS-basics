document.getElementById('title').innerHTML = "METHODS";


let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let result = document.getElementById('methods').innerHTML;
document.getElementById('defaultData').innerHTML =
"arr1:" + " " + arr1 + "<br/>" +
"arr2:" + " " + arr2 + "<br/><br/>";

//concat
let concat = arr1.concat(arr2);
result += "concat: " + concat + "<br/>" ;

//copyWhithin()
let arr3 = [1,2,3,4];
let copy = arr3.copyWithin(2,0);
result += "copyWithin(): arr1 - " + arr3 + "<br/>" ;

//entries()
let entries = arr2.entries();
result += "entries(): arr2 - ";
for (x of entries) {
  result += x + " ; " ;
}

//every
function allOdd ( number ) { return number % 2 != 0; }
let every = arr1.every(allOdd);
result += "<br/>" + "every(): " + " <i>checks if all numbers are odd for arr1</i> - " + every + "<br/>" ;

//fill
let arr4 = [5,6,7,8];
arr4.fill(5);
result += "fill(): " + " default - " + arr2 + "; fill(5) - " + arr4 + "<br/>" ;

//filter
function evenNum (number){
  return number % 2 == 0;
}
let filter = arr1.filter(evenNum);
result += "filter(): " + " filter even numbers in arr1 - " + filter + "<br/>" ;






document.getElementById('methods').innerHTML = result;
