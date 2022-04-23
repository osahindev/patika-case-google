window.onload = function() {
    var menuIcon = document.getElementsByClassName("menuIcon")[0];

    menuIcon.addEventListener("click", function(){
        if(menuIcon.classList.contains("goster")) {
            menuIcon.className = "menuIcon";
        } else {
            menuIcon.className = "menuIcon goster";
        }
    });
};