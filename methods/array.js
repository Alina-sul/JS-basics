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
let arr3 = arr1;
let copy = arr3.copyWithin(2,0);
result += "copyWithin(): " + arr3 + "<br/>" ;







document.getElementById('methods').innerHTML = result;
