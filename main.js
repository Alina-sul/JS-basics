var menu = ['Array','Boolean','Date'];

for (var item in menu) {
  var menuBtn = document.createElement('button');
  menuBtn.id = menu[item];
  menuBtn.className = 'btn';
  menuBtn.innerHTML = menu[item];
  menuBtn.addEventListener('click' , displayContent , false);
  document.getElementById("menu").appendChild(menuBtn);
}

function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

function displayContent(item){
  let funcName = item.target.id;
  funcName = window[funcName];
  return funcName();
}


function Array (){
includeJs("methods/array.js");
}

function Boolean (){
  return(alert("fuck"));
}
