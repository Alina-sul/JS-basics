var menu = ['array','boolean','date'];

for (var item in menu) {
  var menuBtn = document.createElement('button');
  menuBtn.id = menu[item];
  menuBtn.className = 'btn';
  menuBtn.innerHTML = menu[item];
  menuBtn.addEventListener('click' , displayContent , false);
  document.getElementById("menu").appendChild(menuBtn);
}


function displayContent(item){
  let funcName = item.target.id;
  funcName = window[funcName];
  return funcName();
}

function array (){
window.location.assign("array.html");
}

function boolean (){
window.location.assign("boolean.html");
}


function Boolean (){
  return(alert("fuck"));
}
