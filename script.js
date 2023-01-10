window.onload = function(){
    let background = document.querySelector("body");


    background.onmousemove = function() {
        let colorNum = Math.random();

        if ((colorNum >= 0) && (colorNum < 0.2)) {
            background.style.backgroundColor = "red";
        } else if ((colorNum >= 0.2) && (colorNum < 0.4)) {
            background.style.backgroundColor = "green";
        } else if ((colorNum >= 0.4) && (colorNum < 0.6)) {
            background.style.backgroundColor = "blue";
        } else if ((colorNum >= 0.6) && (colorNum < 0.8)) {
            background.style.backgroundColor = "yellow";
        } else {
            background.style.backgroundColor = "orange";
        }



    }

}
