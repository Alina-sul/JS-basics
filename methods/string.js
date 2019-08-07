document.getElementById('title').innerHTML = "METHODS";
string1 = "hello world! ";
string2 = "HOW are you today?";

document.getElementById('defaultData').innerHTML = "string1: " + string1 + "<br>string2: " + string2 + "<br>";
result = "";

//charAt()
result += "<u>charAt():</u> string1[1]: " + string1.charAt(1) + "<br/>" ;

//charCodeAt()
result += "<u>charCodeAt():</u> string1[1]: " + string1.charCodeAt(1) + "<br/>" ;

//concat()
result += "<u>concat():</u> [1]: " + string1.concat(string2) + "<br/>" ;

//endsWith()
result += "<u>endsWith():</u> string1 ends with '!' ? : " + string1.endsWith("! ") + "<br/>" ;

//fromCharCode()
var fromCharCode = String.fromCharCode(65);
result += "<u>fromCharCode():</u> code 65 : " + fromCharCode + "<br/>" ;

//includes()
result += "<u>includes():</u> string2 includes 'you' ? : " + string2.includes("you") + "<br/>" ;

//indexOf()
result += "<u>indexOf():</u> string2 'you' : " + string2.indexOf("you") + "<br/>" ;

//lastIndexOf()
result += "<u>lastIndexOf():</u> string2 'you' : " + string2.lastIndexOf("you") + "<br/>" ;

//localeCompare()
let str1 = "ab";
let str2 = "cd";
result += "<u>localeCompare():</u> str1:'ab' str2:'cd' compare: " + str2.localeCompare(str1); + "<br/>" ;


//match()
result += "<br><u>match():</u> array of instance 'o' in string2: " + string2.match(/o/g) + "<br/>" ;

//repeat()
result += "<u>repeat():</u> repeat string1 : " + string1.repeat(2) + "<br/>" ;

//replace()
result += "<u>replace():</u> replace string1 - hello: " + string1.replace(/hello/g, "Hi") + "<br/>" ;

//search()
result += "<u>search():</u> search string1 - hello: " + string1.search("hello") + "<br/>" ;

//slice()
result += "<u>slice():</u> slice string2: " + string2.slice(2,10) + "<br/>" ;

//split()
result += "<u>split():</u> split string2: " + string2.split(" ") + "<br/>" ;

//startsWith()
result += "<u>startsWith():</u> string2 starts with 'hello': " + string2.startsWith("hello") + "<br/>" ;

//substr()
result += "<u>substr():</u> string2: " + string2.substr(2,11) + "<br/>" ;

//substring()
result += "<u>substring():</u> string2: " + string2.substring(2,11) + "<br/>" ;

//toLocaleLowerCase()
result += "<u>toLocaleLowerCase():</u> string2: " + string2.toLocaleLowerCase() + "<br/>" ;

//toLocaleUpperCase()
result += "<u>toLocaleUpperCase():</u> string2: " + string2.toLocaleUpperCase() + "<br/>" ;

//toLowerCase()
result += "<u>toLowerCase():</u> string2: " + string2.toLowerCase() + "<br/>" ;

//toUpperCase()
result += "<u>toUpperCase():</u> string2: " + string2.toUpperCase() + "<br/>" ;

//toString()
result += "<u>toString():</u> string2: " + string2.toString() + "<br/>" ;

//trim()
result += "<u>trim():</u> string1: " + string1.trim() + "<br/>" ;

//valueOf()
result += "<u>valueOf():</u> string1: " + string1.valueOf() + "<br/>" ;













document.getElementById('methods').innerHTML = result;
