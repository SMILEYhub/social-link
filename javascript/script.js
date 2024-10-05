var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");


  if(localStorage.getItem("theme") == "light"){
    localStorage.getItem("theme", "dark"); 
  }
}

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.add("dark-btn-on")
    document.body.checkVisibility.remove("dark-theme");
}
if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on")
    document.body.checkVisibility.add("dark-theme");
}
else{
    localStorage.getItem("theme", "light") 
}

localStorage.setItem("theme", "dark");
localStorage.setItem("theme");