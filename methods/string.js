document.getElementById('title').innerHTML = "METHODS";
string1 = "hello world! ";
string2 = "how are you today?";

document.getElementById('defaultData').innerHTML = "string1: " + string1 + "<br>string2: " + string2 + "<br>";
result = "";

//charAt()(
result += "<u>charAt():</u> string1[1]: " + string1.charAt(1) + "<br/>" ;

//charCodeAt()(
result += "<u>charCodeAt():</u> string1[1]: " + string1.charCodeAt(1) + "<br/>" ;

//concat()(
result += "<u>concat():</u> [1]: " + string1.concat(string2) + "<br/>" ;






document.getElementById('methods').innerHTML = result;
