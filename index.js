
var length=document.querySelectorAll("button").length;

for(var i=0;i<length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        this.style.color="white";
    });
}


// var drum=new Audio("sounds/tom-1.mp3");
// drum.play();