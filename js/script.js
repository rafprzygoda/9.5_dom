var i = 0;
for (i = 0; i < classButton.length; i++) {
    var text = "";
    var classButton = document.getElementsByClassName("button");
    console.log(classButton);
    text += classButton[i].innerHTML + "<br>";      
}
document.getElementById("button_names").innerHTML = text;