document.getElementById("openMenu").onclick = function(){
    document.getElementById("openMenu").style.visibility = "hidden";
    document.getElementById("closeMenu").style.visibility = "visible";
    document.getElementById("menu").style.visibility = "visible";
}

document.getElementById("closeMenu").onclick = function(){
    document.getElementById("openMenu").style.visibility = "visible";
    document.getElementById("closeMenu").style.visibility = "hidden";
    document.getElementById("menu").style.visibility = "hidden";
}