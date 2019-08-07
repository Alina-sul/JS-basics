document.getElementById('title').innerHTML = "METHODS";
arr = [1,2,3,4,5,6,7,8];
let result = "";
document.getElementById('defaultData').innerHTML = "arr: " + arr;

//break
result += "<u>break: loop for if arr[i] = 4 <br></u>"
for (var i = 0; i < arr.length ; i++){
  if(arr[i] === 4) { break; }
  result += arr[i] + "<br>";
}





document.getElementById('methods').innerHTML = result;
