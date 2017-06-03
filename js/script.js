var classButton = document.getElementsByClassName("button");
        console.log(classButton);
        var i;
        var text = "";
        for (i = 0; i < classButton.length; i++) {
            text += classButton[i].innerText + "<br>";      
        }
        document.getElementById("button_names").innerHTML = text;