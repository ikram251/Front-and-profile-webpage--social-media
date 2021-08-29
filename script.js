
var settingsmenu = document.querySelector(".settings-menu");
var darkbtn = document.getElementById("dark-btn");
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkbtn.onclick=function(){
    darkbtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")
    // update local storage value
    if(localStorage.getItem("theme","light")){
        localStorage.setItem("theme","dark")
    }
    else
    localStorage.setItem("theme","light")
}
// we need to read wheather we had a local Storage or not

if(localStorage.getItem("theme")=="light"){
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){ // to read the value in local Storage
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme","light") //we creating a local storage with name of theme and it's value as light
}
