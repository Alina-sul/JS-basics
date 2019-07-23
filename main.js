var menu = ['Array','Boolean','Date'];

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


function Array (){
window.location.assign("array.html");
}

function Boolean (){
  return(alert("fuck"));
}
