var menu = ['Array','Boolean','Date'];

for (var item in menu) {
  var menuBtn = document.createElement('button');
  menuBtn.id = menu[item];
  menuBtn.className = 'btn';
  menuBtn.innerHTML = menu[item];
  menuBtn.addEventListener("click" , eventFunction , false)
  document.getElementById("menu").appendChild(menuBtn);
}


function eventFunction(){
  alert("clicked");
}
