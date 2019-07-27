document.getElementById('title').innerHTML = "METHODS";


let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let result = document.getElementById('methods').innerHTML;
document.getElementById('defaultData').innerHTML =
"arr1:" + " " + arr1 + "<br/>" +
"arr2:" + " " + arr2 + "<br/><br/>";

//concat
let concat = arr1.concat(arr2);
result += "<u>concat:</u> " + concat + "<br/>" ;

//copyWhithin()
let arr3 = [1,2,3,4];
let copy = arr3.copyWithin(2,0);
result += "<u>copyWithin():</u> arr1 : " + arr3 + "<br/>" ;

//entries()
let entries = arr2.entries();
result += "<u>entries():</u> arr2 : ";
for (x of entries) {
  result += x + " ; " ;
}

//every
function allOdd ( number ) { return number % 2 != 0; }
let every = arr1.every(allOdd);
result += "<br/>" + "<u>every():</u> " + " <i>checks if all numbers are odd for arr1</i> : " + every + "<br/>" ;

//fill
let arr4 = [5,6,7,8];
arr4.fill(5);
result += "<u>fill():</u> " + " default : " + arr2 + "; fill(5) : " + arr4 + "<br/>" ;

//filter
function evenNum (number){
  return number % 2 == 0;
}
let filter = arr1.filter(evenNum);
result += "<u>filter():</u> " + " filter even numbers in arr1 : " + filter + "<br/>" ;

//find
let find = arr1.find(evenNum);
result += "<u>find():</u> " + " finds first even number in arr1 : " + find + "<br/>" ;

//findIndex
let findIndex = arr1.findIndex(evenNum);
result += "<u>findIndex():</u> " + " finds first even number index in arr1 : " + findIndex + "<br/>" ;

//findIndex
let from = Array.from("helloworld");
result += "<u>from():</u> " + " object = 'hello world' : " + from + "<br/>" ;

//findIndex
let includes = arr2.includes(6,2);
result += "<u>includes():</u> " + " on arr2 : num 6 after index 2 : " + includes + "<br/>" ;

//indexOf
let indexOf = arr2.indexOf(6);
result += "<u>indexOf():</u> " + " arr2 first index of '6': " + indexOf + "<br/>" ;

//isArray
let obj = 'hello';
result += "<u>isArray():</u> " + " obj. = 'hello' : " + Array.isArray(obj) + "<br/>" ;

//join
let arrS = ['h','e','l','l','o'];
result += "<u>join():</u> " + " arr = h,e,l,l,o : " + arrS.join('') + "<br/>" ;

//keys
let keys = concat.keys();
result += "<u>keys():</u> for arr from 'concat':";
for (x of keys) {
  result += " " + x + " ";
}

//length
let length = arr1.length;
result += "<br><u>length():</u> arr1: " + length + "<br>";

//lastIndexOf
let lastIndexOf = arr2.lastIndexOf(6);
result += "<u>lastIndexOf():</u> " + " arr2 last index of '6': " + lastIndexOf + "<br/>" ;

//map
let map = arr1.map(multiTen);

function multiTen(num){
  return num * 10;
}
result += "<u>map():</u> " + " new arr based on arr1: " + map + "<br/>" ;

//pop
let arrP = [1,2,3,4,5,6];
result += "<u>pop():</u> " + " arr [1,2,3,4,5,6]: <strong>" + arrP.pop() + "</strong> ; current arr: " + arrP + "<br/>" ;

//prototype
Array.prototype.makeOdd = function() {

  for (let i = 0; i < this.length; i++){
    this[i] = this[i] - 1;
    console.log(this[i]);
  }
  return this;
};

let arrEven = [2,4,6,8];
result += "<u>prototype:</u> even arr: 2,4,6,8 ; make arr odd :" +  arrEven.makeOdd() + "<br/>" ;

//push
let pushSample = [1,2,3,4];
pushSample.push(5,6);
result += "<u>push():</u> " + pushSample  + "<br/>" ;

//reduce
function differ(first,next){
  return first - next;
}
result += "<u>reduce():</u> difference for arr1 from left: " + arr1.reduce(differ) + "<br/>" ;

//reduceRight
function differRight(last,previous){
  return last - previous;
}
result += "<u>reduceRight():</u> difference for arr1 from right: " + arr1.reduceRight(differRight) + "<br/>" ;

//reverse
let rev = [5,6,7,8];
result += "<u>reverse():</u> reverse arr2: " + rev.reverse() + "<br/>" ;

//shift
let shift = [5,6,7,8];
result += "<u>shift():</u> shift arr[5,6,7,8]: " + shift.shift() + "; current arr:" + shift + "<br/>" ;

//slice
let slice = [5,6,7,8];
result += "<u>slice():</u> arr2 index 1-3 : " + slice.slice(1,3) + "<br/>" ;

//some
let some = [5,6,7,8];
result += "<u>some():</u> checks if arr2 contains even numbers : " + some.some(evenNum) + "<br/>" ;

//sort
function compareFunction(a,b){
  return a - b ;
}
let sort = [100,64,92,45,51,72,78,0]
result += "<u>sort():</u> default arr : " + sort + "<br/>" ;
sort.sort(compareFunction);
result += "<u>sort():</u> sorted arr : " + sort + "<br/>" ;

//splice














document.getElementById('methods').innerHTML = result;
